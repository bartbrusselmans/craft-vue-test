/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 384);
/******/ })
/************************************************************************/
/******/ ({

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = create_event;


/* the following code is borrowed from the WebComponents project, licensed
 * under the BSD license. Source:
 * <https://github.com/webcomponents/webcomponentsjs/blob/5283db1459fa2323e5bfc8b9b5cc1753ed85e3d0/src/WebComponents/dom.js#L53-L78>
 */
// defaultPrevented is broken in IE.
// https://connect.microsoft.com/IE/feedback/details/790389/event-defaultprevented-returns-false-after-preventdefault-was-called
const workingDefaultPrevented = (function() {
  const e = document.createEvent('Event');
  e.initEvent('foo', true, true);
  e.preventDefault();
  return e.defaultPrevented;
})();

if (!workingDefaultPrevented) {
  const origPreventDefault = window.Event.prototype.preventDefault;
  window.Event.prototype.preventDefault = function() {
    if (!this.cancelable) {
      return;
    }

    origPreventDefault.call(this);

    Object.defineProperty(this, 'defaultPrevented', {
      get: function() {
        return true;
      },
      configurable: true
    });
  };
}
/* end of borrowed code */


function create_event(name, { bubbles=true, cancelable=false, }={}) {
  const event = document.createEvent('Event');
  event.initEvent(name, bubbles, cancelable);
  return event;
}


/* harmony default export */ __webpack_exports__["b"] = (function(element, event, {
                          bubbles=true,
                          cancelable=false,
                        }={}, payload={}) {
  if (! (event instanceof window.Event)) {
    event = create_event(event, { bubbles, cancelable });
  }

  for (let key in payload) {
    if (payload.hasOwnProperty(key)) {
      event[key] = payload[key];
    }
  }

  element.dispatchEvent(event);

  return event;
});


/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/**
 * mark an object with a '__hyperform=true' property
 *
 * We use this to distinguish our properties from the native ones. Usage:
 * js> mark(obj);
 * js> assert(obj.__hyperform === true)
 */
/* harmony default export */ __webpack_exports__["a"] = (function(obj) {
  if (['object', 'function'].indexOf(typeof obj) > -1) {
    delete obj.__hyperform;
    Object.defineProperty(obj, '__hyperform', {
      configurable: true,
      enumerable: false,
      value: true,
    });
  }

  return obj;
});


/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_wrapper__ = __webpack_require__(25);






/**
 * remove `property` from element and restore _original_property, if present
 */
/* harmony default export */ __webpack_exports__["a"] = (function(element, property) {
  try {
    delete element[property];
  } catch (e) {
    /* Safari <= 9 and PhantomJS will end up here :-( Nothing to do except
     * warning */
    const wrapper = Object(__WEBPACK_IMPORTED_MODULE_0__components_wrapper__["b" /* get_wrapper */])(element);
    if (wrapper && wrapper.settings.debug) {
      /* global console */
      console.log('[hyperform] cannot uninstall custom property '+property);
    }
    return false;
  }

  const original_descriptor = Object.getOwnPropertyDescriptor(element,
                                '_original_'+property);

  if (original_descriptor) {
    Object.defineProperty(element, property, original_descriptor);
  }

});


/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__date_to_string__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__string_to_number__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__get_type__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_localization__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_step_defaults__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_types__ = __webpack_require__(11);











/**
 * get previous and next valid values for a stepped input element
 */
/* harmony default export */ __webpack_exports__["a"] = (function(element, n=1) {
  const type = Object(__WEBPACK_IMPORTED_MODULE_2__get_type__["a" /* default */])(element);

  const aMin = element.getAttribute('min');
  let min = __WEBPACK_IMPORTED_MODULE_4__components_step_defaults__["b" /* default_min */][type] || NaN;
  if (aMin) {
    const pMin = Object(__WEBPACK_IMPORTED_MODULE_1__string_to_number__["a" /* default */])(aMin, type);
    if (! isNaN(pMin)) {
      min = pMin;
    }
  }

  const aMax = element.getAttribute('max');
  let max = __WEBPACK_IMPORTED_MODULE_4__components_step_defaults__["a" /* default_max */][type] || NaN;
  if (aMax) {
    const pMax = Object(__WEBPACK_IMPORTED_MODULE_1__string_to_number__["a" /* default */])(aMax, type);
    if (! isNaN(pMax)) {
      max = pMax;
    }
  }

  const aStep = element.getAttribute('step');
  let step = __WEBPACK_IMPORTED_MODULE_4__components_step_defaults__["c" /* default_step */][type] || 1;
  if (aStep && aStep.toLowerCase() === 'any') {
    /* quick return: we cannot calculate prev and next */
    return [Object(__WEBPACK_IMPORTED_MODULE_3__components_localization__["b" /* default */])('any value'), Object(__WEBPACK_IMPORTED_MODULE_3__components_localization__["b" /* default */])('any value')];
  } else if (aStep) {
    const pStep = Object(__WEBPACK_IMPORTED_MODULE_1__string_to_number__["a" /* default */])(aStep, type);
    if (! isNaN(pStep)) {
      step = pStep;
    }
  }

  const default_value = Object(__WEBPACK_IMPORTED_MODULE_1__string_to_number__["a" /* default */])(element.getAttribute('value'), type);

  const value = Object(__WEBPACK_IMPORTED_MODULE_1__string_to_number__["a" /* default */])(element.value ||
                                 element.getAttribute('value'), type);

  if (isNaN(value)) {
    /* quick return: we cannot calculate without a solid base */
    return [Object(__WEBPACK_IMPORTED_MODULE_3__components_localization__["b" /* default */])('any valid value'), Object(__WEBPACK_IMPORTED_MODULE_3__components_localization__["b" /* default */])('any valid value')];
  }

  const step_base = (
    ! isNaN(min)? min : (
      ! isNaN(default_value)? default_value : (
        __WEBPACK_IMPORTED_MODULE_4__components_step_defaults__["d" /* default_step_base */][type] || 0
      )
    )
  );

  const scale = __WEBPACK_IMPORTED_MODULE_4__components_step_defaults__["e" /* step_scale_factor */][type] || 1;

  var prev = step_base +
    Math.floor((value - step_base) / (step * scale)) * (step * scale) * n;
  var next = step_base +
    (Math.floor((value - step_base) / (step * scale)) + 1) * (step * scale) * n;

  if (prev < min) {
    prev = null;
  } else if (prev > max) {
    prev = max;
  }

  if (next > max) {
    next = null;
  } else if (next < min) {
    next = min;
  }

  /* convert to date objects, if appropriate */
  if (__WEBPACK_IMPORTED_MODULE_5__components_types__["a" /* dates */].indexOf(type) > -1) {
    prev = Object(__WEBPACK_IMPORTED_MODULE_0__date_to_string__["a" /* default */])(new Date(prev), type);
    next = Object(__WEBPACK_IMPORTED_MODULE_0__date_to_string__["a" /* default */])(new Date(next), type);
  }

  return [prev, next];
});


/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";



/* harmony default export */ __webpack_exports__["a"] = (function(str, ...args) {
  const args_length = args.length;
  var global_index = 0;

  return str.replace(/%([0-9]+\$)?([sl])/g, (match, position, type) => {
    var local_index = global_index;
    if (position) {
      local_index = Number(position.replace(/\$$/, '')) - 1;
    }
    global_index += 1;

    var arg = '';
    if (args_length > local_index) {
      arg = args[local_index];
    }

    if (arg instanceof Date ||
        typeof arg === 'number' ||
        arg instanceof Number) {
      /* try getting a localized representation of dates and numbers, if the
       * browser supports this */
      if (type === 'l') {
        arg = (arg.toLocaleString || arg.toString).call(arg);
      } else {
        arg = arg.toString();
      }
    }

    return arg;
  });
});


/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = set_language;
/* harmony export (immutable) */ __webpack_exports__["a"] = add_translation;



/**
 * the following validation messages are from Firefox source,
 * http://mxr.mozilla.org/mozilla-central/source/dom/locales/en-US/chrome/dom/dom.properties
 * released under MPL license, http://mozilla.org/MPL/2.0/.
 */
const catalog = {
  en: {
    TextTooLong: 'Please shorten this text to %l characters or less (you are currently using %l characters).',
    ValueMissing: 'Please fill out this field.',
    CheckboxMissing: 'Please check this box if you want to proceed.',
    RadioMissing: 'Please select one of these options.',
    FileMissing: 'Please select a file.',
    SelectMissing: 'Please select an item in the list.',
    InvalidEmail: 'Please enter an email address.',
    InvalidURL: 'Please enter a URL.',
    PatternMismatch: 'Please match the requested format.',
    PatternMismatchWithTitle: 'Please match the requested format: %l.',
    NumberRangeOverflow: 'Please select a value that is no more than %l.',
    DateRangeOverflow: 'Please select a value that is no later than %l.',
    TimeRangeOverflow: 'Please select a value that is no later than %l.',
    NumberRangeUnderflow: 'Please select a value that is no less than %l.',
    DateRangeUnderflow: 'Please select a value that is no earlier than %l.',
    TimeRangeUnderflow: 'Please select a value that is no earlier than %l.',
    StepMismatch: 'Please select a valid value. The two nearest valid values are %l and %l.',
    StepMismatchOneValue: 'Please select a valid value. The nearest valid value is %l.',
    BadInputNumber: 'Please enter a number.',
  },
};


/**
 * the global language Hyperform will use
 */
var language = 'en';


/**
 * the base language according to BCP47, i.e., only the piece before the first hyphen
 */
var base_lang = 'en';


/**
 * set the language for Hyperform’s messages
 */
function set_language(newlang) {
  language = newlang;
  base_lang = newlang.replace(/[-_].*/, '');
}


/**
 * add a lookup catalog "string: translation" for a language
 */
function add_translation(lang, new_catalog) {
  if (! (lang in catalog)) {
    catalog[lang] = {};
  }
  for (let key in new_catalog) {
    if (new_catalog.hasOwnProperty(key)) {
      catalog[lang][key] = new_catalog[key];
    }
  }
}


/**
 * return `s` translated into the current language
 *
 * Defaults to the base language and then English if the former has no
 * translation for `s`.
 */
/* harmony default export */ __webpack_exports__["b"] = (function(s) {
  if ((language in catalog) && (s in catalog[language])) {
    return catalog[language][s];
  } else if ((base_lang in catalog) && (s in catalog[base_lang])) {
    return catalog[base_lang][s];
  } else if (s in catalog.en) {
    return catalog.en[s];
  }
  return s;
});


/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = valueAsDate;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tools_get_type__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tools_string_to_date__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tools_date_to_string__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_types__ = __webpack_require__(11);









/**
 * implement the valueAsDate functionality
 *
 * @see https://html.spec.whatwg.org/multipage/forms.html#dom-input-valueasdate
 */
function valueAsDate(element, value=undefined) {
  const type = Object(__WEBPACK_IMPORTED_MODULE_0__tools_get_type__["a" /* default */])(element);
  if (__WEBPACK_IMPORTED_MODULE_3__components_types__["a" /* dates */].indexOf(type) > -1) {
    if (value !== undefined) {
      /* setter: value must be null or a Date() */
      if (value === null) {
        element.value = '';
      } else if (value instanceof Date) {
        if (isNaN(value.getTime())) {
          element.value = '';
        } else {
          element.value = Object(__WEBPACK_IMPORTED_MODULE_2__tools_date_to_string__["a" /* default */])(value, type);
        }
      } else {
        throw new window.DOMException(
          'valueAsDate setter encountered invalid value', 'TypeError');
      }
      return;
    }

    const value_date = Object(__WEBPACK_IMPORTED_MODULE_1__tools_string_to_date__["a" /* default */])(element.value, type);
    return value_date instanceof Date? value_date : null;

  } else if (value !== undefined) {
    /* trying to set a date on a not-date input fails */
    throw new window.DOMException(
      'valueAsDate setter cannot set date on this element',
      'InvalidStateError');
  }

  return null;
}


/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";



/**
 * patch String.length to account for non-BMP characters
 *
 * @see https://mathiasbynens.be/notes/javascript-unicode
 * We do not use the simple [...str].length, because it needs a ton of
 * polyfills in older browsers.
 */
/* harmony default export */ __webpack_exports__["a"] = (function(str) {
  return str.match(/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/g).length;
});


/***/ }),

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/* and datetime-local? Spec says “Nah!” */
const dates = [ 'datetime', 'date', 'month', 'week', 'time', ];
/* harmony export (immutable) */ __webpack_exports__["a"] = dates;


const plain_numbers = [ 'number', 'range', ];
/* unused harmony export plain_numbers */


/* everything that returns something meaningful for valueAsNumber and
 * can have the step attribute */
const numbers = dates.concat(plain_numbers, 'datetime-local');
/* harmony export (immutable) */ __webpack_exports__["e"] = numbers;


/* the spec says to only check those for syntax in validity.typeMismatch.
 * ¯\_(ツ)_/¯ */
const type_checked = [ 'email', 'url', ];
/* harmony export (immutable) */ __webpack_exports__["g"] = type_checked;


/* check these for validity.badInput */
const input_checked = [ 'email', 'date', 'month', 'week', 'time',
  'datetime', 'datetime-local', 'number', 'range', 'color', ];
/* harmony export (immutable) */ __webpack_exports__["b"] = input_checked;


const text = [ 'text', 'search', 'tel', 'password', ].concat(type_checked);
/* harmony export (immutable) */ __webpack_exports__["f"] = text;


/* input element types, that are candidates for the validation API.
 * Missing from this set are: button, hidden, menu (from <button>), reset and
 * the types for non-<input> elements. */
const validation_candidates = [ 'checkbox', 'color', 'file', 'image',
  'radio', 'submit', ].concat(numbers, text);
/* harmony export (immutable) */ __webpack_exports__["h"] = validation_candidates;


/* all known types of <input> */
const inputs = ['button', 'hidden', 'reset'].concat(validation_candidates);
/* harmony export (immutable) */ __webpack_exports__["c"] = inputs;


/* apparently <select> and <textarea> have types of their own */
const non_inputs = ['select-one', 'select-multiple', 'textarea'];
/* harmony export (immutable) */ __webpack_exports__["d"] = non_inputs;



/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_types__ = __webpack_require__(11);






/**
 * get the element's type in a backwards-compatible way
 */
/* harmony default export */ __webpack_exports__["a"] = (function(element) {
  if (element instanceof window.HTMLTextAreaElement) {
    return 'textarea';

  } else if (element instanceof window.HTMLSelectElement) {
    return element.hasAttribute('multiple')? 'select-multiple' : 'select-one';

  } else if (element instanceof window.HTMLButtonElement) {
    return (element.getAttribute('type') || 'submit').toLowerCase();

  } else if (element instanceof window.HTMLInputElement) {
    const attr = (element.getAttribute('type') || '').toLowerCase();
    if (attr && __WEBPACK_IMPORTED_MODULE_0__components_types__["c" /* inputs */].indexOf(attr) > -1) {
      return attr;
    } else {
      /* perhaps the DOM has in-depth knowledge. Take that before returning
       * 'text'. */
      return element.type || 'text';
    }

  }

  return '';
});


/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tools_return_hook_or__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tools_trigger_event__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__validityState__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_wrapper__ = __webpack_require__(25);









/**
 * check an element's validity with respect to it's form
 */
const checkValidity = Object(__WEBPACK_IMPORTED_MODULE_0__tools_return_hook_or__["a" /* default */])('checkValidity', function(element) {
  /* if this is a <form>, check validity of all child inputs */
  if (element instanceof window.HTMLFormElement) {
    return (
             Array.prototype.map.call(element.elements, checkValidity)
           ).every(b=>b);
  }

  /* default is true, also for elements that are no validation candidates */
  const valid = Object(__WEBPACK_IMPORTED_MODULE_2__validityState__["a" /* default */])(element).valid;
  if (valid) {
    const wrapped_form = Object(__WEBPACK_IMPORTED_MODULE_3__components_wrapper__["b" /* get_wrapper */])(element);
    if (wrapped_form && wrapped_form.settings.validEvent) {
      Object(__WEBPACK_IMPORTED_MODULE_1__tools_trigger_event__["b" /* default */])(element, 'valid');
    }
  } else {
    Object(__WEBPACK_IMPORTED_MODULE_1__tools_trigger_event__["b" /* default */])(element, 'invalid', { cancelable: true });
  }

  return valid;
});


/* harmony default export */ __webpack_exports__["a"] = (checkValidity);


/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__message_store__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wrapper__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tools_generate_id__ = __webpack_require__(389);








const warningsCache = new WeakMap();


const DefaultRenderer = {

  /**
   * called when a warning should become visible
   */
  attachWarning: function(warning, element) {
    /* should also work, if element is last,
     * http://stackoverflow.com/a/4793630/113195 */
    element.parentNode.insertBefore(warning, element.nextSibling);
  },

  /**
   * called when a warning should vanish
   */
  detachWarning: function(warning, element) {
    /* be conservative here, since an overwritten attachWarning() might not
     * actually have attached the warning. */
    if (warning.parentNode) {
      warning.parentNode.removeChild(warning);
    }
  },

  /**
   * called when feedback to an element's state should be handled
   *
   * i.e., showing and hiding warnings
   */
  showWarning: function(element, sub_radio=false) {
    const msg = __WEBPACK_IMPORTED_MODULE_0__message_store__["a" /* message_store */].get(element).toString();
    var warning = warningsCache.get(element);

    if (msg) {
      if (! warning) {
        const wrapper = Object(__WEBPACK_IMPORTED_MODULE_1__wrapper__["b" /* get_wrapper */])(element);
        warning = document.createElement('div');
        warning.className = wrapper && wrapper.settings.classes.warning || 'hf-warning';
        warning.id = Object(__WEBPACK_IMPORTED_MODULE_2__tools_generate_id__["a" /* default */])();
        warning.setAttribute('aria-live', 'polite');
        warningsCache.set(element, warning);
      }

      element.setAttribute('aria-errormessage', warning.id);
      if (!element.hasAttribute('aria-describedby')) {
        element.setAttribute('aria-describedby', warning.id);
      }
      warning.textContent = msg;
      Renderer.attachWarning(warning, element);

    } else if (warning && warning.parentNode) {
      if (element.getAttribute('aria-describedby') === warning.id) {
        element.removeAttribute('aria-describedby');
      }
      element.removeAttribute('aria-errormessage');
      Renderer.detachWarning(warning, element);

    }

    if (! sub_radio && element.type === 'radio' && element.form) {
      /* render warnings for all other same-name radios, too */
      Array.prototype
        .filter.call(document.getElementsByName(element.name),
                     radio => radio.name === element.name &&
                              radio.form === element.form
        )
        .map(radio => Renderer.showWarning(radio, 'sub_radio'));
    }
  },

};


const Renderer = {

  attachWarning: DefaultRenderer.attachWarning,
  detachWarning: DefaultRenderer.detachWarning,
  showWarning: DefaultRenderer.showWarning,

  set: function(renderer, action) {
    if (renderer.indexOf('_') > -1) {
      /* global console */
      // TODO delete before next non-patch version
      console.log('Renderer.set: please use camelCase names. '+renderer+' will be removed in the next non-patch release.');
      renderer = renderer.replace(/_([a-z])/g, g => g[1].toUpperCase());
    }
    if (! action) {
      action = DefaultRenderer[renderer];
    }
    Renderer[renderer] = action;
  },

};


/* harmony default export */ __webpack_exports__["a"] = (Renderer);


/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_wrapper__ = __webpack_require__(25);






/**
 * add `property` to an element
 *
 * js> installer(element, 'foo', { value: 'bar' });
 * js> assert(element.foo === 'bar');
 */
/* harmony default export */ __webpack_exports__["a"] = (function(element, property, descriptor) {
  descriptor.configurable = true;
  descriptor.enumerable = true;
  if ('value' in descriptor) {
    descriptor.writable = true;
  }

  const original_descriptor = Object.getOwnPropertyDescriptor(element, property);

  if (original_descriptor) {

    if (original_descriptor.configurable === false) {
      /* Safari <= 9 and PhantomJS will end up here :-( Nothing to do except
       * warning */
      const wrapper = Object(__WEBPACK_IMPORTED_MODULE_0__components_wrapper__["b" /* get_wrapper */])(element);
      if (wrapper && wrapper.settings.debug) {
        /* global console */
        console.log('[hyperform] cannot install custom property '+property);
      }
      return false;
    }

    /* we already installed that property... */
    if ((original_descriptor.get && original_descriptor.get.__hyperform) ||
        (original_descriptor.value && original_descriptor.value.__hyperform)) {
      return;
    }

    /* publish existing property under new name, if it's not from us */
    Object.defineProperty(
      element,
      '_original_'+property,
      original_descriptor
    );
  }

  delete element[property];
  Object.defineProperty(element, property, descriptor);

  return true;
});


/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/* harmony default export */ __webpack_exports__["a"] = (function(element) {
  return (
          element instanceof window.HTMLButtonElement ||
          element instanceof window.HTMLInputElement ||
          element instanceof window.HTMLSelectElement ||
          element instanceof window.HTMLTextAreaElement ||
          element instanceof window.HTMLFieldSetElement ||
          element === window.HTMLButtonElement.prototype ||
          element === window.HTMLInputElement.prototype ||
          element === window.HTMLSelectElement.prototype ||
          element === window.HTMLTextAreaElement.prototype ||
          element === window.HTMLFieldSetElement.prototype
         );
});



/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = setCustomValidity;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_message_store__ = __webpack_require__(56);






/**
 * set a custom validity message or delete it with an empty string
 */
function setCustomValidity(element, msg) {
  __WEBPACK_IMPORTED_MODULE_0__components_message_store__["a" /* message_store */].set(element, msg, true);
}


/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = stepDown;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tools_get_next_valid__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tools_get_type__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_types__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__valueAsNumber__ = __webpack_require__(75);









/**
 *
 */
function stepDown(element, n=1) {
  if (__WEBPACK_IMPORTED_MODULE_2__components_types__["e" /* numbers */].indexOf(Object(__WEBPACK_IMPORTED_MODULE_1__tools_get_type__["a" /* default */])(element)) === -1) {
    throw new window.DOMException('stepDown encountered invalid type',
                                  'InvalidStateError');
  }
  if ((element.getAttribute('step') || '').toLowerCase() === 'any') {
    throw new window.DOMException('stepDown encountered step "any"',
                                  'InvalidStateError');
  }

  const prev = Object(__WEBPACK_IMPORTED_MODULE_0__tools_get_next_valid__["a" /* default */])(element, n)[0];

  if (prev !== null) {
    Object(__WEBPACK_IMPORTED_MODULE_3__valueAsNumber__["a" /* default */])(element, prev);
  }
}


/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = date_to_string;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sprintf__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__get_week_of_year__ = __webpack_require__(391);







function pad(num, size=2) {
  var s = num + '';
  while (s.length < size) {
    s = '0' + s;
  }
  return s;
}


/**
 * calculate a string from a date according to HTML5
 */
function date_to_string(date, element_type) {
  if (! (date instanceof Date)) {
    return null;
  }

  switch (element_type) {
    case 'datetime':
      return date_to_string(date, 'date') + 'T' +
             date_to_string(date, 'time');

    case 'datetime-local':
      return Object(__WEBPACK_IMPORTED_MODULE_0__sprintf__["a" /* default */])('%s-%s-%sT%s:%s:%s.%s',
                     date.getFullYear(),
                     pad(date.getMonth() + 1),
                     pad(date.getDate()),
                     pad(date.getHours()),
                     pad(date.getMinutes()),
                     pad(date.getSeconds()),
                     pad(date.getMilliseconds(), 3)
                   ).replace(/(:00)?\.000$/, '');

    case 'date':
      return Object(__WEBPACK_IMPORTED_MODULE_0__sprintf__["a" /* default */])('%s-%s-%s',
                     date.getUTCFullYear(),
                     pad(date.getUTCMonth() + 1),
                     pad(date.getUTCDate()));

    case 'month':
      return Object(__WEBPACK_IMPORTED_MODULE_0__sprintf__["a" /* default */])('%s-%s', date.getUTCFullYear(),
                     pad(date.getUTCMonth() + 1));

    case 'week':
      const params = Object(__WEBPACK_IMPORTED_MODULE_1__get_week_of_year__["a" /* default */])(date);
      return __WEBPACK_IMPORTED_MODULE_0__sprintf__["a" /* default */].call(null, '%s-W%s', params[0], pad(params[1]));

    case 'time':
      return Object(__WEBPACK_IMPORTED_MODULE_0__sprintf__["a" /* default */])('%s:%s:%s.%s',
                      pad(date.getUTCHours()),
                      pad(date.getUTCMinutes()),
                      pad(date.getUTCSeconds()),
                      pad(date.getUTCMilliseconds(), 3)
                    ).replace(/(:00)?\.000$/, '');
  }

  return null;
}


/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";



const default_step = {
  'datetime-local': 60,
  datetime: 60,
  time: 60,
};
/* harmony export (immutable) */ __webpack_exports__["c"] = default_step;


const step_scale_factor = {
  'datetime-local': 1000,
  datetime: 1000,
  date: 86400000,
  week: 604800000,
  time: 1000,
};
/* harmony export (immutable) */ __webpack_exports__["e"] = step_scale_factor;


const default_step_base = {
  week: -259200000,
};
/* harmony export (immutable) */ __webpack_exports__["d"] = default_step_base;


const default_min = {
  range: 0,
};
/* harmony export (immutable) */ __webpack_exports__["b"] = default_min;


const default_max = {
  range: 100,
};
/* harmony export (immutable) */ __webpack_exports__["a"] = default_max;



/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = stepUp;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tools_get_next_valid__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tools_get_type__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_types__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__valueAsNumber__ = __webpack_require__(75);









/**
 *
 */
function stepUp(element, n=1) {
  if (__WEBPACK_IMPORTED_MODULE_2__components_types__["e" /* numbers */].indexOf(Object(__WEBPACK_IMPORTED_MODULE_1__tools_get_type__["a" /* default */])(element)) === -1) {
    throw new window.DOMException('stepUp encountered invalid type',
                                  'InvalidStateError');
  }
  if ((element.getAttribute('step') || '').toLowerCase() === 'any') {
    throw new window.DOMException('stepUp encountered step "any"',
                                  'InvalidStateError');
  }

  const next = Object(__WEBPACK_IMPORTED_MODULE_0__tools_get_next_valid__["a" /* default */])(element, n)[1];

  if (next !== null) {
    Object(__WEBPACK_IMPORTED_MODULE_3__valueAsNumber__["a" /* default */])(element, next);
  }
}


/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = validationMessage;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_message_store__ = __webpack_require__(56);






/**
 * get the validation message for an element, empty string, if the element
 * satisfies all constraints.
 */
function validationMessage(element) {
  const msg = __WEBPACK_IMPORTED_MODULE_0__components_message_store__["a" /* message_store */].get(element);
  if (! msg) {
    return '';
  }

  /* make it a primitive again, since message_store returns String(). */
  return msg.toString();
}


/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = willValidate;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tools_is_validation_candidate__ = __webpack_require__(24);






/**
 * check, if an element will be subject to HTML5 validation at all
 */
function willValidate(element) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__tools_is_validation_candidate__["a" /* default */])(element);
}


/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return install_properties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return uninstall_properties; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tools_property_installer__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tools_property_uninstaller__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_hooks__ = __webpack_require__(72);








const gA = prop => function() {
  return Object(__WEBPACK_IMPORTED_MODULE_2__components_hooks__["c" /* do_filter */])('attr_get_'+prop, this.getAttribute(prop), this);
};

const sA = prop => function(value) {
  this.setAttribute(prop, Object(__WEBPACK_IMPORTED_MODULE_2__components_hooks__["c" /* do_filter */])('attr_set_'+prop, value, this));
};

const gAb = prop => function() {
  return Object(__WEBPACK_IMPORTED_MODULE_2__components_hooks__["c" /* do_filter */])('attr_get_'+prop, this.hasAttribute(prop), this);
};

const sAb = prop => function(value) {
  if (Object(__WEBPACK_IMPORTED_MODULE_2__components_hooks__["c" /* do_filter */])('attr_set_'+prop, value, this)) {
    this.setAttribute(prop, prop);
  } else {
    this.removeAttribute(prop);
  }
};

const gAn = prop => function() {
  return Object(__WEBPACK_IMPORTED_MODULE_2__components_hooks__["c" /* do_filter */])('attr_get_'+prop, Math.max(0, Number(this.getAttribute(prop))), this);
};

const sAn = prop => function(value) {
  value = Object(__WEBPACK_IMPORTED_MODULE_2__components_hooks__["c" /* do_filter */])('attr_set_'+prop, value, this);
  if (/^[0-9]+$/.test(value)) {
    this.setAttribute(prop, value);
  }
};

function install_properties(element) {
  for (let prop of [ 'accept', 'max', 'min', 'pattern', 'placeholder', 'step', ]) {
    Object(__WEBPACK_IMPORTED_MODULE_0__tools_property_installer__["a" /* default */])(element, prop, {
      get: gA(prop),
      set: sA(prop),
    });
  }

  for (let prop of [ 'multiple', 'required', 'readOnly', ]) {
    Object(__WEBPACK_IMPORTED_MODULE_0__tools_property_installer__["a" /* default */])(element, prop, {
      get: gAb(prop.toLowerCase()),
      set: sAb(prop.toLowerCase()),
    });
  }

  for (let prop of [ 'minLength', 'maxLength', ]) {
    Object(__WEBPACK_IMPORTED_MODULE_0__tools_property_installer__["a" /* default */])(element, prop, {
      get: gAn(prop.toLowerCase()),
      set: sAn(prop.toLowerCase()),
    });
  }
}

function uninstall_properties(element) {
  for (let prop of [ 'accept', 'max', 'min', 'pattern', 'placeholder', 'step',
       'multiple', 'required', 'readOnly', 'minLength', 'maxLength', ]) {
    Object(__WEBPACK_IMPORTED_MODULE_1__tools_property_uninstaller__["a" /* default */])(element, prop);
  }
}




/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";



/**
 * internal storage for custom error messages
 */
const store = new WeakMap();


/**
 * register custom error messages per element
 */
const custom_messages = {

  set(element, validator, message) {
    const messages = store.get(element) || {};
    messages[validator] = message;
    store.set(element, messages);
    return custom_messages;
  },

  get(element, validator, _default=undefined) {
    const messages = store.get(element);
    if (messages === undefined || ! (validator in messages)) {
      const data_id = 'data-' + validator.replace(/[A-Z]/g, '-$&').toLowerCase();
      if (element.hasAttribute(data_id)) {
        /* if the element has a data-validator attribute, use this as fallback.
         * E.g., if validator == 'valueMissing', the element can specify a
         * custom validation message like this:
         *     <input data-value-missing="Oh noes!">
         */
        return element.getAttribute(data_id);
      }
      return _default;
    }
    return messages[validator];
  },

  delete(element, validator=null) {
    if (! validator) {
      return store.delete(element);
    }
    const messages = store.get(element) || {};
    if (validator in messages) {
      delete(messages[validator]);
      store.set(element, messages);
      return true;
    }
    return false;
  },

};

/* harmony default export */ __webpack_exports__["a"] = (custom_messages);


/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";



const internal_registry = new WeakMap();


/**
 * A registry for custom validators
 *
 * slim wrapper around a WeakMap to ensure the values are arrays
 * (hence allowing > 1 validators per element)
 */
const custom_validator_registry = {

  set(element, validator) {
    const current = internal_registry.get(element) || [];
    current.push(validator);
    internal_registry.set(element, current);
    return custom_validator_registry;
  },

  get(element) {
    return internal_registry.get(element) || [];
  },

  delete(element) {
    return internal_registry.delete(element);
  },

};

/* harmony default export */ __webpack_exports__["a"] = (custom_validator_registry);


/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";



const ws_on_start_or_end = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;


/**
 * trim a string of whitespace
 *
 * We don't use String.trim() to remove the need to polyfill it.
 */
/* harmony default export */ __webpack_exports__["a"] = (function(str) {
  return str.replace(ws_on_start_or_end, '');
});


/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_hooks__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_types__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_wrapper__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tools_get_type__ = __webpack_require__(12);









/**
 * check if an element is a candidate for constraint validation
 *
 * @see https://html.spec.whatwg.org/multipage/forms.html#barred-from-constraint-validation
 */
/* harmony default export */ __webpack_exports__["a"] = (function(element) {

  /* allow a shortcut via filters, e.g. to validate type=hidden fields */
  const filtered = Object(__WEBPACK_IMPORTED_MODULE_0__components_hooks__["c" /* do_filter */])('is_validation_candidate', null, element);
  if (filtered !== null) {
    return !! filtered;
  }

  /* it must be any of those elements */
  if (element instanceof window.HTMLSelectElement
      ||
      element instanceof window.HTMLTextAreaElement
      ||
      element instanceof window.HTMLButtonElement
      ||
      element instanceof window.HTMLInputElement) {

    const type = Object(__WEBPACK_IMPORTED_MODULE_3__tools_get_type__["a" /* default */])(element);
    /* its type must be in the whitelist */
    if (__WEBPACK_IMPORTED_MODULE_1__components_types__["d" /* non_inputs */].indexOf(type) > -1 ||
        __WEBPACK_IMPORTED_MODULE_1__components_types__["h" /* validation_candidates */].indexOf(type) > -1) {

      /* it mustn't be disabled or readonly */
      if (! element.hasAttribute('disabled') &&
          ! element.hasAttribute('readonly')) {

        const wrapped_form = Object(__WEBPACK_IMPORTED_MODULE_2__components_wrapper__["b" /* get_wrapper */])(element);

        /* it must have a name (or validating nameless inputs is allowed) */
        if (element.getAttribute('name') ||
            (wrapped_form && wrapped_form.settings.validateNameless)) {

          if (
              /* the parent form doesn't allow non-standard "novalidate" attributes... */
              (wrapped_form && ! wrapped_form.settings.novalidateOnElements) ||
              /* ...or it doesn't have such an attribute/property */
              (! element.hasAttribute('novalidate') && ! element.noValidate)
              ) {

            /* it isn't part of a <fieldset disabled> */
            let p = element.parentNode;
            while (p && p.nodeType === 1) {
              if (p instanceof window.HTMLFieldSetElement &&
                  p.hasAttribute('disabled')) {
                /* quick return, if it's a child of a disabled fieldset */
                return false;
              } else if (p.nodeName.toUpperCase() === 'DATALIST') {
                /* quick return, if it's a child of a datalist
                 * Do not use HTMLDataListElement to support older browsers,
                 * too.
                 * @see https://html.spec.whatwg.org/multipage/forms.html#the-datalist-element:barred-from-constraint-validation
                 */
                return false;
              } else if (p === element.form) {
                /* the outer boundary. We can stop looking for relevant
                 * fieldsets. */
                break;
              }
              p = p.parentNode;
            }

            /* then it's a candidate */
            return true;
          }
        }
      }

    }

  }

  /* this is no HTML5 validation candidate... */
  return false;
});


/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Wrapper;
/* harmony export (immutable) */ __webpack_exports__["b"] = get_wrapper;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tools_catch_submit__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__polyfills_validityState__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__polyfills_reportValidity__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tools_property_uninstaller__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tools_polyfill__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tools_polyunfill__ = __webpack_require__(393);











const instances = new WeakMap();


/**
 * wrap <form>s, window or document, that get treated with the global
 * hyperform()
 */
function Wrapper(form, settings) {

  /* do not allow more than one instance per form. Otherwise we'd end
   * up with double event handlers, polyfills re-applied, ... */
  var existing = instances.get(form);
  if (existing) {
    existing.settings = settings;
    return existing;
  }

  this.form = form;
  this.settings = settings;
  this.revalidator = this.revalidate.bind(this);

  instances.set(form, this);

  Object(__WEBPACK_IMPORTED_MODULE_0__tools_catch_submit__["a" /* catch_submit */])(form, settings.revalidate === 'never');

  if (form === window || form.nodeType === 9) {
    /* install on the prototypes, when called for the whole document */
    this.install([
      window.HTMLButtonElement.prototype,
      window.HTMLInputElement.prototype,
      window.HTMLSelectElement.prototype,
      window.HTMLTextAreaElement.prototype,
      window.HTMLFieldSetElement.prototype,
    ]);
    Object(__WEBPACK_IMPORTED_MODULE_4__tools_polyfill__["a" /* default */])(window.HTMLFormElement);
  } else if (form instanceof window.HTMLFormElement ||
             form instanceof window.HTMLFieldSetElement) {
    this.install(form.elements);
    if (form instanceof window.HTMLFormElement) {
      Object(__WEBPACK_IMPORTED_MODULE_4__tools_polyfill__["a" /* default */])(form);
    }
  }

  if (settings.revalidate === 'oninput' || settings.revalidate === 'hybrid') {
    /* in a perfect world we'd just bind to "input", but support here is
     * abysmal: http://caniuse.com/#feat=input-event */
    form.addEventListener('keyup', this.revalidator);
    form.addEventListener('change', this.revalidator);
  }
  if (settings.revalidate === 'onblur' || settings.revalidate === 'hybrid') {
    /* useCapture=true, because `blur` doesn't bubble. See
     * https://developer.mozilla.org/en-US/docs/Web/Events/blur#Event_delegation
     * for a discussion */
    form.addEventListener('blur', this.revalidator, true);
  }
}


Wrapper.prototype = {

  destroy() {
    Object(__WEBPACK_IMPORTED_MODULE_0__tools_catch_submit__["b" /* uncatch_submit */])(this.form);
    instances.delete(this.form);
    this.form.removeEventListener('keyup', this.revalidator);
    this.form.removeEventListener('change', this.revalidator);
    this.form.removeEventListener('blur', this.revalidator, true);
    if (this.form === window || this.form.nodeType === 9) {
      this.uninstall([
        window.HTMLButtonElement.prototype,
        window.HTMLInputElement.prototype,
        window.HTMLSelectElement.prototype,
        window.HTMLTextAreaElement.prototype,
        window.HTMLFieldSetElement.prototype,
      ]);
      Object(__WEBPACK_IMPORTED_MODULE_5__tools_polyunfill__["a" /* default */])(window.HTMLFormElement);
    } else if (this.form instanceof window.HTMLFormElement ||
               this.form instanceof window.HTMLFieldSetElement) {
      this.uninstall(this.form.elements);
      if (this.form instanceof window.HTMLFormElement) {
        Object(__WEBPACK_IMPORTED_MODULE_5__tools_polyunfill__["a" /* default */])(this.form);
      }
    }
  },

  /**
   * revalidate an input element
   */
  revalidate(event) {
    if (event.target instanceof window.HTMLButtonElement ||
        event.target instanceof window.HTMLTextAreaElement ||
        event.target instanceof window.HTMLSelectElement ||
        event.target instanceof window.HTMLInputElement) {

      if (this.settings.revalidate === 'hybrid') {
        /* "hybrid" somewhat simulates what browsers do. See for example
         * Firefox's :-moz-ui-invalid pseudo-class:
         * https://developer.mozilla.org/en-US/docs/Web/CSS/:-moz-ui-invalid */
        if (event.type === 'blur' &&
            event.target.value !== event.target.defaultValue ||
            Object(__WEBPACK_IMPORTED_MODULE_1__polyfills_validityState__["a" /* default */])(event.target).valid) {
          /* on blur, update the report when the value has changed from the
           * default or when the element is valid (possibly removing a still
           * standing invalidity report). */
          Object(__WEBPACK_IMPORTED_MODULE_2__polyfills_reportValidity__["a" /* default */])(event.target);
        } else if ((event.type === 'keyup' && event.keyCode !== 9) ||
                    event.type === 'change') {
          if (Object(__WEBPACK_IMPORTED_MODULE_1__polyfills_validityState__["a" /* default */])(event.target).valid) {
            // report instantly, when an element becomes valid,
            // postpone report to blur event, when an element is invalid
            Object(__WEBPACK_IMPORTED_MODULE_2__polyfills_reportValidity__["a" /* default */])(event.target);
          }
        }

      } else if (event.type !== 'keyup' || event.keyCode !== 9) {
        /* do _not_ validate, when the user "tabbed" into the field initially,
         * i.e., a keyup event with keyCode 9 */
        Object(__WEBPACK_IMPORTED_MODULE_2__polyfills_reportValidity__["a" /* default */])(event.target);
      }

    }
  },

  /**
   * install the polyfills on each given element
   *
   * If you add elements dynamically, you have to call install() on them
   * yourself:
   *
   * js> var form = hyperform(document.forms[0]);
   * js> document.forms[0].appendChild(input);
   * js> form.install(input);
   *
   * You can skip this, if you called hyperform on window or document.
   */
  install(els) {
    if (els instanceof window.Element) {
      els = [ els ];
    }

    const els_length = els.length;

    for (let i = 0; i < els_length; i++) {
      Object(__WEBPACK_IMPORTED_MODULE_4__tools_polyfill__["a" /* default */])(els[i]);
    }
  },

  uninstall(els) {
    if (els instanceof window.Element) {
      els = [ els ];
    }

    const els_length = els.length;

    for (let i = 0; i < els_length; i++) {
      Object(__WEBPACK_IMPORTED_MODULE_5__tools_polyunfill__["a" /* default */])(els[i]);
    }
  },

};


/**
 * try to get the appropriate wrapper for a specific element by looking up
 * its parent chain
 *
 * @return Wrapper | undefined
 */
function get_wrapper(element) {
  var wrapped;

  if (element.form) {
    /* try a shortcut with the element's <form> */
    wrapped = instances.get(element.form);
  }

  /* walk up the parent nodes until document (including) */
  while (! wrapped && element) {
    wrapped = instances.get(element);
    element = element.parentNode;
  }

  if (! wrapped) {
    /* try the global instance, if exists. This may also be undefined. */
    wrapped = instances.get(window);
  }

  return wrapped;
}


/***/ }),

/***/ 384:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _hyperform = __webpack_require__(385);

var _hyperform2 = _interopRequireDefault(_hyperform);

var _ladda = __webpack_require__(407);

var _ladda2 = _interopRequireDefault(_ladda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Spinner button
_ladda2.default.bind('button[type=submit]');

// Form validation
(0, _hyperform2.default)(window, {
	classes: {
		valid: 'input--valid',
		invalid: 'input--error',
		validated: 'input--validated',
		warning: 'input--warning'
	},
	validEvent: false
});

//	Extra validation for checkbox groups
var checkboxGroups = document.querySelectorAll('.checkbox-group');
// Get all items in checkboxgroups & set a global state per group
if (checkboxGroups.length) {
	Array.from(checkboxGroups).forEach(function ($group) {
		var $inputs = Array.from($group.querySelectorAll('input[type="checkbox"]'));
		var $hiddenInput = $group.querySelector('input[type="text"]');
		var $inputValues = new Set();
		$group.addEventListener('change', function () {
			Array.from($inputs).forEach(function ($input) {
				if ($input.checked) {
					$inputValues.add($input.value);
				} else {
					$inputValues.delete($input.value);
				}
			});
			var $valuesAsArray = Array.from($inputValues);
			$hiddenInput.value = $valuesAsArray;
			$hiddenInput.checkValidity();
		});
	});
}

// File Uploads
var fileUploads = document.querySelectorAll('.js-file-upload');
// Keep track of count for each file-Upload
if (fileUploads.length) {
	Array.from(fileUploads).forEach(function ($input) {
		var $label = document.querySelector('label[for="' + $input.id + '"].input__file-label');
		var labelVal = $label.innerHTML;
		$input.addEventListener('change', function (e) {
			var fileName = '';
			// Set filename(s)
			if ($input.files && $input.files.length > 1) {
				fileName = ($input.getAttribute('data-multiple-caption') || '').replace('{count}', $input.files.length);
			} else if (e.target.value) {
				fileName = e.target.value.split('\\').pop();
			}
			// set html
			if (fileName) {
				$label.innerHTML = fileName;
			} else {
				$label.innerHTML = labelVal;
			}
		});
	});
}

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_checkValidity__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__polyfills_reportValidity__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__polyfills_setCustomValidity__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__polyfills_stepDown__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__polyfills_stepUp__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__polyfills_validationMessage__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__polyfills_validityState__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__polyfills_valueAsDate__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__polyfills_valueAsNumber__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__polyfills_willValidate__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_custom_messages__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_hooks__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_localization__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_registry__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_renderer__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_wrapper__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__tools_sprintf__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__version__ = __webpack_require__(406);























/* deprecate the old snake_case names
 * TODO: delme before next non-patch release
 */
function w(name) {
  const deprecated_message = 'Please use camelCase method names! The name "%s" is deprecated and will be removed in the next non-patch release.';
  /* global console */
  console.log(Object(__WEBPACK_IMPORTED_MODULE_16__tools_sprintf__["a" /* default */])(deprecated_message, name));
}


/**
 * public hyperform interface:
 */
function hyperform(form, {
                     classes,
                     debug=false,
                     extend_fieldset,
                     extendFieldset,
                     novalidate_on_elements,
                     novalidateOnElements,
                     prevent_implicit_submit,
                     preventImplicitSubmit/* TODO: uncomment =false */,
                     revalidate,
                     strict=false,
                     valid_event,
                     validEvent,
                     validateNameless=false,
                   }={}) {

  if (! classes) {
    classes = {};
  }
  // TODO: clean up before next non-patch release
  if (extendFieldset === undefined) {
    if (extend_fieldset === undefined) {
      extendFieldset = ! strict;
    } else {
      w('extend_fieldset');
      extendFieldset = extend_fieldset;
    }
  }
  if (novalidateOnElements === undefined) {
    if (novalidate_on_elements === undefined) {
      novalidateOnElements = ! strict;
    } else {
      w('novalidate_on_elements');
      novalidateOnElements = novalidate_on_elements;
    }
  }
  if (preventImplicitSubmit === undefined) {
    if (prevent_implicit_submit === undefined) {
      preventImplicitSubmit = false;
    } else {
      w('prevent_implicit_submit');
      preventImplicitSubmit = prevent_implicit_submit;
    }
  }
  if (revalidate === undefined) {
    /* other recognized values: 'oninput', 'onblur', 'onsubmit' and 'never' */
    revalidate = strict? 'onsubmit' : 'hybrid';
  }
  if (validEvent === undefined) {
    if (valid_event === undefined) {
      validEvent = ! strict;
    } else {
      w('valid_event');
      validEvent = valid_event;
    }
  }

  const settings = { debug, strict, preventImplicitSubmit, revalidate,
                     validEvent, extendFieldset, classes, novalidateOnElements,
                     validateNameless,
                   };

  if (form instanceof window.NodeList ||
      form instanceof window.HTMLCollection ||
      form instanceof Array) {
    return Array.prototype.map.call(form,
                                    element => hyperform(element, settings));
  }

  return new __WEBPACK_IMPORTED_MODULE_15__components_wrapper__["a" /* default */](form, settings);
}

hyperform.version = __WEBPACK_IMPORTED_MODULE_17__version__["a" /* default */];

hyperform.checkValidity = __WEBPACK_IMPORTED_MODULE_0__polyfills_checkValidity__["a" /* default */];
hyperform.reportValidity = __WEBPACK_IMPORTED_MODULE_1__polyfills_reportValidity__["a" /* default */];
hyperform.setCustomValidity = __WEBPACK_IMPORTED_MODULE_2__polyfills_setCustomValidity__["a" /* default */];
hyperform.stepDown = __WEBPACK_IMPORTED_MODULE_3__polyfills_stepDown__["a" /* default */];
hyperform.stepUp = __WEBPACK_IMPORTED_MODULE_4__polyfills_stepUp__["a" /* default */];
hyperform.validationMessage = __WEBPACK_IMPORTED_MODULE_5__polyfills_validationMessage__["a" /* default */];
hyperform.ValidityState = __WEBPACK_IMPORTED_MODULE_6__polyfills_validityState__["a" /* default */];
hyperform.valueAsDate = __WEBPACK_IMPORTED_MODULE_7__polyfills_valueAsDate__["a" /* default */];
hyperform.valueAsNumber = __WEBPACK_IMPORTED_MODULE_8__polyfills_valueAsNumber__["a" /* default */];
hyperform.willValidate = __WEBPACK_IMPORTED_MODULE_9__polyfills_willValidate__["a" /* default */];

hyperform.setLanguage = lang => { Object(__WEBPACK_IMPORTED_MODULE_12__components_localization__["c" /* set_language */])(lang); return hyperform; };
hyperform.addTranslation = (lang, catalog) => { Object(__WEBPACK_IMPORTED_MODULE_12__components_localization__["a" /* add_translation */])(lang, catalog); return hyperform; };
hyperform.setRenderer = (renderer, action) => { __WEBPACK_IMPORTED_MODULE_14__components_renderer__["a" /* default */].set(renderer, action); return hyperform; };
hyperform.addValidator = (element, validator) => { __WEBPACK_IMPORTED_MODULE_13__components_registry__["a" /* default */].set(element, validator); return hyperform; };
hyperform.setMessage = (element, validator, message) => { __WEBPACK_IMPORTED_MODULE_10__components_custom_messages__["a" /* default */].set(element, validator, message); return hyperform; };
hyperform.addHook = (hook, action, position) => { Object(__WEBPACK_IMPORTED_MODULE_11__components_hooks__["a" /* add_hook */])(hook, action, position); return hyperform; };
hyperform.removeHook = (hook, action) => { Object(__WEBPACK_IMPORTED_MODULE_11__components_hooks__["d" /* remove_hook */])(hook, action); return hyperform; };

// TODO: Remove in next non-patch version
hyperform.set_language = lang => { w('set_language'); Object(__WEBPACK_IMPORTED_MODULE_12__components_localization__["c" /* set_language */])(lang); return hyperform; };
hyperform.add_translation = (lang, catalog) => { w('add_translation'); Object(__WEBPACK_IMPORTED_MODULE_12__components_localization__["a" /* add_translation */])(lang, catalog); return hyperform; };
hyperform.set_renderer = (renderer, action) => { w('set_renderer'); __WEBPACK_IMPORTED_MODULE_14__components_renderer__["a" /* default */].set(renderer, action); return hyperform; };
hyperform.add_validator = (element, validator) => { w('add_validator'); __WEBPACK_IMPORTED_MODULE_13__components_registry__["a" /* default */].set(element, validator); return hyperform; };
hyperform.set_message = (element, validator, message) => { w('set_message'); __WEBPACK_IMPORTED_MODULE_10__components_custom_messages__["a" /* default */].set(element, validator, message); return hyperform; };
hyperform.add_hook = (hook, action, position) => { w('add_hook'); Object(__WEBPACK_IMPORTED_MODULE_11__components_hooks__["a" /* add_hook */])(hook, action, position); return hyperform; };
hyperform.remove_hook = (hook, action) => { w('remove_hook'); Object(__WEBPACK_IMPORTED_MODULE_11__components_hooks__["d" /* remove_hook */])(hook, action); return hyperform; };

if (document.currentScript && document.currentScript.hasAttribute('data-hf-autoload')) {
  hyperform(window);
}

/* harmony default export */ __webpack_exports__["default"] = (hyperform);


/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_hooks_js__ = __webpack_require__(72);






/**
 * return either the data of a hook call or the result of action, if the
 * former is undefined
 *
 * @return function a function wrapper around action
 */
/* harmony default export */ __webpack_exports__["a"] = (function(hook, action) {
  return function() {
    const data = Object(__WEBPACK_IMPORTED_MODULE_0__components_hooks_js__["b" /* call_hook */])(hook, Array.prototype.slice.call(arguments));

    if (data !== undefined) {
      return data;
    }

    return action.apply(this, arguments);
  };
});


/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = catch_submit;
/* harmony export (immutable) */ __webpack_exports__["b"] = uncatch_submit;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__trigger_event__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__matches__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__polyfills_reportValidity__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_types__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_wrapper__ = __webpack_require__(25);










/**
 * submit a form, because `element` triggered it
 *
 * This method also dispatches a submit event on the form prior to the
 * submission. The event contains the trigger element as `submittedVia`.
 *
 * If the element is a button with a name, the name=value pair will be added
 * to the submitted data.
 */
function submit_form_via(element) {
  /* apparently, the submit event is not triggered in most browsers on
   * the submit() method, so we do it manually here to model a natural
   * submit as closely as possible.
   * Now to the fun fact: If you trigger a submit event from a form, what
   * do you think should happen?
   * 1) the form will be automagically submitted by the browser, or
   * 2) nothing.
   * And as you already suspected, the correct answer is: both! Firefox
   * opts for 1), Chrome for 2). Yay! */
  var event_got_cancelled;

  var submit_event = Object(__WEBPACK_IMPORTED_MODULE_0__trigger_event__["a" /* create_event */])('submit', { cancelable: true });
  /* force Firefox to not submit the form, then fake preventDefault() */
  submit_event.preventDefault();
  Object.defineProperty(submit_event, 'defaultPrevented', {
    value: false,
    writable: true,
  });
  Object.defineProperty(submit_event, 'preventDefault', {
    value: () => submit_event.defaultPrevented = event_got_cancelled = true,
    writable: true,
  });
  Object(__WEBPACK_IMPORTED_MODULE_0__trigger_event__["b" /* default */])(element.form, submit_event, {}, { submittedVia: element });

  if (! event_got_cancelled) {
    add_submit_field(element);
    window.HTMLFormElement.prototype.submit.call(element.form);
    window.setTimeout(() => remove_submit_field(element));
  }
}


/**
 * if a submit button was clicked, add its name=value by means of a type=hidden
 * input field
 */
function add_submit_field(button) {
  if (['image', 'submit'].indexOf(button.type) > -1 && button.name) {
    const wrapper = Object(__WEBPACK_IMPORTED_MODULE_4__components_wrapper__["b" /* get_wrapper */])(button.form) || {};
    var submit_helper = wrapper.submit_helper;
    if (submit_helper) {
      if (submit_helper.parentNode) {
        submit_helper.parentNode.removeChild(submit_helper);
      }
    } else {
      submit_helper = document.createElement('input');
      submit_helper.type = 'hidden';
      wrapper.submit_helper = submit_helper;
    }
    submit_helper.name = button.name;
    submit_helper.value = button.value;
    button.form.appendChild(submit_helper);
  }
}


/**
 * remove a possible helper input, that was added by `add_submit_field`
 */
function remove_submit_field(button) {
  if (['image', 'submit'].indexOf(button.type) > -1 && button.name) {
    const wrapper = Object(__WEBPACK_IMPORTED_MODULE_4__components_wrapper__["b" /* get_wrapper */])(button.form) || {};
    const submit_helper = wrapper.submit_helper;
    if (submit_helper && submit_helper.parentNode) {
      submit_helper.parentNode.removeChild(submit_helper);
    }
  }
}


/**
 * check a form's validity and submit it
 *
 * The method triggers a cancellable `validate` event on the form. If the
 * event is cancelled, form submission will be aborted, too.
 *
 * If the form is found to contain invalid fields, focus the first field.
 */
function check(button) {
  /* trigger a "validate" event on the form to be submitted */
  const val_event = Object(__WEBPACK_IMPORTED_MODULE_0__trigger_event__["b" /* default */])(button.form, 'validate',
                                  { cancelable: true });
  if (val_event.defaultPrevented) {
    /* skip the whole submit thing, if the validation is canceled. A user
     * can still call form.submit() afterwards. */
    return;
  }

  var valid = true;
  var first_invalid;
  Array.prototype.map.call(button.form.elements, element => {
    if (! Object(__WEBPACK_IMPORTED_MODULE_2__polyfills_reportValidity__["a" /* default */])(element)) {
      valid = false;
      if (! first_invalid && ('focus' in element)) {
        first_invalid = element;
      }
    }
  });

  if (valid) {
    submit_form_via(button);
  } else if (first_invalid) {
    /* focus the first invalid element, if validation went south */
    first_invalid.focus();
    /* tell the tale, if anyone wants to react to it */
    Object(__WEBPACK_IMPORTED_MODULE_0__trigger_event__["b" /* default */])(button.form, 'forminvalid');
  }
}


/**
 * test if node is a submit button
 */
function is_submit_button(node) {
  return (
    /* must be an input or button element... */
    (node.nodeName === 'INPUT' ||
     node.nodeName === 'BUTTON') &&

    /* ...and have a submitting type */
    (node.type === 'image' || node.type === 'submit')
  );
}


/**
 * test, if the click event would trigger a submit
 */
function is_submitting_click(event, button) {
  return (
    /* prevented default: won't trigger a submit */
    ! event.defaultPrevented &&

    /* left button or middle button (submits in Chrome) */
    (! ('button' in event) ||
     event.button < 2) &&

    /* must be a submit button... */
    is_submit_button(button) &&

    /* the button needs a form, that's going to be submitted */
    button.form &&

    /* again, if the form should not be validated, we're out of the game */
    ! button.form.hasAttribute('novalidate')
  );
}


/**
 * test, if the keypress event would trigger a submit
 */
function is_submitting_keypress(event) {
  return (
    /* prevented default: won't trigger a submit */
    ! event.defaultPrevented &&

    (
      (
        /* ...and <Enter> was pressed... */
        event.keyCode === 13 &&

        /* ...on an <input> that is... */
        event.target.nodeName === 'INPUT' &&

        /* ...a standard text input field (not checkbox, ...) */
        __WEBPACK_IMPORTED_MODULE_3__components_types__["f" /* text */].indexOf(event.target.type) > -1
      ) || (
        /* or <Enter> or <Space> was pressed... */
        (event.keyCode === 13 ||
         event.keyCode === 32) &&

        /* ...on a submit button */
        is_submit_button(event.target)
      )
    ) &&

    /* there's a form... */
    event.target.form &&

    /* ...and the form allows validation */
    ! event.target.form.hasAttribute('novalidate')
  );
}


/**
 * catch clicks to children of <button>s
 */
function get_clicked_button(element) {
  if (is_submit_button(element)) {
    return element;
  } else if (Object(__WEBPACK_IMPORTED_MODULE_1__matches__["a" /* default */])(element, 'button:not([type]) *, button[type="submit"] *')) {
    return get_clicked_button(element.parentNode);
  } else {
    return null;
  }
}


/**
 * return event handler to catch explicit submission by click on a button
 */
function get_click_handler(ignore=false) {
  return function(event) {
    const button = get_clicked_button(event.target);
    if (button && is_submitting_click(event, button)) {
      event.preventDefault();
      if (ignore || button.hasAttribute('formnovalidate')) {
        /* if validation should be ignored, we're not interested in any checks */
        submit_form_via(button);
      } else {
        check(button);
      }
    }
  };
}
const click_handler = get_click_handler();
const ignored_click_handler = get_click_handler(true);


/**
 * catch implicit submission by pressing <Enter> in some situations
 */
function get_keypress_handler(ignore) {
  return function keypress_handler(event) {
    if (is_submitting_keypress(event))  {
      event.preventDefault();

      const wrapper = Object(__WEBPACK_IMPORTED_MODULE_4__components_wrapper__["b" /* get_wrapper */])(event.target.form) || { settings: {} };
      if (wrapper.settings.preventImplicitSubmit) {
        /* user doesn't want an implicit submit. Cancel here. */
        return;
      }

      /* check, that there is no submit button in the form. Otherwise
      * that should be clicked. */
      const el = event.target.form.elements.length;
      var submit;
      for (let i = 0; i < el; i++) {
        if (['image', 'submit'].indexOf(event.target.form.elements[i].type) > -1) {
          submit = event.target.form.elements[i];
          break;
        }
      }

      if (submit) {
        submit.click();
      } else if (ignore) {
        submit_form_via(event.target);
      } else {
        check(event.target);
      }
    }
  };
}
const keypress_handler = get_keypress_handler();
const ignored_keypress_handler = get_keypress_handler(true);


/**
 * catch all relevant events _prior_ to a form being submitted
 *
 * @param bool ignore bypass validation, when an attempt to submit the
 *                    form is detected. True, when the wrapper's revalidate
 *                    setting is 'never'.
 */
function catch_submit(listening_node, ignore=false) {
  if (ignore) {
    listening_node.addEventListener('click', ignored_click_handler);
    listening_node.addEventListener('keypress', ignored_keypress_handler);
  } else {
    listening_node.addEventListener('click', click_handler);
    listening_node.addEventListener('keypress', keypress_handler);
  }
}


/**
 * decommission the event listeners from catch_submit() again
 */
function uncatch_submit(listening_node) {
  listening_node.removeEventListener('click', ignored_click_handler);
  listening_node.removeEventListener('keypress', ignored_keypress_handler);
  listening_node.removeEventListener('click', click_handler);
  listening_node.removeEventListener('keypress', keypress_handler);
}


/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/* shim layer for the Element.matches method */

const ep = window.Element.prototype;
const native_matches = ep.matches ||
                       ep.matchesSelector ||
                       ep.msMatchesSelector ||
                       ep.webkitMatchesSelector;

/* harmony default export */ __webpack_exports__["a"] = (function(element, selector) {
  return native_matches.call(element, selector);
});


/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";



/**
 * counter that will be incremented with every call
 *
 * Will enforce uniqueness, as long as no more than 1 hyperform scripts
 * are loaded. (In that case we still have the "random" part below.)
 */
var uid = 0;


/**
 * generate a random ID
 *
 * @see https://gist.github.com/gordonbrander/2230317
 */
/* harmony default export */ __webpack_exports__["a"] = (function(prefix='hf_') {
  return prefix + ( uid++ ) + Math.random().toString(36).substr(2);
});


/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__property_installer__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__is_field__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mark__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__polyfills_checkValidity__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__polyfills_reportValidity__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__polyfills_setCustomValidity__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__polyfills_stepDown__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__polyfills_stepUp__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__polyfills_validationMessage__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__polyfills_validityState__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__polyfills_valueAsDate__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__polyfills_valueAsNumber__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__polyfills_willValidate__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__polyfills_properties__ = __webpack_require__(156);




















const polyfills = {
    checkValidity: {
      value: Object(__WEBPACK_IMPORTED_MODULE_2__mark__["a" /* default */])(function() { return Object(__WEBPACK_IMPORTED_MODULE_3__polyfills_checkValidity__["a" /* default */])(this); }),
    },
    reportValidity: {
      value: Object(__WEBPACK_IMPORTED_MODULE_2__mark__["a" /* default */])(function() { return Object(__WEBPACK_IMPORTED_MODULE_4__polyfills_reportValidity__["a" /* default */])(this); }),
    },
    setCustomValidity: {
      value: Object(__WEBPACK_IMPORTED_MODULE_2__mark__["a" /* default */])(function (msg) { return Object(__WEBPACK_IMPORTED_MODULE_5__polyfills_setCustomValidity__["a" /* default */])(this, msg); }),
    },
    stepDown: {
      value: Object(__WEBPACK_IMPORTED_MODULE_2__mark__["a" /* default */])(function(n=1) { return Object(__WEBPACK_IMPORTED_MODULE_6__polyfills_stepDown__["a" /* default */])(this, n); }),
    },
    stepUp: {
      value: Object(__WEBPACK_IMPORTED_MODULE_2__mark__["a" /* default */])(function(n=1) { return Object(__WEBPACK_IMPORTED_MODULE_7__polyfills_stepUp__["a" /* default */])(this, n); }),
    },
    validationMessage: {
      get: Object(__WEBPACK_IMPORTED_MODULE_2__mark__["a" /* default */])(function() { return Object(__WEBPACK_IMPORTED_MODULE_8__polyfills_validationMessage__["a" /* default */])(this); }),
    },
    validity: {
      get: Object(__WEBPACK_IMPORTED_MODULE_2__mark__["a" /* default */])(function() { return Object(__WEBPACK_IMPORTED_MODULE_9__polyfills_validityState__["a" /* default */])(this); }),
    },
    valueAsDate: {
      get: Object(__WEBPACK_IMPORTED_MODULE_2__mark__["a" /* default */])(function() { return Object(__WEBPACK_IMPORTED_MODULE_10__polyfills_valueAsDate__["a" /* default */])(this); }),
      set: Object(__WEBPACK_IMPORTED_MODULE_2__mark__["a" /* default */])(function(value) { Object(__WEBPACK_IMPORTED_MODULE_10__polyfills_valueAsDate__["a" /* default */])(this, value); }),
    },
    valueAsNumber: {
      get: Object(__WEBPACK_IMPORTED_MODULE_2__mark__["a" /* default */])(function() { return Object(__WEBPACK_IMPORTED_MODULE_11__polyfills_valueAsNumber__["a" /* default */])(this); }),
      set: Object(__WEBPACK_IMPORTED_MODULE_2__mark__["a" /* default */])(function(value) { Object(__WEBPACK_IMPORTED_MODULE_11__polyfills_valueAsNumber__["a" /* default */])(this, value); }),
    },
    willValidate: {
      get: Object(__WEBPACK_IMPORTED_MODULE_2__mark__["a" /* default */])(function() { return Object(__WEBPACK_IMPORTED_MODULE_12__polyfills_willValidate__["a" /* default */])(this); }),
    },
};

/* harmony default export */ __webpack_exports__["a"] = (function(element) {
  if (Object(__WEBPACK_IMPORTED_MODULE_1__is_field__["a" /* default */])(element)) {

    for (let prop in polyfills) {
      Object(__WEBPACK_IMPORTED_MODULE_0__property_installer__["a" /* default */])(element, prop, polyfills[prop]);
    }

    Object(__WEBPACK_IMPORTED_MODULE_13__polyfills_properties__["a" /* install_properties */])(element);

  } else if (element instanceof window.HTMLFormElement ||
             element === window.HTMLFormElement.prototype) {
    Object(__WEBPACK_IMPORTED_MODULE_0__property_installer__["a" /* default */])(element, 'checkValidity', polyfills.checkValidity);
    Object(__WEBPACK_IMPORTED_MODULE_0__property_installer__["a" /* default */])(element, 'reportValidity', polyfills.reportValidity);
  }
});


/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";



/* For a given date, get the ISO week number
 *
 * Source: http://stackoverflow.com/a/6117889/113195
 *
 * Based on information at:
 *
 *    http://www.merlyn.demon.co.uk/weekcalc.htm#WNR
 *
 * Algorithm is to find nearest thursday, it's year
 * is the year of the week number. Then get weeks
 * between that date and the first day of that year.
 *
 * Note that dates in one year can be weeks of previous
 * or next year, overlap is up to 3 days.
 *
 * e.g. 2014/12/29 is Monday in week  1 of 2015
 *      2012/1/1   is Sunday in week 52 of 2011
 */
/* harmony default export */ __webpack_exports__["a"] = (function(d) {
  /* Copy date so don't modify original */
  d = new Date(+d);
  d.setUTCHours(0, 0, 0);
  /* Set to nearest Thursday: current date + 4 - current day number
   * Make Sunday's day number 7 */
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
  /* Get first day of year */
  const yearStart = new Date(d.getUTCFullYear(),0,1);
  /* Calculate full weeks to nearest Thursday */
  const weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
  /* Return array of year and week number */
  return [d.getUTCFullYear(), weekNo];
});


/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";



/**
 * return a new Date() representing the ISO date for a week number
 *
 * @see http://stackoverflow.com/a/16591175/113195
 */
/* harmony default export */ __webpack_exports__["a"] = (function(week, year) {
  const date = new Date(Date.UTC(year, 0, 1 + (week - 1) * 7));

  if (date.getUTCDay() <= 4/* thursday */) {
    date.setUTCDate(date.getUTCDate() - date.getUTCDay() + 1);
  } else {
    date.setUTCDate(date.getUTCDate() + 8 - date.getUTCDay());
  }

  return date;
});


/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__is_field__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__property_uninstaller__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__polyfills_properties__ = __webpack_require__(156);








/* harmony default export */ __webpack_exports__["a"] = (function(element) {
  if (Object(__WEBPACK_IMPORTED_MODULE_0__is_field__["a" /* default */])(element)) {

    Object(__WEBPACK_IMPORTED_MODULE_1__property_uninstaller__["a" /* default */])(element, 'checkValidity');
    Object(__WEBPACK_IMPORTED_MODULE_1__property_uninstaller__["a" /* default */])(element, 'reportValidity');
    Object(__WEBPACK_IMPORTED_MODULE_1__property_uninstaller__["a" /* default */])(element, 'setCustomValidity');
    Object(__WEBPACK_IMPORTED_MODULE_1__property_uninstaller__["a" /* default */])(element, 'stepDown');
    Object(__WEBPACK_IMPORTED_MODULE_1__property_uninstaller__["a" /* default */])(element, 'stepUp');
    Object(__WEBPACK_IMPORTED_MODULE_1__property_uninstaller__["a" /* default */])(element, 'validationMessage');
    Object(__WEBPACK_IMPORTED_MODULE_1__property_uninstaller__["a" /* default */])(element, 'validity');
    Object(__WEBPACK_IMPORTED_MODULE_1__property_uninstaller__["a" /* default */])(element, 'valueAsDate');
    Object(__WEBPACK_IMPORTED_MODULE_1__property_uninstaller__["a" /* default */])(element, 'valueAsNumber');
    Object(__WEBPACK_IMPORTED_MODULE_1__property_uninstaller__["a" /* default */])(element, 'willValidate');

    Object(__WEBPACK_IMPORTED_MODULE_2__polyfills_properties__["b" /* uninstall_properties */])(element);

  } else if (element instanceof window.HTMLFormElement) {
    Object(__WEBPACK_IMPORTED_MODULE_1__property_uninstaller__["a" /* default */])(element, 'checkValidity');
    Object(__WEBPACK_IMPORTED_MODULE_1__property_uninstaller__["a" /* default */])(element, 'reportValidity');
  }
});


/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__format_date__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__get_next_valid__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__get_type__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sprintf__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__string_to_number__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__string_to_date__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__unicode_string_length__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_custom_messages__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_localization__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_message_store__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_registry__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_wrapper__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__validators_bad_input__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__validators_max__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__validators_maxlength__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__validators_min__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__validators_minlength__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__validators_pattern__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__validators_required__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__validators_step__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__validators_type__ = __webpack_require__(404);


/**
 * Implement constraint checking functionality defined in the HTML5 standard
 *
 * @see https://html.spec.whatwg.org/multipage/forms.html#dom-cva-validity
 * @return bool true if the test fails [!], false otherwise
 */

























/**
 * boilerplate function for all tests but customError
 */
function check(test, react) {
  return element => {
    const invalid = ! test(element);
    if (invalid) {
      react(element);
    }
    return invalid;
  };
}


/**
 * create a common function to set error messages
 */
function set_msg(element, msgtype, _default) {
  __WEBPACK_IMPORTED_MODULE_9__components_message_store__["a" /* message_store */].set(element, __WEBPACK_IMPORTED_MODULE_7__components_custom_messages__["a" /* default */].get(element, msgtype, _default));
}


const badInput = check(__WEBPACK_IMPORTED_MODULE_12__validators_bad_input__["a" /* default */], element => set_msg(element, 'badInput',
                       Object(__WEBPACK_IMPORTED_MODULE_8__components_localization__["b" /* default */])('Please match the requested type.')));


function customError(element) {
  /* check, if there are custom validators in the registry, and call
   * them. */
  const custom_validators = __WEBPACK_IMPORTED_MODULE_10__components_registry__["a" /* default */].get(element);
  const cvl = custom_validators.length;
  var valid = true;

  if (cvl) {
    for (let i = 0; i < cvl; i++) {
      const result = custom_validators[i](element);
      if (result !== undefined && ! result) {
        valid = false;
        /* break on first invalid response */
        break;
      }
    }
  }

  /* check, if there are other validity messages already */
  if (valid) {
    const msg = __WEBPACK_IMPORTED_MODULE_9__components_message_store__["a" /* message_store */].get(element);
    valid = ! (msg.toString() && ('is_custom' in msg));
  }

  return ! valid;
}


const patternMismatch = check(__WEBPACK_IMPORTED_MODULE_17__validators_pattern__["a" /* default */], element => {
  set_msg(element, 'patternMismatch',
    element.title?
      Object(__WEBPACK_IMPORTED_MODULE_3__sprintf__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_8__components_localization__["b" /* default */])('PatternMismatchWithTitle'), element.title)
      :
      Object(__WEBPACK_IMPORTED_MODULE_8__components_localization__["b" /* default */])('PatternMismatch')
  );
});


/**
 * TODO: when rangeOverflow and rangeUnderflow are both called directly and
 * successful, the inRange and outOfRange classes won't get removed, unless
 * element.validityState.valid is queried, too.
 */
const rangeOverflow = check(__WEBPACK_IMPORTED_MODULE_13__validators_max__["a" /* default */], element => {
  const type = Object(__WEBPACK_IMPORTED_MODULE_2__get_type__["a" /* default */])(element);
  const wrapper = Object(__WEBPACK_IMPORTED_MODULE_11__components_wrapper__["b" /* get_wrapper */])(element);
  const outOfRangeClass = wrapper && wrapper.settings.classes.outOfRange || 'hf-out-of-range';
  const inRangeClass = wrapper && wrapper.settings.classes.inRange || 'hf-in-range';

  let msg;

  switch (type) {
    case 'date':
    case 'datetime':
    case 'datetime-local':
      msg = Object(__WEBPACK_IMPORTED_MODULE_3__sprintf__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_8__components_localization__["b" /* default */])('DateRangeOverflow'),
                    Object(__WEBPACK_IMPORTED_MODULE_0__format_date__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_5__string_to_date__["a" /* default */])(element.getAttribute('max'), type), type));
      break;
    case 'time':
      msg = Object(__WEBPACK_IMPORTED_MODULE_3__sprintf__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_8__components_localization__["b" /* default */])('TimeRangeOverflow'),
                    Object(__WEBPACK_IMPORTED_MODULE_0__format_date__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_5__string_to_date__["a" /* default */])(element.getAttribute('max'), type), type));
      break;
    // case 'number':
    default:
      msg = Object(__WEBPACK_IMPORTED_MODULE_3__sprintf__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_8__components_localization__["b" /* default */])('NumberRangeOverflow'),
                    Object(__WEBPACK_IMPORTED_MODULE_4__string_to_number__["a" /* default */])(element.getAttribute('max'), type));
      break;
  }

  set_msg(element, 'rangeOverflow', msg);
  element.classList.add(outOfRangeClass);
  element.classList.remove(inRangeClass);
});


const rangeUnderflow = check(__WEBPACK_IMPORTED_MODULE_15__validators_min__["a" /* default */], element => {
  const type = Object(__WEBPACK_IMPORTED_MODULE_2__get_type__["a" /* default */])(element);
  const wrapper = Object(__WEBPACK_IMPORTED_MODULE_11__components_wrapper__["b" /* get_wrapper */])(element);
  const outOfRangeClass = wrapper && wrapper.settings.classes.outOfRange || 'hf-out-of-range';
  const inRangeClass = wrapper && wrapper.settings.classes.inRange || 'hf-in-range';

  let msg;

  switch (type) {
    case 'date':
    case 'datetime':
    case 'datetime-local':
      msg = Object(__WEBPACK_IMPORTED_MODULE_3__sprintf__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_8__components_localization__["b" /* default */])('DateRangeUnderflow'),
                    Object(__WEBPACK_IMPORTED_MODULE_0__format_date__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_5__string_to_date__["a" /* default */])(element.getAttribute('min'), type), type));
      break;
    case 'time':
      msg = Object(__WEBPACK_IMPORTED_MODULE_3__sprintf__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_8__components_localization__["b" /* default */])('TimeRangeUnderflow'),
                    Object(__WEBPACK_IMPORTED_MODULE_0__format_date__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_5__string_to_date__["a" /* default */])(element.getAttribute('min'), type), type));
      break;
    // case 'number':
    default:
      msg = Object(__WEBPACK_IMPORTED_MODULE_3__sprintf__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_8__components_localization__["b" /* default */])('NumberRangeUnderflow'),
                    Object(__WEBPACK_IMPORTED_MODULE_4__string_to_number__["a" /* default */])(element.getAttribute('min'), type));
      break;
  }

  set_msg(element, 'rangeUnderflow', msg);
  element.classList.add(outOfRangeClass);
  element.classList.remove(inRangeClass);
});


const stepMismatch = check(__WEBPACK_IMPORTED_MODULE_19__validators_step__["a" /* default */], element => {
  const list = Object(__WEBPACK_IMPORTED_MODULE_1__get_next_valid__["a" /* default */])(element);
  const min = list[0];
  const max = list[1];
  let sole = false;
  let msg;

  if (min === null) {
    sole = max;
  } else if (max === null) {
    sole = min;
  }

  if (sole !== false) {
    msg = Object(__WEBPACK_IMPORTED_MODULE_3__sprintf__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_8__components_localization__["b" /* default */])('StepMismatchOneValue'), sole);
  } else {
    msg = Object(__WEBPACK_IMPORTED_MODULE_3__sprintf__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_8__components_localization__["b" /* default */])('StepMismatch'), min, max);
  }
  set_msg(element, 'stepMismatch', msg);
});


const tooLong = check(__WEBPACK_IMPORTED_MODULE_14__validators_maxlength__["a" /* default */], element => {
  set_msg(element, 'tooLong',
          Object(__WEBPACK_IMPORTED_MODULE_3__sprintf__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_8__components_localization__["b" /* default */])('TextTooLong'), element.getAttribute('maxlength'),
                  Object(__WEBPACK_IMPORTED_MODULE_6__unicode_string_length__["a" /* default */])(element.value)));
});


const tooShort = check(__WEBPACK_IMPORTED_MODULE_16__validators_minlength__["a" /* default */], element => {
  set_msg(element, 'tooShort',
          Object(__WEBPACK_IMPORTED_MODULE_3__sprintf__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_8__components_localization__["b" /* default */])('Please lengthen this text to %l characters or more (you are currently using %l characters).'),
                  element.getAttribute('minlength'),
                  Object(__WEBPACK_IMPORTED_MODULE_6__unicode_string_length__["a" /* default */])(element.value)));
});


const typeMismatch = check(__WEBPACK_IMPORTED_MODULE_20__validators_type__["a" /* default */], element => {
  let msg = Object(__WEBPACK_IMPORTED_MODULE_8__components_localization__["b" /* default */])('Please use the appropriate format.');
  const type = Object(__WEBPACK_IMPORTED_MODULE_2__get_type__["a" /* default */])(element);

  if (type === 'email') {
    if (element.hasAttribute('multiple')) {
      msg = Object(__WEBPACK_IMPORTED_MODULE_8__components_localization__["b" /* default */])('Please enter a comma separated list of email addresses.');
    } else {
      msg = Object(__WEBPACK_IMPORTED_MODULE_8__components_localization__["b" /* default */])('InvalidEmail');
    }
  } else if (type === 'url') {
    msg = Object(__WEBPACK_IMPORTED_MODULE_8__components_localization__["b" /* default */])('InvalidURL');
  } else if (type === 'file') {
    msg = Object(__WEBPACK_IMPORTED_MODULE_8__components_localization__["b" /* default */])('Please select a file of the correct type.');
  }

  set_msg(element, 'typeMismatch', msg);
});


const valueMissing = check(__WEBPACK_IMPORTED_MODULE_18__validators_required__["a" /* default */], element => {
  let msg = Object(__WEBPACK_IMPORTED_MODULE_8__components_localization__["b" /* default */])('ValueMissing');
  const type = Object(__WEBPACK_IMPORTED_MODULE_2__get_type__["a" /* default */])(element);

  if (type === 'checkbox') {
    msg = Object(__WEBPACK_IMPORTED_MODULE_8__components_localization__["b" /* default */])('CheckboxMissing');
  } else if (type === 'radio') {
    msg = Object(__WEBPACK_IMPORTED_MODULE_8__components_localization__["b" /* default */])('RadioMissing');
  } else if (type === 'file') {
    if (element.hasAttribute('multiple')) {
      msg = Object(__WEBPACK_IMPORTED_MODULE_8__components_localization__["b" /* default */])('Please select one or more files.');
    } else {
      msg = Object(__WEBPACK_IMPORTED_MODULE_8__components_localization__["b" /* default */])('FileMissing');
    }
  } else if (element instanceof window.HTMLSelectElement) {
    msg = Object(__WEBPACK_IMPORTED_MODULE_8__components_localization__["b" /* default */])('SelectMissing');
  }

  set_msg(element, 'valueMissing', msg);
});


/* harmony default export */ __webpack_exports__["a"] = ({
  badInput,
  customError,
  patternMismatch,
  rangeOverflow,
  rangeUnderflow,
  stepMismatch,
  tooLong,
  tooShort,
  typeMismatch,
  valueMissing,
});


/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";



/* harmony default export */ __webpack_exports__["a"] = (function(date, part=undefined) {
  switch (part) {
    case 'date':
      return (date.toLocaleDateString || date.toDateString).call(date);
    case 'time':
      return (date.toLocaleTimeString || date.toTimeString).call(date);
    case 'month':
      return ('toLocaleDateString' in date)?
        date.toLocaleDateString(undefined, {
          year: 'numeric',
          month: '2-digit',
        })
        :
        date.toDateString();
    // case 'week':
    // TODO
    default:
      return (date.toLocaleString || date.toString).call(date);
  }
});


/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tools_get_type__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tools_is_validation_candidate__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tools_string_to_date__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_types__ = __webpack_require__(11);









/**
 * test whether the element suffers from bad input
 */
/* harmony default export */ __webpack_exports__["a"] = (function(element) {
  const type = Object(__WEBPACK_IMPORTED_MODULE_0__tools_get_type__["a" /* default */])(element);

  if (! Object(__WEBPACK_IMPORTED_MODULE_1__tools_is_validation_candidate__["a" /* default */])(element) ||
      __WEBPACK_IMPORTED_MODULE_3__components_types__["b" /* input_checked */].indexOf(type) === -1) {
    /* we're not interested, thanks! */
    return true;
  }

  /* the browser hides some bad input from the DOM, e.g. malformed numbers,
   * email addresses with invalid punycode representation, ... We try to resort
   * to the original method here. The assumption is, that a browser hiding
   * bad input will hopefully also always support a proper
   * ValidityState.badInput */
  if (! element.value) {
    if ('_original_validity' in element &&
        ! element._original_validity.__hyperform) {
      return ! element._original_validity.badInput;
    }
    /* no value and no original badInput: Assume all's right. */
    return true;
  }

  var result = true;
  switch (type) {
    case 'color':
      result = /^#[a-f0-9]{6}$/.test(element.value);
      break;
    case 'number':
    case 'range':
      result = ! isNaN(Number(element.value));
      break;
    case 'datetime':
    case 'date':
    case 'month':
    case 'week':
    case 'time':
      result = Object(__WEBPACK_IMPORTED_MODULE_2__tools_string_to_date__["a" /* default */])(element.value, type) !== null;
      break;
    case 'datetime-local':
      result = /^([0-9]{4,})-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])T([01][0-9]|2[0-3]):([0-5][0-9])(?::([0-5][0-9])(?:\.([0-9]{1,3}))?)?$/.test(element.value);
      break;
    case 'tel':
      /* spec says No! Phone numbers can have all kinds of formats, so this
       * is expected to be a free-text field. */
      // TODO we could allow a setting 'phone_regex' to be evaluated here.
      break;
    case 'email':
      break;
  }

  return result;
});


/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tools_get_type__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tools_is_validation_candidate__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_types__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tools_string_to_date__ = __webpack_require__(50);









/**
 * test the max attribute
 *
 * we use Number() instead of parseFloat(), because an invalid attribute
 * value like "123abc" should result in an error.
 */
/* harmony default export */ __webpack_exports__["a"] = (function(element) {
  const type = Object(__WEBPACK_IMPORTED_MODULE_0__tools_get_type__["a" /* default */])(element);

  if (! Object(__WEBPACK_IMPORTED_MODULE_1__tools_is_validation_candidate__["a" /* default */])(element) ||
      ! element.value || ! element.hasAttribute('max')) {
    /* we're not responsible here */
    return true;
  }

  let value, max;
  if (__WEBPACK_IMPORTED_MODULE_2__components_types__["a" /* dates */].indexOf(type) > -1) {
    value = 1 * Object(__WEBPACK_IMPORTED_MODULE_3__tools_string_to_date__["a" /* default */])(element.value, type);
    max = 1 * (Object(__WEBPACK_IMPORTED_MODULE_3__tools_string_to_date__["a" /* default */])(element.getAttribute('max'), type) || NaN);
  } else {
    value = Number(element.value);
    max = Number(element.getAttribute('max'));
  }

  return (isNaN(max) || value <= max);
});


/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tools_get_type__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tools_is_validation_candidate__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tools_unicode_string_length__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_types__ = __webpack_require__(11);









/**
 * test the maxlength attribute
 */
/* harmony default export */ __webpack_exports__["a"] = (function(element) {
  if (
      ! Object(__WEBPACK_IMPORTED_MODULE_1__tools_is_validation_candidate__["a" /* default */])(element)
      ||
      ! element.value
      ||
      __WEBPACK_IMPORTED_MODULE_3__components_types__["f" /* text */].indexOf(Object(__WEBPACK_IMPORTED_MODULE_0__tools_get_type__["a" /* default */])(element)) === -1
      ||
      ! element.hasAttribute('maxlength')
      ||
      ! element.getAttribute('maxlength') // catch maxlength=""
  ) {
    return true;
  }

  const maxlength = parseInt(element.getAttribute('maxlength'), 10);

  /* check, if the maxlength value is usable at all.
   * We allow maxlength === 0 to basically disable input (Firefox does, too).
   */
  if (isNaN(maxlength) || maxlength < 0) {
    return true;
  }

  return Object(__WEBPACK_IMPORTED_MODULE_2__tools_unicode_string_length__["a" /* default */])(element.value) <= maxlength;
});


/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tools_get_type__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tools_is_validation_candidate__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_types__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tools_string_to_date__ = __webpack_require__(50);









/**
 * test the min attribute
 *
 * we use Number() instead of parseFloat(), because an invalid attribute
 * value like "123abc" should result in an error.
 */
/* harmony default export */ __webpack_exports__["a"] = (function(element) {
  const type = Object(__WEBPACK_IMPORTED_MODULE_0__tools_get_type__["a" /* default */])(element);

  if (! Object(__WEBPACK_IMPORTED_MODULE_1__tools_is_validation_candidate__["a" /* default */])(element) ||
      ! element.value || ! element.hasAttribute('min')) {
    /* we're not responsible here */
    return true;
  }

  let value, min;
  if (__WEBPACK_IMPORTED_MODULE_2__components_types__["a" /* dates */].indexOf(type) > -1) {
    value = 1 * Object(__WEBPACK_IMPORTED_MODULE_3__tools_string_to_date__["a" /* default */])(element.value, type);
    min = 1 * (Object(__WEBPACK_IMPORTED_MODULE_3__tools_string_to_date__["a" /* default */])(element.getAttribute('min'), type) || NaN);
  } else {
    value = Number(element.value);
    min = Number(element.getAttribute('min'));
  }

  return (isNaN(min) || value >= min);
});


/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tools_get_type__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tools_is_validation_candidate__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tools_unicode_string_length__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_types__ = __webpack_require__(11);









/**
 * test the minlength attribute
 */
/* harmony default export */ __webpack_exports__["a"] = (function(element) {
  if (
      ! Object(__WEBPACK_IMPORTED_MODULE_1__tools_is_validation_candidate__["a" /* default */])(element)
      ||
      ! element.value
      ||
      __WEBPACK_IMPORTED_MODULE_3__components_types__["f" /* text */].indexOf(Object(__WEBPACK_IMPORTED_MODULE_0__tools_get_type__["a" /* default */])(element)) === -1
      ||
      ! element.hasAttribute('minlength')
      ||
      ! element.getAttribute('minlength') // catch minlength=""
  ) {
    return true;
  }

  const minlength = parseInt(element.getAttribute('minlength'), 10);

  /* check, if the minlength value is usable at all. */
  if (isNaN(minlength) || minlength < 0) {
    return true;
  }

  return Object(__WEBPACK_IMPORTED_MODULE_2__tools_unicode_string_length__["a" /* default */])(element.value) >= minlength;
});


/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tools_is_validation_candidate__ = __webpack_require__(24);






/**
 * test the pattern attribute
 */
/* harmony default export */ __webpack_exports__["a"] = (function(element) {
  return (
      ! Object(__WEBPACK_IMPORTED_MODULE_0__tools_is_validation_candidate__["a" /* default */])(element)
      ||
      ! element.value
      ||
      ! element.hasAttribute('pattern')
      ||
      (new RegExp('^(?:'+ element.getAttribute('pattern') +')$')).test(element.value)
    );
});


/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tools_is_validation_candidate__ = __webpack_require__(24);






/**
 * test the required attribute
 */
/* harmony default export */ __webpack_exports__["a"] = (function(element) {
  if (! Object(__WEBPACK_IMPORTED_MODULE_0__tools_is_validation_candidate__["a" /* default */])(element)
      ||
      ! element.hasAttribute('required')) {
    /* nothing to do */
    return true;
  }

  /* we don't need get_type() for element.type, because "checkbox" and "radio"
   * are well supported. */
  switch (element.type) {
    case 'checkbox':
      return element.checked;
      //break;
    case 'radio':
      /* radio inputs have "required" fulfilled, if _any_ other radio
       * with the same name in this form is checked. */
      return !! (
        element.checked ||
        (
          element.form &&
          Array.prototype.filter.call(
            document.getElementsByName(element.name),
            radio => radio.name === element.name &&
                     radio.form === element.form &&
                     radio.checked
          ).length > 0
        )
      );
      //break;
    default:
      return !! element.value;
  }
});


/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tools_get_type__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tools_is_validation_candidate__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_types__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_step_defaults__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tools_string_to_number__ = __webpack_require__(74);










/**
 * test the step attribute
 */
/* harmony default export */ __webpack_exports__["a"] = (function(element) {
  const type = Object(__WEBPACK_IMPORTED_MODULE_0__tools_get_type__["a" /* default */])(element);

  if (! Object(__WEBPACK_IMPORTED_MODULE_1__tools_is_validation_candidate__["a" /* default */])(element) ||
      ! element.value ||
      __WEBPACK_IMPORTED_MODULE_2__components_types__["e" /* numbers */].indexOf(type) === -1 ||
      (element.getAttribute('step') || '').toLowerCase() === 'any') {
    /* we're not responsible here. Note: If no step attribute is given, we
     * need to validate against the default step as per spec. */
    return true;
  }

  let step = element.getAttribute('step');
  if (step) {
    step = Object(__WEBPACK_IMPORTED_MODULE_4__tools_string_to_number__["a" /* default */])(step, type);
  } else {
    step = __WEBPACK_IMPORTED_MODULE_3__components_step_defaults__["c" /* default_step */][type] || 1;
  }

  if (step <= 0 || isNaN(step)) {
    /* error in specified "step". We cannot validate against it, so the value
     * is true. */
    return true;
  }

  const scale = __WEBPACK_IMPORTED_MODULE_3__components_step_defaults__["e" /* step_scale_factor */][type] || 1;

  let value = Object(__WEBPACK_IMPORTED_MODULE_4__tools_string_to_number__["a" /* default */])(element.value, type);
  let min = Object(__WEBPACK_IMPORTED_MODULE_4__tools_string_to_number__["a" /* default */])(element.getAttribute('min') ||
                         element.getAttribute('value') || '', type);

  if (isNaN(min)) {
    min = __WEBPACK_IMPORTED_MODULE_3__components_step_defaults__["d" /* default_step_base */][type] || 0;
  }

  if (type === 'month') {
    /* type=month has month-wide steps. See
     * https://html.spec.whatwg.org/multipage/forms.html#month-state-%28type=month%29
     */
    min = (new Date(min)).getUTCFullYear() * 12 + (new Date(min)).getUTCMonth();
    value = (new Date(value)).getUTCFullYear() * 12 + (new Date(value)).getUTCMonth();
  }

  const result = Math.abs(min - value) % (step * scale);

  return (result < 0.00000001 ||
          /* crappy floating-point arithmetics! */
          result > (step * scale) - 0.00000001);
});


/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tools_comma_split__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tools_get_type__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tools_is_validation_candidate__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tools_trim__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_types__ = __webpack_require__(11);










/* we use a dummy <a> where we set the href to test URL validity
 * The definition is out of the "global" scope so that JSDOM can be instantiated
 * after loading Hyperform for tests.
 */
var url_canary;

/* see https://html.spec.whatwg.org/multipage/forms.html#valid-e-mail-address */
const email_pattern = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

/**
 * test the type-inherent syntax
 */
/* harmony default export */ __webpack_exports__["a"] = (function(element) {
  const type = Object(__WEBPACK_IMPORTED_MODULE_1__tools_get_type__["a" /* default */])(element);

  if (! Object(__WEBPACK_IMPORTED_MODULE_2__tools_is_validation_candidate__["a" /* default */])(element) ||
      (type !== 'file' && ! element.value) ||
      (type !== 'file' && __WEBPACK_IMPORTED_MODULE_4__components_types__["g" /* type_checked */].indexOf(type) === -1)) {
    /* we're not responsible for this element */
    return true;
  }

  var is_valid = true;

  switch (type) {
    case 'url':
        if (! url_canary) {
          url_canary = document.createElement('a');
        }
        const value = Object(__WEBPACK_IMPORTED_MODULE_3__tools_trim__["a" /* default */])(element.value);
        url_canary.href = value;
        is_valid = (url_canary.href === value ||
                    url_canary.href === value+'/');
        break;
    case 'email':
        if (element.hasAttribute('multiple')) {
          is_valid = Object(__WEBPACK_IMPORTED_MODULE_0__tools_comma_split__["a" /* default */])(element.value)
                       .every(value => email_pattern.test(value));
        } else {
          is_valid = email_pattern.test(Object(__WEBPACK_IMPORTED_MODULE_3__tools_trim__["a" /* default */])(element.value));
        }
        break;
    case 'file':
        if ('files' in element && element.files.length &&
            element.hasAttribute('accept')) {
          const patterns = Object(__WEBPACK_IMPORTED_MODULE_0__tools_comma_split__["a" /* default */])(element.getAttribute('accept'))
            .map(pattern => {
              if (/^(audio|video|image)\/\*$/.test(pattern)) {
                pattern = new RegExp('^'+RegExp.$1+'/.+$');
              }
              return pattern;
            });

          if (! patterns.length) {
            break;
          }

          fileloop:
          for (let i = 0; i < element.files.length; i++) {
            /* we need to match a whitelist, so pre-set with false */
            let file_valid = false;

            patternloop:
            for (let j = 0; j < patterns.length; j++) {
              const file = element.files[i];
              const pattern = patterns[j];

              let fileprop = file.type;

              if (typeof pattern === 'string' && pattern.substr(0, 1) === '.') {
                if (file.name.search('.') === -1) {
                  /* no match with any file ending */
                  continue patternloop;
                }

                fileprop = file.name.substr(file.name.lastIndexOf('.'));
              }

              if (fileprop.search(pattern) === 0) {
                /* we found one match and can quit looking */
                file_valid = true;
                break patternloop;
              }

            }

            if (! file_valid) {
              is_valid = false;
              break fileloop;
            }
          }
        }
  }

  return is_valid;
});


/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__trim__ = __webpack_require__(159);






/**
 * split a string on comma and trim the components
 *
 * As specified at
 * https://html.spec.whatwg.org/multipage/infrastructure.html#split-a-string-on-commas
 * plus removing empty entries.
 */
/* harmony default export */ __webpack_exports__["a"] = (function(str) {
  return str.split(',')
            .map(item => Object(__WEBPACK_IMPORTED_MODULE_0__trim__["a" /* default */])(item))
            .filter(b=>b);
});


/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/* harmony default export */ __webpack_exports__["a"] = ('0.9.14');


/***/ }),

/***/ 407:
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Ladda 1.0.6 (2018-02-04, 13:19)
 * http://lab.hakim.se/ladda
 * MIT licensed
 *
 * Copyright (C) 2017 Hakim El Hattab, http://hakim.se
 */

!function(t,e){"use strict"; true?module.exports=e(__webpack_require__(408)):"function"==typeof define&&define.amd?define(["spin"],e):t.Ladda=e(t.Spinner)}(this,function(t){"use strict";var e=[];function a(a){if(void 0!==a){if(/ladda-button/i.test(a.className)||(a.className+=" ladda-button"),a.hasAttribute("data-style")||a.setAttribute("data-style","expand-right"),!a.querySelector(".ladda-label")){var u=document.createElement("span");u.className="ladda-label",n=a,i=u,(r=document.createRange()).selectNodeContents(n),r.surroundContents(i),n.appendChild(i)}var n,i,r,d,o,s=a.querySelector(".ladda-spinner");s||((s=document.createElement("span")).className="ladda-spinner"),a.appendChild(s);var F={start:function(){return d||(d=function(e){var a,u,n=e.offsetHeight;0===n&&(n=parseFloat(window.getComputedStyle(e).height));n>32&&(n*=.8);e.hasAttribute("data-spinner-size")&&(n=parseInt(e.getAttribute("data-spinner-size"),10));e.hasAttribute("data-spinner-color")&&(a=e.getAttribute("data-spinner-color"));e.hasAttribute("data-spinner-lines")&&(u=parseInt(e.getAttribute("data-spinner-lines"),10));var i=.2*n;return new t({color:a||"#fff",lines:u||12,radius:i,length:.6*i,width:i<7?2:3,zIndex:"auto",top:"auto",left:"auto",className:""})}(a)),a.disabled=!0,a.setAttribute("data-loading",""),clearTimeout(o),d.spin(s),this.setProgress(0),this},startAfter:function(t){return clearTimeout(o),o=setTimeout(function(){F.start()},t),this},stop:function(){return F.isLoading()&&(a.disabled=!1,a.removeAttribute("data-loading")),clearTimeout(o),d&&(o=setTimeout(function(){d.stop()},1e3)),this},toggle:function(){return this.isLoading()?this.stop():this.start()},setProgress:function(t){t=Math.max(Math.min(t,1),0);var e=a.querySelector(".ladda-progress");0===t&&e&&e.parentNode?e.parentNode.removeChild(e):(e||((e=document.createElement("div")).className="ladda-progress",a.appendChild(e)),e.style.width=(t||0)*a.offsetWidth+"px")},enable:function(){return this.stop()},disable:function(){return this.stop(),a.disabled=!0,this},isLoading:function(){return a.hasAttribute("data-loading")},remove:function(){clearTimeout(o),a.disabled=!1,a.removeAttribute("data-loading"),d&&(d.stop(),d=null),e.splice(e.indexOf(F),1)}};return e.push(F),F}console.warn("Ladda button target must be defined.")}function u(t,e){if("function"==typeof t.addEventListener){var u=a(t),n=-1;t.addEventListener("click",function(){var a,i,r=!0,d=function(t,e){for(;t.parentNode&&t.tagName!==e;)t=t.parentNode;return e===t.tagName?t:void 0}(t,"FORM");if(void 0!==d&&!d.hasAttribute("novalidate"))if("function"==typeof d.checkValidity)r=d.checkValidity();else for(var o=(a=d,i=[],["input","textarea","select"].forEach(function(t){for(var e=a.getElementsByTagName(t),u=0;u<e.length;u++)e[u].hasAttribute("required")&&i.push(e[u])}),i),s=0;s<o.length;s++){var F=o[s],l=F.getAttribute("type");if(""===F.value.replace(/^\s+|\s+$/g,"")&&(r=!1),"checkbox"!==l&&"radio"!==l||F.checked||(r=!1),"email"===l&&(r=/^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*$/i.test(F.value)),"url"===l&&(r=/^([a-z]([a-z]|\d|\+|-|\.)*):(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(F.value)),!r)break}r&&(u.startAfter(1),"number"==typeof e.timeout&&(clearTimeout(n),n=setTimeout(u.stop,e.timeout)),"function"==typeof e.callback&&e.callback.apply(null,[u]))},!1)}}return{bind:function(t,e){var a;if("string"==typeof t)a=document.querySelectorAll(t);else{if("object"!=typeof t)throw new Error("target must be string or object");a=[t]}e=e||{};for(var n=0;n<a.length;n++)u(a[n],e)},create:a,stopAll:function(){for(var t=0,a=e.length;t<a;t++)e[t].stop()}}});

/***/ }),

/***/ 408:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright (c) 2011-2014 Felix Gnass
 * Licensed under the MIT license
 * http://spin.js.org/
 *
 * Example:
    var opts = {
      lines: 12             // The number of lines to draw
    , length: 7             // The length of each line
    , width: 5              // The line thickness
    , radius: 10            // The radius of the inner circle
    , scale: 1.0            // Scales overall size of the spinner
    , corners: 1            // Roundness (0..1)
    , color: '#000'         // #rgb or #rrggbb
    , opacity: 1/4          // Opacity of the lines
    , rotate: 0             // Rotation offset
    , direction: 1          // 1: clockwise, -1: counterclockwise
    , speed: 1              // Rounds per second
    , trail: 100            // Afterglow percentage
    , fps: 20               // Frames per second when using setTimeout()
    , zIndex: 2e9           // Use a high z-index by default
    , className: 'spinner'  // CSS class to assign to the element
    , top: '50%'            // center vertically
    , left: '50%'           // center horizontally
    , shadow: false         // Whether to render a shadow
    , hwaccel: false        // Whether to use hardware acceleration (might be buggy)
    , position: 'absolute'  // Element positioning
    }
    var target = document.getElementById('foo')
    var spinner = new Spinner(opts).spin(target)
 */
;(function (root, factory) {

  /* CommonJS */
  if (typeof module == 'object' && module.exports) module.exports = factory()

  /* AMD module */
  else if (true) !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

  /* Browser global */
  else root.Spinner = factory()
}(this, function () {
  "use strict"

  var prefixes = ['webkit', 'Moz', 'ms', 'O'] /* Vendor prefixes */
    , animations = {} /* Animation rules keyed by their name */
    , useCssAnimations /* Whether to use CSS animations or setTimeout */
    , sheet /* A stylesheet to hold the @keyframe or VML rules. */

  /**
   * Utility function to create elements. If no tag name is given,
   * a DIV is created. Optionally properties can be passed.
   */
  function createEl (tag, prop) {
    var el = document.createElement(tag || 'div')
      , n

    for (n in prop) el[n] = prop[n]
    return el
  }

  /**
   * Appends children and returns the parent.
   */
  function ins (parent /* child1, child2, ...*/) {
    for (var i = 1, n = arguments.length; i < n; i++) {
      parent.appendChild(arguments[i])
    }

    return parent
  }

  /**
   * Creates an opacity keyframe animation rule and returns its name.
   * Since most mobile Webkits have timing issues with animation-delay,
   * we create separate rules for each line/segment.
   */
  function addAnimation (alpha, trail, i, lines) {
    var name = ['opacity', trail, ~~(alpha * 100), i, lines].join('-')
      , start = 0.01 + i/lines * 100
      , z = Math.max(1 - (1-alpha) / trail * (100-start), alpha)
      , prefix = useCssAnimations.substring(0, useCssAnimations.indexOf('Animation')).toLowerCase()
      , pre = prefix && '-' + prefix + '-' || ''

    if (!animations[name]) {
      sheet.insertRule(
        '@' + pre + 'keyframes ' + name + '{' +
        '0%{opacity:' + z + '}' +
        start + '%{opacity:' + alpha + '}' +
        (start+0.01) + '%{opacity:1}' +
        (start+trail) % 100 + '%{opacity:' + alpha + '}' +
        '100%{opacity:' + z + '}' +
        '}', sheet.cssRules.length)

      animations[name] = 1
    }

    return name
  }

  /**
   * Tries various vendor prefixes and returns the first supported property.
   */
  function vendor (el, prop) {
    var s = el.style
      , pp
      , i

    prop = prop.charAt(0).toUpperCase() + prop.slice(1)
    if (s[prop] !== undefined) return prop
    for (i = 0; i < prefixes.length; i++) {
      pp = prefixes[i]+prop
      if (s[pp] !== undefined) return pp
    }
  }

  /**
   * Sets multiple style properties at once.
   */
  function css (el, prop) {
    for (var n in prop) {
      el.style[vendor(el, n) || n] = prop[n]
    }

    return el
  }

  /**
   * Fills in default values.
   */
  function merge (obj) {
    for (var i = 1; i < arguments.length; i++) {
      var def = arguments[i]
      for (var n in def) {
        if (obj[n] === undefined) obj[n] = def[n]
      }
    }
    return obj
  }

  /**
   * Returns the line color from the given string or array.
   */
  function getColor (color, idx) {
    return typeof color == 'string' ? color : color[idx % color.length]
  }

  // Built-in defaults

  var defaults = {
    lines: 12             // The number of lines to draw
  , length: 7             // The length of each line
  , width: 5              // The line thickness
  , radius: 10            // The radius of the inner circle
  , scale: 1.0            // Scales overall size of the spinner
  , corners: 1            // Roundness (0..1)
  , color: '#000'         // #rgb or #rrggbb
  , opacity: 1/4          // Opacity of the lines
  , rotate: 0             // Rotation offset
  , direction: 1          // 1: clockwise, -1: counterclockwise
  , speed: 1              // Rounds per second
  , trail: 100            // Afterglow percentage
  , fps: 20               // Frames per second when using setTimeout()
  , zIndex: 2e9           // Use a high z-index by default
  , className: 'spinner'  // CSS class to assign to the element
  , top: '50%'            // center vertically
  , left: '50%'           // center horizontally
  , shadow: false         // Whether to render a shadow
  , hwaccel: false        // Whether to use hardware acceleration (might be buggy)
  , position: 'absolute'  // Element positioning
  }

  /** The constructor */
  function Spinner (o) {
    this.opts = merge(o || {}, Spinner.defaults, defaults)
  }

  // Global defaults that override the built-ins:
  Spinner.defaults = {}

  merge(Spinner.prototype, {
    /**
     * Adds the spinner to the given target element. If this instance is already
     * spinning, it is automatically removed from its previous target b calling
     * stop() internally.
     */
    spin: function (target) {
      this.stop()

      var self = this
        , o = self.opts
        , el = self.el = createEl(null, {className: o.className})

      css(el, {
        position: o.position
      , width: 0
      , zIndex: o.zIndex
      , left: o.left
      , top: o.top
      })

      if (target) {
        target.insertBefore(el, target.firstChild || null)
      }

      el.setAttribute('role', 'progressbar')
      self.lines(el, self.opts)

      if (!useCssAnimations) {
        // No CSS animation support, use setTimeout() instead
        var i = 0
          , start = (o.lines - 1) * (1 - o.direction) / 2
          , alpha
          , fps = o.fps
          , f = fps / o.speed
          , ostep = (1 - o.opacity) / (f * o.trail / 100)
          , astep = f / o.lines

        ;(function anim () {
          i++
          for (var j = 0; j < o.lines; j++) {
            alpha = Math.max(1 - (i + (o.lines - j) * astep) % f * ostep, o.opacity)

            self.opacity(el, j * o.direction + start, alpha, o)
          }
          self.timeout = self.el && setTimeout(anim, ~~(1000 / fps))
        })()
      }
      return self
    }

    /**
     * Stops and removes the Spinner.
     */
  , stop: function () {
      var el = this.el
      if (el) {
        clearTimeout(this.timeout)
        if (el.parentNode) el.parentNode.removeChild(el)
        this.el = undefined
      }
      return this
    }

    /**
     * Internal method that draws the individual lines. Will be overwritten
     * in VML fallback mode below.
     */
  , lines: function (el, o) {
      var i = 0
        , start = (o.lines - 1) * (1 - o.direction) / 2
        , seg

      function fill (color, shadow) {
        return css(createEl(), {
          position: 'absolute'
        , width: o.scale * (o.length + o.width) + 'px'
        , height: o.scale * o.width + 'px'
        , background: color
        , boxShadow: shadow
        , transformOrigin: 'left'
        , transform: 'rotate(' + ~~(360/o.lines*i + o.rotate) + 'deg) translate(' + o.scale*o.radius + 'px' + ',0)'
        , borderRadius: (o.corners * o.scale * o.width >> 1) + 'px'
        })
      }

      for (; i < o.lines; i++) {
        seg = css(createEl(), {
          position: 'absolute'
        , top: 1 + ~(o.scale * o.width / 2) + 'px'
        , transform: o.hwaccel ? 'translate3d(0,0,0)' : ''
        , opacity: o.opacity
        , animation: useCssAnimations && addAnimation(o.opacity, o.trail, start + i * o.direction, o.lines) + ' ' + 1 / o.speed + 's linear infinite'
        })

        if (o.shadow) ins(seg, css(fill('#000', '0 0 4px #000'), {top: '2px'}))
        ins(el, ins(seg, fill(getColor(o.color, i), '0 0 1px rgba(0,0,0,.1)')))
      }
      return el
    }

    /**
     * Internal method that adjusts the opacity of a single line.
     * Will be overwritten in VML fallback mode below.
     */
  , opacity: function (el, i, val) {
      if (i < el.childNodes.length) el.childNodes[i].style.opacity = val
    }

  })


  function initVML () {

    /* Utility function to create a VML tag */
    function vml (tag, attr) {
      return createEl('<' + tag + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', attr)
    }

    // No CSS transforms but VML support, add a CSS rule for VML elements:
    sheet.addRule('.spin-vml', 'behavior:url(#default#VML)')

    Spinner.prototype.lines = function (el, o) {
      var r = o.scale * (o.length + o.width)
        , s = o.scale * 2 * r

      function grp () {
        return css(
          vml('group', {
            coordsize: s + ' ' + s
          , coordorigin: -r + ' ' + -r
          })
        , { width: s, height: s }
        )
      }

      var margin = -(o.width + o.length) * o.scale * 2 + 'px'
        , g = css(grp(), {position: 'absolute', top: margin, left: margin})
        , i

      function seg (i, dx, filter) {
        ins(
          g
        , ins(
            css(grp(), {rotation: 360 / o.lines * i + 'deg', left: ~~dx})
          , ins(
              css(
                vml('roundrect', {arcsize: o.corners})
              , { width: r
                , height: o.scale * o.width
                , left: o.scale * o.radius
                , top: -o.scale * o.width >> 1
                , filter: filter
                }
              )
            , vml('fill', {color: getColor(o.color, i), opacity: o.opacity})
            , vml('stroke', {opacity: 0}) // transparent stroke to fix color bleeding upon opacity change
            )
          )
        )
      }

      if (o.shadow)
        for (i = 1; i <= o.lines; i++) {
          seg(i, -2, 'progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)')
        }

      for (i = 1; i <= o.lines; i++) seg(i)
      return ins(el, g)
    }

    Spinner.prototype.opacity = function (el, i, val, o) {
      var c = el.firstChild
      o = o.shadow && o.lines || 0
      if (c && i + o < c.childNodes.length) {
        c = c.childNodes[i + o]; c = c && c.firstChild; c = c && c.firstChild
        if (c) c.opacity = val
      }
    }
  }

  if (typeof document !== 'undefined') {
    sheet = (function () {
      var el = createEl('style', {type : 'text/css'})
      ins(document.getElementsByTagName('head')[0], el)
      return el.sheet || el.styleSheet
    }())

    var probe = css(createEl('group'), {behavior: 'url(#default#VML)'})

    if (!vendor(probe, 'transform') && probe.adj) initVML()
    else useCssAnimations = vendor(probe, 'animation')
  }

  return Spinner

}));


/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__get_date_from_week__ = __webpack_require__(392);






/**
 * calculate a date from a string according to HTML5
 */
/* harmony default export */ __webpack_exports__["a"] = (function(string, element_type) {
  const date = new Date(0);
  var ms;
  switch (element_type) {
    case 'datetime':
      if (! /^([0-9]{4,})-([0-9]{2})-([0-9]{2})T([01][0-9]|2[0-3]):([0-5][0-9])(?::([0-5][0-9])(?:\.([0-9]{1,3}))?)?$/.test(string)) {
        return null;
      }
      ms = RegExp.$7 || '000';
      while (ms.length < 3) {
        ms += '0';
      }
      date.setUTCFullYear(Number(RegExp.$1));
      date.setUTCMonth(Number(RegExp.$2) - 1,
                       Number(RegExp.$3));
      date.setUTCHours(Number(RegExp.$4),
                       Number(RegExp.$5),
                       Number(RegExp.$6 || 0),
                       Number(ms));
      return date;

    case 'date':
      if (! /^([0-9]{4,})-([0-9]{2})-([0-9]{2})$/.test(string)) {
        return null;
      }
      date.setUTCFullYear(Number(RegExp.$1));
      date.setUTCMonth(Number(RegExp.$2) - 1,
                       Number(RegExp.$3));
      return date;

    case 'month':
      if (! /^([0-9]{4,})-([0-9]{2})$/.test(string)) {
        return null;
      }
      date.setUTCFullYear(Number(RegExp.$1));
      date.setUTCMonth(Number(RegExp.$2) - 1, 1);
      return date;

    case 'week':
      if (! /^([0-9]{4,})-W(0[1-9]|[1234][0-9]|5[0-3])$/.test(string)) {
        return null;
      }
      return Object(__WEBPACK_IMPORTED_MODULE_0__get_date_from_week__["a" /* default */])(Number(RegExp.$2), Number(RegExp.$1));

    case 'time':
      if (! /^([01][0-9]|2[0-3]):([0-5][0-9])(?::([0-5][0-9])(?:\.([0-9]{1,3}))?)?$/.test(string)) {
        return null;
      }
      ms = RegExp.$4 || '000';
      while (ms.length < 3) {
        ms += '0';
      }
      date.setUTCHours(Number(RegExp.$1), Number(RegExp.$2),
          Number(RegExp.$3 || 0), Number(ms));
      return date;
  }

  return null;
});


/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tools_is_validation_candidate__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tools_mark__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_message_store__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_wrapper__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tools_validity_state_checkers__ = __webpack_require__(394);










/**
 * the validity state constructor
 */
const ValidityState = function(element) {
  if (! (element instanceof window.HTMLElement)) {
    throw new Error('cannot create a ValidityState for a non-element');
  }

  const cached = ValidityState.cache.get(element);
  if (cached) {
    return cached;
  }

  if (! (this instanceof ValidityState)) {
    /* working around a forgotten `new` */
    return new ValidityState(element);
  }

  this.element = element;
  ValidityState.cache.set(element, this);
};


/**
 * the prototype for new validityState instances
 */
const ValidityStatePrototype = {};
ValidityState.prototype = ValidityStatePrototype;

ValidityState.cache = new WeakMap();

/**
 * copy functionality from the validity checkers to the ValidityState
 * prototype
 */
for (let prop in __WEBPACK_IMPORTED_MODULE_4__tools_validity_state_checkers__["a" /* default */]) {
  Object.defineProperty(ValidityStatePrototype, prop, {
    configurable: true,
    enumerable: true,
    get: (func => function() {
      return func(this.element);
    })(__WEBPACK_IMPORTED_MODULE_4__tools_validity_state_checkers__["a" /* default */][prop]),
    set: undefined,
  });
}

/**
 * the "valid" property calls all other validity checkers and returns true,
 * if all those return false.
 *
 * This is the major access point for _all_ other API methods, namely
 * (check|report)Validity().
 */
Object.defineProperty(ValidityStatePrototype, 'valid', {
  configurable: true,
  enumerable: true,
  get: function() {
    if (! Object(__WEBPACK_IMPORTED_MODULE_0__tools_is_validation_candidate__["a" /* default */])(this.element)) {
      /* not being validated == valid by default */
      return true;
    }

    const wrapper = Object(__WEBPACK_IMPORTED_MODULE_3__components_wrapper__["b" /* get_wrapper */])(this.element);
    const validClass = wrapper && wrapper.settings.classes.valid || 'hf-valid';
    const invalidClass = wrapper && wrapper.settings.classes.invalid || 'hf-invalid';
    const userInvalidClass = wrapper && wrapper.settings.classes.userInvalid || 'hf-user-invalid';
    const userValidClass = wrapper && wrapper.settings.classes.userValid || 'hf-user-valid';
    const inRangeClass = wrapper && wrapper.settings.classes.inRange || 'hf-in-range';
    const outOfRangeClass = wrapper && wrapper.settings.classes.outOfRange || 'hf-out-of-range';
    const validatedClass = wrapper && wrapper.settings.classes.validated || 'hf-validated';

    this.element.classList.add(validatedClass);

    for (let prop in __WEBPACK_IMPORTED_MODULE_4__tools_validity_state_checkers__["a" /* default */]) {
      if (__WEBPACK_IMPORTED_MODULE_4__tools_validity_state_checkers__["a" /* default */][prop](this.element)) {
        this.element.classList.add(invalidClass);
        this.element.classList.remove(validClass);
        this.element.classList.remove(userValidClass);
        if (this.element.value !== this.element.defaultValue) {
          this.element.classList.add(userInvalidClass);
        } else {
          this.element.classList.remove(userInvalidClass);
        }
        this.element.setAttribute('aria-invalid', 'true');
        return false;
      }
    }

    __WEBPACK_IMPORTED_MODULE_2__components_message_store__["a" /* message_store */].delete(this.element);
    this.element.classList.remove(invalidClass);
    this.element.classList.remove(userInvalidClass);
    this.element.classList.remove(outOfRangeClass);
    this.element.classList.add(validClass);
    this.element.classList.add(inRangeClass);
    if (this.element.value !== this.element.defaultValue) {
      this.element.classList.add(userValidClass);
    } else {
      this.element.classList.remove(userValidClass);
    }
    this.element.setAttribute('aria-invalid', 'false');
    return true;
  },
  set: undefined,
});

/**
 * mark the validity prototype, because that is what the client-facing
 * code deals with mostly, not the property descriptor thing */
Object(__WEBPACK_IMPORTED_MODULE_1__tools_mark__["a" /* default */])(ValidityStatePrototype);

/* harmony default export */ __webpack_exports__["a"] = (ValidityState);


/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return message_store; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wrapper__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tools_mark__ = __webpack_require__(103);







/**
 * the internal storage for messages
 */
const store = new WeakMap();


/* jshint -W053 *//* allow new String() */
/**
 * handle validation messages
 *
 * Falls back to browser-native errors, if any are available. The messages
 * are String objects so that we can mark() them.
 */
const message_store = {

  set(element, message, is_custom=false) {
    if (element instanceof window.HTMLFieldSetElement) {
      const wrapped_form = Object(__WEBPACK_IMPORTED_MODULE_0__wrapper__["b" /* get_wrapper */])(element);
      if (wrapped_form && ! wrapped_form.settings.extendFieldset) {
        /* make this a no-op for <fieldset> in strict mode */
        return message_store;
      }
    }

    if (typeof message === 'string') {
      message = new String(message);
    }
    if (is_custom) {
      message.is_custom = true;
    }
    Object(__WEBPACK_IMPORTED_MODULE_1__tools_mark__["a" /* default */])(message);
    store.set(element, message);

    /* allow the :invalid selector to match */
    if ('_original_setCustomValidity' in element) {
      element._original_setCustomValidity(message.toString());
    }

    return message_store;
  },

  get(element) {
    var message = store.get(element);
    if (message === undefined && ('_original_validationMessage' in element)) {
      /* get the browser's validation message, if we have none. Maybe it
       * knows more than we. */
      message = new String(element._original_validationMessage);
    }
    return message? message : new String('');
  },

  delete(element) {
    if ('_original_setCustomValidity' in element) {
      element._original_setCustomValidity('');
    }
    return store.delete(element);
  },

};
/* jshint +W053 */




/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = call_hook;
/* harmony export (immutable) */ __webpack_exports__["c"] = do_filter;
/* harmony export (immutable) */ __webpack_exports__["d"] = remove_hook;
/* unused harmony export remove_filter */
/* harmony export (immutable) */ __webpack_exports__["a"] = add_hook;
/* unused harmony export add_filter */



const registry = Object.create(null);


/**
 * run all actions registered for a hook
 *
 * Every action gets called with a state object as `this` argument and with the
 * hook's call arguments as call arguments.
 *
 * @return mixed the returned value of the action calls or undefined
 */
function call_hook(hook) {
  var result;
  const call_args = Array.prototype.slice.call(arguments, 1);

  if (hook in registry) {
    result = registry[hook].reduce((function(args) {

      return function(previousResult, currentAction) {
        const interimResult = currentAction.apply({
          state: previousResult,
          hook: hook,
        }, args);
        return (interimResult !== undefined)? interimResult : previousResult;
      };

    })(call_args), result);
  }

  return result;
}

/**
 * Filter a value through hooked functions
 *
 * Allows for additional parameters:
 * js> do_filter('foo', null, current_element)
 */
function do_filter(hook, initial_value) {
  var result = initial_value;
  var call_args = Array.prototype.slice.call(arguments, 1);

  if (hook in registry) {
    result = registry[hook].reduce(function(previousResult, currentAction) {
      call_args[0] = previousResult;
      const interimResult = currentAction.apply({
        state: previousResult,
        hook: hook,
      }, call_args);
      return (interimResult !== undefined)? interimResult : previousResult;
    }, result);
  }

  return result;
}

/**
 * remove an action again
 */
function remove_hook(hook, action) {
  if (hook in registry) {
    for (let i = 0; i < registry[hook].length; i++) {
      if (registry[hook][i] === action) {
        registry[hook].splice(i, 1);
        break;
      }
    }
  }
}


/**
 * add an action to a hook
 */
function add_hook(hook, action, position) {
  if (! (hook in registry)) {
    registry[hook] = [];
  }
  if (position === undefined) {
    position = registry[hook].length;
  }
  registry[hook].splice(position, 0, action);
}



/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = reportValidity;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tools_trigger_event__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_renderer__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__validityState__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_wrapper__ = __webpack_require__(25);









/**
 * check element's validity and report an error back to the user
 */
function reportValidity(element) {
  /* if this is a <form>, report validity of all child inputs */
  if (element instanceof window.HTMLFormElement) {
    return (
             Array.prototype.map.call(element.elements, reportValidity)
           ).every(b=>b);
  }

  /* we copy checkValidity() here, b/c we have to check if the "invalid"
   * event was canceled. */
  const valid = Object(__WEBPACK_IMPORTED_MODULE_2__validityState__["a" /* default */])(element).valid;
  var event;
  if (valid) {
    const wrapped_form = Object(__WEBPACK_IMPORTED_MODULE_3__components_wrapper__["b" /* get_wrapper */])(element);
    if (wrapped_form && wrapped_form.settings.validEvent) {
      event = Object(__WEBPACK_IMPORTED_MODULE_0__tools_trigger_event__["b" /* default */])(element, 'valid', { cancelable: true });
    }
  } else {
    event = Object(__WEBPACK_IMPORTED_MODULE_0__tools_trigger_event__["b" /* default */])(element, 'invalid', { cancelable: true });
  }

  if (! event || ! event.defaultPrevented) {
    __WEBPACK_IMPORTED_MODULE_1__components_renderer__["a" /* default */].showWarning(element);
  }

  return valid;
}


/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__string_to_date__ = __webpack_require__(50);






/**
 * calculate a date from a string according to HTML5
 */
/* harmony default export */ __webpack_exports__["a"] = (function(string, element_type) {
    const rval = Object(__WEBPACK_IMPORTED_MODULE_0__string_to_date__["a" /* default */])(string, element_type);
    if (rval !== null) {
      return +rval;
    }
    /* not parseFloat, because we want NaN for invalid values like "1.2xxy" */
    return Number(string);
});


/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = valueAsNumber;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tools_get_type__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tools_string_to_number__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_types__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__valueAsDate__ = __webpack_require__(108);









/**
 * implement the valueAsNumber functionality
 *
 * @see https://html.spec.whatwg.org/multipage/forms.html#dom-input-valueasnumber
 */
function valueAsNumber(element, value=undefined) {
  const type = Object(__WEBPACK_IMPORTED_MODULE_0__tools_get_type__["a" /* default */])(element);
  if (__WEBPACK_IMPORTED_MODULE_2__components_types__["e" /* numbers */].indexOf(type) > -1) {
    if (type === 'range' && element.hasAttribute('multiple')) {
      /* @see https://html.spec.whatwg.org/multipage/forms.html#do-not-apply */
      return NaN;
    }

    if (value !== undefined) {
      /* setter: value must be NaN or a finite number */
      if (isNaN(value)) {
        element.value = '';
      } else if (typeof value === 'number' && window.isFinite(value)) {
        try {
          /* try setting as a date, but... */
          Object(__WEBPACK_IMPORTED_MODULE_3__valueAsDate__["a" /* default */])(element, new Date(value));
        } catch (e) {
          /* ... when valueAsDate is not responsible, ... */
          if (! (e instanceof window.DOMException)) {
            throw e;
          }
          /* ... set it via Number.toString(). */
          element.value = value.toString();
        }
      } else {
        throw new window.DOMException(
          'valueAsNumber setter encountered invalid value', 'TypeError');
      }
      return;
    }

    return Object(__WEBPACK_IMPORTED_MODULE_1__tools_string_to_number__["a" /* default */])(element.value, type);

  } else if (value !== undefined) {
    /* trying to set a number on a not-number input fails */
    throw new window.DOMException(
      'valueAsNumber setter cannot set number on this element',
      'InvalidStateError');
  }

  return NaN;
}


/***/ })

/******/ });
//# sourceMappingURL=form.js.map