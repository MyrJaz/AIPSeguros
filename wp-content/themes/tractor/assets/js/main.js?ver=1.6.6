/**
 *
 * @auther SM@K<smali.kazmi@hotmail.com>
 * @description website: smak.pk
 */

(
    function () {
        'use strict';
        var root = this;

        var SmartPhone = function ( obj ) {
            if ( obj instanceof SmartPhone ) {
                return obj;
            }
            if ( ! (
                    this instanceof SmartPhone
                ) ) {
                return new SmartPhone( obj );
            }
            this._wrapped = obj;
        };

        SmartPhone.userAgent = null;
        SmartPhone.getUserAgent = function () {
            return this.userAgent;
        };

        SmartPhone.setUserAgent = function ( userAgent ) {
            this.userAgent = userAgent;
        };

        SmartPhone.isAndroid = function () {
            return this.getUserAgent()
                       .match( /Android/i );
        };

        SmartPhone.isBlackBerry = function () {
            return this.getUserAgent()
                       .match( /BlackBerry/i );
        };

        SmartPhone.isBlackBerryPlayBook = function () {
            return this.getUserAgent()
                       .match( /PlayBook/i );
        };

        SmartPhone.isBlackBerry10 = function () {
            return this.getUserAgent()
                       .match( /BB10/i );
        };

        SmartPhone.isIOS = function () {
            return this.isIPhone() || this.isIPad() || this.isIPod();
        };

        SmartPhone.isIPhone = function () {
            return this.getUserAgent()
                       .match( /iPhone/i );
        };

        SmartPhone.isIPad = function () {
            return this.getUserAgent()
                       .match( /iPad/i );
        };

        SmartPhone.isIPod = function () {
            return this.getUserAgent()
                       .match( /iPod/i );
        };

        SmartPhone.isOpera = function () {
            return this.getUserAgent()
                       .match( /Opera Mini/i );
        };

        SmartPhone.isWindows = function () {
            return this.isWindowsDesktop() || this.isWindowsMobile();
        };

        SmartPhone.isWindowsMobile = function () {
            return this.getUserAgent()
                       .match( /IEMobile/i );
        };

        SmartPhone.isWindowsDesktop = function () {
            return this.getUserAgent()
                       .match( /WPDesktop/i );
        };

        SmartPhone.isFireFox = function () {
            return this.getUserAgent()
                       .match( /Firefox/i );
        };

        SmartPhone.isNexus = function () {
            return this.getUserAgent()
                       .match( /Nexus/i );
        };

        SmartPhone.isKindleFire = function () {
            return this.getUserAgent()
                       .match( /Kindle Fire/i );
        };

        SmartPhone.isPalm = function () {
            return this.getUserAgent()
                       .match( /PalmSource|Palm/i );
        };

        SmartPhone.isAny = function () {
            var foundAny = false;
            var getAllMethods = Object.getOwnPropertyNames( SmartPhone )
                                      .filter( function ( property ) {
                                          return typeof SmartPhone[property] == 'function';
                                      } );

            for ( var index in getAllMethods ) {
                if ( getAllMethods[index] === 'setUserAgent' || getAllMethods[index] === 'getUserAgent' || getAllMethods[index] === 'isAny' || getAllMethods[index] === 'isWindows' || getAllMethods[index] === 'isIOS' ) {
                    continue;
                }
                if ( SmartPhone[getAllMethods[index]]() ) {
                    foundAny = true;
                    break;
                }
            }
            return foundAny;
        };

        if ( typeof window === 'function' || typeof window === 'object' ) {
            SmartPhone.setUserAgent( navigator.userAgent );
        }

        if ( typeof exports !== 'undefined' ) {

            var middleware = function ( isMiddleware ) {

                isMiddleware = isMiddleware === (
                    void 0
                ) ? true : isMiddleware;

                if ( isMiddleware ) {
                    return function ( req, res, next ) {

                        var userAgent = req.headers['user-agent'] || '';
                        SmartPhone.setUserAgent( userAgent );
                        req.SmartPhone = SmartPhone;

                        if ( 'function' === typeof res.locals ) {
                            res.locals( {SmartPhone: SmartPhone} );
                        } else {
                            res.locals.SmartPhone = SmartPhone;
                        }

                        next();
                    };
                } else {
                    return SmartPhone;
                }

            };

            if ( typeof module !== 'undefined' && module.exports ) {
                exports = module.exports = middleware;
            }
            exports = middleware;
        } else {
            root.SmartPhone = SmartPhone;
        }

    }.call( this )
);

/**
 * @preserve JSizes - JQuery plugin v0.33
 *
 * Licensed under the revised BSD License.
 * Copyright 2008-2010 Bram Stein
 * All rights reserved.
 */
/*global jQuery*/
(
    function ( $ ) {
        'use strict';
        var num = function ( value ) {
            return parseInt( value, 10 ) || 0;
        };

        /**
         * Sets or gets the values for min-width, min-height, max-width
         * and max-height.
         */
        $.each( ['min', 'max'], function ( i, name ) {
            $.fn[name + 'Size'] = function ( value ) {
                var width, height;
                if ( value ) {
                    if ( value.width !== undefined ) {
                        this.css( name + '-width', value.width );
                    }
                    if ( value.height !== undefined ) {
                        this.css( name + '-height', value.height );
                    }
                } else {
                    width = this.css( name + '-width' );
                    height = this.css( name + '-height' );
                    // Apparently:
                    //  * Opera returns -1px instead of none
                    //  * IE6 returns undefined instead of none
                    return {
                        'width': (
                                     name === 'max' && (
                                         width === undefined || width === 'none' || num( width ) === - 1
                                     ) && Number.MAX_VALUE
                                 ) || num( width ),
                        'height': (
                                      name === 'max' && (
                                          height === undefined || height === 'none' || num( height ) === - 1
                                      ) && Number.MAX_VALUE
                                  ) || num( height )
                    };
                }
                return this;
            };
        } );

        /**
         * Returns whether or not an element is visible.
         */
        $.fn.isVisible = function () {
            return this.is( ':visible' );
        };

        /**
         * Sets or gets the values for border, margin and padding.
         */
        $.each( ['border', 'margin', 'padding'], function ( i, name ) {
            $.fn[name] = function ( value ) {
                if ( value ) {
                    if ( value.top !== undefined ) {
                        this.css( name + '-top' + (
                            name === 'border' ? '-width' : ''
                        ), value.top );
                    }
                    if ( value.bottom !== undefined ) {
                        this.css( name + '-bottom' + (
                            name === 'border' ? '-width' : ''
                        ), value.bottom );
                    }
                    if ( value.left !== undefined ) {
                        this.css( name + '-left' + (
                            name === 'border' ? '-width' : ''
                        ), value.left );
                    }
                    if ( value.right !== undefined ) {
                        this.css( name + '-right' + (
                            name === 'border' ? '-width' : ''
                        ), value.right );
                    }
                } else {
                    return {
                        top: num( this.css( name + '-top' + (
                            name === 'border' ? '-width' : ''
                        ) ) ),
                        bottom: num( this.css( name + '-bottom' + (
                            name === 'border' ? '-width' : ''
                        ) ) ),
                        left: num( this.css( name + '-left' + (
                            name === 'border' ? '-width' : ''
                        ) ) ),
                        right: num( this.css( name + '-right' + (
                            name === 'border' ? '-width' : ''
                        ) ) )
                    };
                }
                return this;
            };
        } );
    }( jQuery )
);

(
	function( $ ) {
		$.fn.insightSwiper = function() {

			this.each( function() {

				var $slider = $( this );
				var _settings = $slider.data();

				if ( _settings.queueInit == '0' ) {
					return;
				}

				var $sliderContainer = $slider.children( '.swiper-container' ).first(),
					lgItems = _settings.lgItems ? _settings.lgItems : 1,
					mdItems = _settings.mdItems ? _settings.mdItems : lgItems,
					smItems = _settings.smItems ? _settings.smItems : mdItems,
					xsItems = _settings.xsItems ? _settings.xsItems : smItems,
					lgGutter = _settings.lgGutter ? _settings.lgGutter : 0,
					mdGutter = _settings.mdGutter ? _settings.mdGutter : lgGutter,
					smGutter = _settings.smGutter ? _settings.smGutter : mdGutter,
					xsGutter = _settings.xsGutter ? _settings.xsGutter : smGutter,
					speed = _settings.speed ? _settings.speed : 1000;

				if ( _settings.slideWrap ) {
					$slider.children( '.swiper-container' )
					       .children( '.swiper-wrapper' )
					       .children( 'div' )
					       .wrap( "<div class='swiper-slide'></div>" );
				}

				if ( (
					     lgItems == 'auto'
				     ) || _settings.centered ) {
					var _options = {
						slidesPerView: 'auto',
						spaceBetween: lgGutter,
						breakpoints: {
							767: {
								spaceBetween: xsGutter
							},
							990: {
								spaceBetween: smGutter
							},
							1199: {
								spaceBetween: mdGutter
							}
						}
					};
				} else {
					var _options = {
						slidesPerView: lgItems, //slidesPerGroup: lgItems,
						spaceBetween: lgGutter,
						breakpoints: {
							// when window width is <=
							767: {
								slidesPerView: xsItems,
								spaceBetween: xsGutter
							},
							990: {
								slidesPerView: smItems,
								spaceBetween: smGutter
							},
							1199: {
								slidesPerView: mdItems,
								spaceBetween: mdGutter
							}
						}
					};

					if ( _settings.slidesPerGroup == 'inherit' ) {
						_options.slidesPerGroup = lgItems;

						_options.breakpoints[767].slidesPerGroup = xsItems;
						_options.breakpoints[990].slidesPerGroup = smItems;
						_options.breakpoints[1199].slidesPerGroup = mdItems;
					}
				}

				_options.el = $sliderContainer;

				_options.watchOverflow = true;

				if ( _settings.slideColumns ) {
					_options.slidesPerColumn = _settings.slideColumns;
				}

				if ( _settings.autoHeight ) {
					_options.autoHeight = true;
				}

				if ( speed ) {
					_options.speed = speed;
				}

				// Maybe: fade, flip
				if ( _settings.effect ) {
					_options.effect = _settings.effect;
					/*_options.fadeEffect = {
					 crossFade: true
					 };*/

					if ( _settings.effect === 'coverflow' ) {
						_options.coverflowEffect = {
							slideShadows: false,
							stretch: 40,
							depth: 100,
							rotate: 10,
							modifier: 3
						};
					}
				}

				if ( _settings.loop ) {
					_options.loop = true;
				}

				if ( _settings.centered ) {
					_options.centeredSlides = true;
				}

				if ( _settings.autoplay ) {
					_options.autoplay = {
						delay: _settings.autoplay,
						disableOnInteraction: false
					};
				}

				var $wrapTools;

				if ( _settings.wrapTools ) {
					$wrapTools = $( '<div class="swiper-tools"></div>' );

					$slider.append( $wrapTools );
				}

				if ( _settings.nav ) {

					if ( _settings.customNav && _settings.customNav !== '' ) {
						$customBtn = $( '#' + _settings.customNav );
						var $swiperPrev = $customBtn.find( '.slider-prev-btn' );
						var $swiperNext = $customBtn.find( '.slider-next-btn' );
					} else {
						var $swiperPrev = $( '<div class="swiper-nav-button swiper-button-prev"><i class="nav-button-icon"></i></div>' );
						var $swiperNext = $( '<div class="swiper-nav-button swiper-button-next"><i class="nav-button-icon"></i></div>' );

						if ( $wrapTools ) {
							$wrapTools.append( $swiperPrev ).append( $swiperNext );
						} else {
							$slider.append( $swiperPrev ).append( $swiperNext );
						}
					}

					_options.navigation = {
						nextEl: $swiperNext,
						prevEl: $swiperPrev
					};
				}

				var $swiperPagination;

				if ( _settings.pagination ) {
					$swiperPagination = $( '<div class="swiper-pagination"></div>' );
					$slider.addClass( 'has-pagination' );

					if ( $wrapTools ) {
						$wrapTools.append( $swiperPagination );
					} else {
						$slider.append( $swiperPagination );
					}

					_options.pagination = {
						el: $swiperPagination,
						clickable: true
					};

					if ( _settings.hasOwnProperty( 'paginationType' ) ) {
						_options.pagination.type = _settings.paginationType;
					}

					if ( _settings.hasOwnProperty( 'paginationBullets' ) && _settings.paginationBullets === 'number' ) {
						_options.pagination.renderBullet = function( index, className ) {

							var number = index + 1;

							return '<span class="' + className + '"><i>' + number + '</i></span>';
						};
					}

				}

				if ( _settings.scrollbar ) {
					var $scrollbar = $( '<div class="swiper-scrollbar"></div>' );
					$sliderContainer.prepend( $scrollbar );

					_options.scrollbar = {
						el: $scrollbar,
						draggable: true,
					};

					_options.loop = false;
				}

				if ( _settings.mousewheel ) {
					_options.mousewheel = {
						enabled: true
					};
				}

				if ( _settings.vertical ) {
					_options.direction = 'vertical'
				}

				var $swiper = new Swiper( _options );

				if ( _settings.reinitOnResize ) {
					var _timer;
					$( window ).on( 'resize', function() {
						clearTimeout( _timer );

						_timer = setTimeout( function() {
							$swiper.destroy( true, true );

							$swiper = new Swiper( $sliderContainer, _options );
						}, 300 );
					} );
				}

				// Disabled auto play when focus.
				if ( _settings.autoplay ) {
					$sliderContainer.on( 'mouseenter', function() {
						$swiper.autoplay.stop();
					} );

					$sliderContainer.on( 'mouseleave', function() {
						$swiper.autoplay.start();
					} );
				}

				$( document ).trigger( 'insightSwiperInit', [$swiper, $slider, _options] );

				return this;
			} );
		};
	}( jQuery )
);

(
	function( $ ) {
		'use strict';

var $window            = $( window ),
    $html              = $( 'html' ),
    $body              = $( 'body' ),
    $pageWrapper       = $( '#page' ),
    $pageHeader        = $( '#page-header' ),
    $headerInner       = $( '#page-header-inner' ),
    $pageContent       = $( '#page-content' ),
    headerStickyEnable = $insight.header_sticky_enable,
    headerStickyHeight = 0,
    animateQueueDelay  = 200,
    queueResetDelay,
    wWidth             = window.innerWidth;
/**
 * Global ajaxBusy = false
 * Desc: Status of ajax
 */
var ajaxBusy = false;
$( document ).ajaxStart( function() {
	ajaxBusy = true;
} ).ajaxStop( function() {
	ajaxBusy = false;
} );

$( window ).on( 'resize', function() {
	$body.addClass( 'window-resized' );
	wWidth = window.innerWidth;
	calMobileMenuBreakpoint();
	boxedFixVcRow();
	calculateLeftHeaderSize();
	initStickyHeader();
	initFooterParallax();
	initRotateBoxes();
} );

$( document ).on( 'vc-full-width-row', calculateLeftHeaderSize );

$( window ).on( 'load', function() {
	$body.addClass( 'loaded' );

	setTimeout( function() {
		$( '#page-preloader' ).remove();
	}, 600 );

	initQueueAnimationForElements();
	initAnimationForElements();
} );

$( document ).ready( function() {
	$( '.tm-swiper' ).insightSwiper();

	$( '.tm-maps-popup' ).lightGallery( {
		selector: 'this'
	} );

	calMobileMenuBreakpoint();
	boxedFixVcRow();
	initStickyHeader();
	insightInitSmartmenu();
	marqueBackground();
	handlerTestimonials();
	handlerServices();
	scrollToTop();

	// Remove empty p tags form wpautop.
	$( 'p:empty' ).each( function() {
		if ( 0 >= this.attributes.length ) {
			$( this ).remove();
		}
	} );

	insightInitGrid();

	setTimeout( function() {
		navOnePage();
	}, 100 );

	$body.on( 'click', '.vc_tta-tab, .vc_tta-panel', function() {
		$( window ).trigger( 'resize' );
	} );

	initFooterParallax();
	initLazyLoadImages();
	initSmoothScrollLinks();
	initLightGalleryPopups();
	initVideoPopups();
	initSearchPopup();
	initMobileMenu();
	initOffCanvasMenu();
	initOfficeSwitcher();
	fixLanguageSwitcherAlignment();
	initRotateBoxes();
} );

function fixLanguageSwitcherAlignment() {
	var _width = $( document ).width();
	var lsSubMenu = $( '#switcher-language-wrapper' ).find( '.wpml-ls-sub-menu' );

	if ( lsSubMenu.length > 0 ) {
		if ( lsSubMenu.offset().left + 200 >= _width ) {
			lsSubMenu.addClass( 'hover-back' );
		}
	}
}

function initOfficeSwitcher() {
	var $officeWrapper = $( '#top-bar-office-wrapper' );

	$officeWrapper.on( 'click', '.office-switcher a', function( evt ) {
		evt.preventDefault();
		evt.stopPropagation();

		if ( !$( this ).hasClass( 'current' ) ) {
			$officeWrapper.children( '.offices' ).children( '.office' ).hide();
			$officeWrapper.find( $( this ).attr( 'href' ) ).show();

			$( this ).parents( 'ul' ).first().find( 'a' ).removeClass( 'current' );
			$( this ).addClass( 'current' );
			$officeWrapper.children( '.office-switcher' )
			              .find( '.active' )
			              .children( 'span' )
			              .text( $( this ).text() );
		}

		$( this ).parents( 'ul' ).first().removeClass( 'open' );
	} );
}

function initLightGalleryPopups() {
	$( '.tm-light-gallery' ).each( function() {
		insightInitLightGallery( $( this ) );
	} );
}

function initRotateBoxes() {
	$( '.tm-rotate-box' ).each( function() {
		var $el = $( this );
		var maxHeight = 0;

		$el.find( '.content-wrap' ).each( function() {
			maxHeight = Math.max( maxHeight, $( this ).outerHeight() );
		} );

		$el.find( '.box' ).height( maxHeight );
	} );
}

function initVideoPopups() {
	$( '.tm-popup-video' ).each( function() {
		var options = {
			selector: 'a',
			fullScreen: false,
			zoom: false
		};
		$( this ).lightGallery( options );
	} );
}

function initLazyLoadImages() {
	if ( $insight.lazyLoadImages != 1 ) {
		return;
	}

	var myLazyLoad = new LazyLoad( {
		elements_selector: '.tm-lazy-load'
	} );
}

function marqueBackground() {
	$( '.background-marque' ).each( function() {
		var $el = $( this );
		var x = 0;
		var step = 1;
		var speed = 10;

		if ( $el.hasClass( 'to-left' ) ) {
			step = - 1;
		}

		$el.css( 'background-repeat', 'repeat-x' );

		var loop = setInterval( function() {
			x += step;
			$el.css( 'background-position-x', x + 'px' );
		}, speed );

		if ( $el.data( 'marque-pause-on-hover' ) == true ) {
			$( this ).hover( function() {
				clearInterval( loop );
			}, function() {
				loop = setInterval( function() {
					x += step;
					$el.css( 'background-position-x', x + 'px' );
				}, speed );
			} );
		}
	} );
}

function initSmoothScrollLinks() {
	// Allows for easy implementation of smooth scrolling for buttons
	$( '.smooth-scroll-link' ).on( 'click', function( e ) {
		var href = $( this ).attr( 'href' );

		if ( !href ) {
			href = $( this ).data( 'href' );
		}

		var _wWidth = window.innerWidth;
		if ( href.match( /^([.#])(.+)/ ) ) {
			e.preventDefault();
			var offset = 0;
			if ( $insight.header_sticky_enable == 1 && $pageHeader.length > 0 && $headerInner.data( 'sticky' ) == '1' ) {

				if ( $headerInner.data( 'header-position' ) === 'left' ) {
					if ( _wWidth < $insight.mobile_menu_breakpoint ) {
						offset += headerStickyHeight;
					}
				} else {
					offset += headerStickyHeight;
				}
			}

			// Add offset of admin bar when viewport min-width 600.
			if ( _wWidth > 600 ) {
				var adminBarHeight = $( '#wpadminbar' ).height();
				offset += adminBarHeight;
			}

			$.smoothScroll( {
				offset: - offset,
				scrollTarget: $( href ),
				speed: 600,
				easing: 'linear'
			} );
		}
	} );
}

function initAnimationForElements() {
	if ( !$body.hasClass( 'page-has-animation' ) ) {
		return;
	}

	var $animations = $pageContent.find( '.tm-animation' );

	$animations.vcwaypoint( function() {
		// Fix for different ver of waypoints plugin.
		var _self = this.element ? this.element : $( this );
		$( _self ).addClass( 'animate' );
	}, {
		offset: '100%' // triggerOnce: true
	} );
}

function initQueueAnimationForElements() {
	if ( !$body.hasClass( 'page-has-animation' ) ) {
		return;
	}

	$( '.tm-animation-queue' ).each( function() {
		var itemQueue  = [],
		    queueTimer,
		    queueDelay = $( this ).data( 'animation-delay' ) ? $( this ).data( 'animation-delay' ) : animateQueueDelay;

		$( this ).children( '.item' ).vcwaypoint( function() {
			// Fix for different ver of waypoints plugin.
			var _self = this.element ? this.element : $( this );
			itemQueue.push( _self );
			processItemQueue( itemQueue, queueDelay, queueTimer );
			queueDelay += animateQueueDelay;
		}, {
			offset: '90%',
			triggerOnce: true
		} );
	} );
}

function processItemQueue( itemQueue, queueDelay, queueTimer, queueResetDelay ) {
	clearTimeout( queueResetDelay );
	queueTimer = window.setInterval( function() {
		if ( itemQueue !== undefined && itemQueue.length ) {
			$( itemQueue.shift() ).addClass( 'animate' );
			processItemQueue();
		} else {
			window.clearInterval( queueTimer );
		}
	}, queueDelay );
}

function insightInitSmartmenu() {
	var $primaryMenu = $pageHeader.find( '#page-navigation' ).find( 'ul' ).first();

	if ( !$primaryMenu.hasClass( 'sm' ) ) {
		return;
	}

	$primaryMenu.smartmenus( {
		subMenusSubOffsetX: - 2,
		subMenusSubOffsetY: - 17,
		hideOnClick: false
	} );

	$primaryMenu.on( 'click', '.vc_tta-tab a', function( e ) {
		e.preventDefault();
		e.stopPropagation();
		var _this = jQuery( this );
		var _this_id = _this.attr( 'href' ).replace( '#', '' );
		_this.closest( '.vc_tta-tabs-container' ).find( '.vc_tta-tab ' ).removeClass( 'vc_active' );
		_this.closest( '.vc_tta-tab' ).addClass( 'vc_active' );
		_this.closest( '.vc_tta' ).find( '.vc_tta-panel' ).removeClass( 'vc_active' );
		_this.closest( '.vc_tta' ).find( '.vc_tta-panel[id="' + _this_id + '"]' ).addClass( 'vc_active' );
	} );

	// Add animation for sub menu.
	$primaryMenu.on( {
		'show.smapi': function( e, menu ) {
			$( menu ).removeClass( 'hide-animation' ).addClass( 'show-animation' );
		},
		'hide.smapi': function( e, menu ) {
			$( menu ).removeClass( 'show-animation' ).addClass( 'hide-animation' );
		}
	} ).on( 'animationend webkitAnimationEnd oanimationend MSAnimationEnd', 'ul', function( e ) {
		$( this ).removeClass( 'show-animation hide-animation' );
		e.stopPropagation();
	} );
}

function insightInitLightGallery( $gallery ) {
	var _download   = (
		    $insight.light_gallery_download === '1'
	    ),
	    _autoPlay   = (
		    $insight.light_gallery_auto_play === '1'
	    ),
	    _zoom       = (
		    $insight.light_gallery_zoom === '1'
	    ),
	    _fullScreen = (
		    $insight.light_gallery_full_screen === '1'
	    ),
	    _share      = (
		    $insight.light_gallery_share === '1'
	    ),
	    _thumbnail  = (
		    $insight.light_gallery_thumbnail === '1'
	    );

	var options = {
		selector: '.zoom',
		thumbnail: _thumbnail,
		download: _download,
		autoplay: _autoPlay,
		zoom: _zoom,
		share: _share,
		fullScreen: _fullScreen,
		hash: false,
		animateThumb: false,
		showThumbByDefault: false,
		getCaptionFromTitleOrAlt: false
	};

	$gallery.lightGallery( options );
}

function animateMagicLineOnScroll( $li, $magicLine, onScroll, id ) {
	if ( onScroll == false ) {
		$li.each( function() {
			var link = $( this ).children( 'a[href*="#"]:not([href="#"])' );
			if ( link.attr( 'href' ) == id ) {

				if ( $magicLine ) {
					var left = $( this ).position().left + link.padding().left;
					var width = link.width();
					$magicLine.stop().animate( {
						left: left,
						width: width
					} );
					$magicLine
						.attr( 'data-left', left )
						.attr( 'data-width', width );
				}

				$( this ).siblings( 'li' ).removeClass( 'current-menu-item' );
				$( this ).addClass( 'current-menu-item' );

				return true;
			}
		} );
	}
}

function navOnePage() {
	if ( !$body.hasClass( 'one-page' ) ) {
		return;
	}
	var $header = $( '#page-header' );
	var $headerInner = $header.children( '#page-header-inner' );
	var isMagicLine = $headerInner.data( 'magic-line' );
	var $el,
	    newWidth,
	    $mainNav = $( '#page-navigation' ).find( '.menu__container' ).first();
	var $li = $mainNav.children( '.menu-item' );
	var $links = $li.children( 'a[href^="#"]:not([href="#"])' );
	var onScroll = false;
	var $magicLine;

	if ( isMagicLine ) {
		$mainNav.append( '<li id="magic-line"></li>' );
		$magicLine = $( '#magic-line' );
	}

	$li.each( function() {
		var link = $( this ).children( 'a[href^="#"]:not([href="#"])' );

		if ( link.length > 0 ) {
			var id = link.attr( 'href' );
			if ( $( id ).length > 0 ) {
				$( id ).vcwaypoint( function( direction ) {
					if ( direction === 'down' ) {
						animateMagicLineOnScroll( $li, $magicLine, onScroll, id );
					}
				}, {
					offset: '25%'
				} );

				$( id ).vcwaypoint( function( direction ) {
					if ( direction === 'up' ) {
						animateMagicLineOnScroll( $li, $magicLine, onScroll, id );
					}
				}, {
					offset: '-25%'
				} );
			}
		}
	} );

	if ( $magicLine ) {
		$li.hover( function() {
			$el = $( this );

			var link = $el.children( 'a' );
			var left = $( this ).position().left + link.padding().left;
			newWidth = $el.children( 'a' ).width();
			$magicLine.stop().animate( {
				left: left,
				width: newWidth
			} );
		}, function() {
			if ( !$( this ).hasClass( 'current-menu-item' ) ) {
				$magicLine.stop().animate( {
					left: $magicLine.attr( 'data-left' ),
					width: $magicLine.attr( 'data-width' )
				} );
			}
		} );
	}

	// Allows for easy implementation of smooth scrolling for navigation links.
	$links.on( 'click', function() {
		var $this = $( this );
		var href = $( this ).attr( 'href' );
		var offset = 0;

		if ( $body.hasClass( 'admin-bar' ) ) {
			offset += 32;
		}

		if ( headerStickyEnable == 1 && $headerInner.data( 'sticky' ) == '1' ) {
			offset += headerStickyHeight;
			offset = - offset;
		}

		var parent = $this.parent( 'li' );

		if ( $magicLine ) {
			var left = parent.position().left + $this.padding().left;
			$magicLine.attr( 'data-left', left )
			          .attr( 'data-width', $this.width() );
		}

		parent.siblings( 'li' ).removeClass( 'current-menu-item' );
		parent.addClass( 'current-menu-item' );

		$.smoothScroll( {
			offset: offset,
			scrollTarget: $( href ),
			speed: 600,
			easing: 'linear',
			beforeScroll: function() {
				onScroll = true;
			},
			afterScroll: function() {
				onScroll = false;
				if ( headerStickyEnable == 1 && $headerInner.data( 'sticky' ) == '1' ) {
					$( 'html, body' ).animate( {
						scrollTop: $( href ).offset().top + (
							offset - $( '#page-header-inner' ).height()
						)
					}, 300 );
				}
			}
		} );
		return false;
	} );
}

function initFooterParallax() {
	var footerWrap = $( '#page-footer-wrapper' );

	if ( !footerWrap.hasClass( 'parallax' ) || $body.hasClass( 'page-template-one-page-scroll' ) ) {
		return;
	}

	if ( footerWrap.length > 0 ) {
		var contentWrap = $pageWrapper.children( '.content-wrapper' );
		if ( wWidth >= 1024 ) {
			var fwHeight = footerWrap.height();
			$body.addClass( 'page-footer-parallax' );
			contentWrap.css( {
				marginBottom: fwHeight
			} );
		} else {
			$body.removeClass( 'page-footer-parallax' );
			contentWrap.css( {
				marginBottom: 0
			} );
		}
	}
}

function scrollToTop() {
	if ( $insight.scroll_top_enable != 1 ) {
		return;
	}
	var $scrollUp = $( '#page-scroll-up' );
	var lastScrollTop = 0;
	var autoHide;

	$window.on( 'scroll', function() {
		clearTimeout( autoHide );

		var st = $( this ).scrollTop();
		if ( st > lastScrollTop ) {
			$scrollUp.removeClass( 'show' );
		} else {
			if ( $window.scrollTop() > 200 ) {
				$scrollUp.addClass( 'show' );

				autoHide = setTimeout( function() {
					$scrollUp.removeClass( 'show' );
				}, 6000 );
			} else {
				$scrollUp.removeClass( 'show' );
			}
		}
		lastScrollTop = st;
	} );

	$scrollUp.on( 'click', function( evt ) {
		$( 'html, body' ).animate( { scrollTop: 0 }, 600 );
		evt.preventDefault();
	} );
}

function openMobileMenu() {
	$body.addClass( 'page-mobile-menu-opened' );

	$( document ).trigger( 'mobileMenuOpen' );
}

function closeMobileMenu() {
	$body.removeClass( 'page-mobile-menu-opened' );

	$( document ).trigger( 'mobileMenuClose' );
}

function calMobileMenuBreakpoint() {
	var _breakpoint = $insight.mobile_menu_breakpoint;
	if ( wWidth <= _breakpoint ) {
		$body.removeClass( 'desktop-menu' ).addClass( 'mobile-menu' );
	} else {
		$body.addClass( 'desktop-menu' ).removeClass( 'mobile-menu' );
	}
}

function initMobileMenu() {
	$( '#page-open-mobile-menu' ).on( 'click', function( e ) {
		e.preventDefault();
		openMobileMenu();
	} );

	$( '#page-close-mobile-menu' ).on( 'click', function( e ) {
		e.preventDefault();
		closeMobileMenu();
	} );

	$( document ).on( 'mobileMenuOpen', function() {
		$html.css( {
			'overflow': 'hidden'
		} );
	} );

	$( document ).on( 'mobileMenuClose', function() {
		$html.css( {
			'overflow': ''
		} );
	} );

	var menu = $( '#mobile-menu-primary' );

	menu.on( 'click', 'a', function( e ) {
		var $this = $( this );
		var _li = $( this ).parent( 'li' );
		var href = $this.attr( 'href' );

		if ( $body.hasClass( 'one-page' ) && href && href.match( /^([.#])(.+)/ ) ) {
			closeMobileMenu();
			var offset = 0;

			if ( $body.hasClass( 'admin-bar' ) ) {
				offset += 32;
			}

			if ( headerStickyEnable == 1 && $headerInner.data( 'sticky' ) == '1' ) {
				offset += headerStickyHeight;
			}

			if ( offset > 0 ) {
				offset = - offset;
			}

			_li.siblings( 'li' ).removeClass( 'current-menu-item' );
			_li.addClass( 'current-menu-item' );

			setTimeout( function() {
				$.smoothScroll( {
					offset: offset,
					scrollTarget: $( href ),
					speed: 600,
					easing: 'linear'
				} );
			}, 300 );

			return false;
		}
	} );

	menu.on( 'click', '.toggle-sub-menu', function( e ) {
		var _li = $( this ).parents( 'li' ).first();

		e.preventDefault();
		e.stopPropagation();

		var _friends = _li.siblings( '.opened' );
		_friends.removeClass( 'opened' );
		_friends.find( '.opened' ).removeClass( 'opened' );
		_friends.find( '.sub-menu' ).stop().slideUp();

		if ( _li.hasClass( 'opened' ) ) {
			_li.removeClass( 'opened' );
			_li.find( '.opened' ).removeClass( 'opened' );
			_li.find( '.sub-menu' ).stop().slideUp();
		} else {
			_li.addClass( 'opened' );
			_li.children( '.sub-menu' ).stop().slideDown();
		}
	} );
}

function initOffCanvasMenu() {
	var menu = $( '#off-canvas-menu-primary' );
	var _lv1 = menu.children( 'li' );

	$( '#page-open-main-menu' ).on( 'click', function( e ) {
		e.preventDefault();
		$body.addClass( 'page-off-canvas-menu-opened' );
	} );

	$( '#page-close-main-menu' ).on( 'click', function( e ) {
		e.preventDefault();

		menu.fadeOut( function() {
			$body.removeClass( 'page-off-canvas-menu-opened' );
			menu.fadeIn();
			menu.find( '.sub-menu' ).slideUp();
		} );
	} );

	var transDelay = 0.1;
	_lv1.each( function() {
		$( this )[ 0 ].setAttribute( 'style', '-webkit-transition-delay:' + transDelay + 's; -moz-transition-delay:' + transDelay + 's; -ms-transition-delay:' + transDelay + 's; -o-transition-delay:' + transDelay + 's; transition-delay:' + transDelay + 's' );
		transDelay += 0.1;
	} );

	menu.on( 'click', '.menu-item-has-children > a', function( e ) {
		e.preventDefault();
		e.stopPropagation();

		var _li = $( this ).parent( 'li' );
		var _friends = _li.siblings( '.opened' );
		_friends.removeClass( 'opened' );
		_friends.find( '.opened' ).removeClass( 'opened' );
		_friends.find( '.sub-menu' ).stop().slideUp();

		if ( _li.hasClass( 'opened' ) ) {
			_li.removeClass( 'opened' );
			_li.find( '.opened' ).removeClass( 'opened' );
			_li.find( '.sub-menu' ).stop().slideUp();
		} else {
			_li.addClass( 'opened' );
			_li.children( '.sub-menu' ).stop().slideDown();
		}
	} );
}

function initStickyHeader() {
	if ( $insight.header_sticky_enable == 1 && $pageHeader.length > 0 && $headerInner.data( 'sticky' ) == '1' ) {
		if ( $headerInner.data( 'header-position' ) != 'left' ) {
			var _hOffset = $headerInner.offset().top;
			var _hHeight = $headerInner.outerHeight();
			var offset = _hOffset + _hHeight;

			$pageHeader.headroom( {
				offset: offset,
				onTop: function() {
					if ( !$pageHeader.hasClass( 'header-layout-fixed' ) ) {
						$pageWrapper.css( {
							paddingTop: 0
						} );
					}
				},
				onNotTop: function() {
					if ( !$pageHeader.hasClass( 'header-layout-fixed' ) ) {
						$pageWrapper.css( {
							paddingTop: _hHeight + 'px'
						} );
					}
				}
			} );
		} else {
			if ( wWidth <= $insight.mobile_menu_breakpoint ) {
				if ( !$pageHeader.data( 'headroom' ) ) {
					var _hOffset = $headerInner.offset().top;
					var _hHeight = $headerInner.outerHeight();
					var offset = _hOffset + _hHeight;

					$pageHeader.headroom( {
						offset: offset
					} );
				}
			} else {
				if ( $pageHeader.data( 'headroom' ) ) {
					$pageHeader.data( 'headroom' ).destroy();
					$pageHeader.removeData( 'headroom' );
				}
			}
		}
	}
}

function initSearchPopup() {
	var popupSearch = $( '#page-popup-search' );
	var searchField = popupSearch.find( '.search-field' );
	$( '#btn-open-popup-search' ).on( 'click', function( e ) {
		e.preventDefault();
		$body.addClass( 'popup-search-opened' );
		searchField.val( '' );
		setTimeout( function() {
			searchField.focus();
		}, 500 )
	} );

	$( '#popup-search-close' ).on( 'click', function( e ) {
		e.preventDefault();
		$body.removeClass( 'popup-search-opened' );
	} );

	$( document ).on( 'keyup', function( ev ) {
		// escape key.
		if ( ev.keyCode == 27 ) {
			$body.removeClass( 'popup-search-opened' );
		}
	} );
}

function calculateLeftHeaderSize() {
	if ( $headerInner.data( 'header-position' ) != 'left' ) {
		return;
	}

	var _wWidth = window.innerWidth;
	var _containerWidth = parseInt( $body.data( 'site-width' ) );
	var $footer = $( '#page-footer-wrapper' );

	if ( _wWidth <= $insight.mobile_menu_breakpoint ) {
		$html.css( {
			marginLeft: 0
		} );

		if ( $footer.hasClass( 'parallax' ) || $footer.hasClass( 'fixed' ) || $footer.hasClass( 'overlay' ) ) {
			$footer.css( {
				left: 0
			} );
		}
	} else {
		var headerWidth = $headerInner.outerWidth();

		if ( $insight.isRTL ) {
			$html.css( {
				marginRight: headerWidth + 'px'
			} );
		} else {
			$html.css( {
				marginLeft: headerWidth + 'px'
			} );
		}

		if ( $footer.hasClass( 'parallax' ) || $footer.hasClass( 'fixed' ) || $footer.hasClass( 'overlay' ) ) {
			if ( $insight.isRTL ) {
				$footer.css( {
					right: headerWidth + 'px'
				} );
			} else {
				$footer.css( {
					left: headerWidth + 'px'
				} );
			}
		}

		var rows = $( '#page-main-content' ).find( '.vc_row, .vc_section' );
		var footerRows = $footer.find( '.page-footer-inner' ).first().find( '.vc_row, .vc_section' );
		rows = rows.add( footerRows );

		var $contentWidth = $( '#page' ).width();
		rows.each( function() {
			if ( $( this ).attr( 'data-vc-full-width' ) ) {
				var left = 0;

				if ( $contentWidth > $insight.mobile_menu_breakpoint ) {
					left = - (
						(
							$contentWidth - _containerWidth
						) / 2
					) + 'px';
				}

				var width = $contentWidth + 'px';
				$( this ).css( {
					width: width
				} );

				if ( $insight.isRTL ) {
					$( this ).css( {
						right: left,
						left: 'auto'
					} );
				} else {
					$( this ).css( {
						left: left
					} );
				}

				var stretch = $( this ).attr( 'data-vc-stretch-content' );
				if ( typeof stretch === typeof undefined || stretch === false ) {
					var _padding = 0;
					if ( $contentWidth > $insight.mobile_menu_breakpoint ) {
						_padding = (
							(
								$contentWidth - _containerWidth
							) / 2
						);
					}
					$( this ).css( {
						paddingLeft: _padding,
						paddingRight: _padding
					} );
				}
			}
		} );
	}
}

function boxedFixVcRow() {
	if ( !$body.hasClass( 'boxed' ) ) {
		return;
	}

	if ( wWidth < 1200 ) {
		return;
	}

	var siteWidth    = $pageWrapper.outerWidth(),
	    contentWidth = $body.data( 'content-width' ),
	    space        = (
		                   siteWidth - contentWidth
	                   ) / 2;

	var breakpoint = Math.min( siteWidth, contentWidth );

	$pageWrapper.find( '[data-vc-full-width=true]' ).each( function() {
		$( this ).css( {
			left: - space,
			width: siteWidth + 'px'
		} );

		if ( $( this ).data( 'vc-stretch-content' ) != true ) {
			$( this ).css( {
				paddingLeft: space,
				paddingRight: space
			} );
		}
	} );
}

function handlerTestimonials() {
	$( '.tm-testimonial' ).each( function() {
		var $slider = $( this );

		if ( !$slider.hasClass( 'style-4' ) ) {
			return;
		}

		var $sliderContainer = $slider.children( '.swiper-container' ).first();
		var lgItems = $slider.data( 'lg-items' ) ? $slider.data( 'lg-items' ) : 1;
		var mdItems = $slider.data( 'md-items' ) ? $slider.data( 'md-items' ) : lgItems;
		var smItems = $slider.data( 'sm-items' ) ? $slider.data( 'sm-items' ) : mdItems;
		var xsItems = $slider.data( 'xs-items' ) ? $slider.data( 'xs-items' ) : smItems;

		var lgGutter = $slider.data( 'lg-gutter' ) ? $slider.data( 'lg-gutter' ) : 0;
		var mdGutter = $slider.data( 'md-gutter' ) ? $slider.data( 'md-gutter' ) : lgGutter;
		var smGutter = $slider.data( 'sm-gutter' ) ? $slider.data( 'sm-gutter' ) : mdGutter;
		var xsGutter = $slider.data( 'xs-gutter' ) ? $slider.data( 'xs-gutter' ) : smGutter;

		var autoPlay = $slider.data( 'autoplay' );
		var speed = $slider.data( 'speed' ) ? $slider.data( 'speed' ) : 1000;
		var nav = $slider.data( 'nav' );
		var pagination = $slider.data( 'pagination' );
		var paginationType = $slider.data( 'pagination-type' ) ? $slider.data( 'pagination-type' ) : 'bullets';

		var options = {
			loop: true,
			slidesPerView: lgItems,
			spaceBetween: lgGutter,
			breakpoints: {
				// when window width is <=
				767: {
					slidesPerView: xsItems,
					spaceBetween: xsGutter
				},
				990: {
					slidesPerView: smItems,
					spaceBetween: smGutter
				},
				1199: {
					slidesPerView: mdItems,
					spaceBetween: mdGutter
				}
			}
		};

		if ( speed ) {
			options.speed = speed;
		}

		if ( autoPlay ) {
			options.autoplay = {
				delay: autoPlay,
				disableOnInteraction: false
			};
		}

		if ( nav ) {
			var $swiperPrev = $( '<div class="swiper-nav-button swiper-button-prev"><i class="nav-button-icon"></i></div>' );
			var $swiperNext = $( '<div class="swiper-nav-button swiper-button-next"><i class="nav-button-icon"></i></div>' );

			$slider.append( $swiperPrev ).append( $swiperNext );

			options.navigation = {
				nextEl: $swiperNext,
				prevEl: $swiperPrev,
			};
		}

		if ( pagination ) {
			var $swiperPagination = $( '<div class="swiper-pagination"></div>' );
			$slider.addClass( 'has-pagination' );

			$slider.append( $swiperPagination );

			options.pagination = {
				el: $swiperPagination,
				clickable: true,
				type: paginationType
			};
		}

		var $swiper = new Swiper( $sliderContainer, options );

		var $testimonial_thumbs_container = $slider.children( '.tm-testimonial-pagination' )
		                                           .children( '.swiper-container' )
		                                           .first();

		var $swiperThumbs = new Swiper( $testimonial_thumbs_container, {
			slidesPerView: 3,
			spaceBetween: 30,
			centeredSlides: true,
			loop: true
		} );

		$swiper.on( 'slideChange', function() {
			var $_slides = $testimonial_thumbs_container.children( '.swiper-wrapper' )
			                                            .children( '.swiper-slide' );
			$_slides.each( function( i, o ) {

				if ( $( this ).hasClass( 'swiper-slide-duplicate' ) ) {
					return true;
				}

				if ( $( this ).data( 'swiper-slide-index' ) === $swiper.realIndex ) {
					$swiperThumbs.slideTo( i );
				}
			} );
		} );

		$swiperThumbs.on( 'slideChange', function() {
			var $_slides = $sliderContainer.children( '.swiper-wrapper' ).children( '.swiper-slide' );
			$_slides.each( function( i, o ) {

				if ( $( this ).hasClass( 'swiper-slide-duplicate' ) ) {
					return true;
				}

				if ( $( this ).data( 'swiper-slide-index' ) === $swiperThumbs.realIndex ) {
					$swiper.slideTo( i );
				}
			} );
		} );

		$swiperThumbs.on( 'click', function() {
			$swiperThumbs.slideTo( $swiperThumbs.clickedIndex );
		} );
	} );
}

function handlerServices() {
	$( '.tm-service' ).each( function() {
		var $slider = $( this );

		if ( !$slider.hasClass( 'style-carousel_07' ) ) {
			return;
		}

		var $sliderContainer = $slider.children( '.swiper-container' ).first();
		var lgItems = $slider.data( 'lg-items' ) ? $slider.data( 'lg-items' ) : 1;
		var mdItems = $slider.data( 'md-items' ) ? $slider.data( 'md-items' ) : lgItems;
		var smItems = $slider.data( 'sm-items' ) ? $slider.data( 'sm-items' ) : mdItems;
		var xsItems = $slider.data( 'xs-items' ) ? $slider.data( 'xs-items' ) : smItems;

		var lgGutter = $slider.data( 'lg-gutter' ) ? $slider.data( 'lg-gutter' ) : 0;
		var mdGutter = $slider.data( 'md-gutter' ) ? $slider.data( 'md-gutter' ) : lgGutter;
		var smGutter = $slider.data( 'sm-gutter' ) ? $slider.data( 'sm-gutter' ) : mdGutter;
		var xsGutter = $slider.data( 'xs-gutter' ) ? $slider.data( 'xs-gutter' ) : smGutter;

		var autoPlay = $slider.data( 'autoplay' );
		var speed = $slider.data( 'speed' ) ? $slider.data( 'speed' ) : 1000;
		var nav = $slider.data( 'nav' );
		var pagination = $slider.data( 'pagination' );
		var paginationType = $slider.data( 'pagination-type' ) ? $slider.data( 'pagination-type' ) : 'bullets';

		var options = {
			loop: true,
			slidesPerView: lgItems,
			spaceBetween: lgGutter,
			breakpoints: {
				// when window width is <=
				767: {
					slidesPerView: xsItems,
					spaceBetween: xsGutter
				},
				990: {
					slidesPerView: smItems,
					spaceBetween: smGutter
				},
				1199: {
					slidesPerView: mdItems,
					spaceBetween: mdGutter
				}
			}
		};

		if ( speed ) {
			options.speed = speed;
		}

		if ( autoPlay ) {
			options.autoplay = {
				delay: autoPlay,
				disableOnInteraction: false
			};
		}

		if ( nav ) {
			var $swiperPrev = $( '<div class="swiper-nav-button swiper-button-prev"><i class="nav-button-icon"></i></div>' );
			var $swiperNext = $( '<div class="swiper-nav-button swiper-button-next"><i class="nav-button-icon"></i></div>' );

			$slider.append( $swiperPrev ).append( $swiperNext );

			options.navigation = {
				nextEl: $swiperNext,
				prevEl: $swiperPrev,
			};
		}

		if ( pagination ) {
			var $swiperPagination = $( '<div class="swiper-pagination"></div>' );
			$slider.addClass( 'has-pagination' );

			$slider.append( $swiperPagination );

			options.pagination = {
				el: $swiperPagination,
				clickable: true,
				type: paginationType
			};
		}

		var $swiper = new Swiper( $sliderContainer, options );
		var $swiperNavPrev = $( '<div class="swiper-nav-button swiper-button-prev"><i class="nav-button-icon"></i></div>' );
		var $swiperNavNext = $( '<div class="swiper-nav-button swiper-button-next"><i class="nav-button-icon"></i></div>' );
		var $service_nav_container = $slider.children( '.tm-service-pagination' )
		                                    .children( '.swiper-container' )
		                                    .first();
		$slider.children( '.tm-service-pagination' ).append( $swiperNavPrev ).append( $swiperNavNext );
		var $swiperThumbs = new Swiper( $service_nav_container, {
			slidesPerView: 5,
			spaceBetween: 0,
			centeredSlides: true,
			loop: true,
			watchSlidesProgress: true,
			watchSlidesVisibility: true,
			navigation: {
				nextEl: $swiperNavNext,
				prevEl: $swiperNavPrev,
			},
			breakpoints: {
				// when window width is <=
				767: {
					slidesPerView: 1
				},
				990: {
					slidesPerView: 2
				},
				1199: {
					slidesPerView: 3
				}
			}
		} );

		$swiper.on( 'slideChange', function() {
			var $_slides = $service_nav_container.children( '.swiper-wrapper' )
			                                     .children( '.swiper-slide' );
			$_slides.each( function( i, o ) {

				if ( $( this ).hasClass( 'swiper-slide-duplicate' ) ) {
					return true;
				}

				if ( $( this ).data( 'swiper-slide-index' ) === $swiper.realIndex ) {
					$swiperThumbs.slideTo( i );
				}
			} );
		} );

		$swiperThumbs.on( 'slideChange', function() {
			var $_slides = $sliderContainer.children( '.swiper-wrapper' ).children( '.swiper-slide' );
			$_slides.each( function( i, o ) {

				if ( $( this ).hasClass( 'swiper-slide-duplicate' ) ) {
					return true;
				}

				if ( $( this ).data( 'swiper-slide-index' ) === $swiperThumbs.realIndex ) {
					$swiper.slideTo( i );
				}
			} );
		} );

		$swiperThumbs.on( 'click', function() {
			$swiperThumbs.slideTo( $swiperThumbs.clickedIndex );
		} );
	} );
}

var resizeTimer;

if ( typeof Isotope != 'undefined' ) {
    // Add isotope-hidden class for filtered items.
    var itemReveal = Isotope.Item.prototype.reveal,
        itemHide   = Isotope.Item.prototype.hide;

    Isotope.Item.prototype.reveal = function () {
        itemReveal.apply( this, arguments );
        $( this.element )
            .removeClass( 'isotope-hidden' );
    }

    Isotope.Item.prototype.hide = function () {
        itemHide.apply( this, arguments );
        $( this.element )
            .addClass( 'isotope-hidden' );
    }
}

function insightInitGrid() {
    $( '.tm-grid-wrapper' ).each( function () {
        var $el      = $( this ),
            $grid    = $el.find( '.tm-grid' ),
            $gridData,
            gutter   = $el.data( 'gutter' ) ? $el.data( 'gutter' ) : 0,
            itemWrap = $el.data( 'item-wrap' );

        if ( itemWrap == '1' ) {
            $grid.children().not( '.grid-sizer' )
                 .wrap( '<div class="grid-item"></div>' );
        }

        var $items = $grid.children( '.grid-item' );

        $( document ).trigger( 'insightGridBeforeInit', [$el, $grid] );

        if ( $el.data( 'type' ) == 'masonry' ) {
            var $isotopeOptions = {
                itemSelector: '.grid-item',
                percentPosition: true
            };

            if ( $el.data( 'grid-fitrows' ) ) {
                $isotopeOptions.layoutMode = 'fitRows';
            } else {
                $isotopeOptions.layoutMode = 'packery';
                $isotopeOptions.packery    = {
                    // Use outer width of grid-sizer for columnWidth.
                    columnWidth: '.grid-sizer'
                }
            }

            if ( $isotopeOptions.layoutMode === 'fitRows' ) {
                // Set gutter for fit rows layout.
                $isotopeOptions.fitRows        = {};
                $isotopeOptions.fitRows.gutter = gutter;
            } else if ( $isotopeOptions.layoutMode === 'packery' ) {
                $isotopeOptions.packery.gutter = gutter;
            } else {
                // Set gutter for masonry layout.
                $isotopeOptions.masonry.gutter = gutter;
            }

            // Remove default transition if grid has custom animation.
            if ( $grid.hasClass( 'has-animation' ) ) {
                $isotopeOptions.transitionDuration = 0;
            }

	        $( window ).on( 'resize', function() {
		        insightGridMasonryCalculateSize( $el, $grid, $isotopeOptions );
		        clearTimeout( resizeTimer );
                resizeTimer = setTimeout( function () {
                    // Run code here, resizing has "stopped"
                    insightGridMasonryCalculateSize( $el, $grid, $isotopeOptions );
                }, 300 );
            } );

            insightGridMasonryCalculateSize( $el, $grid );

            $gridData = $grid.imagesLoaded( function () {
                // init Isotope after all images have loaded
                $grid.isotope( $isotopeOptions );

                if ( $el.data( 'match-height' ) ) {
                    $items.matchHeight();
                }

                $( document ).trigger( 'insightGridInit', [$el, $grid, $isotopeOptions] );
            } );

            $gridData.one( 'arrangeComplete', function () {
                insightInitGridAnimation( $grid, $items );
                insightGridFilterCount( $el, $grid );
            } );
        } else if ( $el.data( 'type' ) == 'justified' ) {
            var jRowHeight        = $el.data( 'justified-height' ) ? $el.data( 'justified-height' ) : 300,
                jMaxRowHeight     = $el.data( 'justified-max-height' ) ? $el.data( 'justified-max-height' ) : 0,
                jLastRow          = $el.data( 'justified-last-row' ) ? $el.data( 'justified-last-row' ) : 'justify',
                $justifiedOptions = {
                    rowHeight: jRowHeight,
                    margins: gutter,
                    border: 0,
                    lastRow: jLastRow
                };

            if ( jMaxRowHeight && jMaxRowHeight > 0 ) {
                $justifiedOptions.maxRowHeight = jMaxRowHeight;
            }

            $grid.justifiedGallery( $justifiedOptions );
            insightGridFilterCount( $el, $grid );
            insightInitGridAnimation( $grid, $items );
        } else {
            insightGridFilterCount( $el, $grid );
            insightInitGridAnimation( $grid, $items );
        }

        insightGridFilterHandler( $el, $grid );

        if ( $el.data( 'pagination' ) == 'loadmore' ) {
            $el.children( '.tm-grid-pagination' )
               .find( '.tm-grid-loadmore-btn' )
               .on( 'click', function ( e ) {
                   e.preventDefault();
                   if ( ! ajaxBusy ) {
                       $( this ).hide();
                       var $queryInput = $el.find( '.tm-grid-query' )
                                            .first();
                       var query       = jQuery.parseJSON( $queryInput.val() );

                       query.paged ++;
                       $queryInput.val( JSON.stringify( query ) );
                       insightInfiniteQuery( $el, $grid );
                   }
               } );
        } else if ( $el.data( 'pagination' ) == 'loadmore_alt' ) {
            var _loadmoreBtn = $( $el.data( 'pagination-custom-button-id' ) );

            _loadmoreBtn.on( 'click', function ( e ) {
                e.preventDefault();
                if ( ! ajaxBusy ) {
                    $( this )
                        .hide();
                    var $queryInput = $el.find( '.tm-grid-query' )
                                         .first();
                    var query       = jQuery.parseJSON( $queryInput.val() );

                    query.paged ++;
                    $queryInput.val( JSON.stringify( query ) );
                    insightInfiniteQuery( $el, $grid );
                }
            } );
        } else if ( $el.data( 'pagination' ) == 'infinite' ) {
            $( '.tm-grid-pagination', $el ).vcwaypoint( function ( direction ) {
                if ( direction === 'down' && ! ajaxBusy ) {
                    var $queryInput = $el.find( '.tm-grid-query' )
                                         .first();
                    var query       = jQuery.parseJSON( $queryInput.val() );

                    query.paged ++;
                    $queryInput.val( JSON.stringify( query ) );

                    insightInfiniteQuery( $el, $grid );
                }
            }, {
                offset: '100%'
            } )
        }

        $( document ).on( 'insightGridInfinityLoad', function ( e ) {
            var $queryInput = $el.find( '.tm-grid-query' )
                                 .first();
            var query       = jQuery.parseJSON( $queryInput.val() );
            query.paged     = 1;
            $queryInput.val( JSON.stringify( query ) );

            insightInfiniteQuery( $el, $grid, true );
        } );
    } );
}

/**
 * Calculate size for grid items
 */
function insightGridMasonryCalculateSize( $el, $grid, $isotopeOptions ) {
    var windowWidth = window.innerWidth,
        $gridWidth  = $grid[0].getBoundingClientRect().width,
        $gutter     = $el.data( 'gutter' ) ? $el.data( 'gutter' ) : 0,
        $column     = 1,
        lgColumns   = $el.data( 'lg-columns' ) ? $el.data( 'lg-columns' ) : 1,
        mdColumns   = $el.data( 'md-columns' ) ? $el.data( 'md-columns' ) : lgColumns,
        smColumns   = $el.data( 'sm-columns' ) ? $el.data( 'sm-columns' ) : mdColumns,
        xsColumns   = $el.data( 'xs-columns' ) ? $el.data( 'xs-columns' ) : smColumns;

    if ( windowWidth >= 1200 ) {
        $column = lgColumns;
    } else if ( windowWidth >= 992 ) {
        $column = mdColumns;
    } else if ( windowWidth >= 641 ) {
        $column = smColumns;
    } else {
        $column = xsColumns;
    }

    var $totalGutter = (
                           $column - 1
                       ) * $gutter;

    var $columnWidth = (
                           $gridWidth - $totalGutter
                       ) / $column;

    $columnWidth = Math.floor( $columnWidth );

    var $columnWidth2 = $columnWidth;
    if ( $column > 1 ) {
        $columnWidth2 = $columnWidth * 2 + $gutter;
    }

    $grid.children( '.grid-sizer' )
         .css( {
             'width': $columnWidth + 'px'
         } );

    var $columnHeight  = $columnWidth,
        $columnHeight2 = $columnHeight,
        ratio          = $el.data( 'grid-ratio' );

    if ( ratio ) {
        var res    = ratio.split( ':' ),
            ratioW = parseFloat( res[0] ),
            ratioH = parseFloat( res[1] );

        $columnHeight = (
                            $columnWidth * ratioH
                        ) / ratioW;

        $columnHeight = Math.floor( $columnHeight );

        if ( $column > 1 ) {
            $columnHeight2 = $columnHeight * 2 + $gutter;
        } else {
            $columnHeight2 = $columnHeight;
        }
    }

    $grid.children( '.grid-item' ).each( function () {
        if ( $( this ).data( 'width' ) == '2' ) {
            $( this ).css( {
                'width': $columnWidth2 + 'px'
            } );
        } else {
            $( this ).css( {
                'width': $columnWidth + 'px'
            } );
        }
        if ( ratio ) {
            if ( $( this ).data( 'height' ) == '2' ) {
                $( this ).css( {
                    'height': $columnHeight2 + 'px'
                } );
            } else {
                $( this ).css( {
                    'height': $columnHeight + 'px'
                } );
            }
        }
    } );

    if ( $isotopeOptions ) {
        $grid.isotope( 'layout', $isotopeOptions );
    }
}

/**
 * Load post infinity from db.
 */
function insightInfiniteQuery( $wrapper, $grid, reset ) {
    var loader = $wrapper.children( '.tm-grid-pagination' )
                         .find( '.tm-loader' );
    loader.css( {
        'display': 'inline-block'
    } );

    setTimeout( function () {
        var $queryInput = $wrapper.find( '.tm-grid-query' )
                                  .first(),
            query       = jQuery.parseJSON( $queryInput.val() ),
            _data       = $.param( query );

        $.ajax( {
            url: $insight.ajaxurl,
            type: 'POST',
            data: _data,
            dataType: 'json',
            success: function ( results ) {

                if ( results.max_num_pages ) {
                    query.max_num_pages = results.max_num_pages;
                }

                if ( results.count ) {
                    query.count = results.count;
                }

                $queryInput.val( JSON.stringify( query ) );

                var html = results.template;

                var $items = $( html );

                if ( reset == true ) {
                    $grid.children( '.grid-item' ).remove();
                }

                if ( $wrapper.data( 'type' ) == 'masonry' ) {

                    $grid.isotope()
                         .append( $items )
                         .isotope( 'appended', $items )
                         .imagesLoaded()
                         .always( function () {
                             $grid.isotope( 'layout' );
                             // Re run match height for all items.
                             if ( $wrapper.data( 'match-height' ) ) {
                                 $grid.children( '.grid-item' ).matchHeight();
                             }
                             $( document ).trigger( 'insightGridUpdate', [$wrapper, $grid, $items] );
                         } );

                    insightGridFilterCount( $wrapper, $grid );
                    insightGridMasonryCalculateSize( $wrapper, $grid );
                } else if ( $wrapper.data( 'type' ) == 'swiper' ) {
                    var $slider = $wrapper.find( '.swiper-container' )[0].swiper;
                    $slider.appendSlide( $items );
                    $slider.update();
                } else if ( $wrapper.data( 'type' ) == 'justified' ) {
                    $grid.append( html );
                    $grid.justifiedGallery( 'norewind' );
                } else {
                    $grid.append( $items );
                }

                insightInitGridAnimation( $grid, $items );
                insightInitGalleryForNewItems( $grid, $items );
                insightHidePaginationIfEnd( $wrapper, query );

                loader.hide();
            }
        } );
    }, 500 );
}

/**
 * Init slider if grid item has post gallery format
 *
 * @param $grid
 * @param $items
 */
function insightInitGalleryForNewItems( $grid, $items ) {
    if ( $grid.data( 'grid-has-gallery' ) == true ) {
        $items.each( function () {
            if ( $( this )
                    .hasClass( 'format-gallery' ) ) {
                var $slider = $( this )
                    .children( '.post-gallery' );
                insightInitSwiper( $slider );
            }
        } );
    }
}

/**
 * Remove pagination if has no posts anymore
 *
 * @param $el
 * @param query
 *
 */
function insightHidePaginationIfEnd( $el, query ) {
    if ( query.found_posts <= (
            query.paged * query.posts_per_page
        ) ) {

        if ( $el.data( 'pagination' ) === 'loadmore_alt' ) {
            var _loadmoreBtn = $( $el.data( 'pagination-custom-button-id' ) );

            _loadmoreBtn.hide();
        } else {
            $el.children( '.tm-grid-pagination' ).hide();
        }

        $el.children( '.tm-grid-messages' ).show( 1 );
        setTimeout( function () {
            $el.children( '.tm-grid-messages' ).remove();
        }, 5000 );
    } else {
        if ( $el.data( 'pagination' ) === 'loadmore_alt' ) {
            var _loadmoreBtn = $( $el.data( 'pagination-custom-button-id' ) );

            _loadmoreBtn.show();
        } else {
            $el.children( '.tm-grid-pagination' ).show();
            $el.children( '.tm-grid-pagination' ).find( '.tm-grid-loadmore-btn' ).show();
        }

    }
}

/**
 * Update counter for grid filters
 *
 * @param $el
 * @param $grid
 */
function insightGridFilterCount( $el, $grid ) {
    if ( $el.children( '.tm-filter-button-group' ).data( 'filter-counter' ) != true ) {
        return;
    }

    var $gridItems = $grid.children( '.grid-item' );
    var $gridTotal = $gridItems.length;
    var filterType = $el.data( 'filter-type' );

    if ( filterType === 'ajax' ) {
        $el.find( '.btn-filter' ).each( function () {
            var count = $( this ).data( 'filter-count' );

            if ( $( this ).children( '.filter-counter' ).length > 0 ) {
                $( this ).children( '.filter-counter' ).text( count );
            } else {
                $( this ).append( '<span class="filter-counter">' + count + '</span>' );
            }
        } );
    } else {
        $el.find( '.btn-filter' ).each( function () {
            var filter = $( this ).data( 'filter' );
            var count  = 0;
            if ( filter == '*' ) {
                if ( $( this ).children( '.filter-counter' ).length > 0 ) {
                    $( this ).children( '.filter-counter' ).text( $gridTotal );
                } else {
                    $( this ).append( '<span class="filter-counter">' + $gridTotal + '</span>' );
                }
            } else {
                filter = filter.replace( '.', '' );
                $gridItems.each( function () {
                    if ( $( this ).hasClass( filter ) ) {
                        count ++;
                    }
                } );
                if ( $( this ).children( '.filter-counter' ).length > 0 ) {
                    $( this ).children( '.filter-counter' ).text( count );
                } else {
                    $( this ).append( '<span class="filter-counter">' + count + '</span>' );
                }
            }
        } );
    }
}

function insightGridFilterHandler( $el, $grid ) {
    $el.children( '.tm-filter-button-group' ).on( 'click', '.btn-filter', function () {
        if ( $( this ).hasClass( 'current' ) ) {
            return;
        }

        if ( $el.data( 'filter-type' ) == 'ajax' ) {
            var filterValue = $( this ).attr( 'data-filter' );

            var $queryInput = $el.find( '.tm-grid-query' ).first();
            var query       = jQuery.parseJSON( $queryInput.val() );
            if ( filterValue === '*' ) {
                query.extra_taxonomy = '';
            } else {
                query.extra_taxonomy = $( this ).attr( 'data-ajax-filter' );
            }

            $queryInput.val( JSON.stringify( query ) );

            $( document ).trigger( 'insightGridInfinityLoad', $el );

            $( this ).siblings().removeClass( 'current' );
            $( this ).addClass( 'current' );
        } else {
            var filterValue = $( this ).attr( 'data-filter' );
            if ( $el.data( 'type' ) == 'masonry' ) {
                $grid.children( '.grid-item' ).each( function () {
                    $( this ).removeClass( 'animate' );
                } );

                $grid.isotope( {
                    filter: filterValue
                } );

                if ( $grid.hasClass( 'has-animation' ) ) {
                    $grid.children( '.grid-item:not(.isotope-hidden)' )
                         .each( function () {
                             itemQueue.push( $( this ) );
                             processItemQueue();
                         } );
                }
            } else if ( $el.data( 'type' ) == 'swiper' ) {
                filterValue = filterValue.replace( '.', '' );
                $grid.children( '.grid-item' ).each( function () {
                    if ( filterValue == '*' ) {
                        $( this ).show();
                        $( this ).addClass( 'animate' );
                    } else {
                        if ( ! $( this ).hasClass( filterValue ) ) {
                            $( this ).hide();
                        } else {
                            $( this ).show();
                            $( this ).addClass( 'animate' );
                        }
                    }
                } );
                var $slider = $el.children( '.tm-swiper' )
                                 .children( '.swiper-container' )[0].swiper;
                $slider.update();
                $slider.slideTo( 0 );
            } else if ( $el.data( 'type' ) == 'justified' ) {
                if ( filterValue == '*' ) {
                    $grid.justifiedGallery( {filter: false} );
                } else {
                    $grid.justifiedGallery( {filter: filterValue} );
                }
            } else {
                $grid.children( '.grid-item' ).hide().removeClass( 'animate' );

                var $filterItems;

                if ( filterValue == '*' ) {
                    $filterItems = $grid.children( '.grid-item' );
                } else {
                    $filterItems = $grid.children( filterValue );
                }

                $filterItems.show();

                $filterItems.each( function ( i, o ) {
                    var self = $( this );

                    setTimeout( function () {
                        self.addClass( 'animate' );
                    }, i * animateQueueDelay );
                } );
            }

            $( this ).siblings().removeClass( 'current' );
            $( this ).addClass( 'current' );
        }
    } );
}

function insightInitGridAnimation( $grid, $items ) {
    if ( ! $body.hasClass( 'page-has-animation' ) || ! $grid.hasClass( 'has-animation' ) ) {
        return;
    }

    var itemQueue  = [],
        queueDelay = animateQueueDelay,
        queueTimer;


    $items.vcwaypoint( function () {
        // Fix for different ver of waypoints plugin.
        var _self = this.element ? this.element : $( this );

        itemQueue.push( _self );
        processItemQueue( itemQueue, queueDelay, queueTimer );
        queueDelay += 250;

        queueResetDelay = setTimeout( function () {
            queueDelay = animateQueueDelay;
        }, animateQueueDelay );
    }, {
        offset: '90%',
        triggerOnce: true
    } );
}

	}( jQuery )
);

(
    function ( $ ) {
        'use strict';
        $( document )
            .on( 'click', '.sl-button', function () {
                var button    = $( this );
                var post_id   = button.attr( 'data-post-id' );
                var security  = button.attr( 'data-nonce' );
                var isComment = button.attr( 'data-iscomment' );
                var allButtons;
                if ( isComment === '1' ) { /* Comments can have same id */
                    allButtons = $( '.sl-comment-button-' + post_id );
                } else {
                    allButtons = $( '.sl-button-' + post_id );
                }
                var loader = allButtons.next( '.sl-loader' );
                if ( post_id !== '' ) {
                    $.ajax( {
                        type: 'POST',
                        url: $insight.ajaxurl,
                        data: {
                            action: 'process_simple_like',
                            post_id: post_id,
                            nonce: security,
                            is_comment: isComment
                        },
                        beforeSend: function () {
                            loader.html( '&nbsp;<div class="loader">Loading&hellip;</div>' );
                        },
                        success: function ( response ) {
                            var icon  = response.icon;
                            var count = response.count;
                            allButtons.html( icon + count );
                            if ( response.status === 'unliked' ) {
                                var likeText = $insight.like;
                                allButtons.prop( 'title', likeText );
                                allButtons.removeClass( 'liked' );
                            } else {
                                var unLikeText = $insight.unlike;
                                allButtons.prop( 'title', unLikeText );
                                allButtons.addClass( 'liked' );
                            }
                            loader.empty();
                        }
                    } );
                }
                return false;
            } );
    }
)( jQuery );
