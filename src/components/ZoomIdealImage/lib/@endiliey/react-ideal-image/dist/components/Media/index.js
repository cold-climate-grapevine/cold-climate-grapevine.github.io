"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _composeStyle = _interopRequireDefault(require("../composeStyle"));

var _constants = require("../constants");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };
  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || (typeof obj !== "object" && typeof obj !== "function")) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

function _extends() {
  _extends =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

var load = _constants.icons.load,
  loading = _constants.icons.loading,
  loaded = _constants.icons.loaded,
  error = _constants.icons.error,
  noicon = _constants.icons.noicon,
  offline = _constants.icons.offline;

var Media =
  /*#__PURE__*/
  (function (_PureComponent) {
    _inheritsLoose(Media, _PureComponent);

    function Media() {
      return _PureComponent.apply(this, arguments) || this;
    }

    var _proto = Media.prototype;

    _proto.componentDidMount = function componentDidMount() {
      if (this.props.onDimensions && this.dimensionElement)
        /* Firefox returns 0 for both clientWidth and clientHeight.
      To fix this we can check the parentNode's clientWidth and clientHeight as a fallback. */
        this.props.onDimensions({
          width:
            this.dimensionElement.clientWidth ||
            this.dimensionElement.parentNode.clientWidth,
          height:
            this.dimensionElement.clientHeight ||
            this.dimensionElement.parentNode.clientHeight,
        });
    };

    _proto.renderIcon = function renderIcon(props) {
      var icon = props.icon,
        icons = props.icons,
        fill = props.iconColor,
        size = props.iconSize,
        theme = props.theme;
      var iconToRender = icons[icon];
      if (!iconToRender) return null;
      var styleOrClass = (0, _composeStyle.default)(
        {
          width: size + 100,
          height: size,
          color: fill,
        },
        theme.icon
      );
      return _react.default.createElement("div", styleOrClass, [
        _react.default.createElement(iconToRender, {
          fill: fill,
          size: size,
          key: "icon",
        }),
        _react.default.createElement("br", {
          key: "br",
        }),
        this.props.message,
      ]);
    };

    _proto.renderImage = function renderImage(props) {
      var _this = this;

      return props.icon === loaded
        ? _react.default.createElement(
            "img",
            _extends({}, (0, _composeStyle.default)(props.theme.img), {
              onLoad: props.onLoad,
              id: props.id,
              src: props.src,
              alt: props.alt,
              width: props.width,
              height: props.height,
            })
          )
        : _react.default.createElement(
            "svg",
            _extends({}, (0, _composeStyle.default)(props.theme.img), {
              width: props.width,
              height: props.height,
              ref: function ref(_ref) {
                return (_this.dimensionElement = _ref);
              },
            })
          );
    };

    _proto.renderNoscript = function renderNoscript(props) {
      return props.ssr
        ? _react.default.createElement(
            "noscript",
            null,
            _react.default.createElement(
              "img",
              _extends(
                {},
                (0, _composeStyle.default)(
                  props.theme.img,
                  props.theme.noscript
                ),
                {
                  onLoad: props.onLoad,
                  id: props.id,
                  src: props.nsSrc,
                  srcSet: props.nsSrcSet,
                  alt: props.alt,
                  width: props.width,
                  height: props.height,
                }
              )
            )
          )
        : null;
    };

    _proto.render = function render() {
      var props = this.props;
      var placeholder = props.placeholder,
        theme = props.theme;
      var background;

      if (props.icon === loaded) {
        background = {};
      } else if (placeholder.lqip) {
        background = {
          backgroundImage: 'url("' + placeholder.lqip + '")',
        };
      } else {
        background = {
          backgroundColor: placeholder.color,
        };
      }

      return _react.default.createElement(
        "div",
        _extends(
          {},
          (0, _composeStyle.default)(
            theme.placeholder,
            background,
            props.style,
            props.className
          ),
          {
            onClick: this.props.onClick,
            onKeyPress: this.props.onClick,
            ref: this.props.innerRef,
          }
        ),
        this.renderImage(props),
        this.renderNoscript(props),
        this.renderIcon(props)
      );
    };

    return Media;
  })(_react.PureComponent);

exports.default = Media;

_defineProperty(Media, "propTypes", {
  /** URL of the image */
  src: _propTypes.default.string.isRequired,

  /** Width of the image in px */
  width: _propTypes.default.number.isRequired,

  /** Height of the image in px */
  height: _propTypes.default.number.isRequired,
  placeholder: _propTypes.default.oneOfType([
    _propTypes.default.shape({
      /** Solid color placeholder */
      color: _propTypes.default.string.isRequired,
    }),
    _propTypes.default.shape({
      /**
       * [Low Quality Image Placeholder](https://github.com/zouhir/lqip)
       * [SVG-Based Image Placeholder](https://github.com/technopagan/sqip)
       * base64 encoded image of low quality
       */
      lqip: _propTypes.default.string.isRequired,
    }),
  ]).isRequired,

  /** display icon */
  icon: _propTypes.default.oneOf([
    load,
    loading,
    loaded,
    error,
    noicon,
    offline,
  ]).isRequired,

  /** Map of icons */
  icons: _propTypes.default.object.isRequired,

  /** theme object - CSS Modules or React styles */
  theme: _propTypes.default.object.isRequired,

  /** Alternative text */
  alt: _propTypes.default.string,

  /** Color of the icon */
  iconColor: _propTypes.default.string,

  /** Size of the icon in px */
  iconSize: _propTypes.default.number,

  /** React's style attribute for root element of the component */
  style: _propTypes.default.object,

  /** React's className attribute for root element of the component */
  className: _propTypes.default.string,

  /** On click handler */
  onClick: _propTypes.default.func,

  /** callback to get dimensions of the placeholder */
  onDimensions: _propTypes.default.func,

  /** message to show below the icon */
  message: _propTypes.default.node,

  /** reference for Waypoint */
  innerRef: _propTypes.default.func,

  /** noscript image src */
  nsSrc: _propTypes.default.string,

  /** noscript image srcSet */
  nsSrcSet: _propTypes.default.string,
});

_defineProperty(Media, "defaultProps", {
  iconColor: "#fff",
  iconSize: 64,
});
