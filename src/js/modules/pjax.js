//////////
// BARBA PJAX
//////////
(function($, APP) {
  APP.Modules.Barba = {
    getData: function() {
      return this.data;
    },
    init: function() {
      // config
      Barba.Pjax.Dom.containerClass = 'page';
      this.data = this.data || {};
      this.data.transitionInitElement = '';

      // initilization path
      this.getTransition();
      Barba.Prefetch.init();
      Barba.Pjax.start();
      this.listenEvents();
    },
    getTransition: function() {
      // set barba transition
      var _this = this;
      Barba.Pjax.getTransition = function() {
        if (_this.data.transitionInitElement) {
          if (_this.data.transitionInitElement.attr('data-transition')) {
            var transition = _this.data.transitionInitElement.data('transition');
            if (transition === 'slide-up') {
              return _this.transitions.SlideUPTransition;
            } else if (transition === 'slide-down') {
              return _this.transitions.SlideDOWNTransition;
            }
          }
          return _this.transitions.FadeTransition;
        } else {
          // first visit + back button (history is blank)
          window.location.href = Barba.HistoryManager.history[1].url;
        }
      };
    },
    transitions: {
      HideShowTransition: Barba.BaseTransition.extend({
        start: function() {
          this.newContainerLoading.then(this.finish.bind(this));
        },

        finish: function() {
          document.body.scrollTop = 0;
          this.done();
        },
      }),
      SlideDOWNTransition: Barba.BaseTransition.extend({
        start: function() {
          // анимация наплывом
          Promise.all([this.newContainerLoading, this.slideOut()]).then(this.slideIn.bind(this));
        },

        slideOut: function() {
          var $oldPage = $(this.oldContainer);
          var deferred = Barba.Utils.deferred();

          deferred.resolve();
          return deferred.promise;
        },

        slideIn: function() {
          var _this = this;
          var $oldPage = $(this.oldContainer);
          var $newPage = $(this.newContainer);

          $oldPage.css({
            visibility: 'visible',
            opacity: 1,
            zIndex: 3,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
          });

          $newPage.css({
            visibility: 'visible',
            opacity: 1,
            zIndex: 2,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
          });

          TweenLite.to(window, 1, {
            scrollTo: { y: 0, autoKill: false },
            ease: easingSwing,
          });

          TweenLite.to($oldPage, 1, {
            top: window.innerHeight + _window.scrollTop(),
            ease: Power1.easeOut,
            onComplete: function() {
              $newPage.attr('style', '');
              _this.done();
            },
          });
        },
      }),
      SlideUPTransition: Barba.BaseTransition.extend({
        start: function() {
          // анимация наплывом
          Promise.all([this.newContainerLoading, this.slideOut()]).then(this.slideIn.bind(this));
        },

        slideOut: function() {
          var $oldPage = $(this.oldContainer);
          var deferred = Barba.Utils.deferred();

          deferred.resolve();
          return deferred.promise;
        },

        slideIn: function() {
          var _this = this;
          var $oldPage = $(this.oldContainer);
          var $newPage = $(this.newContainer);

          // $(this.oldContainer).hide();

          $newPage.css({
            visibility: 'visible',
            opacity: 1,
            zIndex: 2,
            position: 'absolute',
            top: window.innerHeight + _window.scrollTop(),
            left: 0,
            right: 0,
          });

          TweenLite.to(window, 1, {
            scrollTo: { y: 0, autoKill: false },
            ease: easingSwing,
          });

          TweenLite.to($newPage, 1, {
            top: 0,
            ease: Power1.easeOut,
            onComplete: function() {
              $newPage.attr('style', '');
              _this.done();
            },
          });
        },
      }),
      FadeTransition: Barba.BaseTransition.extend({
        start: function() {
          Promise.all([this.newContainerLoading, this.fadeOut()]).then(this.fadeIn.bind(this));
        },

        fadeOut: function() {
          var _this = this;
          var $oldPage = $(this.oldContainer);
          var $newPage = $(this.newContainer);
          var deferred = Barba.Utils.deferred();

          TweenLite.to($oldPage, 0.5, {
            opacity: 0,
            ease: Power1.easeIn,
            onComplete: function() {
              deferred.resolve();
            },
          });

          return deferred.promise;
        },

        fadeIn: function() {
          var _this = this;
          var $oldPage = $(this.oldContainer);
          var $newPage = $(this.newContainer);

          $(this.oldContainer).hide();

          $newPage.css({
            visibility: 'visible',
            opacity: 0,
          });

          TweenLite.to(window, 0.15, {
            scrollTo: { y: 0, autoKill: false },
            ease: easingSwing,
          });

          TweenLite.to($newPage, 0.5, {
            opacity: 1,
            ease: Power1.easeOut,
            onComplete: function() {
              _this.done();
            },
          });
        },
      }),
    },
    setTransitionElement: function(el) {
      this.data.transitionInitElement = el instanceof jQuery ? el : $(el);
    },
    listenEvents: function() {
      // initialized transition
      var _this = this;
      Barba.Dispatcher.on('linkClicked', function(el) {
        _this.setTransitionElement(el);
      });

      // The new container has been loaded and injected in the wrapper.
      Barba.Dispatcher.on('newPageReady', function(
        currentStatus,
        oldStatus,
        container,
        newPageRawHTML,
      ) {
        APP.Initilizer().newPageReady();
      });

      // The transition has just finished and the old Container has been removed from the DOM.
      Barba.Dispatcher.on('transitionCompleted', function(currentStatus, oldStatus) {
        APP.Initilizer().transitionCompleted();
      });
    },
  };
})(jQuery, window.APP);
