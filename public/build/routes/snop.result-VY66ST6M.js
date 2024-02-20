import {
  Calendar,
  addDays,
  format
} from "/build/_shared/chunk-JJM6YTGR.js";
import {
  Label
} from "/build/_shared/chunk-EAHXE2UK.js";
import {
  invariant
} from "/build/_shared/chunk-IYD4CINF.js";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "/build/_shared/chunk-YOTMF5EX.js";
import {
  $d7bdfb9eb0fdf311$export$6d08773d2e66f8f2,
  $d7bdfb9eb0fdf311$export$be92b6f5f03c0fe9,
  $d7bdfb9eb0fdf311$export$c7109489551a4f4,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger
} from "/build/_shared/chunk-XQRN6SR3.js";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "/build/_shared/chunk-5XNKT7L2.js";
import {
  $921a889cee6df7e8$export$99c2b779aa4e8b8b,
  Popover,
  PopoverContent,
  PopoverTrigger
} from "/build/_shared/chunk-BOZ637FR.js";
import {
  $f631663db3294ace$export$b39126d51d94e6f3,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "/build/_shared/chunk-ACIZWTF3.js";
import {
  $1746a345f3d73bb7$export$f680877a34711e37,
  $71cd76cc60e0454e$export$6f32135080cb4c3,
  $8927f6f2acc4f386$export$250ffa63cdc0d034,
  $9f79659886946c16$export$e5c5a5f917a5871c,
  $b1b2314f5f9a1d84$export$25bec8c6f54ee79a,
  $c512c27ab02ef895$export$50c7b4e9d9f19c1,
  $e42e1063c40fb3ef$export$b9ecd428b558ff10,
  Button,
  Input,
  cn
} from "/build/_shared/chunk-ZD6FT3IK.js";
import {
  CalendarIcon,
  CaretSortIcon,
  CheckIcon,
  PlusCircledIcon
} from "/build/_shared/chunk-WLB7K45O.js";
import "/build/_shared/chunk-AZ2ABKPG.js";
import {
  clsx_default
} from "/build/_shared/chunk-Y3Q3TNJF.js";
import {
  _assertThisInitialized,
  _inheritsLoose,
  _objectWithoutPropertiesLoose
} from "/build/_shared/chunk-H6ZGEDNT.js";
import {
  require_prop_types
} from "/build/_shared/chunk-HEETWZQQ.js";
import {
  _extends
} from "/build/_shared/chunk-ELWJTL4F.js";
import {
  Link
} from "/build/_shared/chunk-P4XB2KCN.js";
import {
  require_react_dom
} from "/build/_shared/chunk-GIAAE3CH.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-36FLX65P.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __commonJS,
  __export,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// node_modules/lodash/isArray.js
var require_isArray = __commonJS({
  "node_modules/lodash/isArray.js"(exports, module) {
    var isArray2 = Array.isArray;
    module.exports = isArray2;
  }
});

// node_modules/lodash/_freeGlobal.js
var require_freeGlobal = __commonJS({
  "node_modules/lodash/_freeGlobal.js"(exports, module) {
    var freeGlobal = typeof globalThis == "object" && globalThis && globalThis.Object === Object && globalThis;
    module.exports = freeGlobal;
  }
});

// node_modules/lodash/_root.js
var require_root = __commonJS({
  "node_modules/lodash/_root.js"(exports, module) {
    var freeGlobal = require_freeGlobal();
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    module.exports = root;
  }
});

// node_modules/lodash/_Symbol.js
var require_Symbol = __commonJS({
  "node_modules/lodash/_Symbol.js"(exports, module) {
    var root = require_root();
    var Symbol3 = root.Symbol;
    module.exports = Symbol3;
  }
});

// node_modules/lodash/_getRawTag.js
var require_getRawTag = __commonJS({
  "node_modules/lodash/_getRawTag.js"(exports, module) {
    var Symbol3 = require_Symbol();
    var objectProto = Object.prototype;
    var hasOwnProperty2 = objectProto.hasOwnProperty;
    var nativeObjectToString = objectProto.toString;
    var symToStringTag = Symbol3 ? Symbol3.toStringTag : void 0;
    function getRawTag(value) {
      var isOwn = hasOwnProperty2.call(value, symToStringTag), tag = value[symToStringTag];
      try {
        value[symToStringTag] = void 0;
        var unmasked = true;
      } catch (e) {
      }
      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }
    module.exports = getRawTag;
  }
});

// node_modules/lodash/_objectToString.js
var require_objectToString = __commonJS({
  "node_modules/lodash/_objectToString.js"(exports, module) {
    var objectProto = Object.prototype;
    var nativeObjectToString = objectProto.toString;
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }
    module.exports = objectToString;
  }
});

// node_modules/lodash/_baseGetTag.js
var require_baseGetTag = __commonJS({
  "node_modules/lodash/_baseGetTag.js"(exports, module) {
    var Symbol3 = require_Symbol();
    var getRawTag = require_getRawTag();
    var objectToString = require_objectToString();
    var nullTag = "[object Null]";
    var undefinedTag = "[object Undefined]";
    var symToStringTag = Symbol3 ? Symbol3.toStringTag : void 0;
    function baseGetTag(value) {
      if (value == null) {
        return value === void 0 ? undefinedTag : nullTag;
      }
      return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
    }
    module.exports = baseGetTag;
  }
});

// node_modules/lodash/isObjectLike.js
var require_isObjectLike = __commonJS({
  "node_modules/lodash/isObjectLike.js"(exports, module) {
    function isObjectLike(value) {
      return value != null && typeof value == "object";
    }
    module.exports = isObjectLike;
  }
});

// node_modules/lodash/isSymbol.js
var require_isSymbol = __commonJS({
  "node_modules/lodash/isSymbol.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isObjectLike = require_isObjectLike();
    var symbolTag = "[object Symbol]";
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
    }
    module.exports = isSymbol;
  }
});

// node_modules/lodash/_isKey.js
var require_isKey = __commonJS({
  "node_modules/lodash/_isKey.js"(exports, module) {
    var isArray2 = require_isArray();
    var isSymbol = require_isSymbol();
    var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
    var reIsPlainProp = /^\w*$/;
    function isKey(value, object) {
      if (isArray2(value)) {
        return false;
      }
      var type = typeof value;
      if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
        return true;
      }
      return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
    }
    module.exports = isKey;
  }
});

// node_modules/lodash/isObject.js
var require_isObject = __commonJS({
  "node_modules/lodash/isObject.js"(exports, module) {
    function isObject5(value) {
      var type = typeof value;
      return value != null && (type == "object" || type == "function");
    }
    module.exports = isObject5;
  }
});

// node_modules/lodash/isFunction.js
var require_isFunction = __commonJS({
  "node_modules/lodash/isFunction.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isObject5 = require_isObject();
    var asyncTag = "[object AsyncFunction]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var proxyTag = "[object Proxy]";
    function isFunction16(value) {
      if (!isObject5(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }
    module.exports = isFunction16;
  }
});

// node_modules/lodash/_coreJsData.js
var require_coreJsData = __commonJS({
  "node_modules/lodash/_coreJsData.js"(exports, module) {
    var root = require_root();
    var coreJsData = root["__core-js_shared__"];
    module.exports = coreJsData;
  }
});

// node_modules/lodash/_isMasked.js
var require_isMasked = __commonJS({
  "node_modules/lodash/_isMasked.js"(exports, module) {
    var coreJsData = require_coreJsData();
    var maskSrcKey = function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }();
    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }
    module.exports = isMasked;
  }
});

// node_modules/lodash/_toSource.js
var require_toSource = __commonJS({
  "node_modules/lodash/_toSource.js"(exports, module) {
    var funcProto = Function.prototype;
    var funcToString = funcProto.toString;
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {
        }
        try {
          return func + "";
        } catch (e) {
        }
      }
      return "";
    }
    module.exports = toSource;
  }
});

// node_modules/lodash/_baseIsNative.js
var require_baseIsNative = __commonJS({
  "node_modules/lodash/_baseIsNative.js"(exports, module) {
    var isFunction16 = require_isFunction();
    var isMasked = require_isMasked();
    var isObject5 = require_isObject();
    var toSource = require_toSource();
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var funcToString = funcProto.toString;
    var hasOwnProperty2 = objectProto.hasOwnProperty;
    var reIsNative = RegExp(
      "^" + funcToString.call(hasOwnProperty2).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    );
    function baseIsNative(value) {
      if (!isObject5(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction16(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }
    module.exports = baseIsNative;
  }
});

// node_modules/lodash/_getValue.js
var require_getValue = __commonJS({
  "node_modules/lodash/_getValue.js"(exports, module) {
    function getValue(object, key) {
      return object == null ? void 0 : object[key];
    }
    module.exports = getValue;
  }
});

// node_modules/lodash/_getNative.js
var require_getNative = __commonJS({
  "node_modules/lodash/_getNative.js"(exports, module) {
    var baseIsNative = require_baseIsNative();
    var getValue = require_getValue();
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : void 0;
    }
    module.exports = getNative;
  }
});

// node_modules/lodash/_nativeCreate.js
var require_nativeCreate = __commonJS({
  "node_modules/lodash/_nativeCreate.js"(exports, module) {
    var getNative = require_getNative();
    var nativeCreate = getNative(Object, "create");
    module.exports = nativeCreate;
  }
});

// node_modules/lodash/_hashClear.js
var require_hashClear = __commonJS({
  "node_modules/lodash/_hashClear.js"(exports, module) {
    var nativeCreate = require_nativeCreate();
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }
    module.exports = hashClear;
  }
});

// node_modules/lodash/_hashDelete.js
var require_hashDelete = __commonJS({
  "node_modules/lodash/_hashDelete.js"(exports, module) {
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }
    module.exports = hashDelete;
  }
});

// node_modules/lodash/_hashGet.js
var require_hashGet = __commonJS({
  "node_modules/lodash/_hashGet.js"(exports, module) {
    var nativeCreate = require_nativeCreate();
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var objectProto = Object.prototype;
    var hasOwnProperty2 = objectProto.hasOwnProperty;
    function hashGet(key) {
      var data2 = this.__data__;
      if (nativeCreate) {
        var result = data2[key];
        return result === HASH_UNDEFINED ? void 0 : result;
      }
      return hasOwnProperty2.call(data2, key) ? data2[key] : void 0;
    }
    module.exports = hashGet;
  }
});

// node_modules/lodash/_hashHas.js
var require_hashHas = __commonJS({
  "node_modules/lodash/_hashHas.js"(exports, module) {
    var nativeCreate = require_nativeCreate();
    var objectProto = Object.prototype;
    var hasOwnProperty2 = objectProto.hasOwnProperty;
    function hashHas(key) {
      var data2 = this.__data__;
      return nativeCreate ? data2[key] !== void 0 : hasOwnProperty2.call(data2, key);
    }
    module.exports = hashHas;
  }
});

// node_modules/lodash/_hashSet.js
var require_hashSet = __commonJS({
  "node_modules/lodash/_hashSet.js"(exports, module) {
    var nativeCreate = require_nativeCreate();
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    function hashSet(key, value) {
      var data2 = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data2[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
      return this;
    }
    module.exports = hashSet;
  }
});

// node_modules/lodash/_Hash.js
var require_Hash = __commonJS({
  "node_modules/lodash/_Hash.js"(exports, module) {
    var hashClear = require_hashClear();
    var hashDelete = require_hashDelete();
    var hashGet = require_hashGet();
    var hashHas = require_hashHas();
    var hashSet = require_hashSet();
    function Hash(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    Hash.prototype.clear = hashClear;
    Hash.prototype["delete"] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    module.exports = Hash;
  }
});

// node_modules/lodash/_listCacheClear.js
var require_listCacheClear = __commonJS({
  "node_modules/lodash/_listCacheClear.js"(exports, module) {
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }
    module.exports = listCacheClear;
  }
});

// node_modules/lodash/eq.js
var require_eq = __commonJS({
  "node_modules/lodash/eq.js"(exports, module) {
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }
    module.exports = eq;
  }
});

// node_modules/lodash/_assocIndexOf.js
var require_assocIndexOf = __commonJS({
  "node_modules/lodash/_assocIndexOf.js"(exports, module) {
    var eq = require_eq();
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }
    module.exports = assocIndexOf;
  }
});

// node_modules/lodash/_listCacheDelete.js
var require_listCacheDelete = __commonJS({
  "node_modules/lodash/_listCacheDelete.js"(exports, module) {
    var assocIndexOf = require_assocIndexOf();
    var arrayProto = Array.prototype;
    var splice = arrayProto.splice;
    function listCacheDelete(key) {
      var data2 = this.__data__, index = assocIndexOf(data2, key);
      if (index < 0) {
        return false;
      }
      var lastIndex = data2.length - 1;
      if (index == lastIndex) {
        data2.pop();
      } else {
        splice.call(data2, index, 1);
      }
      --this.size;
      return true;
    }
    module.exports = listCacheDelete;
  }
});

// node_modules/lodash/_listCacheGet.js
var require_listCacheGet = __commonJS({
  "node_modules/lodash/_listCacheGet.js"(exports, module) {
    var assocIndexOf = require_assocIndexOf();
    function listCacheGet(key) {
      var data2 = this.__data__, index = assocIndexOf(data2, key);
      return index < 0 ? void 0 : data2[index][1];
    }
    module.exports = listCacheGet;
  }
});

// node_modules/lodash/_listCacheHas.js
var require_listCacheHas = __commonJS({
  "node_modules/lodash/_listCacheHas.js"(exports, module) {
    var assocIndexOf = require_assocIndexOf();
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }
    module.exports = listCacheHas;
  }
});

// node_modules/lodash/_listCacheSet.js
var require_listCacheSet = __commonJS({
  "node_modules/lodash/_listCacheSet.js"(exports, module) {
    var assocIndexOf = require_assocIndexOf();
    function listCacheSet(key, value) {
      var data2 = this.__data__, index = assocIndexOf(data2, key);
      if (index < 0) {
        ++this.size;
        data2.push([key, value]);
      } else {
        data2[index][1] = value;
      }
      return this;
    }
    module.exports = listCacheSet;
  }
});

// node_modules/lodash/_ListCache.js
var require_ListCache = __commonJS({
  "node_modules/lodash/_ListCache.js"(exports, module) {
    var listCacheClear = require_listCacheClear();
    var listCacheDelete = require_listCacheDelete();
    var listCacheGet = require_listCacheGet();
    var listCacheHas = require_listCacheHas();
    var listCacheSet = require_listCacheSet();
    function ListCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype["delete"] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    module.exports = ListCache;
  }
});

// node_modules/lodash/_Map.js
var require_Map = __commonJS({
  "node_modules/lodash/_Map.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var Map2 = getNative(root, "Map");
    module.exports = Map2;
  }
});

// node_modules/lodash/_mapCacheClear.js
var require_mapCacheClear = __commonJS({
  "node_modules/lodash/_mapCacheClear.js"(exports, module) {
    var Hash = require_Hash();
    var ListCache = require_ListCache();
    var Map2 = require_Map();
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        "hash": new Hash(),
        "map": new (Map2 || ListCache)(),
        "string": new Hash()
      };
    }
    module.exports = mapCacheClear;
  }
});

// node_modules/lodash/_isKeyable.js
var require_isKeyable = __commonJS({
  "node_modules/lodash/_isKeyable.js"(exports, module) {
    function isKeyable(value) {
      var type = typeof value;
      return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
    }
    module.exports = isKeyable;
  }
});

// node_modules/lodash/_getMapData.js
var require_getMapData = __commonJS({
  "node_modules/lodash/_getMapData.js"(exports, module) {
    var isKeyable = require_isKeyable();
    function getMapData(map3, key) {
      var data2 = map3.__data__;
      return isKeyable(key) ? data2[typeof key == "string" ? "string" : "hash"] : data2.map;
    }
    module.exports = getMapData;
  }
});

// node_modules/lodash/_mapCacheDelete.js
var require_mapCacheDelete = __commonJS({
  "node_modules/lodash/_mapCacheDelete.js"(exports, module) {
    var getMapData = require_getMapData();
    function mapCacheDelete(key) {
      var result = getMapData(this, key)["delete"](key);
      this.size -= result ? 1 : 0;
      return result;
    }
    module.exports = mapCacheDelete;
  }
});

// node_modules/lodash/_mapCacheGet.js
var require_mapCacheGet = __commonJS({
  "node_modules/lodash/_mapCacheGet.js"(exports, module) {
    var getMapData = require_getMapData();
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }
    module.exports = mapCacheGet;
  }
});

// node_modules/lodash/_mapCacheHas.js
var require_mapCacheHas = __commonJS({
  "node_modules/lodash/_mapCacheHas.js"(exports, module) {
    var getMapData = require_getMapData();
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }
    module.exports = mapCacheHas;
  }
});

// node_modules/lodash/_mapCacheSet.js
var require_mapCacheSet = __commonJS({
  "node_modules/lodash/_mapCacheSet.js"(exports, module) {
    var getMapData = require_getMapData();
    function mapCacheSet(key, value) {
      var data2 = getMapData(this, key), size = data2.size;
      data2.set(key, value);
      this.size += data2.size == size ? 0 : 1;
      return this;
    }
    module.exports = mapCacheSet;
  }
});

// node_modules/lodash/_MapCache.js
var require_MapCache = __commonJS({
  "node_modules/lodash/_MapCache.js"(exports, module) {
    var mapCacheClear = require_mapCacheClear();
    var mapCacheDelete = require_mapCacheDelete();
    var mapCacheGet = require_mapCacheGet();
    var mapCacheHas = require_mapCacheHas();
    var mapCacheSet = require_mapCacheSet();
    function MapCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype["delete"] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    module.exports = MapCache;
  }
});

// node_modules/lodash/memoize.js
var require_memoize = __commonJS({
  "node_modules/lodash/memoize.js"(exports, module) {
    var MapCache = require_MapCache();
    var FUNC_ERROR_TEXT = "Expected a function";
    function memoize4(func, resolver) {
      if (typeof func != "function" || resolver != null && typeof resolver != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var memoized = function() {
        var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
        if (cache.has(key)) {
          return cache.get(key);
        }
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result) || cache;
        return result;
      };
      memoized.cache = new (memoize4.Cache || MapCache)();
      return memoized;
    }
    memoize4.Cache = MapCache;
    module.exports = memoize4;
  }
});

// node_modules/lodash/_memoizeCapped.js
var require_memoizeCapped = __commonJS({
  "node_modules/lodash/_memoizeCapped.js"(exports, module) {
    var memoize4 = require_memoize();
    var MAX_MEMOIZE_SIZE = 500;
    function memoizeCapped(func) {
      var result = memoize4(func, function(key) {
        if (cache.size === MAX_MEMOIZE_SIZE) {
          cache.clear();
        }
        return key;
      });
      var cache = result.cache;
      return result;
    }
    module.exports = memoizeCapped;
  }
});

// node_modules/lodash/_stringToPath.js
var require_stringToPath = __commonJS({
  "node_modules/lodash/_stringToPath.js"(exports, module) {
    var memoizeCapped = require_memoizeCapped();
    var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
    var reEscapeChar = /\\(\\)?/g;
    var stringToPath = memoizeCapped(function(string) {
      var result = [];
      if (string.charCodeAt(0) === 46) {
        result.push("");
      }
      string.replace(rePropName, function(match, number4, quote, subString) {
        result.push(quote ? subString.replace(reEscapeChar, "$1") : number4 || match);
      });
      return result;
    });
    module.exports = stringToPath;
  }
});

// node_modules/lodash/_arrayMap.js
var require_arrayMap = __commonJS({
  "node_modules/lodash/_arrayMap.js"(exports, module) {
    function arrayMap(array, iteratee) {
      var index = -1, length = array == null ? 0 : array.length, result = Array(length);
      while (++index < length) {
        result[index] = iteratee(array[index], index, array);
      }
      return result;
    }
    module.exports = arrayMap;
  }
});

// node_modules/lodash/_baseToString.js
var require_baseToString = __commonJS({
  "node_modules/lodash/_baseToString.js"(exports, module) {
    var Symbol3 = require_Symbol();
    var arrayMap = require_arrayMap();
    var isArray2 = require_isArray();
    var isSymbol = require_isSymbol();
    var INFINITY = 1 / 0;
    var symbolProto = Symbol3 ? Symbol3.prototype : void 0;
    var symbolToString = symbolProto ? symbolProto.toString : void 0;
    function baseToString(value) {
      if (typeof value == "string") {
        return value;
      }
      if (isArray2(value)) {
        return arrayMap(value, baseToString) + "";
      }
      if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : "";
      }
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    module.exports = baseToString;
  }
});

// node_modules/lodash/toString.js
var require_toString = __commonJS({
  "node_modules/lodash/toString.js"(exports, module) {
    var baseToString = require_baseToString();
    function toString(value) {
      return value == null ? "" : baseToString(value);
    }
    module.exports = toString;
  }
});

// node_modules/lodash/_castPath.js
var require_castPath = __commonJS({
  "node_modules/lodash/_castPath.js"(exports, module) {
    var isArray2 = require_isArray();
    var isKey = require_isKey();
    var stringToPath = require_stringToPath();
    var toString = require_toString();
    function castPath(value, object) {
      if (isArray2(value)) {
        return value;
      }
      return isKey(value, object) ? [value] : stringToPath(toString(value));
    }
    module.exports = castPath;
  }
});

// node_modules/lodash/_toKey.js
var require_toKey = __commonJS({
  "node_modules/lodash/_toKey.js"(exports, module) {
    var isSymbol = require_isSymbol();
    var INFINITY = 1 / 0;
    function toKey(value) {
      if (typeof value == "string" || isSymbol(value)) {
        return value;
      }
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    module.exports = toKey;
  }
});

// node_modules/lodash/_baseGet.js
var require_baseGet = __commonJS({
  "node_modules/lodash/_baseGet.js"(exports, module) {
    var castPath = require_castPath();
    var toKey = require_toKey();
    function baseGet(object, path2) {
      path2 = castPath(path2, object);
      var index = 0, length = path2.length;
      while (object != null && index < length) {
        object = object[toKey(path2[index++])];
      }
      return index && index == length ? object : void 0;
    }
    module.exports = baseGet;
  }
});

// node_modules/lodash/get.js
var require_get = __commonJS({
  "node_modules/lodash/get.js"(exports, module) {
    var baseGet = require_baseGet();
    function get7(object, path2, defaultValue) {
      var result = object == null ? void 0 : baseGet(object, path2);
      return result === void 0 ? defaultValue : result;
    }
    module.exports = get7;
  }
});

// node_modules/lodash/isNil.js
var require_isNil = __commonJS({
  "node_modules/lodash/isNil.js"(exports, module) {
    function isNil10(value) {
      return value == null;
    }
    module.exports = isNil10;
  }
});

// node_modules/lodash/isString.js
var require_isString = __commonJS({
  "node_modules/lodash/isString.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isArray2 = require_isArray();
    var isObjectLike = require_isObjectLike();
    var stringTag = "[object String]";
    function isString4(value) {
      return typeof value == "string" || !isArray2(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
    }
    module.exports = isString4;
  }
});

// node_modules/recharts/node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/recharts/node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        function isValidElementType(type) {
          return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element2 = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment3 = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement2(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment2(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element2;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment3;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement2;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment2;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/recharts/node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/recharts/node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// node_modules/lodash/isNumber.js
var require_isNumber = __commonJS({
  "node_modules/lodash/isNumber.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isObjectLike = require_isObjectLike();
    var numberTag = "[object Number]";
    function isNumber3(value) {
      return typeof value == "number" || isObjectLike(value) && baseGetTag(value) == numberTag;
    }
    module.exports = isNumber3;
  }
});

// node_modules/lodash/isNaN.js
var require_isNaN = __commonJS({
  "node_modules/lodash/isNaN.js"(exports, module) {
    var isNumber3 = require_isNumber();
    function isNaN2(value) {
      return isNumber3(value) && value != +value;
    }
    module.exports = isNaN2;
  }
});

// node_modules/lodash/_baseSlice.js
var require_baseSlice = __commonJS({
  "node_modules/lodash/_baseSlice.js"(exports, module) {
    function baseSlice(array, start, end) {
      var index = -1, length = array.length;
      if (start < 0) {
        start = -start > length ? 0 : length + start;
      }
      end = end > length ? length : end;
      if (end < 0) {
        end += length;
      }
      length = start > end ? 0 : end - start >>> 0;
      start >>>= 0;
      var result = Array(length);
      while (++index < length) {
        result[index] = array[index + start];
      }
      return result;
    }
    module.exports = baseSlice;
  }
});

// node_modules/lodash/_castSlice.js
var require_castSlice = __commonJS({
  "node_modules/lodash/_castSlice.js"(exports, module) {
    var baseSlice = require_baseSlice();
    function castSlice(array, start, end) {
      var length = array.length;
      end = end === void 0 ? length : end;
      return !start && end >= length ? array : baseSlice(array, start, end);
    }
    module.exports = castSlice;
  }
});

// node_modules/lodash/_hasUnicode.js
var require_hasUnicode = __commonJS({
  "node_modules/lodash/_hasUnicode.js"(exports, module) {
    var rsAstralRange = "\\ud800-\\udfff";
    var rsComboMarksRange = "\\u0300-\\u036f";
    var reComboHalfMarksRange = "\\ufe20-\\ufe2f";
    var rsComboSymbolsRange = "\\u20d0-\\u20ff";
    var rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;
    var rsVarRange = "\\ufe0e\\ufe0f";
    var rsZWJ = "\\u200d";
    var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
    function hasUnicode(string) {
      return reHasUnicode.test(string);
    }
    module.exports = hasUnicode;
  }
});

// node_modules/lodash/_asciiToArray.js
var require_asciiToArray = __commonJS({
  "node_modules/lodash/_asciiToArray.js"(exports, module) {
    function asciiToArray(string) {
      return string.split("");
    }
    module.exports = asciiToArray;
  }
});

// node_modules/lodash/_unicodeToArray.js
var require_unicodeToArray = __commonJS({
  "node_modules/lodash/_unicodeToArray.js"(exports, module) {
    var rsAstralRange = "\\ud800-\\udfff";
    var rsComboMarksRange = "\\u0300-\\u036f";
    var reComboHalfMarksRange = "\\ufe20-\\ufe2f";
    var rsComboSymbolsRange = "\\u20d0-\\u20ff";
    var rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;
    var rsVarRange = "\\ufe0e\\ufe0f";
    var rsAstral = "[" + rsAstralRange + "]";
    var rsCombo = "[" + rsComboRange + "]";
    var rsFitz = "\\ud83c[\\udffb-\\udfff]";
    var rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")";
    var rsNonAstral = "[^" + rsAstralRange + "]";
    var rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}";
    var rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]";
    var rsZWJ = "\\u200d";
    var reOptMod = rsModifier + "?";
    var rsOptVar = "[" + rsVarRange + "]?";
    var rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*";
    var rsSeq = rsOptVar + reOptMod + rsOptJoin;
    var rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
    var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
    function unicodeToArray(string) {
      return string.match(reUnicode) || [];
    }
    module.exports = unicodeToArray;
  }
});

// node_modules/lodash/_stringToArray.js
var require_stringToArray = __commonJS({
  "node_modules/lodash/_stringToArray.js"(exports, module) {
    var asciiToArray = require_asciiToArray();
    var hasUnicode = require_hasUnicode();
    var unicodeToArray = require_unicodeToArray();
    function stringToArray(string) {
      return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
    }
    module.exports = stringToArray;
  }
});

// node_modules/lodash/_createCaseFirst.js
var require_createCaseFirst = __commonJS({
  "node_modules/lodash/_createCaseFirst.js"(exports, module) {
    var castSlice = require_castSlice();
    var hasUnicode = require_hasUnicode();
    var stringToArray = require_stringToArray();
    var toString = require_toString();
    function createCaseFirst(methodName) {
      return function(string) {
        string = toString(string);
        var strSymbols = hasUnicode(string) ? stringToArray(string) : void 0;
        var chr = strSymbols ? strSymbols[0] : string.charAt(0);
        var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
        return chr[methodName]() + trailing;
      };
    }
    module.exports = createCaseFirst;
  }
});

// node_modules/lodash/upperFirst.js
var require_upperFirst = __commonJS({
  "node_modules/lodash/upperFirst.js"(exports, module) {
    var createCaseFirst = require_createCaseFirst();
    var upperFirst4 = createCaseFirst("toUpperCase");
    module.exports = upperFirst4;
  }
});

// node_modules/lodash/_stackClear.js
var require_stackClear = __commonJS({
  "node_modules/lodash/_stackClear.js"(exports, module) {
    var ListCache = require_ListCache();
    function stackClear() {
      this.__data__ = new ListCache();
      this.size = 0;
    }
    module.exports = stackClear;
  }
});

// node_modules/lodash/_stackDelete.js
var require_stackDelete = __commonJS({
  "node_modules/lodash/_stackDelete.js"(exports, module) {
    function stackDelete(key) {
      var data2 = this.__data__, result = data2["delete"](key);
      this.size = data2.size;
      return result;
    }
    module.exports = stackDelete;
  }
});

// node_modules/lodash/_stackGet.js
var require_stackGet = __commonJS({
  "node_modules/lodash/_stackGet.js"(exports, module) {
    function stackGet(key) {
      return this.__data__.get(key);
    }
    module.exports = stackGet;
  }
});

// node_modules/lodash/_stackHas.js
var require_stackHas = __commonJS({
  "node_modules/lodash/_stackHas.js"(exports, module) {
    function stackHas(key) {
      return this.__data__.has(key);
    }
    module.exports = stackHas;
  }
});

// node_modules/lodash/_stackSet.js
var require_stackSet = __commonJS({
  "node_modules/lodash/_stackSet.js"(exports, module) {
    var ListCache = require_ListCache();
    var Map2 = require_Map();
    var MapCache = require_MapCache();
    var LARGE_ARRAY_SIZE = 200;
    function stackSet(key, value) {
      var data2 = this.__data__;
      if (data2 instanceof ListCache) {
        var pairs = data2.__data__;
        if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
          pairs.push([key, value]);
          this.size = ++data2.size;
          return this;
        }
        data2 = this.__data__ = new MapCache(pairs);
      }
      data2.set(key, value);
      this.size = data2.size;
      return this;
    }
    module.exports = stackSet;
  }
});

// node_modules/lodash/_Stack.js
var require_Stack = __commonJS({
  "node_modules/lodash/_Stack.js"(exports, module) {
    var ListCache = require_ListCache();
    var stackClear = require_stackClear();
    var stackDelete = require_stackDelete();
    var stackGet = require_stackGet();
    var stackHas = require_stackHas();
    var stackSet = require_stackSet();
    function Stack(entries) {
      var data2 = this.__data__ = new ListCache(entries);
      this.size = data2.size;
    }
    Stack.prototype.clear = stackClear;
    Stack.prototype["delete"] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;
    module.exports = Stack;
  }
});

// node_modules/lodash/_setCacheAdd.js
var require_setCacheAdd = __commonJS({
  "node_modules/lodash/_setCacheAdd.js"(exports, module) {
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    function setCacheAdd(value) {
      this.__data__.set(value, HASH_UNDEFINED);
      return this;
    }
    module.exports = setCacheAdd;
  }
});

// node_modules/lodash/_setCacheHas.js
var require_setCacheHas = __commonJS({
  "node_modules/lodash/_setCacheHas.js"(exports, module) {
    function setCacheHas(value) {
      return this.__data__.has(value);
    }
    module.exports = setCacheHas;
  }
});

// node_modules/lodash/_SetCache.js
var require_SetCache = __commonJS({
  "node_modules/lodash/_SetCache.js"(exports, module) {
    var MapCache = require_MapCache();
    var setCacheAdd = require_setCacheAdd();
    var setCacheHas = require_setCacheHas();
    function SetCache(values2) {
      var index = -1, length = values2 == null ? 0 : values2.length;
      this.__data__ = new MapCache();
      while (++index < length) {
        this.add(values2[index]);
      }
    }
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
    SetCache.prototype.has = setCacheHas;
    module.exports = SetCache;
  }
});

// node_modules/lodash/_arraySome.js
var require_arraySome = __commonJS({
  "node_modules/lodash/_arraySome.js"(exports, module) {
    function arraySome(array, predicate) {
      var index = -1, length = array == null ? 0 : array.length;
      while (++index < length) {
        if (predicate(array[index], index, array)) {
          return true;
        }
      }
      return false;
    }
    module.exports = arraySome;
  }
});

// node_modules/lodash/_cacheHas.js
var require_cacheHas = __commonJS({
  "node_modules/lodash/_cacheHas.js"(exports, module) {
    function cacheHas(cache, key) {
      return cache.has(key);
    }
    module.exports = cacheHas;
  }
});

// node_modules/lodash/_equalArrays.js
var require_equalArrays = __commonJS({
  "node_modules/lodash/_equalArrays.js"(exports, module) {
    var SetCache = require_SetCache();
    var arraySome = require_arraySome();
    var cacheHas = require_cacheHas();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
      if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
        return false;
      }
      var arrStacked = stack.get(array);
      var othStacked = stack.get(other);
      if (arrStacked && othStacked) {
        return arrStacked == other && othStacked == array;
      }
      var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : void 0;
      stack.set(array, other);
      stack.set(other, array);
      while (++index < arrLength) {
        var arrValue = array[index], othValue = other[index];
        if (customizer) {
          var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
        }
        if (compared !== void 0) {
          if (compared) {
            continue;
          }
          result = false;
          break;
        }
        if (seen) {
          if (!arraySome(other, function(othValue2, othIndex) {
            if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
            result = false;
            break;
          }
        } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
          result = false;
          break;
        }
      }
      stack["delete"](array);
      stack["delete"](other);
      return result;
    }
    module.exports = equalArrays;
  }
});

// node_modules/lodash/_Uint8Array.js
var require_Uint8Array = __commonJS({
  "node_modules/lodash/_Uint8Array.js"(exports, module) {
    var root = require_root();
    var Uint8Array = root.Uint8Array;
    module.exports = Uint8Array;
  }
});

// node_modules/lodash/_mapToArray.js
var require_mapToArray = __commonJS({
  "node_modules/lodash/_mapToArray.js"(exports, module) {
    function mapToArray(map3) {
      var index = -1, result = Array(map3.size);
      map3.forEach(function(value, key) {
        result[++index] = [key, value];
      });
      return result;
    }
    module.exports = mapToArray;
  }
});

// node_modules/lodash/_setToArray.js
var require_setToArray = __commonJS({
  "node_modules/lodash/_setToArray.js"(exports, module) {
    function setToArray(set2) {
      var index = -1, result = Array(set2.size);
      set2.forEach(function(value) {
        result[++index] = value;
      });
      return result;
    }
    module.exports = setToArray;
  }
});

// node_modules/lodash/_equalByTag.js
var require_equalByTag = __commonJS({
  "node_modules/lodash/_equalByTag.js"(exports, module) {
    var Symbol3 = require_Symbol();
    var Uint8Array = require_Uint8Array();
    var eq = require_eq();
    var equalArrays = require_equalArrays();
    var mapToArray = require_mapToArray();
    var setToArray = require_setToArray();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var symbolTag = "[object Symbol]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var symbolProto = Symbol3 ? Symbol3.prototype : void 0;
    var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
    function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
      switch (tag) {
        case dataViewTag:
          if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
            return false;
          }
          object = object.buffer;
          other = other.buffer;
        case arrayBufferTag:
          if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
            return false;
          }
          return true;
        case boolTag:
        case dateTag:
        case numberTag:
          return eq(+object, +other);
        case errorTag:
          return object.name == other.name && object.message == other.message;
        case regexpTag:
        case stringTag:
          return object == other + "";
        case mapTag:
          var convert = mapToArray;
        case setTag:
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
          convert || (convert = setToArray);
          if (object.size != other.size && !isPartial) {
            return false;
          }
          var stacked = stack.get(object);
          if (stacked) {
            return stacked == other;
          }
          bitmask |= COMPARE_UNORDERED_FLAG;
          stack.set(object, other);
          var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
          stack["delete"](object);
          return result;
        case symbolTag:
          if (symbolValueOf) {
            return symbolValueOf.call(object) == symbolValueOf.call(other);
          }
      }
      return false;
    }
    module.exports = equalByTag;
  }
});

// node_modules/lodash/_arrayPush.js
var require_arrayPush = __commonJS({
  "node_modules/lodash/_arrayPush.js"(exports, module) {
    function arrayPush(array, values2) {
      var index = -1, length = values2.length, offset = array.length;
      while (++index < length) {
        array[offset + index] = values2[index];
      }
      return array;
    }
    module.exports = arrayPush;
  }
});

// node_modules/lodash/_baseGetAllKeys.js
var require_baseGetAllKeys = __commonJS({
  "node_modules/lodash/_baseGetAllKeys.js"(exports, module) {
    var arrayPush = require_arrayPush();
    var isArray2 = require_isArray();
    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object);
      return isArray2(object) ? result : arrayPush(result, symbolsFunc(object));
    }
    module.exports = baseGetAllKeys;
  }
});

// node_modules/lodash/_arrayFilter.js
var require_arrayFilter = __commonJS({
  "node_modules/lodash/_arrayFilter.js"(exports, module) {
    function arrayFilter(array, predicate) {
      var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
      while (++index < length) {
        var value = array[index];
        if (predicate(value, index, array)) {
          result[resIndex++] = value;
        }
      }
      return result;
    }
    module.exports = arrayFilter;
  }
});

// node_modules/lodash/stubArray.js
var require_stubArray = __commonJS({
  "node_modules/lodash/stubArray.js"(exports, module) {
    function stubArray() {
      return [];
    }
    module.exports = stubArray;
  }
});

// node_modules/lodash/_getSymbols.js
var require_getSymbols = __commonJS({
  "node_modules/lodash/_getSymbols.js"(exports, module) {
    var arrayFilter = require_arrayFilter();
    var stubArray = require_stubArray();
    var objectProto = Object.prototype;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var nativeGetSymbols = Object.getOwnPropertySymbols;
    var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
      if (object == null) {
        return [];
      }
      object = Object(object);
      return arrayFilter(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
      });
    };
    module.exports = getSymbols;
  }
});

// node_modules/lodash/_baseTimes.js
var require_baseTimes = __commonJS({
  "node_modules/lodash/_baseTimes.js"(exports, module) {
    function baseTimes(n, iteratee) {
      var index = -1, result = Array(n);
      while (++index < n) {
        result[index] = iteratee(index);
      }
      return result;
    }
    module.exports = baseTimes;
  }
});

// node_modules/lodash/_baseIsArguments.js
var require_baseIsArguments = __commonJS({
  "node_modules/lodash/_baseIsArguments.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isObjectLike = require_isObjectLike();
    var argsTag = "[object Arguments]";
    function baseIsArguments(value) {
      return isObjectLike(value) && baseGetTag(value) == argsTag;
    }
    module.exports = baseIsArguments;
  }
});

// node_modules/lodash/isArguments.js
var require_isArguments = __commonJS({
  "node_modules/lodash/isArguments.js"(exports, module) {
    var baseIsArguments = require_baseIsArguments();
    var isObjectLike = require_isObjectLike();
    var objectProto = Object.prototype;
    var hasOwnProperty2 = objectProto.hasOwnProperty;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var isArguments = baseIsArguments(function() {
      return arguments;
    }()) ? baseIsArguments : function(value) {
      return isObjectLike(value) && hasOwnProperty2.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
    };
    module.exports = isArguments;
  }
});

// node_modules/lodash/stubFalse.js
var require_stubFalse = __commonJS({
  "node_modules/lodash/stubFalse.js"(exports, module) {
    function stubFalse() {
      return false;
    }
    module.exports = stubFalse;
  }
});

// node_modules/lodash/isBuffer.js
var require_isBuffer = __commonJS({
  "node_modules/lodash/isBuffer.js"(exports, module) {
    var root = require_root();
    var stubFalse = require_stubFalse();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer = moduleExports ? root.Buffer : void 0;
    var nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0;
    var isBuffer = nativeIsBuffer || stubFalse;
    module.exports = isBuffer;
  }
});

// node_modules/lodash/_isIndex.js
var require_isIndex = __commonJS({
  "node_modules/lodash/_isIndex.js"(exports, module) {
    var MAX_SAFE_INTEGER = 9007199254740991;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    function isIndex(value, length) {
      var type = typeof value;
      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
    }
    module.exports = isIndex;
  }
});

// node_modules/lodash/isLength.js
var require_isLength = __commonJS({
  "node_modules/lodash/isLength.js"(exports, module) {
    var MAX_SAFE_INTEGER = 9007199254740991;
    function isLength(value) {
      return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    module.exports = isLength;
  }
});

// node_modules/lodash/_baseIsTypedArray.js
var require_baseIsTypedArray = __commonJS({
  "node_modules/lodash/_baseIsTypedArray.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isLength = require_isLength();
    var isObjectLike = require_isObjectLike();
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var funcTag = "[object Function]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var objectTag = "[object Object]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var weakMapTag = "[object WeakMap]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
    function baseIsTypedArray(value) {
      return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }
    module.exports = baseIsTypedArray;
  }
});

// node_modules/lodash/_baseUnary.js
var require_baseUnary = __commonJS({
  "node_modules/lodash/_baseUnary.js"(exports, module) {
    function baseUnary(func) {
      return function(value) {
        return func(value);
      };
    }
    module.exports = baseUnary;
  }
});

// node_modules/lodash/_nodeUtil.js
var require_nodeUtil = __commonJS({
  "node_modules/lodash/_nodeUtil.js"(exports, module) {
    var freeGlobal = require_freeGlobal();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal.process;
    var nodeUtil = function() {
      try {
        var types = freeModule && freeModule.require && freeModule.require("util").types;
        if (types) {
          return types;
        }
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e) {
      }
    }();
    module.exports = nodeUtil;
  }
});

// node_modules/lodash/isTypedArray.js
var require_isTypedArray = __commonJS({
  "node_modules/lodash/isTypedArray.js"(exports, module) {
    var baseIsTypedArray = require_baseIsTypedArray();
    var baseUnary = require_baseUnary();
    var nodeUtil = require_nodeUtil();
    var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
    var isTypedArray2 = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
    module.exports = isTypedArray2;
  }
});

// node_modules/lodash/_arrayLikeKeys.js
var require_arrayLikeKeys = __commonJS({
  "node_modules/lodash/_arrayLikeKeys.js"(exports, module) {
    var baseTimes = require_baseTimes();
    var isArguments = require_isArguments();
    var isArray2 = require_isArray();
    var isBuffer = require_isBuffer();
    var isIndex = require_isIndex();
    var isTypedArray2 = require_isTypedArray();
    var objectProto = Object.prototype;
    var hasOwnProperty2 = objectProto.hasOwnProperty;
    function arrayLikeKeys(value, inherited) {
      var isArr = isArray2(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray2(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
      for (var key in value) {
        if ((inherited || hasOwnProperty2.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
        (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
        isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
        isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
        isIndex(key, length)))) {
          result.push(key);
        }
      }
      return result;
    }
    module.exports = arrayLikeKeys;
  }
});

// node_modules/lodash/_isPrototype.js
var require_isPrototype = __commonJS({
  "node_modules/lodash/_isPrototype.js"(exports, module) {
    var objectProto = Object.prototype;
    function isPrototype(value) {
      var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
      return value === proto;
    }
    module.exports = isPrototype;
  }
});

// node_modules/lodash/_overArg.js
var require_overArg = __commonJS({
  "node_modules/lodash/_overArg.js"(exports, module) {
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    module.exports = overArg;
  }
});

// node_modules/lodash/_nativeKeys.js
var require_nativeKeys = __commonJS({
  "node_modules/lodash/_nativeKeys.js"(exports, module) {
    var overArg = require_overArg();
    var nativeKeys = overArg(Object.keys, Object);
    module.exports = nativeKeys;
  }
});

// node_modules/lodash/_baseKeys.js
var require_baseKeys = __commonJS({
  "node_modules/lodash/_baseKeys.js"(exports, module) {
    var isPrototype = require_isPrototype();
    var nativeKeys = require_nativeKeys();
    var objectProto = Object.prototype;
    var hasOwnProperty2 = objectProto.hasOwnProperty;
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty2.call(object, key) && key != "constructor") {
          result.push(key);
        }
      }
      return result;
    }
    module.exports = baseKeys;
  }
});

// node_modules/lodash/isArrayLike.js
var require_isArrayLike = __commonJS({
  "node_modules/lodash/isArrayLike.js"(exports, module) {
    var isFunction16 = require_isFunction();
    var isLength = require_isLength();
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction16(value);
    }
    module.exports = isArrayLike;
  }
});

// node_modules/lodash/keys.js
var require_keys = __commonJS({
  "node_modules/lodash/keys.js"(exports, module) {
    var arrayLikeKeys = require_arrayLikeKeys();
    var baseKeys = require_baseKeys();
    var isArrayLike = require_isArrayLike();
    function keys2(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }
    module.exports = keys2;
  }
});

// node_modules/lodash/_getAllKeys.js
var require_getAllKeys = __commonJS({
  "node_modules/lodash/_getAllKeys.js"(exports, module) {
    var baseGetAllKeys = require_baseGetAllKeys();
    var getSymbols = require_getSymbols();
    var keys2 = require_keys();
    function getAllKeys(object) {
      return baseGetAllKeys(object, keys2, getSymbols);
    }
    module.exports = getAllKeys;
  }
});

// node_modules/lodash/_equalObjects.js
var require_equalObjects = __commonJS({
  "node_modules/lodash/_equalObjects.js"(exports, module) {
    var getAllKeys = require_getAllKeys();
    var COMPARE_PARTIAL_FLAG = 1;
    var objectProto = Object.prototype;
    var hasOwnProperty2 = objectProto.hasOwnProperty;
    function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
      if (objLength != othLength && !isPartial) {
        return false;
      }
      var index = objLength;
      while (index--) {
        var key = objProps[index];
        if (!(isPartial ? key in other : hasOwnProperty2.call(other, key))) {
          return false;
        }
      }
      var objStacked = stack.get(object);
      var othStacked = stack.get(other);
      if (objStacked && othStacked) {
        return objStacked == other && othStacked == object;
      }
      var result = true;
      stack.set(object, other);
      stack.set(other, object);
      var skipCtor = isPartial;
      while (++index < objLength) {
        key = objProps[index];
        var objValue = object[key], othValue = other[key];
        if (customizer) {
          var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
        }
        if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
          result = false;
          break;
        }
        skipCtor || (skipCtor = key == "constructor");
      }
      if (result && !skipCtor) {
        var objCtor = object.constructor, othCtor = other.constructor;
        if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
          result = false;
        }
      }
      stack["delete"](object);
      stack["delete"](other);
      return result;
    }
    module.exports = equalObjects;
  }
});

// node_modules/lodash/_DataView.js
var require_DataView = __commonJS({
  "node_modules/lodash/_DataView.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var DataView2 = getNative(root, "DataView");
    module.exports = DataView2;
  }
});

// node_modules/lodash/_Promise.js
var require_Promise = __commonJS({
  "node_modules/lodash/_Promise.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var Promise2 = getNative(root, "Promise");
    module.exports = Promise2;
  }
});

// node_modules/lodash/_Set.js
var require_Set = __commonJS({
  "node_modules/lodash/_Set.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var Set2 = getNative(root, "Set");
    module.exports = Set2;
  }
});

// node_modules/lodash/_WeakMap.js
var require_WeakMap = __commonJS({
  "node_modules/lodash/_WeakMap.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var WeakMap2 = getNative(root, "WeakMap");
    module.exports = WeakMap2;
  }
});

// node_modules/lodash/_getTag.js
var require_getTag = __commonJS({
  "node_modules/lodash/_getTag.js"(exports, module) {
    var DataView2 = require_DataView();
    var Map2 = require_Map();
    var Promise2 = require_Promise();
    var Set2 = require_Set();
    var WeakMap2 = require_WeakMap();
    var baseGetTag = require_baseGetTag();
    var toSource = require_toSource();
    var mapTag = "[object Map]";
    var objectTag = "[object Object]";
    var promiseTag = "[object Promise]";
    var setTag = "[object Set]";
    var weakMapTag = "[object WeakMap]";
    var dataViewTag = "[object DataView]";
    var dataViewCtorString = toSource(DataView2);
    var mapCtorString = toSource(Map2);
    var promiseCtorString = toSource(Promise2);
    var setCtorString = toSource(Set2);
    var weakMapCtorString = toSource(WeakMap2);
    var getTag2 = baseGetTag;
    if (DataView2 && getTag2(new DataView2(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag2(new Map2()) != mapTag || Promise2 && getTag2(Promise2.resolve()) != promiseTag || Set2 && getTag2(new Set2()) != setTag || WeakMap2 && getTag2(new WeakMap2()) != weakMapTag) {
      getTag2 = function(value) {
        var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString:
              return dataViewTag;
            case mapCtorString:
              return mapTag;
            case promiseCtorString:
              return promiseTag;
            case setCtorString:
              return setTag;
            case weakMapCtorString:
              return weakMapTag;
          }
        }
        return result;
      };
    }
    module.exports = getTag2;
  }
});

// node_modules/lodash/_baseIsEqualDeep.js
var require_baseIsEqualDeep = __commonJS({
  "node_modules/lodash/_baseIsEqualDeep.js"(exports, module) {
    var Stack = require_Stack();
    var equalArrays = require_equalArrays();
    var equalByTag = require_equalByTag();
    var equalObjects = require_equalObjects();
    var getTag2 = require_getTag();
    var isArray2 = require_isArray();
    var isBuffer = require_isBuffer();
    var isTypedArray2 = require_isTypedArray();
    var COMPARE_PARTIAL_FLAG = 1;
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var objectTag = "[object Object]";
    var objectProto = Object.prototype;
    var hasOwnProperty2 = objectProto.hasOwnProperty;
    function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
      var objIsArr = isArray2(object), othIsArr = isArray2(other), objTag = objIsArr ? arrayTag : getTag2(object), othTag = othIsArr ? arrayTag : getTag2(other);
      objTag = objTag == argsTag ? objectTag : objTag;
      othTag = othTag == argsTag ? objectTag : othTag;
      var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
      if (isSameTag && isBuffer(object)) {
        if (!isBuffer(other)) {
          return false;
        }
        objIsArr = true;
        objIsObj = false;
      }
      if (isSameTag && !objIsObj) {
        stack || (stack = new Stack());
        return objIsArr || isTypedArray2(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
      }
      if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty2.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty2.call(other, "__wrapped__");
        if (objIsWrapped || othIsWrapped) {
          var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
          stack || (stack = new Stack());
          return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
      }
      if (!isSameTag) {
        return false;
      }
      stack || (stack = new Stack());
      return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
    }
    module.exports = baseIsEqualDeep;
  }
});

// node_modules/lodash/_baseIsEqual.js
var require_baseIsEqual = __commonJS({
  "node_modules/lodash/_baseIsEqual.js"(exports, module) {
    var baseIsEqualDeep = require_baseIsEqualDeep();
    var isObjectLike = require_isObjectLike();
    function baseIsEqual(value, other, bitmask, customizer, stack) {
      if (value === other) {
        return true;
      }
      if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
        return value !== value && other !== other;
      }
      return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
    }
    module.exports = baseIsEqual;
  }
});

// node_modules/lodash/_baseIsMatch.js
var require_baseIsMatch = __commonJS({
  "node_modules/lodash/_baseIsMatch.js"(exports, module) {
    var Stack = require_Stack();
    var baseIsEqual = require_baseIsEqual();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    function baseIsMatch(object, source, matchData, customizer) {
      var index = matchData.length, length = index, noCustomizer = !customizer;
      if (object == null) {
        return !length;
      }
      object = Object(object);
      while (index--) {
        var data2 = matchData[index];
        if (noCustomizer && data2[2] ? data2[1] !== object[data2[0]] : !(data2[0] in object)) {
          return false;
        }
      }
      while (++index < length) {
        data2 = matchData[index];
        var key = data2[0], objValue = object[key], srcValue = data2[1];
        if (noCustomizer && data2[2]) {
          if (objValue === void 0 && !(key in object)) {
            return false;
          }
        } else {
          var stack = new Stack();
          if (customizer) {
            var result = customizer(objValue, srcValue, key, object, source, stack);
          }
          if (!(result === void 0 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result)) {
            return false;
          }
        }
      }
      return true;
    }
    module.exports = baseIsMatch;
  }
});

// node_modules/lodash/_isStrictComparable.js
var require_isStrictComparable = __commonJS({
  "node_modules/lodash/_isStrictComparable.js"(exports, module) {
    var isObject5 = require_isObject();
    function isStrictComparable(value) {
      return value === value && !isObject5(value);
    }
    module.exports = isStrictComparable;
  }
});

// node_modules/lodash/_getMatchData.js
var require_getMatchData = __commonJS({
  "node_modules/lodash/_getMatchData.js"(exports, module) {
    var isStrictComparable = require_isStrictComparable();
    var keys2 = require_keys();
    function getMatchData(object) {
      var result = keys2(object), length = result.length;
      while (length--) {
        var key = result[length], value = object[key];
        result[length] = [key, value, isStrictComparable(value)];
      }
      return result;
    }
    module.exports = getMatchData;
  }
});

// node_modules/lodash/_matchesStrictComparable.js
var require_matchesStrictComparable = __commonJS({
  "node_modules/lodash/_matchesStrictComparable.js"(exports, module) {
    function matchesStrictComparable(key, srcValue) {
      return function(object) {
        if (object == null) {
          return false;
        }
        return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
      };
    }
    module.exports = matchesStrictComparable;
  }
});

// node_modules/lodash/_baseMatches.js
var require_baseMatches = __commonJS({
  "node_modules/lodash/_baseMatches.js"(exports, module) {
    var baseIsMatch = require_baseIsMatch();
    var getMatchData = require_getMatchData();
    var matchesStrictComparable = require_matchesStrictComparable();
    function baseMatches(source) {
      var matchData = getMatchData(source);
      if (matchData.length == 1 && matchData[0][2]) {
        return matchesStrictComparable(matchData[0][0], matchData[0][1]);
      }
      return function(object) {
        return object === source || baseIsMatch(object, source, matchData);
      };
    }
    module.exports = baseMatches;
  }
});

// node_modules/lodash/_baseHasIn.js
var require_baseHasIn = __commonJS({
  "node_modules/lodash/_baseHasIn.js"(exports, module) {
    function baseHasIn(object, key) {
      return object != null && key in Object(object);
    }
    module.exports = baseHasIn;
  }
});

// node_modules/lodash/_hasPath.js
var require_hasPath = __commonJS({
  "node_modules/lodash/_hasPath.js"(exports, module) {
    var castPath = require_castPath();
    var isArguments = require_isArguments();
    var isArray2 = require_isArray();
    var isIndex = require_isIndex();
    var isLength = require_isLength();
    var toKey = require_toKey();
    function hasPath(object, path2, hasFunc) {
      path2 = castPath(path2, object);
      var index = -1, length = path2.length, result = false;
      while (++index < length) {
        var key = toKey(path2[index]);
        if (!(result = object != null && hasFunc(object, key))) {
          break;
        }
        object = object[key];
      }
      if (result || ++index != length) {
        return result;
      }
      length = object == null ? 0 : object.length;
      return !!length && isLength(length) && isIndex(key, length) && (isArray2(object) || isArguments(object));
    }
    module.exports = hasPath;
  }
});

// node_modules/lodash/hasIn.js
var require_hasIn = __commonJS({
  "node_modules/lodash/hasIn.js"(exports, module) {
    var baseHasIn = require_baseHasIn();
    var hasPath = require_hasPath();
    function hasIn(object, path2) {
      return object != null && hasPath(object, path2, baseHasIn);
    }
    module.exports = hasIn;
  }
});

// node_modules/lodash/_baseMatchesProperty.js
var require_baseMatchesProperty = __commonJS({
  "node_modules/lodash/_baseMatchesProperty.js"(exports, module) {
    var baseIsEqual = require_baseIsEqual();
    var get7 = require_get();
    var hasIn = require_hasIn();
    var isKey = require_isKey();
    var isStrictComparable = require_isStrictComparable();
    var matchesStrictComparable = require_matchesStrictComparable();
    var toKey = require_toKey();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    function baseMatchesProperty(path2, srcValue) {
      if (isKey(path2) && isStrictComparable(srcValue)) {
        return matchesStrictComparable(toKey(path2), srcValue);
      }
      return function(object) {
        var objValue = get7(object, path2);
        return objValue === void 0 && objValue === srcValue ? hasIn(object, path2) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
      };
    }
    module.exports = baseMatchesProperty;
  }
});

// node_modules/lodash/identity.js
var require_identity = __commonJS({
  "node_modules/lodash/identity.js"(exports, module) {
    function identity7(value) {
      return value;
    }
    module.exports = identity7;
  }
});

// node_modules/lodash/_baseProperty.js
var require_baseProperty = __commonJS({
  "node_modules/lodash/_baseProperty.js"(exports, module) {
    function baseProperty(key) {
      return function(object) {
        return object == null ? void 0 : object[key];
      };
    }
    module.exports = baseProperty;
  }
});

// node_modules/lodash/_basePropertyDeep.js
var require_basePropertyDeep = __commonJS({
  "node_modules/lodash/_basePropertyDeep.js"(exports, module) {
    var baseGet = require_baseGet();
    function basePropertyDeep(path2) {
      return function(object) {
        return baseGet(object, path2);
      };
    }
    module.exports = basePropertyDeep;
  }
});

// node_modules/lodash/property.js
var require_property = __commonJS({
  "node_modules/lodash/property.js"(exports, module) {
    var baseProperty = require_baseProperty();
    var basePropertyDeep = require_basePropertyDeep();
    var isKey = require_isKey();
    var toKey = require_toKey();
    function property(path2) {
      return isKey(path2) ? baseProperty(toKey(path2)) : basePropertyDeep(path2);
    }
    module.exports = property;
  }
});

// node_modules/lodash/_baseIteratee.js
var require_baseIteratee = __commonJS({
  "node_modules/lodash/_baseIteratee.js"(exports, module) {
    var baseMatches = require_baseMatches();
    var baseMatchesProperty = require_baseMatchesProperty();
    var identity7 = require_identity();
    var isArray2 = require_isArray();
    var property = require_property();
    function baseIteratee(value) {
      if (typeof value == "function") {
        return value;
      }
      if (value == null) {
        return identity7;
      }
      if (typeof value == "object") {
        return isArray2(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
      }
      return property(value);
    }
    module.exports = baseIteratee;
  }
});

// node_modules/lodash/_baseFindIndex.js
var require_baseFindIndex = __commonJS({
  "node_modules/lodash/_baseFindIndex.js"(exports, module) {
    function baseFindIndex(array, predicate, fromIndex, fromRight) {
      var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
      while (fromRight ? index-- : ++index < length) {
        if (predicate(array[index], index, array)) {
          return index;
        }
      }
      return -1;
    }
    module.exports = baseFindIndex;
  }
});

// node_modules/lodash/_baseIsNaN.js
var require_baseIsNaN = __commonJS({
  "node_modules/lodash/_baseIsNaN.js"(exports, module) {
    function baseIsNaN(value) {
      return value !== value;
    }
    module.exports = baseIsNaN;
  }
});

// node_modules/lodash/_strictIndexOf.js
var require_strictIndexOf = __commonJS({
  "node_modules/lodash/_strictIndexOf.js"(exports, module) {
    function strictIndexOf(array, value, fromIndex) {
      var index = fromIndex - 1, length = array.length;
      while (++index < length) {
        if (array[index] === value) {
          return index;
        }
      }
      return -1;
    }
    module.exports = strictIndexOf;
  }
});

// node_modules/lodash/_baseIndexOf.js
var require_baseIndexOf = __commonJS({
  "node_modules/lodash/_baseIndexOf.js"(exports, module) {
    var baseFindIndex = require_baseFindIndex();
    var baseIsNaN = require_baseIsNaN();
    var strictIndexOf = require_strictIndexOf();
    function baseIndexOf(array, value, fromIndex) {
      return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
    }
    module.exports = baseIndexOf;
  }
});

// node_modules/lodash/_arrayIncludes.js
var require_arrayIncludes = __commonJS({
  "node_modules/lodash/_arrayIncludes.js"(exports, module) {
    var baseIndexOf = require_baseIndexOf();
    function arrayIncludes(array, value) {
      var length = array == null ? 0 : array.length;
      return !!length && baseIndexOf(array, value, 0) > -1;
    }
    module.exports = arrayIncludes;
  }
});

// node_modules/lodash/_arrayIncludesWith.js
var require_arrayIncludesWith = __commonJS({
  "node_modules/lodash/_arrayIncludesWith.js"(exports, module) {
    function arrayIncludesWith(array, value, comparator) {
      var index = -1, length = array == null ? 0 : array.length;
      while (++index < length) {
        if (comparator(value, array[index])) {
          return true;
        }
      }
      return false;
    }
    module.exports = arrayIncludesWith;
  }
});

// node_modules/lodash/noop.js
var require_noop = __commonJS({
  "node_modules/lodash/noop.js"(exports, module) {
    function noop2() {
    }
    module.exports = noop2;
  }
});

// node_modules/lodash/_createSet.js
var require_createSet = __commonJS({
  "node_modules/lodash/_createSet.js"(exports, module) {
    var Set2 = require_Set();
    var noop2 = require_noop();
    var setToArray = require_setToArray();
    var INFINITY = 1 / 0;
    var createSet = !(Set2 && 1 / setToArray(new Set2([, -0]))[1] == INFINITY) ? noop2 : function(values2) {
      return new Set2(values2);
    };
    module.exports = createSet;
  }
});

// node_modules/lodash/_baseUniq.js
var require_baseUniq = __commonJS({
  "node_modules/lodash/_baseUniq.js"(exports, module) {
    var SetCache = require_SetCache();
    var arrayIncludes = require_arrayIncludes();
    var arrayIncludesWith = require_arrayIncludesWith();
    var cacheHas = require_cacheHas();
    var createSet = require_createSet();
    var setToArray = require_setToArray();
    var LARGE_ARRAY_SIZE = 200;
    function baseUniq(array, iteratee, comparator) {
      var index = -1, includes = arrayIncludes, length = array.length, isCommon = true, result = [], seen = result;
      if (comparator) {
        isCommon = false;
        includes = arrayIncludesWith;
      } else if (length >= LARGE_ARRAY_SIZE) {
        var set2 = iteratee ? null : createSet(array);
        if (set2) {
          return setToArray(set2);
        }
        isCommon = false;
        includes = cacheHas;
        seen = new SetCache();
      } else {
        seen = iteratee ? [] : result;
      }
      outer:
        while (++index < length) {
          var value = array[index], computed = iteratee ? iteratee(value) : value;
          value = comparator || value !== 0 ? value : 0;
          if (isCommon && computed === computed) {
            var seenIndex = seen.length;
            while (seenIndex--) {
              if (seen[seenIndex] === computed) {
                continue outer;
              }
            }
            if (iteratee) {
              seen.push(computed);
            }
            result.push(value);
          } else if (!includes(seen, computed, comparator)) {
            if (seen !== result) {
              seen.push(computed);
            }
            result.push(value);
          }
        }
      return result;
    }
    module.exports = baseUniq;
  }
});

// node_modules/lodash/uniqBy.js
var require_uniqBy = __commonJS({
  "node_modules/lodash/uniqBy.js"(exports, module) {
    var baseIteratee = require_baseIteratee();
    var baseUniq = require_baseUniq();
    function uniqBy2(array, iteratee) {
      return array && array.length ? baseUniq(array, baseIteratee(iteratee, 2)) : [];
    }
    module.exports = uniqBy2;
  }
});

// node_modules/lodash/_isFlattenable.js
var require_isFlattenable = __commonJS({
  "node_modules/lodash/_isFlattenable.js"(exports, module) {
    var Symbol3 = require_Symbol();
    var isArguments = require_isArguments();
    var isArray2 = require_isArray();
    var spreadableSymbol = Symbol3 ? Symbol3.isConcatSpreadable : void 0;
    function isFlattenable(value) {
      return isArray2(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
    }
    module.exports = isFlattenable;
  }
});

// node_modules/lodash/_baseFlatten.js
var require_baseFlatten = __commonJS({
  "node_modules/lodash/_baseFlatten.js"(exports, module) {
    var arrayPush = require_arrayPush();
    var isFlattenable = require_isFlattenable();
    function baseFlatten(array, depth, predicate, isStrict, result) {
      var index = -1, length = array.length;
      predicate || (predicate = isFlattenable);
      result || (result = []);
      while (++index < length) {
        var value = array[index];
        if (depth > 0 && predicate(value)) {
          if (depth > 1) {
            baseFlatten(value, depth - 1, predicate, isStrict, result);
          } else {
            arrayPush(result, value);
          }
        } else if (!isStrict) {
          result[result.length] = value;
        }
      }
      return result;
    }
    module.exports = baseFlatten;
  }
});

// node_modules/lodash/_createBaseFor.js
var require_createBaseFor = __commonJS({
  "node_modules/lodash/_createBaseFor.js"(exports, module) {
    function createBaseFor(fromRight) {
      return function(object, iteratee, keysFunc) {
        var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
        while (length--) {
          var key = props[fromRight ? length : ++index];
          if (iteratee(iterable[key], key, iterable) === false) {
            break;
          }
        }
        return object;
      };
    }
    module.exports = createBaseFor;
  }
});

// node_modules/lodash/_baseFor.js
var require_baseFor = __commonJS({
  "node_modules/lodash/_baseFor.js"(exports, module) {
    var createBaseFor = require_createBaseFor();
    var baseFor = createBaseFor();
    module.exports = baseFor;
  }
});

// node_modules/lodash/_baseForOwn.js
var require_baseForOwn = __commonJS({
  "node_modules/lodash/_baseForOwn.js"(exports, module) {
    var baseFor = require_baseFor();
    var keys2 = require_keys();
    function baseForOwn(object, iteratee) {
      return object && baseFor(object, iteratee, keys2);
    }
    module.exports = baseForOwn;
  }
});

// node_modules/lodash/_createBaseEach.js
var require_createBaseEach = __commonJS({
  "node_modules/lodash/_createBaseEach.js"(exports, module) {
    var isArrayLike = require_isArrayLike();
    function createBaseEach(eachFunc, fromRight) {
      return function(collection, iteratee) {
        if (collection == null) {
          return collection;
        }
        if (!isArrayLike(collection)) {
          return eachFunc(collection, iteratee);
        }
        var length = collection.length, index = fromRight ? length : -1, iterable = Object(collection);
        while (fromRight ? index-- : ++index < length) {
          if (iteratee(iterable[index], index, iterable) === false) {
            break;
          }
        }
        return collection;
      };
    }
    module.exports = createBaseEach;
  }
});

// node_modules/lodash/_baseEach.js
var require_baseEach = __commonJS({
  "node_modules/lodash/_baseEach.js"(exports, module) {
    var baseForOwn = require_baseForOwn();
    var createBaseEach = require_createBaseEach();
    var baseEach = createBaseEach(baseForOwn);
    module.exports = baseEach;
  }
});

// node_modules/lodash/_baseMap.js
var require_baseMap = __commonJS({
  "node_modules/lodash/_baseMap.js"(exports, module) {
    var baseEach = require_baseEach();
    var isArrayLike = require_isArrayLike();
    function baseMap(collection, iteratee) {
      var index = -1, result = isArrayLike(collection) ? Array(collection.length) : [];
      baseEach(collection, function(value, key, collection2) {
        result[++index] = iteratee(value, key, collection2);
      });
      return result;
    }
    module.exports = baseMap;
  }
});

// node_modules/lodash/_baseSortBy.js
var require_baseSortBy = __commonJS({
  "node_modules/lodash/_baseSortBy.js"(exports, module) {
    function baseSortBy(array, comparer) {
      var length = array.length;
      array.sort(comparer);
      while (length--) {
        array[length] = array[length].value;
      }
      return array;
    }
    module.exports = baseSortBy;
  }
});

// node_modules/lodash/_compareAscending.js
var require_compareAscending = __commonJS({
  "node_modules/lodash/_compareAscending.js"(exports, module) {
    var isSymbol = require_isSymbol();
    function compareAscending(value, other) {
      if (value !== other) {
        var valIsDefined = value !== void 0, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol(value);
        var othIsDefined = other !== void 0, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol(other);
        if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
          return 1;
        }
        if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
          return -1;
        }
      }
      return 0;
    }
    module.exports = compareAscending;
  }
});

// node_modules/lodash/_compareMultiple.js
var require_compareMultiple = __commonJS({
  "node_modules/lodash/_compareMultiple.js"(exports, module) {
    var compareAscending = require_compareAscending();
    function compareMultiple(object, other, orders) {
      var index = -1, objCriteria = object.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
      while (++index < length) {
        var result = compareAscending(objCriteria[index], othCriteria[index]);
        if (result) {
          if (index >= ordersLength) {
            return result;
          }
          var order = orders[index];
          return result * (order == "desc" ? -1 : 1);
        }
      }
      return object.index - other.index;
    }
    module.exports = compareMultiple;
  }
});

// node_modules/lodash/_baseOrderBy.js
var require_baseOrderBy = __commonJS({
  "node_modules/lodash/_baseOrderBy.js"(exports, module) {
    var arrayMap = require_arrayMap();
    var baseGet = require_baseGet();
    var baseIteratee = require_baseIteratee();
    var baseMap = require_baseMap();
    var baseSortBy = require_baseSortBy();
    var baseUnary = require_baseUnary();
    var compareMultiple = require_compareMultiple();
    var identity7 = require_identity();
    var isArray2 = require_isArray();
    function baseOrderBy(collection, iteratees, orders) {
      if (iteratees.length) {
        iteratees = arrayMap(iteratees, function(iteratee) {
          if (isArray2(iteratee)) {
            return function(value) {
              return baseGet(value, iteratee.length === 1 ? iteratee[0] : iteratee);
            };
          }
          return iteratee;
        });
      } else {
        iteratees = [identity7];
      }
      var index = -1;
      iteratees = arrayMap(iteratees, baseUnary(baseIteratee));
      var result = baseMap(collection, function(value, key, collection2) {
        var criteria = arrayMap(iteratees, function(iteratee) {
          return iteratee(value);
        });
        return { "criteria": criteria, "index": ++index, "value": value };
      });
      return baseSortBy(result, function(object, other) {
        return compareMultiple(object, other, orders);
      });
    }
    module.exports = baseOrderBy;
  }
});

// node_modules/lodash/_apply.js
var require_apply = __commonJS({
  "node_modules/lodash/_apply.js"(exports, module) {
    function apply(func, thisArg, args) {
      switch (args.length) {
        case 0:
          return func.call(thisArg);
        case 1:
          return func.call(thisArg, args[0]);
        case 2:
          return func.call(thisArg, args[0], args[1]);
        case 3:
          return func.call(thisArg, args[0], args[1], args[2]);
      }
      return func.apply(thisArg, args);
    }
    module.exports = apply;
  }
});

// node_modules/lodash/_overRest.js
var require_overRest = __commonJS({
  "node_modules/lodash/_overRest.js"(exports, module) {
    var apply = require_apply();
    var nativeMax = Math.max;
    function overRest(func, start, transform) {
      start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
      return function() {
        var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
        while (++index < length) {
          array[index] = args[start + index];
        }
        index = -1;
        var otherArgs = Array(start + 1);
        while (++index < start) {
          otherArgs[index] = args[index];
        }
        otherArgs[start] = transform(array);
        return apply(func, this, otherArgs);
      };
    }
    module.exports = overRest;
  }
});

// node_modules/lodash/constant.js
var require_constant = __commonJS({
  "node_modules/lodash/constant.js"(exports, module) {
    function constant(value) {
      return function() {
        return value;
      };
    }
    module.exports = constant;
  }
});

// node_modules/lodash/_defineProperty.js
var require_defineProperty = __commonJS({
  "node_modules/lodash/_defineProperty.js"(exports, module) {
    var getNative = require_getNative();
    var defineProperty = function() {
      try {
        var func = getNative(Object, "defineProperty");
        func({}, "", {});
        return func;
      } catch (e) {
      }
    }();
    module.exports = defineProperty;
  }
});

// node_modules/lodash/_baseSetToString.js
var require_baseSetToString = __commonJS({
  "node_modules/lodash/_baseSetToString.js"(exports, module) {
    var constant = require_constant();
    var defineProperty = require_defineProperty();
    var identity7 = require_identity();
    var baseSetToString = !defineProperty ? identity7 : function(func, string) {
      return defineProperty(func, "toString", {
        "configurable": true,
        "enumerable": false,
        "value": constant(string),
        "writable": true
      });
    };
    module.exports = baseSetToString;
  }
});

// node_modules/lodash/_shortOut.js
var require_shortOut = __commonJS({
  "node_modules/lodash/_shortOut.js"(exports, module) {
    var HOT_COUNT = 800;
    var HOT_SPAN = 16;
    var nativeNow = Date.now;
    function shortOut(func) {
      var count = 0, lastCalled = 0;
      return function() {
        var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
        lastCalled = stamp;
        if (remaining > 0) {
          if (++count >= HOT_COUNT) {
            return arguments[0];
          }
        } else {
          count = 0;
        }
        return func.apply(void 0, arguments);
      };
    }
    module.exports = shortOut;
  }
});

// node_modules/lodash/_setToString.js
var require_setToString = __commonJS({
  "node_modules/lodash/_setToString.js"(exports, module) {
    var baseSetToString = require_baseSetToString();
    var shortOut = require_shortOut();
    var setToString = shortOut(baseSetToString);
    module.exports = setToString;
  }
});

// node_modules/lodash/_baseRest.js
var require_baseRest = __commonJS({
  "node_modules/lodash/_baseRest.js"(exports, module) {
    var identity7 = require_identity();
    var overRest = require_overRest();
    var setToString = require_setToString();
    function baseRest(func, start) {
      return setToString(overRest(func, start, identity7), func + "");
    }
    module.exports = baseRest;
  }
});

// node_modules/lodash/_isIterateeCall.js
var require_isIterateeCall = __commonJS({
  "node_modules/lodash/_isIterateeCall.js"(exports, module) {
    var eq = require_eq();
    var isArrayLike = require_isArrayLike();
    var isIndex = require_isIndex();
    var isObject5 = require_isObject();
    function isIterateeCall(value, index, object) {
      if (!isObject5(object)) {
        return false;
      }
      var type = typeof index;
      if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) {
        return eq(object[index], value);
      }
      return false;
    }
    module.exports = isIterateeCall;
  }
});

// node_modules/lodash/sortBy.js
var require_sortBy = __commonJS({
  "node_modules/lodash/sortBy.js"(exports, module) {
    var baseFlatten = require_baseFlatten();
    var baseOrderBy = require_baseOrderBy();
    var baseRest = require_baseRest();
    var isIterateeCall = require_isIterateeCall();
    var sortBy4 = baseRest(function(collection, iteratees) {
      if (collection == null) {
        return [];
      }
      var length = iteratees.length;
      if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
        iteratees = [];
      } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
        iteratees = [iteratees[0]];
      }
      return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
    });
    module.exports = sortBy4;
  }
});

// node_modules/lodash/now.js
var require_now = __commonJS({
  "node_modules/lodash/now.js"(exports, module) {
    var root = require_root();
    var now = function() {
      return root.Date.now();
    };
    module.exports = now;
  }
});

// node_modules/lodash/_trimmedEndIndex.js
var require_trimmedEndIndex = __commonJS({
  "node_modules/lodash/_trimmedEndIndex.js"(exports, module) {
    var reWhitespace = /\s/;
    function trimmedEndIndex(string) {
      var index = string.length;
      while (index-- && reWhitespace.test(string.charAt(index))) {
      }
      return index;
    }
    module.exports = trimmedEndIndex;
  }
});

// node_modules/lodash/_baseTrim.js
var require_baseTrim = __commonJS({
  "node_modules/lodash/_baseTrim.js"(exports, module) {
    var trimmedEndIndex = require_trimmedEndIndex();
    var reTrimStart = /^\s+/;
    function baseTrim(string) {
      return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
    }
    module.exports = baseTrim;
  }
});

// node_modules/lodash/toNumber.js
var require_toNumber = __commonJS({
  "node_modules/lodash/toNumber.js"(exports, module) {
    var baseTrim = require_baseTrim();
    var isObject5 = require_isObject();
    var isSymbol = require_isSymbol();
    var NAN = 0 / 0;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsOctal = /^0o[0-7]+$/i;
    var freeParseInt = parseInt;
    function toNumber(value) {
      if (typeof value == "number") {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject5(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = isObject5(other) ? other + "" : other;
      }
      if (typeof value != "string") {
        return value === 0 ? value : +value;
      }
      value = baseTrim(value);
      var isBinary = reIsBinary.test(value);
      return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
    }
    module.exports = toNumber;
  }
});

// node_modules/lodash/debounce.js
var require_debounce = __commonJS({
  "node_modules/lodash/debounce.js"(exports, module) {
    var isObject5 = require_isObject();
    var now = require_now();
    var toNumber = require_toNumber();
    var FUNC_ERROR_TEXT = "Expected a function";
    var nativeMax = Math.max;
    var nativeMin = Math.min;
    function debounce(func, wait, options) {
      var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
      if (typeof func != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      wait = toNumber(wait) || 0;
      if (isObject5(options)) {
        leading = !!options.leading;
        maxing = "maxWait" in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = "trailing" in options ? !!options.trailing : trailing;
      }
      function invokeFunc(time2) {
        var args = lastArgs, thisArg = lastThis;
        lastArgs = lastThis = void 0;
        lastInvokeTime = time2;
        result = func.apply(thisArg, args);
        return result;
      }
      function leadingEdge(time2) {
        lastInvokeTime = time2;
        timerId = setTimeout(timerExpired, wait);
        return leading ? invokeFunc(time2) : result;
      }
      function remainingWait(time2) {
        var timeSinceLastCall = time2 - lastCallTime, timeSinceLastInvoke = time2 - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
        return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
      }
      function shouldInvoke(time2) {
        var timeSinceLastCall = time2 - lastCallTime, timeSinceLastInvoke = time2 - lastInvokeTime;
        return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
      }
      function timerExpired() {
        var time2 = now();
        if (shouldInvoke(time2)) {
          return trailingEdge(time2);
        }
        timerId = setTimeout(timerExpired, remainingWait(time2));
      }
      function trailingEdge(time2) {
        timerId = void 0;
        if (trailing && lastArgs) {
          return invokeFunc(time2);
        }
        lastArgs = lastThis = void 0;
        return result;
      }
      function cancel() {
        if (timerId !== void 0) {
          clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = void 0;
      }
      function flush() {
        return timerId === void 0 ? result : trailingEdge(now());
      }
      function debounced() {
        var time2 = now(), isInvoking = shouldInvoke(time2);
        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time2;
        if (isInvoking) {
          if (timerId === void 0) {
            return leadingEdge(lastCallTime);
          }
          if (maxing) {
            clearTimeout(timerId);
            timerId = setTimeout(timerExpired, wait);
            return invokeFunc(lastCallTime);
          }
        }
        if (timerId === void 0) {
          timerId = setTimeout(timerExpired, wait);
        }
        return result;
      }
      debounced.cancel = cancel;
      debounced.flush = flush;
      return debounced;
    }
    module.exports = debounce;
  }
});

// node_modules/lodash/throttle.js
var require_throttle = __commonJS({
  "node_modules/lodash/throttle.js"(exports, module) {
    var debounce = require_debounce();
    var isObject5 = require_isObject();
    var FUNC_ERROR_TEXT = "Expected a function";
    function throttle3(func, wait, options) {
      var leading = true, trailing = true;
      if (typeof func != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      if (isObject5(options)) {
        leading = "leading" in options ? !!options.leading : leading;
        trailing = "trailing" in options ? !!options.trailing : trailing;
      }
      return debounce(func, wait, {
        "leading": leading,
        "maxWait": wait,
        "trailing": trailing
      });
    }
    module.exports = throttle3;
  }
});

// node_modules/lodash/_baseExtremum.js
var require_baseExtremum = __commonJS({
  "node_modules/lodash/_baseExtremum.js"(exports, module) {
    var isSymbol = require_isSymbol();
    function baseExtremum(array, iteratee, comparator) {
      var index = -1, length = array.length;
      while (++index < length) {
        var value = array[index], current = iteratee(value);
        if (current != null && (computed === void 0 ? current === current && !isSymbol(current) : comparator(current, computed))) {
          var computed = current, result = value;
        }
      }
      return result;
    }
    module.exports = baseExtremum;
  }
});

// node_modules/lodash/_baseGt.js
var require_baseGt = __commonJS({
  "node_modules/lodash/_baseGt.js"(exports, module) {
    function baseGt(value, other) {
      return value > other;
    }
    module.exports = baseGt;
  }
});

// node_modules/lodash/max.js
var require_max = __commonJS({
  "node_modules/lodash/max.js"(exports, module) {
    var baseExtremum = require_baseExtremum();
    var baseGt = require_baseGt();
    var identity7 = require_identity();
    function max3(array) {
      return array && array.length ? baseExtremum(array, identity7, baseGt) : void 0;
    }
    module.exports = max3;
  }
});

// node_modules/lodash/_baseLt.js
var require_baseLt = __commonJS({
  "node_modules/lodash/_baseLt.js"(exports, module) {
    function baseLt(value, other) {
      return value < other;
    }
    module.exports = baseLt;
  }
});

// node_modules/lodash/min.js
var require_min = __commonJS({
  "node_modules/lodash/min.js"(exports, module) {
    var baseExtremum = require_baseExtremum();
    var baseLt = require_baseLt();
    var identity7 = require_identity();
    function min3(array) {
      return array && array.length ? baseExtremum(array, identity7, baseLt) : void 0;
    }
    module.exports = min3;
  }
});

// node_modules/lodash/map.js
var require_map = __commonJS({
  "node_modules/lodash/map.js"(exports, module) {
    var arrayMap = require_arrayMap();
    var baseIteratee = require_baseIteratee();
    var baseMap = require_baseMap();
    var isArray2 = require_isArray();
    function map3(collection, iteratee) {
      var func = isArray2(collection) ? arrayMap : baseMap;
      return func(collection, baseIteratee(iteratee, 3));
    }
    module.exports = map3;
  }
});

// node_modules/lodash/flatMap.js
var require_flatMap = __commonJS({
  "node_modules/lodash/flatMap.js"(exports, module) {
    var baseFlatten = require_baseFlatten();
    var map3 = require_map();
    function flatMap2(collection, iteratee) {
      return baseFlatten(map3(collection, iteratee), 1);
    }
    module.exports = flatMap2;
  }
});

// node_modules/lodash/isEqual.js
var require_isEqual = __commonJS({
  "node_modules/lodash/isEqual.js"(exports, module) {
    var baseIsEqual = require_baseIsEqual();
    function isEqual4(value, other) {
      return baseIsEqual(value, other);
    }
    module.exports = isEqual4;
  }
});

// node_modules/decimal.js-light/decimal.js
var require_decimal = __commonJS({
  "node_modules/decimal.js-light/decimal.js"(exports, module) {
    (function(globalScope) {
      "use strict";
      var MAX_DIGITS = 1e9, Decimal3 = {
        // These values must be integers within the stated ranges (inclusive).
        // Most of these values can be changed during run-time using `Decimal.config`.
        // The maximum number of significant digits of the result of a calculation or base conversion.
        // E.g. `Decimal.config({ precision: 20 });`
        precision: 20,
        // 1 to MAX_DIGITS
        // The rounding mode used by default by `toInteger`, `toDecimalPlaces`, `toExponential`,
        // `toFixed`, `toPrecision` and `toSignificantDigits`.
        //
        // ROUND_UP         0 Away from zero.
        // ROUND_DOWN       1 Towards zero.
        // ROUND_CEIL       2 Towards +Infinity.
        // ROUND_FLOOR      3 Towards -Infinity.
        // ROUND_HALF_UP    4 Towards nearest neighbour. If equidistant, up.
        // ROUND_HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
        // ROUND_HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
        // ROUND_HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
        // ROUND_HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
        //
        // E.g.
        // `Decimal.rounding = 4;`
        // `Decimal.rounding = Decimal.ROUND_HALF_UP;`
        rounding: 4,
        // 0 to 8
        // The exponent value at and beneath which `toString` returns exponential notation.
        // JavaScript numbers: -7
        toExpNeg: -7,
        // 0 to -MAX_E
        // The exponent value at and above which `toString` returns exponential notation.
        // JavaScript numbers: 21
        toExpPos: 21,
        // 0 to MAX_E
        // The natural logarithm of 10.
        // 115 digits
        LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
      }, external = true, decimalError = "[DecimalError] ", invalidArgument = decimalError + "Invalid argument: ", exponentOutOfRange = decimalError + "Exponent out of range: ", mathfloor = Math.floor, mathpow = Math.pow, isDecimal = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, ONE, BASE = 1e7, LOG_BASE = 7, MAX_SAFE_INTEGER = 9007199254740991, MAX_E = mathfloor(MAX_SAFE_INTEGER / LOG_BASE), P = {};
      P.absoluteValue = P.abs = function() {
        var x2 = new this.constructor(this);
        if (x2.s)
          x2.s = 1;
        return x2;
      };
      P.comparedTo = P.cmp = function(y2) {
        var i, j, xdL, ydL, x2 = this;
        y2 = new x2.constructor(y2);
        if (x2.s !== y2.s)
          return x2.s || -y2.s;
        if (x2.e !== y2.e)
          return x2.e > y2.e ^ x2.s < 0 ? 1 : -1;
        xdL = x2.d.length;
        ydL = y2.d.length;
        for (i = 0, j = xdL < ydL ? xdL : ydL; i < j; ++i) {
          if (x2.d[i] !== y2.d[i])
            return x2.d[i] > y2.d[i] ^ x2.s < 0 ? 1 : -1;
        }
        return xdL === ydL ? 0 : xdL > ydL ^ x2.s < 0 ? 1 : -1;
      };
      P.decimalPlaces = P.dp = function() {
        var x2 = this, w = x2.d.length - 1, dp = (w - x2.e) * LOG_BASE;
        w = x2.d[w];
        if (w)
          for (; w % 10 == 0; w /= 10)
            dp--;
        return dp < 0 ? 0 : dp;
      };
      P.dividedBy = P.div = function(y2) {
        return divide(this, new this.constructor(y2));
      };
      P.dividedToIntegerBy = P.idiv = function(y2) {
        var x2 = this, Ctor = x2.constructor;
        return round(divide(x2, new Ctor(y2), 0, 1), Ctor.precision);
      };
      P.equals = P.eq = function(y2) {
        return !this.cmp(y2);
      };
      P.exponent = function() {
        return getBase10Exponent(this);
      };
      P.greaterThan = P.gt = function(y2) {
        return this.cmp(y2) > 0;
      };
      P.greaterThanOrEqualTo = P.gte = function(y2) {
        return this.cmp(y2) >= 0;
      };
      P.isInteger = P.isint = function() {
        return this.e > this.d.length - 2;
      };
      P.isNegative = P.isneg = function() {
        return this.s < 0;
      };
      P.isPositive = P.ispos = function() {
        return this.s > 0;
      };
      P.isZero = function() {
        return this.s === 0;
      };
      P.lessThan = P.lt = function(y2) {
        return this.cmp(y2) < 0;
      };
      P.lessThanOrEqualTo = P.lte = function(y2) {
        return this.cmp(y2) < 1;
      };
      P.logarithm = P.log = function(base) {
        var r, x2 = this, Ctor = x2.constructor, pr = Ctor.precision, wpr = pr + 5;
        if (base === void 0) {
          base = new Ctor(10);
        } else {
          base = new Ctor(base);
          if (base.s < 1 || base.eq(ONE))
            throw Error(decimalError + "NaN");
        }
        if (x2.s < 1)
          throw Error(decimalError + (x2.s ? "NaN" : "-Infinity"));
        if (x2.eq(ONE))
          return new Ctor(0);
        external = false;
        r = divide(ln(x2, wpr), ln(base, wpr), wpr);
        external = true;
        return round(r, pr);
      };
      P.minus = P.sub = function(y2) {
        var x2 = this;
        y2 = new x2.constructor(y2);
        return x2.s == y2.s ? subtract(x2, y2) : add(x2, (y2.s = -y2.s, y2));
      };
      P.modulo = P.mod = function(y2) {
        var q, x2 = this, Ctor = x2.constructor, pr = Ctor.precision;
        y2 = new Ctor(y2);
        if (!y2.s)
          throw Error(decimalError + "NaN");
        if (!x2.s)
          return round(new Ctor(x2), pr);
        external = false;
        q = divide(x2, y2, 0, 1).times(y2);
        external = true;
        return x2.minus(q);
      };
      P.naturalExponential = P.exp = function() {
        return exp(this);
      };
      P.naturalLogarithm = P.ln = function() {
        return ln(this);
      };
      P.negated = P.neg = function() {
        var x2 = new this.constructor(this);
        x2.s = -x2.s || 0;
        return x2;
      };
      P.plus = P.add = function(y2) {
        var x2 = this;
        y2 = new x2.constructor(y2);
        return x2.s == y2.s ? add(x2, y2) : subtract(x2, (y2.s = -y2.s, y2));
      };
      P.precision = P.sd = function(z) {
        var e, sd, w, x2 = this;
        if (z !== void 0 && z !== !!z && z !== 1 && z !== 0)
          throw Error(invalidArgument + z);
        e = getBase10Exponent(x2) + 1;
        w = x2.d.length - 1;
        sd = w * LOG_BASE + 1;
        w = x2.d[w];
        if (w) {
          for (; w % 10 == 0; w /= 10)
            sd--;
          for (w = x2.d[0]; w >= 10; w /= 10)
            sd++;
        }
        return z && e > sd ? e : sd;
      };
      P.squareRoot = P.sqrt = function() {
        var e, n, pr, r, s2, t, wpr, x2 = this, Ctor = x2.constructor;
        if (x2.s < 1) {
          if (!x2.s)
            return new Ctor(0);
          throw Error(decimalError + "NaN");
        }
        e = getBase10Exponent(x2);
        external = false;
        s2 = Math.sqrt(+x2);
        if (s2 == 0 || s2 == 1 / 0) {
          n = digitsToString(x2.d);
          if ((n.length + e) % 2 == 0)
            n += "0";
          s2 = Math.sqrt(n);
          e = mathfloor((e + 1) / 2) - (e < 0 || e % 2);
          if (s2 == 1 / 0) {
            n = "5e" + e;
          } else {
            n = s2.toExponential();
            n = n.slice(0, n.indexOf("e") + 1) + e;
          }
          r = new Ctor(n);
        } else {
          r = new Ctor(s2.toString());
        }
        pr = Ctor.precision;
        s2 = wpr = pr + 3;
        for (; ; ) {
          t = r;
          r = t.plus(divide(x2, t, wpr + 2)).times(0.5);
          if (digitsToString(t.d).slice(0, wpr) === (n = digitsToString(r.d)).slice(0, wpr)) {
            n = n.slice(wpr - 3, wpr + 1);
            if (s2 == wpr && n == "4999") {
              round(t, pr + 1, 0);
              if (t.times(t).eq(x2)) {
                r = t;
                break;
              }
            } else if (n != "9999") {
              break;
            }
            wpr += 4;
          }
        }
        external = true;
        return round(r, pr);
      };
      P.times = P.mul = function(y2) {
        var carry, e, i, k2, r, rL, t, xdL, ydL, x2 = this, Ctor = x2.constructor, xd = x2.d, yd = (y2 = new Ctor(y2)).d;
        if (!x2.s || !y2.s)
          return new Ctor(0);
        y2.s *= x2.s;
        e = x2.e + y2.e;
        xdL = xd.length;
        ydL = yd.length;
        if (xdL < ydL) {
          r = xd;
          xd = yd;
          yd = r;
          rL = xdL;
          xdL = ydL;
          ydL = rL;
        }
        r = [];
        rL = xdL + ydL;
        for (i = rL; i--; )
          r.push(0);
        for (i = ydL; --i >= 0; ) {
          carry = 0;
          for (k2 = xdL + i; k2 > i; ) {
            t = r[k2] + yd[i] * xd[k2 - i - 1] + carry;
            r[k2--] = t % BASE | 0;
            carry = t / BASE | 0;
          }
          r[k2] = (r[k2] + carry) % BASE | 0;
        }
        for (; !r[--rL]; )
          r.pop();
        if (carry)
          ++e;
        else
          r.shift();
        y2.d = r;
        y2.e = e;
        return external ? round(y2, Ctor.precision) : y2;
      };
      P.toDecimalPlaces = P.todp = function(dp, rm) {
        var x2 = this, Ctor = x2.constructor;
        x2 = new Ctor(x2);
        if (dp === void 0)
          return x2;
        checkInt32(dp, 0, MAX_DIGITS);
        if (rm === void 0)
          rm = Ctor.rounding;
        else
          checkInt32(rm, 0, 8);
        return round(x2, dp + getBase10Exponent(x2) + 1, rm);
      };
      P.toExponential = function(dp, rm) {
        var str, x2 = this, Ctor = x2.constructor;
        if (dp === void 0) {
          str = toString(x2, true);
        } else {
          checkInt32(dp, 0, MAX_DIGITS);
          if (rm === void 0)
            rm = Ctor.rounding;
          else
            checkInt32(rm, 0, 8);
          x2 = round(new Ctor(x2), dp + 1, rm);
          str = toString(x2, true, dp + 1);
        }
        return str;
      };
      P.toFixed = function(dp, rm) {
        var str, y2, x2 = this, Ctor = x2.constructor;
        if (dp === void 0)
          return toString(x2);
        checkInt32(dp, 0, MAX_DIGITS);
        if (rm === void 0)
          rm = Ctor.rounding;
        else
          checkInt32(rm, 0, 8);
        y2 = round(new Ctor(x2), dp + getBase10Exponent(x2) + 1, rm);
        str = toString(y2.abs(), false, dp + getBase10Exponent(y2) + 1);
        return x2.isneg() && !x2.isZero() ? "-" + str : str;
      };
      P.toInteger = P.toint = function() {
        var x2 = this, Ctor = x2.constructor;
        return round(new Ctor(x2), getBase10Exponent(x2) + 1, Ctor.rounding);
      };
      P.toNumber = function() {
        return +this;
      };
      P.toPower = P.pow = function(y2) {
        var e, k2, pr, r, sign2, yIsInt, x2 = this, Ctor = x2.constructor, guard = 12, yn = +(y2 = new Ctor(y2));
        if (!y2.s)
          return new Ctor(ONE);
        x2 = new Ctor(x2);
        if (!x2.s) {
          if (y2.s < 1)
            throw Error(decimalError + "Infinity");
          return x2;
        }
        if (x2.eq(ONE))
          return x2;
        pr = Ctor.precision;
        if (y2.eq(ONE))
          return round(x2, pr);
        e = y2.e;
        k2 = y2.d.length - 1;
        yIsInt = e >= k2;
        sign2 = x2.s;
        if (!yIsInt) {
          if (sign2 < 0)
            throw Error(decimalError + "NaN");
        } else if ((k2 = yn < 0 ? -yn : yn) <= MAX_SAFE_INTEGER) {
          r = new Ctor(ONE);
          e = Math.ceil(pr / LOG_BASE + 4);
          external = false;
          for (; ; ) {
            if (k2 % 2) {
              r = r.times(x2);
              truncate(r.d, e);
            }
            k2 = mathfloor(k2 / 2);
            if (k2 === 0)
              break;
            x2 = x2.times(x2);
            truncate(x2.d, e);
          }
          external = true;
          return y2.s < 0 ? new Ctor(ONE).div(r) : round(r, pr);
        }
        sign2 = sign2 < 0 && y2.d[Math.max(e, k2)] & 1 ? -1 : 1;
        x2.s = 1;
        external = false;
        r = y2.times(ln(x2, pr + guard));
        external = true;
        r = exp(r);
        r.s = sign2;
        return r;
      };
      P.toPrecision = function(sd, rm) {
        var e, str, x2 = this, Ctor = x2.constructor;
        if (sd === void 0) {
          e = getBase10Exponent(x2);
          str = toString(x2, e <= Ctor.toExpNeg || e >= Ctor.toExpPos);
        } else {
          checkInt32(sd, 1, MAX_DIGITS);
          if (rm === void 0)
            rm = Ctor.rounding;
          else
            checkInt32(rm, 0, 8);
          x2 = round(new Ctor(x2), sd, rm);
          e = getBase10Exponent(x2);
          str = toString(x2, sd <= e || e <= Ctor.toExpNeg, sd);
        }
        return str;
      };
      P.toSignificantDigits = P.tosd = function(sd, rm) {
        var x2 = this, Ctor = x2.constructor;
        if (sd === void 0) {
          sd = Ctor.precision;
          rm = Ctor.rounding;
        } else {
          checkInt32(sd, 1, MAX_DIGITS);
          if (rm === void 0)
            rm = Ctor.rounding;
          else
            checkInt32(rm, 0, 8);
        }
        return round(new Ctor(x2), sd, rm);
      };
      P.toString = P.valueOf = P.val = P.toJSON = function() {
        var x2 = this, e = getBase10Exponent(x2), Ctor = x2.constructor;
        return toString(x2, e <= Ctor.toExpNeg || e >= Ctor.toExpPos);
      };
      function add(x2, y2) {
        var carry, d, e, i, k2, len, xd, yd, Ctor = x2.constructor, pr = Ctor.precision;
        if (!x2.s || !y2.s) {
          if (!y2.s)
            y2 = new Ctor(x2);
          return external ? round(y2, pr) : y2;
        }
        xd = x2.d;
        yd = y2.d;
        k2 = x2.e;
        e = y2.e;
        xd = xd.slice();
        i = k2 - e;
        if (i) {
          if (i < 0) {
            d = xd;
            i = -i;
            len = yd.length;
          } else {
            d = yd;
            e = k2;
            len = xd.length;
          }
          k2 = Math.ceil(pr / LOG_BASE);
          len = k2 > len ? k2 + 1 : len + 1;
          if (i > len) {
            i = len;
            d.length = 1;
          }
          d.reverse();
          for (; i--; )
            d.push(0);
          d.reverse();
        }
        len = xd.length;
        i = yd.length;
        if (len - i < 0) {
          i = len;
          d = yd;
          yd = xd;
          xd = d;
        }
        for (carry = 0; i; ) {
          carry = (xd[--i] = xd[i] + yd[i] + carry) / BASE | 0;
          xd[i] %= BASE;
        }
        if (carry) {
          xd.unshift(carry);
          ++e;
        }
        for (len = xd.length; xd[--len] == 0; )
          xd.pop();
        y2.d = xd;
        y2.e = e;
        return external ? round(y2, pr) : y2;
      }
      function checkInt32(i, min3, max3) {
        if (i !== ~~i || i < min3 || i > max3) {
          throw Error(invalidArgument + i);
        }
      }
      function digitsToString(d) {
        var i, k2, ws, indexOfLastWord = d.length - 1, str = "", w = d[0];
        if (indexOfLastWord > 0) {
          str += w;
          for (i = 1; i < indexOfLastWord; i++) {
            ws = d[i] + "";
            k2 = LOG_BASE - ws.length;
            if (k2)
              str += getZeroString(k2);
            str += ws;
          }
          w = d[i];
          ws = w + "";
          k2 = LOG_BASE - ws.length;
          if (k2)
            str += getZeroString(k2);
        } else if (w === 0) {
          return "0";
        }
        for (; w % 10 === 0; )
          w /= 10;
        return str + w;
      }
      var divide = function() {
        function multiplyInteger(x2, k2) {
          var temp, carry = 0, i = x2.length;
          for (x2 = x2.slice(); i--; ) {
            temp = x2[i] * k2 + carry;
            x2[i] = temp % BASE | 0;
            carry = temp / BASE | 0;
          }
          if (carry)
            x2.unshift(carry);
          return x2;
        }
        function compare(a2, b, aL, bL) {
          var i, r;
          if (aL != bL) {
            r = aL > bL ? 1 : -1;
          } else {
            for (i = r = 0; i < aL; i++) {
              if (a2[i] != b[i]) {
                r = a2[i] > b[i] ? 1 : -1;
                break;
              }
            }
          }
          return r;
        }
        function subtract2(a2, b, aL) {
          var i = 0;
          for (; aL--; ) {
            a2[aL] -= i;
            i = a2[aL] < b[aL] ? 1 : 0;
            a2[aL] = i * BASE + a2[aL] - b[aL];
          }
          for (; !a2[0] && a2.length > 1; )
            a2.shift();
        }
        return function(x2, y2, pr, dp) {
          var cmp, e, i, k2, prod, prodL, q, qd, rem, remL, rem0, sd, t, xi, xL, yd0, yL, yz, Ctor = x2.constructor, sign2 = x2.s == y2.s ? 1 : -1, xd = x2.d, yd = y2.d;
          if (!x2.s)
            return new Ctor(x2);
          if (!y2.s)
            throw Error(decimalError + "Division by zero");
          e = x2.e - y2.e;
          yL = yd.length;
          xL = xd.length;
          q = new Ctor(sign2);
          qd = q.d = [];
          for (i = 0; yd[i] == (xd[i] || 0); )
            ++i;
          if (yd[i] > (xd[i] || 0))
            --e;
          if (pr == null) {
            sd = pr = Ctor.precision;
          } else if (dp) {
            sd = pr + (getBase10Exponent(x2) - getBase10Exponent(y2)) + 1;
          } else {
            sd = pr;
          }
          if (sd < 0)
            return new Ctor(0);
          sd = sd / LOG_BASE + 2 | 0;
          i = 0;
          if (yL == 1) {
            k2 = 0;
            yd = yd[0];
            sd++;
            for (; (i < xL || k2) && sd--; i++) {
              t = k2 * BASE + (xd[i] || 0);
              qd[i] = t / yd | 0;
              k2 = t % yd | 0;
            }
          } else {
            k2 = BASE / (yd[0] + 1) | 0;
            if (k2 > 1) {
              yd = multiplyInteger(yd, k2);
              xd = multiplyInteger(xd, k2);
              yL = yd.length;
              xL = xd.length;
            }
            xi = yL;
            rem = xd.slice(0, yL);
            remL = rem.length;
            for (; remL < yL; )
              rem[remL++] = 0;
            yz = yd.slice();
            yz.unshift(0);
            yd0 = yd[0];
            if (yd[1] >= BASE / 2)
              ++yd0;
            do {
              k2 = 0;
              cmp = compare(yd, rem, yL, remL);
              if (cmp < 0) {
                rem0 = rem[0];
                if (yL != remL)
                  rem0 = rem0 * BASE + (rem[1] || 0);
                k2 = rem0 / yd0 | 0;
                if (k2 > 1) {
                  if (k2 >= BASE)
                    k2 = BASE - 1;
                  prod = multiplyInteger(yd, k2);
                  prodL = prod.length;
                  remL = rem.length;
                  cmp = compare(prod, rem, prodL, remL);
                  if (cmp == 1) {
                    k2--;
                    subtract2(prod, yL < prodL ? yz : yd, prodL);
                  }
                } else {
                  if (k2 == 0)
                    cmp = k2 = 1;
                  prod = yd.slice();
                }
                prodL = prod.length;
                if (prodL < remL)
                  prod.unshift(0);
                subtract2(rem, prod, remL);
                if (cmp == -1) {
                  remL = rem.length;
                  cmp = compare(yd, rem, yL, remL);
                  if (cmp < 1) {
                    k2++;
                    subtract2(rem, yL < remL ? yz : yd, remL);
                  }
                }
                remL = rem.length;
              } else if (cmp === 0) {
                k2++;
                rem = [0];
              }
              qd[i++] = k2;
              if (cmp && rem[0]) {
                rem[remL++] = xd[xi] || 0;
              } else {
                rem = [xd[xi]];
                remL = 1;
              }
            } while ((xi++ < xL || rem[0] !== void 0) && sd--);
          }
          if (!qd[0])
            qd.shift();
          q.e = e;
          return round(q, dp ? pr + getBase10Exponent(q) + 1 : pr);
        };
      }();
      function exp(x2, sd) {
        var denominator, guard, pow2, sum, t, wpr, i = 0, k2 = 0, Ctor = x2.constructor, pr = Ctor.precision;
        if (getBase10Exponent(x2) > 16)
          throw Error(exponentOutOfRange + getBase10Exponent(x2));
        if (!x2.s)
          return new Ctor(ONE);
        if (sd == null) {
          external = false;
          wpr = pr;
        } else {
          wpr = sd;
        }
        t = new Ctor(0.03125);
        while (x2.abs().gte(0.1)) {
          x2 = x2.times(t);
          k2 += 5;
        }
        guard = Math.log(mathpow(2, k2)) / Math.LN10 * 2 + 5 | 0;
        wpr += guard;
        denominator = pow2 = sum = new Ctor(ONE);
        Ctor.precision = wpr;
        for (; ; ) {
          pow2 = round(pow2.times(x2), wpr);
          denominator = denominator.times(++i);
          t = sum.plus(divide(pow2, denominator, wpr));
          if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum.d).slice(0, wpr)) {
            while (k2--)
              sum = round(sum.times(sum), wpr);
            Ctor.precision = pr;
            return sd == null ? (external = true, round(sum, pr)) : sum;
          }
          sum = t;
        }
      }
      function getBase10Exponent(x2) {
        var e = x2.e * LOG_BASE, w = x2.d[0];
        for (; w >= 10; w /= 10)
          e++;
        return e;
      }
      function getLn10(Ctor, sd, pr) {
        if (sd > Ctor.LN10.sd()) {
          external = true;
          if (pr)
            Ctor.precision = pr;
          throw Error(decimalError + "LN10 precision limit exceeded");
        }
        return round(new Ctor(Ctor.LN10), sd);
      }
      function getZeroString(k2) {
        var zs = "";
        for (; k2--; )
          zs += "0";
        return zs;
      }
      function ln(y2, sd) {
        var c2, c0, denominator, e, numerator, sum, t, wpr, x2, n = 1, guard = 10, x3 = y2, xd = x3.d, Ctor = x3.constructor, pr = Ctor.precision;
        if (x3.s < 1)
          throw Error(decimalError + (x3.s ? "NaN" : "-Infinity"));
        if (x3.eq(ONE))
          return new Ctor(0);
        if (sd == null) {
          external = false;
          wpr = pr;
        } else {
          wpr = sd;
        }
        if (x3.eq(10)) {
          if (sd == null)
            external = true;
          return getLn10(Ctor, wpr);
        }
        wpr += guard;
        Ctor.precision = wpr;
        c2 = digitsToString(xd);
        c0 = c2.charAt(0);
        e = getBase10Exponent(x3);
        if (Math.abs(e) < 15e14) {
          while (c0 < 7 && c0 != 1 || c0 == 1 && c2.charAt(1) > 3) {
            x3 = x3.times(y2);
            c2 = digitsToString(x3.d);
            c0 = c2.charAt(0);
            n++;
          }
          e = getBase10Exponent(x3);
          if (c0 > 1) {
            x3 = new Ctor("0." + c2);
            e++;
          } else {
            x3 = new Ctor(c0 + "." + c2.slice(1));
          }
        } else {
          t = getLn10(Ctor, wpr + 2, pr).times(e + "");
          x3 = ln(new Ctor(c0 + "." + c2.slice(1)), wpr - guard).plus(t);
          Ctor.precision = pr;
          return sd == null ? (external = true, round(x3, pr)) : x3;
        }
        sum = numerator = x3 = divide(x3.minus(ONE), x3.plus(ONE), wpr);
        x2 = round(x3.times(x3), wpr);
        denominator = 3;
        for (; ; ) {
          numerator = round(numerator.times(x2), wpr);
          t = sum.plus(divide(numerator, new Ctor(denominator), wpr));
          if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum.d).slice(0, wpr)) {
            sum = sum.times(2);
            if (e !== 0)
              sum = sum.plus(getLn10(Ctor, wpr + 2, pr).times(e + ""));
            sum = divide(sum, new Ctor(n), wpr);
            Ctor.precision = pr;
            return sd == null ? (external = true, round(sum, pr)) : sum;
          }
          sum = t;
          denominator += 2;
        }
      }
      function parseDecimal(x2, str) {
        var e, i, len;
        if ((e = str.indexOf(".")) > -1)
          str = str.replace(".", "");
        if ((i = str.search(/e/i)) > 0) {
          if (e < 0)
            e = i;
          e += +str.slice(i + 1);
          str = str.substring(0, i);
        } else if (e < 0) {
          e = str.length;
        }
        for (i = 0; str.charCodeAt(i) === 48; )
          ++i;
        for (len = str.length; str.charCodeAt(len - 1) === 48; )
          --len;
        str = str.slice(i, len);
        if (str) {
          len -= i;
          e = e - i - 1;
          x2.e = mathfloor(e / LOG_BASE);
          x2.d = [];
          i = (e + 1) % LOG_BASE;
          if (e < 0)
            i += LOG_BASE;
          if (i < len) {
            if (i)
              x2.d.push(+str.slice(0, i));
            for (len -= LOG_BASE; i < len; )
              x2.d.push(+str.slice(i, i += LOG_BASE));
            str = str.slice(i);
            i = LOG_BASE - str.length;
          } else {
            i -= len;
          }
          for (; i--; )
            str += "0";
          x2.d.push(+str);
          if (external && (x2.e > MAX_E || x2.e < -MAX_E))
            throw Error(exponentOutOfRange + e);
        } else {
          x2.s = 0;
          x2.e = 0;
          x2.d = [0];
        }
        return x2;
      }
      function round(x2, sd, rm) {
        var i, j, k2, n, rd, doRound, w, xdi, xd = x2.d;
        for (n = 1, k2 = xd[0]; k2 >= 10; k2 /= 10)
          n++;
        i = sd - n;
        if (i < 0) {
          i += LOG_BASE;
          j = sd;
          w = xd[xdi = 0];
        } else {
          xdi = Math.ceil((i + 1) / LOG_BASE);
          k2 = xd.length;
          if (xdi >= k2)
            return x2;
          w = k2 = xd[xdi];
          for (n = 1; k2 >= 10; k2 /= 10)
            n++;
          i %= LOG_BASE;
          j = i - LOG_BASE + n;
        }
        if (rm !== void 0) {
          k2 = mathpow(10, n - j - 1);
          rd = w / k2 % 10 | 0;
          doRound = sd < 0 || xd[xdi + 1] !== void 0 || w % k2;
          doRound = rm < 4 ? (rd || doRound) && (rm == 0 || rm == (x2.s < 0 ? 3 : 2)) : rd > 5 || rd == 5 && (rm == 4 || doRound || rm == 6 && // Check whether the digit to the left of the rounding digit is odd.
          (i > 0 ? j > 0 ? w / mathpow(10, n - j) : 0 : xd[xdi - 1]) % 10 & 1 || rm == (x2.s < 0 ? 8 : 7));
        }
        if (sd < 1 || !xd[0]) {
          if (doRound) {
            k2 = getBase10Exponent(x2);
            xd.length = 1;
            sd = sd - k2 - 1;
            xd[0] = mathpow(10, (LOG_BASE - sd % LOG_BASE) % LOG_BASE);
            x2.e = mathfloor(-sd / LOG_BASE) || 0;
          } else {
            xd.length = 1;
            xd[0] = x2.e = x2.s = 0;
          }
          return x2;
        }
        if (i == 0) {
          xd.length = xdi;
          k2 = 1;
          xdi--;
        } else {
          xd.length = xdi + 1;
          k2 = mathpow(10, LOG_BASE - i);
          xd[xdi] = j > 0 ? (w / mathpow(10, n - j) % mathpow(10, j) | 0) * k2 : 0;
        }
        if (doRound) {
          for (; ; ) {
            if (xdi == 0) {
              if ((xd[0] += k2) == BASE) {
                xd[0] = 1;
                ++x2.e;
              }
              break;
            } else {
              xd[xdi] += k2;
              if (xd[xdi] != BASE)
                break;
              xd[xdi--] = 0;
              k2 = 1;
            }
          }
        }
        for (i = xd.length; xd[--i] === 0; )
          xd.pop();
        if (external && (x2.e > MAX_E || x2.e < -MAX_E)) {
          throw Error(exponentOutOfRange + getBase10Exponent(x2));
        }
        return x2;
      }
      function subtract(x2, y2) {
        var d, e, i, j, k2, len, xd, xe, xLTy, yd, Ctor = x2.constructor, pr = Ctor.precision;
        if (!x2.s || !y2.s) {
          if (y2.s)
            y2.s = -y2.s;
          else
            y2 = new Ctor(x2);
          return external ? round(y2, pr) : y2;
        }
        xd = x2.d;
        yd = y2.d;
        e = y2.e;
        xe = x2.e;
        xd = xd.slice();
        k2 = xe - e;
        if (k2) {
          xLTy = k2 < 0;
          if (xLTy) {
            d = xd;
            k2 = -k2;
            len = yd.length;
          } else {
            d = yd;
            e = xe;
            len = xd.length;
          }
          i = Math.max(Math.ceil(pr / LOG_BASE), len) + 2;
          if (k2 > i) {
            k2 = i;
            d.length = 1;
          }
          d.reverse();
          for (i = k2; i--; )
            d.push(0);
          d.reverse();
        } else {
          i = xd.length;
          len = yd.length;
          xLTy = i < len;
          if (xLTy)
            len = i;
          for (i = 0; i < len; i++) {
            if (xd[i] != yd[i]) {
              xLTy = xd[i] < yd[i];
              break;
            }
          }
          k2 = 0;
        }
        if (xLTy) {
          d = xd;
          xd = yd;
          yd = d;
          y2.s = -y2.s;
        }
        len = xd.length;
        for (i = yd.length - len; i > 0; --i)
          xd[len++] = 0;
        for (i = yd.length; i > k2; ) {
          if (xd[--i] < yd[i]) {
            for (j = i; j && xd[--j] === 0; )
              xd[j] = BASE - 1;
            --xd[j];
            xd[i] += BASE;
          }
          xd[i] -= yd[i];
        }
        for (; xd[--len] === 0; )
          xd.pop();
        for (; xd[0] === 0; xd.shift())
          --e;
        if (!xd[0])
          return new Ctor(0);
        y2.d = xd;
        y2.e = e;
        return external ? round(y2, pr) : y2;
      }
      function toString(x2, isExp, sd) {
        var k2, e = getBase10Exponent(x2), str = digitsToString(x2.d), len = str.length;
        if (isExp) {
          if (sd && (k2 = sd - len) > 0) {
            str = str.charAt(0) + "." + str.slice(1) + getZeroString(k2);
          } else if (len > 1) {
            str = str.charAt(0) + "." + str.slice(1);
          }
          str = str + (e < 0 ? "e" : "e+") + e;
        } else if (e < 0) {
          str = "0." + getZeroString(-e - 1) + str;
          if (sd && (k2 = sd - len) > 0)
            str += getZeroString(k2);
        } else if (e >= len) {
          str += getZeroString(e + 1 - len);
          if (sd && (k2 = sd - e - 1) > 0)
            str = str + "." + getZeroString(k2);
        } else {
          if ((k2 = e + 1) < len)
            str = str.slice(0, k2) + "." + str.slice(k2);
          if (sd && (k2 = sd - len) > 0) {
            if (e + 1 === len)
              str += ".";
            str += getZeroString(k2);
          }
        }
        return x2.s < 0 ? "-" + str : str;
      }
      function truncate(arr, len) {
        if (arr.length > len) {
          arr.length = len;
          return true;
        }
      }
      function clone(obj) {
        var i, p, ps;
        function Decimal4(value) {
          var x2 = this;
          if (!(x2 instanceof Decimal4))
            return new Decimal4(value);
          x2.constructor = Decimal4;
          if (value instanceof Decimal4) {
            x2.s = value.s;
            x2.e = value.e;
            x2.d = (value = value.d) ? value.slice() : value;
            return;
          }
          if (typeof value === "number") {
            if (value * 0 !== 0) {
              throw Error(invalidArgument + value);
            }
            if (value > 0) {
              x2.s = 1;
            } else if (value < 0) {
              value = -value;
              x2.s = -1;
            } else {
              x2.s = 0;
              x2.e = 0;
              x2.d = [0];
              return;
            }
            if (value === ~~value && value < 1e7) {
              x2.e = 0;
              x2.d = [value];
              return;
            }
            return parseDecimal(x2, value.toString());
          } else if (typeof value !== "string") {
            throw Error(invalidArgument + value);
          }
          if (value.charCodeAt(0) === 45) {
            value = value.slice(1);
            x2.s = -1;
          } else {
            x2.s = 1;
          }
          if (isDecimal.test(value))
            parseDecimal(x2, value);
          else
            throw Error(invalidArgument + value);
        }
        Decimal4.prototype = P;
        Decimal4.ROUND_UP = 0;
        Decimal4.ROUND_DOWN = 1;
        Decimal4.ROUND_CEIL = 2;
        Decimal4.ROUND_FLOOR = 3;
        Decimal4.ROUND_HALF_UP = 4;
        Decimal4.ROUND_HALF_DOWN = 5;
        Decimal4.ROUND_HALF_EVEN = 6;
        Decimal4.ROUND_HALF_CEIL = 7;
        Decimal4.ROUND_HALF_FLOOR = 8;
        Decimal4.clone = clone;
        Decimal4.config = Decimal4.set = config;
        if (obj === void 0)
          obj = {};
        if (obj) {
          ps = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"];
          for (i = 0; i < ps.length; )
            if (!obj.hasOwnProperty(p = ps[i++]))
              obj[p] = this[p];
        }
        Decimal4.config(obj);
        return Decimal4;
      }
      function config(obj) {
        if (!obj || typeof obj !== "object") {
          throw Error(decimalError + "Object expected");
        }
        var i, p, v, ps = [
          "precision",
          1,
          MAX_DIGITS,
          "rounding",
          0,
          8,
          "toExpNeg",
          -1 / 0,
          0,
          "toExpPos",
          0,
          1 / 0
        ];
        for (i = 0; i < ps.length; i += 3) {
          if ((v = obj[p = ps[i]]) !== void 0) {
            if (mathfloor(v) === v && v >= ps[i + 1] && v <= ps[i + 2])
              this[p] = v;
            else
              throw Error(invalidArgument + p + ": " + v);
          }
        }
        if ((v = obj[p = "LN10"]) !== void 0) {
          if (v == Math.LN10)
            this[p] = new this(v);
          else
            throw Error(invalidArgument + p + ": " + v);
        }
        return this;
      }
      Decimal3 = clone(Decimal3);
      Decimal3["default"] = Decimal3.Decimal = Decimal3;
      ONE = new Decimal3(1);
      if (typeof define == "function" && define.amd) {
        define(function() {
          return Decimal3;
        });
      } else if (typeof module != "undefined" && module.exports) {
        module.exports = Decimal3;
      } else {
        if (!globalScope) {
          globalScope = typeof self != "undefined" && self && self.self == self ? self : Function("return this")();
        }
        globalScope.Decimal = Decimal3;
      }
    })(exports);
  }
});

// node_modules/lodash/last.js
var require_last = __commonJS({
  "node_modules/lodash/last.js"(exports, module) {
    function last2(array) {
      var length = array == null ? 0 : array.length;
      return length ? array[length - 1] : void 0;
    }
    module.exports = last2;
  }
});

// node_modules/lodash/_getPrototype.js
var require_getPrototype = __commonJS({
  "node_modules/lodash/_getPrototype.js"(exports, module) {
    var overArg = require_overArg();
    var getPrototype = overArg(Object.getPrototypeOf, Object);
    module.exports = getPrototype;
  }
});

// node_modules/lodash/isPlainObject.js
var require_isPlainObject = __commonJS({
  "node_modules/lodash/isPlainObject.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var getPrototype = require_getPrototype();
    var isObjectLike = require_isObjectLike();
    var objectTag = "[object Object]";
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var funcToString = funcProto.toString;
    var hasOwnProperty2 = objectProto.hasOwnProperty;
    var objectCtorString = funcToString.call(Object);
    function isPlainObject2(value) {
      if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
        return false;
      }
      var proto = getPrototype(value);
      if (proto === null) {
        return true;
      }
      var Ctor = hasOwnProperty2.call(proto, "constructor") && proto.constructor;
      return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
    }
    module.exports = isPlainObject2;
  }
});

// node_modules/lodash/isBoolean.js
var require_isBoolean = __commonJS({
  "node_modules/lodash/isBoolean.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isObjectLike = require_isObjectLike();
    var boolTag = "[object Boolean]";
    function isBoolean2(value) {
      return value === true || value === false || isObjectLike(value) && baseGetTag(value) == boolTag;
    }
    module.exports = isBoolean2;
  }
});

// node_modules/lodash/_baseRange.js
var require_baseRange = __commonJS({
  "node_modules/lodash/_baseRange.js"(exports, module) {
    var nativeCeil = Math.ceil;
    var nativeMax = Math.max;
    function baseRange(start, end, step, fromRight) {
      var index = -1, length = nativeMax(nativeCeil((end - start) / (step || 1)), 0), result = Array(length);
      while (length--) {
        result[fromRight ? length : ++index] = start;
        start += step;
      }
      return result;
    }
    module.exports = baseRange;
  }
});

// node_modules/lodash/toFinite.js
var require_toFinite = __commonJS({
  "node_modules/lodash/toFinite.js"(exports, module) {
    var toNumber = require_toNumber();
    var INFINITY = 1 / 0;
    var MAX_INTEGER = 17976931348623157e292;
    function toFinite(value) {
      if (!value) {
        return value === 0 ? value : 0;
      }
      value = toNumber(value);
      if (value === INFINITY || value === -INFINITY) {
        var sign2 = value < 0 ? -1 : 1;
        return sign2 * MAX_INTEGER;
      }
      return value === value ? value : 0;
    }
    module.exports = toFinite;
  }
});

// node_modules/lodash/_createRange.js
var require_createRange = __commonJS({
  "node_modules/lodash/_createRange.js"(exports, module) {
    var baseRange = require_baseRange();
    var isIterateeCall = require_isIterateeCall();
    var toFinite = require_toFinite();
    function createRange(fromRight) {
      return function(start, end, step) {
        if (step && typeof step != "number" && isIterateeCall(start, end, step)) {
          end = step = void 0;
        }
        start = toFinite(start);
        if (end === void 0) {
          end = start;
          start = 0;
        } else {
          end = toFinite(end);
        }
        step = step === void 0 ? start < end ? 1 : -1 : toFinite(step);
        return baseRange(start, end, step, fromRight);
      };
    }
    module.exports = createRange;
  }
});

// node_modules/lodash/range.js
var require_range = __commonJS({
  "node_modules/lodash/range.js"(exports, module) {
    var createRange = require_createRange();
    var range6 = createRange();
    module.exports = range6;
  }
});

// node_modules/lodash/_baseSome.js
var require_baseSome = __commonJS({
  "node_modules/lodash/_baseSome.js"(exports, module) {
    var baseEach = require_baseEach();
    function baseSome(collection, predicate) {
      var result;
      baseEach(collection, function(value, index, collection2) {
        result = predicate(value, index, collection2);
        return !result;
      });
      return !!result;
    }
    module.exports = baseSome;
  }
});

// node_modules/lodash/some.js
var require_some = __commonJS({
  "node_modules/lodash/some.js"(exports, module) {
    var arraySome = require_arraySome();
    var baseIteratee = require_baseIteratee();
    var baseSome = require_baseSome();
    var isArray2 = require_isArray();
    var isIterateeCall = require_isIterateeCall();
    function some2(collection, predicate, guard) {
      var func = isArray2(collection) ? arraySome : baseSome;
      if (guard && isIterateeCall(collection, predicate, guard)) {
        predicate = void 0;
      }
      return func(collection, baseIteratee(predicate, 3));
    }
    module.exports = some2;
  }
});

// node_modules/lodash/_baseAssignValue.js
var require_baseAssignValue = __commonJS({
  "node_modules/lodash/_baseAssignValue.js"(exports, module) {
    var defineProperty = require_defineProperty();
    function baseAssignValue(object, key, value) {
      if (key == "__proto__" && defineProperty) {
        defineProperty(object, key, {
          "configurable": true,
          "enumerable": true,
          "value": value,
          "writable": true
        });
      } else {
        object[key] = value;
      }
    }
    module.exports = baseAssignValue;
  }
});

// node_modules/lodash/mapValues.js
var require_mapValues = __commonJS({
  "node_modules/lodash/mapValues.js"(exports, module) {
    var baseAssignValue = require_baseAssignValue();
    var baseForOwn = require_baseForOwn();
    var baseIteratee = require_baseIteratee();
    function mapValues2(object, iteratee) {
      var result = {};
      iteratee = baseIteratee(iteratee, 3);
      baseForOwn(object, function(value, key, object2) {
        baseAssignValue(result, key, iteratee(value, key, object2));
      });
      return result;
    }
    module.exports = mapValues2;
  }
});

// node_modules/lodash/_arrayEvery.js
var require_arrayEvery = __commonJS({
  "node_modules/lodash/_arrayEvery.js"(exports, module) {
    function arrayEvery(array, predicate) {
      var index = -1, length = array == null ? 0 : array.length;
      while (++index < length) {
        if (!predicate(array[index], index, array)) {
          return false;
        }
      }
      return true;
    }
    module.exports = arrayEvery;
  }
});

// node_modules/lodash/_baseEvery.js
var require_baseEvery = __commonJS({
  "node_modules/lodash/_baseEvery.js"(exports, module) {
    var baseEach = require_baseEach();
    function baseEvery(collection, predicate) {
      var result = true;
      baseEach(collection, function(value, index, collection2) {
        result = !!predicate(value, index, collection2);
        return result;
      });
      return result;
    }
    module.exports = baseEvery;
  }
});

// node_modules/lodash/every.js
var require_every = __commonJS({
  "node_modules/lodash/every.js"(exports, module) {
    var arrayEvery = require_arrayEvery();
    var baseEvery = require_baseEvery();
    var baseIteratee = require_baseIteratee();
    var isArray2 = require_isArray();
    var isIterateeCall = require_isIterateeCall();
    function every3(collection, predicate, guard) {
      var func = isArray2(collection) ? arrayEvery : baseEvery;
      if (guard && isIterateeCall(collection, predicate, guard)) {
        predicate = void 0;
      }
      return func(collection, baseIteratee(predicate, 3));
    }
    module.exports = every3;
  }
});

// node_modules/lodash/_createFind.js
var require_createFind = __commonJS({
  "node_modules/lodash/_createFind.js"(exports, module) {
    var baseIteratee = require_baseIteratee();
    var isArrayLike = require_isArrayLike();
    var keys2 = require_keys();
    function createFind(findIndexFunc) {
      return function(collection, predicate, fromIndex) {
        var iterable = Object(collection);
        if (!isArrayLike(collection)) {
          var iteratee = baseIteratee(predicate, 3);
          collection = keys2(collection);
          predicate = function(key) {
            return iteratee(iterable[key], key, iterable);
          };
        }
        var index = findIndexFunc(collection, predicate, fromIndex);
        return index > -1 ? iterable[iteratee ? collection[index] : index] : void 0;
      };
    }
    module.exports = createFind;
  }
});

// node_modules/lodash/toInteger.js
var require_toInteger = __commonJS({
  "node_modules/lodash/toInteger.js"(exports, module) {
    var toFinite = require_toFinite();
    function toInteger(value) {
      var result = toFinite(value), remainder = result % 1;
      return result === result ? remainder ? result - remainder : result : 0;
    }
    module.exports = toInteger;
  }
});

// node_modules/lodash/findIndex.js
var require_findIndex = __commonJS({
  "node_modules/lodash/findIndex.js"(exports, module) {
    var baseFindIndex = require_baseFindIndex();
    var baseIteratee = require_baseIteratee();
    var toInteger = require_toInteger();
    var nativeMax = Math.max;
    function findIndex(array, predicate, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = fromIndex == null ? 0 : toInteger(fromIndex);
      if (index < 0) {
        index = nativeMax(length + index, 0);
      }
      return baseFindIndex(array, baseIteratee(predicate, 3), index);
    }
    module.exports = findIndex;
  }
});

// node_modules/lodash/find.js
var require_find = __commonJS({
  "node_modules/lodash/find.js"(exports, module) {
    var createFind = require_createFind();
    var findIndex = require_findIndex();
    var find2 = createFind(findIndex);
    module.exports = find2;
  }
});

// node_modules/eventemitter3/index.js
var require_eventemitter3 = __commonJS({
  "node_modules/eventemitter3/index.js"(exports, module) {
    "use strict";
    var has = Object.prototype.hasOwnProperty;
    var prefix = "~";
    function Events() {
    }
    if (Object.create) {
      Events.prototype = /* @__PURE__ */ Object.create(null);
      if (!new Events().__proto__)
        prefix = false;
    }
    function EE(fn, context, once) {
      this.fn = fn;
      this.context = context;
      this.once = once || false;
    }
    function addListener(emitter, event, fn, context, once) {
      if (typeof fn !== "function") {
        throw new TypeError("The listener must be a function");
      }
      var listener = new EE(fn, context || emitter, once), evt = prefix ? prefix + event : event;
      if (!emitter._events[evt])
        emitter._events[evt] = listener, emitter._eventsCount++;
      else if (!emitter._events[evt].fn)
        emitter._events[evt].push(listener);
      else
        emitter._events[evt] = [emitter._events[evt], listener];
      return emitter;
    }
    function clearEvent(emitter, evt) {
      if (--emitter._eventsCount === 0)
        emitter._events = new Events();
      else
        delete emitter._events[evt];
    }
    function EventEmitter2() {
      this._events = new Events();
      this._eventsCount = 0;
    }
    EventEmitter2.prototype.eventNames = function eventNames() {
      var names = [], events, name;
      if (this._eventsCount === 0)
        return names;
      for (name in events = this._events) {
        if (has.call(events, name))
          names.push(prefix ? name.slice(1) : name);
      }
      if (Object.getOwnPropertySymbols) {
        return names.concat(Object.getOwnPropertySymbols(events));
      }
      return names;
    };
    EventEmitter2.prototype.listeners = function listeners(event) {
      var evt = prefix ? prefix + event : event, handlers = this._events[evt];
      if (!handlers)
        return [];
      if (handlers.fn)
        return [handlers.fn];
      for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
        ee[i] = handlers[i].fn;
      }
      return ee;
    };
    EventEmitter2.prototype.listenerCount = function listenerCount(event) {
      var evt = prefix ? prefix + event : event, listeners = this._events[evt];
      if (!listeners)
        return 0;
      if (listeners.fn)
        return 1;
      return listeners.length;
    };
    EventEmitter2.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
      var evt = prefix ? prefix + event : event;
      if (!this._events[evt])
        return false;
      var listeners = this._events[evt], len = arguments.length, args, i;
      if (listeners.fn) {
        if (listeners.once)
          this.removeListener(event, listeners.fn, void 0, true);
        switch (len) {
          case 1:
            return listeners.fn.call(listeners.context), true;
          case 2:
            return listeners.fn.call(listeners.context, a1), true;
          case 3:
            return listeners.fn.call(listeners.context, a1, a2), true;
          case 4:
            return listeners.fn.call(listeners.context, a1, a2, a3), true;
          case 5:
            return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
          case 6:
            return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
        }
        for (i = 1, args = new Array(len - 1); i < len; i++) {
          args[i - 1] = arguments[i];
        }
        listeners.fn.apply(listeners.context, args);
      } else {
        var length = listeners.length, j;
        for (i = 0; i < length; i++) {
          if (listeners[i].once)
            this.removeListener(event, listeners[i].fn, void 0, true);
          switch (len) {
            case 1:
              listeners[i].fn.call(listeners[i].context);
              break;
            case 2:
              listeners[i].fn.call(listeners[i].context, a1);
              break;
            case 3:
              listeners[i].fn.call(listeners[i].context, a1, a2);
              break;
            case 4:
              listeners[i].fn.call(listeners[i].context, a1, a2, a3);
              break;
            default:
              if (!args)
                for (j = 1, args = new Array(len - 1); j < len; j++) {
                  args[j - 1] = arguments[j];
                }
              listeners[i].fn.apply(listeners[i].context, args);
          }
        }
      }
      return true;
    };
    EventEmitter2.prototype.on = function on(event, fn, context) {
      return addListener(this, event, fn, context, false);
    };
    EventEmitter2.prototype.once = function once(event, fn, context) {
      return addListener(this, event, fn, context, true);
    };
    EventEmitter2.prototype.removeListener = function removeListener(event, fn, context, once) {
      var evt = prefix ? prefix + event : event;
      if (!this._events[evt])
        return this;
      if (!fn) {
        clearEvent(this, evt);
        return this;
      }
      var listeners = this._events[evt];
      if (listeners.fn) {
        if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) {
          clearEvent(this, evt);
        }
      } else {
        for (var i = 0, events = [], length = listeners.length; i < length; i++) {
          if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) {
            events.push(listeners[i]);
          }
        }
        if (events.length)
          this._events[evt] = events.length === 1 ? events[0] : events;
        else
          clearEvent(this, evt);
      }
      return this;
    };
    EventEmitter2.prototype.removeAllListeners = function removeAllListeners(event) {
      var evt;
      if (event) {
        evt = prefix ? prefix + event : event;
        if (this._events[evt])
          clearEvent(this, evt);
      } else {
        this._events = new Events();
        this._eventsCount = 0;
      }
      return this;
    };
    EventEmitter2.prototype.off = EventEmitter2.prototype.removeListener;
    EventEmitter2.prototype.addListener = EventEmitter2.prototype.on;
    EventEmitter2.prefixed = prefix;
    EventEmitter2.EventEmitter = EventEmitter2;
    if ("undefined" !== typeof module) {
      module.exports = EventEmitter2;
    }
  }
});

// app/components/ui/tabs.tsx
var React = __toESM(require_react());

// node_modules/@radix-ui/react-tabs/dist/index.mjs
var import_react = __toESM(require_react(), 1);
var $69cb30bb0017df05$var$TABS_NAME = "Tabs";
var [$69cb30bb0017df05$var$createTabsContext, $69cb30bb0017df05$export$355f5bd209d7b13a] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($69cb30bb0017df05$var$TABS_NAME, [
  $d7bdfb9eb0fdf311$export$c7109489551a4f4
]);
var $69cb30bb0017df05$var$useRovingFocusGroupScope = $d7bdfb9eb0fdf311$export$c7109489551a4f4();
var [$69cb30bb0017df05$var$TabsProvider, $69cb30bb0017df05$var$useTabsContext] = $69cb30bb0017df05$var$createTabsContext($69cb30bb0017df05$var$TABS_NAME);
var $69cb30bb0017df05$export$b2539bed5023c21c = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeTabs, value: valueProp, onValueChange, defaultValue, orientation = "horizontal", dir, activationMode = "automatic", ...tabsProps } = props;
  const direction = $f631663db3294ace$export$b39126d51d94e6f3(dir);
  const [value, setValue] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: valueProp,
    onChange: onValueChange,
    defaultProp: defaultValue
  });
  return /* @__PURE__ */ (0, import_react.createElement)($69cb30bb0017df05$var$TabsProvider, {
    scope: __scopeTabs,
    baseId: $1746a345f3d73bb7$export$f680877a34711e37(),
    value,
    onValueChange: setValue,
    orientation,
    dir: direction,
    activationMode
  }, /* @__PURE__ */ (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    dir: direction,
    "data-orientation": orientation
  }, tabsProps, {
    ref: forwardedRef
  })));
});
var $69cb30bb0017df05$var$TAB_LIST_NAME = "TabsList";
var $69cb30bb0017df05$export$9712d22edc0d78c1 = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeTabs, loop = true, ...listProps } = props;
  const context = $69cb30bb0017df05$var$useTabsContext($69cb30bb0017df05$var$TAB_LIST_NAME, __scopeTabs);
  const rovingFocusGroupScope = $69cb30bb0017df05$var$useRovingFocusGroupScope(__scopeTabs);
  return /* @__PURE__ */ (0, import_react.createElement)($d7bdfb9eb0fdf311$export$be92b6f5f03c0fe9, _extends({
    asChild: true
  }, rovingFocusGroupScope, {
    orientation: context.orientation,
    dir: context.dir,
    loop
  }), /* @__PURE__ */ (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    role: "tablist",
    "aria-orientation": context.orientation
  }, listProps, {
    ref: forwardedRef
  })));
});
var $69cb30bb0017df05$var$TRIGGER_NAME = "TabsTrigger";
var $69cb30bb0017df05$export$8114b9fdfdf9f3ba = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeTabs, value, disabled = false, ...triggerProps } = props;
  const context = $69cb30bb0017df05$var$useTabsContext($69cb30bb0017df05$var$TRIGGER_NAME, __scopeTabs);
  const rovingFocusGroupScope = $69cb30bb0017df05$var$useRovingFocusGroupScope(__scopeTabs);
  const triggerId = $69cb30bb0017df05$var$makeTriggerId(context.baseId, value);
  const contentId = $69cb30bb0017df05$var$makeContentId(context.baseId, value);
  const isSelected = value === context.value;
  return /* @__PURE__ */ (0, import_react.createElement)($d7bdfb9eb0fdf311$export$6d08773d2e66f8f2, _extends({
    asChild: true
  }, rovingFocusGroupScope, {
    focusable: !disabled,
    active: isSelected
  }), /* @__PURE__ */ (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends({
    type: "button",
    role: "tab",
    "aria-selected": isSelected,
    "aria-controls": contentId,
    "data-state": isSelected ? "active" : "inactive",
    "data-disabled": disabled ? "" : void 0,
    disabled,
    id: triggerId
  }, triggerProps, {
    ref: forwardedRef,
    onMouseDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onMouseDown, (event) => {
      if (!disabled && event.button === 0 && event.ctrlKey === false)
        context.onValueChange(value);
      else
        event.preventDefault();
    }),
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown, (event) => {
      if ([
        " ",
        "Enter"
      ].includes(event.key))
        context.onValueChange(value);
    }),
    onFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onFocus, () => {
      const isAutomaticActivation = context.activationMode !== "manual";
      if (!isSelected && !disabled && isAutomaticActivation)
        context.onValueChange(value);
    })
  })));
});
var $69cb30bb0017df05$var$CONTENT_NAME = "TabsContent";
var $69cb30bb0017df05$export$bd905d70e8fd2ebb = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeTabs, value, forceMount, children, ...contentProps } = props;
  const context = $69cb30bb0017df05$var$useTabsContext($69cb30bb0017df05$var$CONTENT_NAME, __scopeTabs);
  const triggerId = $69cb30bb0017df05$var$makeTriggerId(context.baseId, value);
  const contentId = $69cb30bb0017df05$var$makeContentId(context.baseId, value);
  const isSelected = value === context.value;
  const isMountAnimationPreventedRef = (0, import_react.useRef)(isSelected);
  (0, import_react.useEffect)(() => {
    const rAF = requestAnimationFrame(
      () => isMountAnimationPreventedRef.current = false
    );
    return () => cancelAnimationFrame(rAF);
  }, []);
  return /* @__PURE__ */ (0, import_react.createElement)(
    $921a889cee6df7e8$export$99c2b779aa4e8b8b,
    {
      present: forceMount || isSelected
    },
    ({ present }) => /* @__PURE__ */ (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
      "data-state": isSelected ? "active" : "inactive",
      "data-orientation": context.orientation,
      role: "tabpanel",
      "aria-labelledby": triggerId,
      hidden: !present,
      id: contentId,
      tabIndex: 0
    }, contentProps, {
      ref: forwardedRef,
      style: {
        ...props.style,
        animationDuration: isMountAnimationPreventedRef.current ? "0s" : void 0
      }
    }), present && children)
  );
});
function $69cb30bb0017df05$var$makeTriggerId(baseId, value) {
  return `${baseId}-trigger-${value}`;
}
function $69cb30bb0017df05$var$makeContentId(baseId, value) {
  return `${baseId}-content-${value}`;
}
var $69cb30bb0017df05$export$be92b6f5f03c0fe9 = $69cb30bb0017df05$export$b2539bed5023c21c;
var $69cb30bb0017df05$export$54c2e3dc7acea9f5 = $69cb30bb0017df05$export$9712d22edc0d78c1;
var $69cb30bb0017df05$export$41fb9f06171c75f4 = $69cb30bb0017df05$export$8114b9fdfdf9f3ba;
var $69cb30bb0017df05$export$7c6e2c02157bb7d2 = $69cb30bb0017df05$export$bd905d70e8fd2ebb;

// app/components/ui/tabs.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\ui\\\\tabs.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\ui\\tabs.tsx"
  );
  import.meta.hot.lastModified = "1707393658229.4136";
}
var Tabs = $69cb30bb0017df05$export$be92b6f5f03c0fe9;
var TabsList = React.forwardRef(_c = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($69cb30bb0017df05$export$54c2e3dc7acea9f5, { ref, className: cn("inline-flex h-9 items-center justify-center rounded-lg bg-neutral-100 p-1 text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400", className), ...props }, void 0, false, {
  fileName: "app/components/ui/tabs.tsx",
  lineNumber: 28,
  columnNumber: 12
}, this));
_c2 = TabsList;
TabsList.displayName = $69cb30bb0017df05$export$54c2e3dc7acea9f5.displayName;
var TabsTrigger = React.forwardRef(_c3 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($69cb30bb0017df05$export$41fb9f06171c75f4, { ref, className: cn("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-neutral-950 data-[state=active]:shadow dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300 dark:data-[state=active]:bg-neutral-950 dark:data-[state=active]:text-neutral-50", className), ...props }, void 0, false, {
  fileName: "app/components/ui/tabs.tsx",
  lineNumber: 34,
  columnNumber: 12
}, this));
_c4 = TabsTrigger;
TabsTrigger.displayName = $69cb30bb0017df05$export$41fb9f06171c75f4.displayName;
var TabsContent = React.forwardRef(_c5 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($69cb30bb0017df05$export$7c6e2c02157bb7d2, { ref, className: cn("mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300", className), ...props }, void 0, false, {
  fileName: "app/components/ui/tabs.tsx",
  lineNumber: 40,
  columnNumber: 12
}, this));
_c6 = TabsContent;
TabsContent.displayName = $69cb30bb0017df05$export$7c6e2c02157bb7d2.displayName;
var _c;
var _c2;
var _c3;
var _c4;
var _c5;
var _c6;
$RefreshReg$(_c, "TabsList$React.forwardRef");
$RefreshReg$(_c2, "TabsList");
$RefreshReg$(_c3, "TabsTrigger$React.forwardRef");
$RefreshReg$(_c4, "TabsTrigger");
$RefreshReg$(_c5, "TabsContent$React.forwardRef");
$RefreshReg$(_c6, "TabsContent");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/date-range-picker.tsx
var React2 = __toESM(require_react());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\date-range-picker.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\date-range-picker.tsx"
  );
  import.meta.hot.lastModified = "1707738970509.2307";
}
function CalendarDateRangePicker({
  className
}) {
  _s();
  const [date2, setDate] = React2.useState({
    from: new Date(2023, 0, 20),
    to: addDays(new Date(2023, 0, 20), 20)
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: cn("grid gap-2", className), children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Popover, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { id: "date", variant: "outline", className: cn("w-[260px] justify-start text-left font-normal", !date2 && "text-muted-foreground"), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CalendarIcon, { className: "mr-2 h-4 w-4" }, void 0, false, {
        fileName: "app/components/date-range-picker.tsx",
        lineNumber: 41,
        columnNumber: 13
      }, this),
      date2?.from ? date2.to ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
        format(date2.from, "LLL dd, y"),
        " -",
        " ",
        format(date2.to, "LLL dd, y")
      ] }, void 0, true, {
        fileName: "app/components/date-range-picker.tsx",
        lineNumber: 42,
        columnNumber: 37
      }, this) : format(date2.from, "LLL dd, y") : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: "Pick a date" }, void 0, false, {
        fileName: "app/components/date-range-picker.tsx",
        lineNumber: 45,
        columnNumber: 56
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/date-range-picker.tsx",
      lineNumber: 40,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/date-range-picker.tsx",
      lineNumber: 39,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PopoverContent, { className: "w-auto p-0", align: "end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Calendar, { initialFocus: true, mode: "range", defaultMonth: date2?.from, selected: date2, onSelect: setDate, numberOfMonths: 2 }, void 0, false, {
      fileName: "app/components/date-range-picker.tsx",
      lineNumber: 49,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/date-range-picker.tsx",
      lineNumber: 48,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/date-range-picker.tsx",
    lineNumber: 38,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/date-range-picker.tsx",
    lineNumber: 37,
    columnNumber: 10
  }, this);
}
_s(CalendarDateRangePicker, "O+C4/H/SlGAom0g3osWaOZd5Wuw=");
_c7 = CalendarDateRangePicker;
var _c7;
$RefreshReg$(_c7, "CalendarDateRangePicker");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/main-nav.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\main-nav.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\main-nav.tsx"
  );
  import.meta.hot.lastModified = "1707739056055.7866";
}
function MainNav({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("nav", { className: cn("flex items-center space-x-4 lg:space-x-6", className), ...props, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "/examples/dashboard", className: "text-sm font-medium transition-colors hover:text-primary", children: "Overview" }, void 0, false, {
      fileName: "app/components/main-nav.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "/examples/dashboard", className: "text-sm font-medium text-muted-foreground transition-colors hover:text-primary", children: "Customers" }, void 0, false, {
      fileName: "app/components/main-nav.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "/examples/dashboard", className: "text-sm font-medium text-muted-foreground transition-colors hover:text-primary", children: "Products" }, void 0, false, {
      fileName: "app/components/main-nav.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "/examples/dashboard", className: "text-sm font-medium text-muted-foreground transition-colors hover:text-primary", children: "Settings" }, void 0, false, {
      fileName: "app/components/main-nav.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/main-nav.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
}
_c8 = MainNav;
var _c8;
$RefreshReg$(_c8, "MainNav");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// node_modules/recharts/es6/container/Surface.js
var import_react5 = __toESM(require_react());

// node_modules/recharts/es6/util/ReactUtils.js
var import_get2 = __toESM(require_get());
var import_isNil = __toESM(require_isNil());
var import_isString2 = __toESM(require_isString());
var import_isFunction = __toESM(require_isFunction());
var import_isObject2 = __toESM(require_isObject());
var import_react4 = __toESM(require_react());
var import_react_is = __toESM(require_react_is());

// node_modules/recharts/es6/util/DataUtils.js
var import_isString = __toESM(require_isString());
var import_isNaN = __toESM(require_isNaN());
var import_get = __toESM(require_get());
var import_isNumber = __toESM(require_isNumber());
var mathSign = function mathSign2(value) {
  if (value === 0) {
    return 0;
  }
  if (value > 0) {
    return 1;
  }
  return -1;
};
var isPercent = function isPercent2(value) {
  return (0, import_isString.default)(value) && value.indexOf("%") === value.length - 1;
};
var isNumber = function isNumber2(value) {
  return (0, import_isNumber.default)(value) && !(0, import_isNaN.default)(value);
};
var isNumOrStr = function isNumOrStr2(value) {
  return isNumber(value) || (0, import_isString.default)(value);
};
var idCounter = 0;
var uniqueId = function uniqueId2(prefix) {
  var id = ++idCounter;
  return "".concat(prefix || "").concat(id);
};
var getPercentValue = function getPercentValue2(percent, totalValue) {
  var defaultValue = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
  var validate = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
  if (!isNumber(percent) && !(0, import_isString.default)(percent)) {
    return defaultValue;
  }
  var value;
  if (isPercent(percent)) {
    var index = percent.indexOf("%");
    value = totalValue * parseFloat(percent.slice(0, index)) / 100;
  } else {
    value = +percent;
  }
  if ((0, import_isNaN.default)(value)) {
    value = defaultValue;
  }
  if (validate && value > totalValue) {
    value = totalValue;
  }
  return value;
};
var getAnyElementOfObject = function getAnyElementOfObject2(obj) {
  if (!obj) {
    return null;
  }
  var keys2 = Object.keys(obj);
  if (keys2 && keys2.length) {
    return obj[keys2[0]];
  }
  return null;
};
var hasDuplicate = function hasDuplicate2(ary) {
  if (!Array.isArray(ary)) {
    return false;
  }
  var len = ary.length;
  var cache = {};
  for (var i = 0; i < len; i++) {
    if (!cache[ary[i]]) {
      cache[ary[i]] = true;
    } else {
      return true;
    }
  }
  return false;
};
var interpolateNumber = function interpolateNumber2(numberA, numberB) {
  if (isNumber(numberA) && isNumber(numberB)) {
    return function(t) {
      return numberA + t * (numberB - numberA);
    };
  }
  return function() {
    return numberB;
  };
};
function findEntryInArray(ary, specifiedKey, specifiedValue) {
  if (!ary || !ary.length) {
    return null;
  }
  return ary.find(function(entry) {
    return entry && (typeof specifiedKey === "function" ? specifiedKey(entry) : (0, import_get.default)(entry, specifiedKey)) === specifiedValue;
  });
}

// node_modules/recharts/es6/util/ShallowEqual.js
function shallowEqual(a2, b) {
  for (var key in a2) {
    if ({}.hasOwnProperty.call(a2, key) && (!{}.hasOwnProperty.call(b, key) || a2[key] !== b[key])) {
      return false;
    }
  }
  for (var _key in b) {
    if ({}.hasOwnProperty.call(b, _key) && !{}.hasOwnProperty.call(a2, _key)) {
      return false;
    }
  }
  return true;
}

// node_modules/recharts/es6/util/types.js
var import_react3 = __toESM(require_react());
var import_isObject = __toESM(require_isObject());
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
var SVGContainerPropKeys = ["viewBox", "children"];
var SVGElementPropKeys = [
  "aria-activedescendant",
  "aria-atomic",
  "aria-autocomplete",
  "aria-busy",
  "aria-checked",
  "aria-colcount",
  "aria-colindex",
  "aria-colspan",
  "aria-controls",
  "aria-current",
  "aria-describedby",
  "aria-details",
  "aria-disabled",
  "aria-errormessage",
  "aria-expanded",
  "aria-flowto",
  "aria-haspopup",
  "aria-hidden",
  "aria-invalid",
  "aria-keyshortcuts",
  "aria-label",
  "aria-labelledby",
  "aria-level",
  "aria-live",
  "aria-modal",
  "aria-multiline",
  "aria-multiselectable",
  "aria-orientation",
  "aria-owns",
  "aria-placeholder",
  "aria-posinset",
  "aria-pressed",
  "aria-readonly",
  "aria-relevant",
  "aria-required",
  "aria-roledescription",
  "aria-rowcount",
  "aria-rowindex",
  "aria-rowspan",
  "aria-selected",
  "aria-setsize",
  "aria-sort",
  "aria-valuemax",
  "aria-valuemin",
  "aria-valuenow",
  "aria-valuetext",
  "className",
  "color",
  "height",
  "id",
  "lang",
  "max",
  "media",
  "method",
  "min",
  "name",
  "style",
  /*
   * removed 'type' SVGElementPropKey because we do not currently use any SVG elements
   * that can use it and it conflicts with the recharts prop 'type'
   * https://github.com/recharts/recharts/pull/3327
   * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/type
   */
  // 'type',
  "target",
  "width",
  "role",
  "tabIndex",
  "accentHeight",
  "accumulate",
  "additive",
  "alignmentBaseline",
  "allowReorder",
  "alphabetic",
  "amplitude",
  "arabicForm",
  "ascent",
  "attributeName",
  "attributeType",
  "autoReverse",
  "azimuth",
  "baseFrequency",
  "baselineShift",
  "baseProfile",
  "bbox",
  "begin",
  "bias",
  "by",
  "calcMode",
  "capHeight",
  "clip",
  "clipPath",
  "clipPathUnits",
  "clipRule",
  "colorInterpolation",
  "colorInterpolationFilters",
  "colorProfile",
  "colorRendering",
  "contentScriptType",
  "contentStyleType",
  "cursor",
  "cx",
  "cy",
  "d",
  "decelerate",
  "descent",
  "diffuseConstant",
  "direction",
  "display",
  "divisor",
  "dominantBaseline",
  "dur",
  "dx",
  "dy",
  "edgeMode",
  "elevation",
  "enableBackground",
  "end",
  "exponent",
  "externalResourcesRequired",
  "fill",
  "fillOpacity",
  "fillRule",
  "filter",
  "filterRes",
  "filterUnits",
  "floodColor",
  "floodOpacity",
  "focusable",
  "fontFamily",
  "fontSize",
  "fontSizeAdjust",
  "fontStretch",
  "fontStyle",
  "fontVariant",
  "fontWeight",
  "format",
  "from",
  "fx",
  "fy",
  "g1",
  "g2",
  "glyphName",
  "glyphOrientationHorizontal",
  "glyphOrientationVertical",
  "glyphRef",
  "gradientTransform",
  "gradientUnits",
  "hanging",
  "horizAdvX",
  "horizOriginX",
  "href",
  "ideographic",
  "imageRendering",
  "in2",
  "in",
  "intercept",
  "k1",
  "k2",
  "k3",
  "k4",
  "k",
  "kernelMatrix",
  "kernelUnitLength",
  "kerning",
  "keyPoints",
  "keySplines",
  "keyTimes",
  "lengthAdjust",
  "letterSpacing",
  "lightingColor",
  "limitingConeAngle",
  "local",
  "markerEnd",
  "markerHeight",
  "markerMid",
  "markerStart",
  "markerUnits",
  "markerWidth",
  "mask",
  "maskContentUnits",
  "maskUnits",
  "mathematical",
  "mode",
  "numOctaves",
  "offset",
  "opacity",
  "operator",
  "order",
  "orient",
  "orientation",
  "origin",
  "overflow",
  "overlinePosition",
  "overlineThickness",
  "paintOrder",
  "panose1",
  "pathLength",
  "patternContentUnits",
  "patternTransform",
  "patternUnits",
  "pointerEvents",
  "pointsAtX",
  "pointsAtY",
  "pointsAtZ",
  "preserveAlpha",
  "preserveAspectRatio",
  "primitiveUnits",
  "r",
  "radius",
  "refX",
  "refY",
  "renderingIntent",
  "repeatCount",
  "repeatDur",
  "requiredExtensions",
  "requiredFeatures",
  "restart",
  "result",
  "rotate",
  "rx",
  "ry",
  "seed",
  "shapeRendering",
  "slope",
  "spacing",
  "specularConstant",
  "specularExponent",
  "speed",
  "spreadMethod",
  "startOffset",
  "stdDeviation",
  "stemh",
  "stemv",
  "stitchTiles",
  "stopColor",
  "stopOpacity",
  "strikethroughPosition",
  "strikethroughThickness",
  "string",
  "stroke",
  "strokeDasharray",
  "strokeDashoffset",
  "strokeLinecap",
  "strokeLinejoin",
  "strokeMiterlimit",
  "strokeOpacity",
  "strokeWidth",
  "surfaceScale",
  "systemLanguage",
  "tableValues",
  "targetX",
  "targetY",
  "textAnchor",
  "textDecoration",
  "textLength",
  "textRendering",
  "to",
  "transform",
  "u1",
  "u2",
  "underlinePosition",
  "underlineThickness",
  "unicode",
  "unicodeBidi",
  "unicodeRange",
  "unitsPerEm",
  "vAlphabetic",
  "values",
  "vectorEffect",
  "version",
  "vertAdvY",
  "vertOriginX",
  "vertOriginY",
  "vHanging",
  "vIdeographic",
  "viewTarget",
  "visibility",
  "vMathematical",
  "widths",
  "wordSpacing",
  "writingMode",
  "x1",
  "x2",
  "x",
  "xChannelSelector",
  "xHeight",
  "xlinkActuate",
  "xlinkArcrole",
  "xlinkHref",
  "xlinkRole",
  "xlinkShow",
  "xlinkTitle",
  "xlinkType",
  "xmlBase",
  "xmlLang",
  "xmlns",
  "xmlnsXlink",
  "xmlSpace",
  "y1",
  "y2",
  "y",
  "yChannelSelector",
  "z",
  "zoomAndPan",
  "ref",
  "key",
  "angle"
];
var PolyElementKeys = ["points", "pathLength"];
var FilteredElementKeyMap = {
  svg: SVGContainerPropKeys,
  polygon: PolyElementKeys,
  polyline: PolyElementKeys
};
var EventKeys = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"];
var adaptEventHandlers = function adaptEventHandlers2(props, newHandler) {
  if (!props || typeof props === "function" || typeof props === "boolean") {
    return null;
  }
  var inputProps = props;
  if (/* @__PURE__ */ (0, import_react3.isValidElement)(props)) {
    inputProps = props.props;
  }
  if (!(0, import_isObject.default)(inputProps)) {
    return null;
  }
  var out = {};
  Object.keys(inputProps).forEach(function(key) {
    if (EventKeys.includes(key)) {
      out[key] = newHandler || function(e) {
        return inputProps[key](inputProps, e);
      };
    }
  });
  return out;
};
var getEventHandlerOfChild = function getEventHandlerOfChild2(originalHandler, data2, index) {
  return function(e) {
    originalHandler(data2, index, e);
    return null;
  };
};
var adaptEventsOfChild = function adaptEventsOfChild2(props, data2, index) {
  if (!(0, import_isObject.default)(props) || _typeof(props) !== "object") {
    return null;
  }
  var out = null;
  Object.keys(props).forEach(function(key) {
    var item = props[key];
    if (EventKeys.includes(key) && typeof item === "function") {
      if (!out)
        out = {};
      out[key] = getEventHandlerOfChild(item, data2, index);
    }
  });
  return out;
};

// node_modules/recharts/es6/util/ReactUtils.js
var _excluded = ["children"];
var _excluded2 = ["children"];
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose2(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose2(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var REACT_BROWSER_EVENT_MAP = {
  click: "onClick",
  mousedown: "onMouseDown",
  mouseup: "onMouseUp",
  mouseover: "onMouseOver",
  mousemove: "onMouseMove",
  mouseout: "onMouseOut",
  mouseenter: "onMouseEnter",
  mouseleave: "onMouseLeave",
  touchcancel: "onTouchCancel",
  touchend: "onTouchEnd",
  touchmove: "onTouchMove",
  touchstart: "onTouchStart"
};
var getDisplayName = function getDisplayName2(Comp) {
  if (typeof Comp === "string") {
    return Comp;
  }
  if (!Comp) {
    return "";
  }
  return Comp.displayName || Comp.name || "Component";
};
var lastChildren = null;
var lastResult = null;
var toArray = function toArray2(children) {
  if (children === lastChildren && Array.isArray(lastResult)) {
    return lastResult;
  }
  var result = [];
  import_react4.Children.forEach(children, function(child) {
    if ((0, import_isNil.default)(child))
      return;
    if ((0, import_react_is.isFragment)(child)) {
      result = result.concat(toArray2(child.props.children));
    } else {
      result.push(child);
    }
  });
  lastResult = result;
  lastChildren = children;
  return result;
};
function findAllByType(children, type) {
  var result = [];
  var types = [];
  if (Array.isArray(type)) {
    types = type.map(function(t) {
      return getDisplayName(t);
    });
  } else {
    types = [getDisplayName(type)];
  }
  toArray(children).forEach(function(child) {
    var childType = (0, import_get2.default)(child, "type.displayName") || (0, import_get2.default)(child, "type.name");
    if (types.indexOf(childType) !== -1) {
      result.push(child);
    }
  });
  return result;
}
function findChildByType(children, type) {
  var result = findAllByType(children, type);
  return result && result[0];
}
var validateWidthHeight = function validateWidthHeight2(el) {
  if (!el || !el.props) {
    return false;
  }
  var _el$props = el.props, width = _el$props.width, height = _el$props.height;
  if (!isNumber(width) || width <= 0 || !isNumber(height) || height <= 0) {
    return false;
  }
  return true;
};
var SVG_TAGS = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"];
var isSvgElement = function isSvgElement2(child) {
  return child && child.type && (0, import_isString2.default)(child.type) && SVG_TAGS.indexOf(child.type) >= 0;
};
var isValidSpreadableProp = function isValidSpreadableProp2(property, key, includeEvents, svgElementType) {
  var _FilteredElementKeyMa;
  var matchingElementTypeKeys = (_FilteredElementKeyMa = FilteredElementKeyMap === null || FilteredElementKeyMap === void 0 ? void 0 : FilteredElementKeyMap[svgElementType]) !== null && _FilteredElementKeyMa !== void 0 ? _FilteredElementKeyMa : [];
  return !(0, import_isFunction.default)(property) && (svgElementType && matchingElementTypeKeys.includes(key) || SVGElementPropKeys.includes(key)) || includeEvents && EventKeys.includes(key);
};
var filterProps = function filterProps2(props, includeEvents, svgElementType) {
  if (!props || typeof props === "function" || typeof props === "boolean") {
    return null;
  }
  var inputProps = props;
  if (/* @__PURE__ */ (0, import_react4.isValidElement)(props)) {
    inputProps = props.props;
  }
  if (!(0, import_isObject2.default)(inputProps)) {
    return null;
  }
  var out = {};
  Object.keys(inputProps).forEach(function(key) {
    var _inputProps;
    if (isValidSpreadableProp((_inputProps = inputProps) === null || _inputProps === void 0 ? void 0 : _inputProps[key], key, includeEvents, svgElementType)) {
      out[key] = inputProps[key];
    }
  });
  return out;
};
var isChildrenEqual = function isChildrenEqual2(nextChildren, prevChildren) {
  if (nextChildren === prevChildren) {
    return true;
  }
  var count = import_react4.Children.count(nextChildren);
  if (count !== import_react4.Children.count(prevChildren)) {
    return false;
  }
  if (count === 0) {
    return true;
  }
  if (count === 1) {
    return isSingleChildEqual(Array.isArray(nextChildren) ? nextChildren[0] : nextChildren, Array.isArray(prevChildren) ? prevChildren[0] : prevChildren);
  }
  for (var i = 0; i < count; i++) {
    var nextChild = nextChildren[i];
    var prevChild = prevChildren[i];
    if (Array.isArray(nextChild) || Array.isArray(prevChild)) {
      if (!isChildrenEqual2(nextChild, prevChild)) {
        return false;
      }
    } else if (!isSingleChildEqual(nextChild, prevChild)) {
      return false;
    }
  }
  return true;
};
var isSingleChildEqual = function isSingleChildEqual2(nextChild, prevChild) {
  if ((0, import_isNil.default)(nextChild) && (0, import_isNil.default)(prevChild)) {
    return true;
  }
  if (!(0, import_isNil.default)(nextChild) && !(0, import_isNil.default)(prevChild)) {
    var _ref = nextChild.props || {}, nextChildren = _ref.children, nextProps = _objectWithoutProperties(_ref, _excluded);
    var _ref2 = prevChild.props || {}, prevChildren = _ref2.children, prevProps = _objectWithoutProperties(_ref2, _excluded2);
    if (nextChildren && prevChildren) {
      return shallowEqual(nextProps, prevProps) && isChildrenEqual(nextChildren, prevChildren);
    }
    if (!nextChildren && !prevChildren) {
      return shallowEqual(nextProps, prevProps);
    }
    return false;
  }
  return false;
};
var renderByOrder = function renderByOrder2(children, renderMap) {
  var elements = [];
  var record = {};
  toArray(children).forEach(function(child, index) {
    if (isSvgElement(child)) {
      elements.push(child);
    } else if (child) {
      var displayName = getDisplayName(child.type);
      var _ref3 = renderMap[displayName] || {}, handler = _ref3.handler, once = _ref3.once;
      if (handler && (!once || !record[displayName])) {
        var results = handler(child, displayName, index);
        elements.push(results);
        record[displayName] = true;
      }
    }
  });
  return elements;
};
var getReactEventByType = function getReactEventByType2(e) {
  var type = e && e.type;
  if (type && REACT_BROWSER_EVENT_MAP[type]) {
    return REACT_BROWSER_EVENT_MAP[type];
  }
  return null;
};
var parseChildIndex = function parseChildIndex2(child, children) {
  return toArray(children).indexOf(child);
};

// node_modules/recharts/es6/container/Surface.js
var _excluded3 = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
function _extends2() {
  _extends2 = Object.assign ? Object.assign.bind() : function(target) {
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
  return _extends2.apply(this, arguments);
}
function _objectWithoutProperties2(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose3(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose3(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function Surface(props) {
  var children = props.children, width = props.width, height = props.height, viewBox = props.viewBox, className = props.className, style = props.style, title = props.title, desc = props.desc, others = _objectWithoutProperties2(props, _excluded3);
  var svgView = viewBox || {
    width,
    height,
    x: 0,
    y: 0
  };
  var layerClass = clsx_default("recharts-surface", className);
  return /* @__PURE__ */ import_react5.default.createElement("svg", _extends2({}, filterProps(others, true, "svg"), {
    className: layerClass,
    width,
    height,
    style,
    viewBox: "".concat(svgView.x, " ").concat(svgView.y, " ").concat(svgView.width, " ").concat(svgView.height)
  }), /* @__PURE__ */ import_react5.default.createElement("title", null, title), /* @__PURE__ */ import_react5.default.createElement("desc", null, desc), children);
}

// node_modules/recharts/es6/container/Layer.js
var import_react6 = __toESM(require_react());
var _excluded4 = ["children", "className"];
function _extends3() {
  _extends3 = Object.assign ? Object.assign.bind() : function(target) {
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
  return _extends3.apply(this, arguments);
}
function _objectWithoutProperties3(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose4(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose4(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var Layer = /* @__PURE__ */ import_react6.default.forwardRef(function(props, ref) {
  var children = props.children, className = props.className, others = _objectWithoutProperties3(props, _excluded4);
  var layerClass = clsx_default("recharts-layer", className);
  return /* @__PURE__ */ import_react6.default.createElement("g", _extends3({
    className: layerClass
  }, filterProps(others, true), {
    ref
  }), children);
});

// node_modules/recharts/es6/component/Legend.js
var import_react9 = __toESM(require_react());

// node_modules/recharts/es6/component/DefaultLegendContent.js
var import_react8 = __toESM(require_react());
var import_isFunction2 = __toESM(require_isFunction());

// node_modules/recharts/es6/util/LogUtils.js
var isDev = true;
var warn = function warn2(condition, format3) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }
  if (isDev && typeof console !== "undefined" && console.warn) {
    if (format3 === void 0) {
      console.warn("LogUtils requires an error message argument");
    }
    if (!condition) {
      if (format3 === void 0) {
        console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
      } else {
        var argIndex = 0;
        console.warn(format3.replace(/%s/g, function() {
          return args[argIndex++];
        }));
      }
    }
  }
};

// node_modules/recharts/es6/shape/Symbols.js
var import_react7 = __toESM(require_react());
var import_upperFirst = __toESM(require_upperFirst());

// node_modules/d3-shape/src/constant.js
function constant_default(x2) {
  return function constant() {
    return x2;
  };
}

// node_modules/d3-shape/src/math.js
var cos = Math.cos;
var sin = Math.sin;
var sqrt = Math.sqrt;
var pi = Math.PI;
var halfPi = pi / 2;
var tau = 2 * pi;

// node_modules/d3-path/src/path.js
var pi2 = Math.PI;
var tau2 = 2 * pi2;
var epsilon = 1e-6;
var tauEpsilon = tau2 - epsilon;
function append(strings) {
  this._ += strings[0];
  for (let i = 1, n = strings.length; i < n; ++i) {
    this._ += arguments[i] + strings[i];
  }
}
function appendRound(digits) {
  let d = Math.floor(digits);
  if (!(d >= 0))
    throw new Error(`invalid digits: ${digits}`);
  if (d > 15)
    return append;
  const k2 = 10 ** d;
  return function(strings) {
    this._ += strings[0];
    for (let i = 1, n = strings.length; i < n; ++i) {
      this._ += Math.round(arguments[i] * k2) / k2 + strings[i];
    }
  };
}
var Path = class {
  constructor(digits) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null;
    this._ = "";
    this._append = digits == null ? append : appendRound(digits);
  }
  moveTo(x2, y2) {
    this._append`M${this._x0 = this._x1 = +x2},${this._y0 = this._y1 = +y2}`;
  }
  closePath() {
    if (this._x1 !== null) {
      this._x1 = this._x0, this._y1 = this._y0;
      this._append`Z`;
    }
  }
  lineTo(x2, y2) {
    this._append`L${this._x1 = +x2},${this._y1 = +y2}`;
  }
  quadraticCurveTo(x1, y1, x2, y2) {
    this._append`Q${+x1},${+y1},${this._x1 = +x2},${this._y1 = +y2}`;
  }
  bezierCurveTo(x1, y1, x2, y2, x3, y3) {
    this._append`C${+x1},${+y1},${+x2},${+y2},${this._x1 = +x3},${this._y1 = +y3}`;
  }
  arcTo(x1, y1, x2, y2, r) {
    x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;
    if (r < 0)
      throw new Error(`negative radius: ${r}`);
    let x0 = this._x1, y0 = this._y1, x21 = x2 - x1, y21 = y2 - y1, x01 = x0 - x1, y01 = y0 - y1, l01_2 = x01 * x01 + y01 * y01;
    if (this._x1 === null) {
      this._append`M${this._x1 = x1},${this._y1 = y1}`;
    } else if (!(l01_2 > epsilon))
      ;
    else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon) || !r) {
      this._append`L${this._x1 = x1},${this._y1 = y1}`;
    } else {
      let x20 = x2 - x0, y20 = y2 - y0, l21_2 = x21 * x21 + y21 * y21, l20_2 = x20 * x20 + y20 * y20, l21 = Math.sqrt(l21_2), l01 = Math.sqrt(l01_2), l = r * Math.tan((pi2 - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2), t01 = l / l01, t21 = l / l21;
      if (Math.abs(t01 - 1) > epsilon) {
        this._append`L${x1 + t01 * x01},${y1 + t01 * y01}`;
      }
      this._append`A${r},${r},0,0,${+(y01 * x20 > x01 * y20)},${this._x1 = x1 + t21 * x21},${this._y1 = y1 + t21 * y21}`;
    }
  }
  arc(x2, y2, r, a0, a1, ccw) {
    x2 = +x2, y2 = +y2, r = +r, ccw = !!ccw;
    if (r < 0)
      throw new Error(`negative radius: ${r}`);
    let dx = r * Math.cos(a0), dy = r * Math.sin(a0), x0 = x2 + dx, y0 = y2 + dy, cw = 1 ^ ccw, da = ccw ? a0 - a1 : a1 - a0;
    if (this._x1 === null) {
      this._append`M${x0},${y0}`;
    } else if (Math.abs(this._x1 - x0) > epsilon || Math.abs(this._y1 - y0) > epsilon) {
      this._append`L${x0},${y0}`;
    }
    if (!r)
      return;
    if (da < 0)
      da = da % tau2 + tau2;
    if (da > tauEpsilon) {
      this._append`A${r},${r},0,1,${cw},${x2 - dx},${y2 - dy}A${r},${r},0,1,${cw},${this._x1 = x0},${this._y1 = y0}`;
    } else if (da > epsilon) {
      this._append`A${r},${r},0,${+(da >= pi2)},${cw},${this._x1 = x2 + r * Math.cos(a1)},${this._y1 = y2 + r * Math.sin(a1)}`;
    }
  }
  rect(x2, y2, w, h) {
    this._append`M${this._x0 = this._x1 = +x2},${this._y0 = this._y1 = +y2}h${w = +w}v${+h}h${-w}Z`;
  }
  toString() {
    return this._;
  }
};
function path() {
  return new Path();
}
path.prototype = Path.prototype;

// node_modules/d3-shape/src/path.js
function withPath(shape) {
  let digits = 3;
  shape.digits = function(_) {
    if (!arguments.length)
      return digits;
    if (_ == null) {
      digits = null;
    } else {
      const d = Math.floor(_);
      if (!(d >= 0))
        throw new RangeError(`invalid digits: ${_}`);
      digits = d;
    }
    return shape;
  };
  return () => new Path(digits);
}

// node_modules/d3-shape/src/array.js
var slice = Array.prototype.slice;
function array_default(x2) {
  return typeof x2 === "object" && "length" in x2 ? x2 : Array.from(x2);
}

// node_modules/d3-shape/src/curve/linear.js
function Linear(context) {
  this._context = context;
}
Linear.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || this._line !== 0 && this._point === 1)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x2, y2) : this._context.moveTo(x2, y2);
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(x2, y2);
        break;
    }
  }
};
function linear_default(context) {
  return new Linear(context);
}

// node_modules/d3-shape/src/point.js
function x(p) {
  return p[0];
}
function y(p) {
  return p[1];
}

// node_modules/d3-shape/src/line.js
function line_default(x2, y2) {
  var defined3 = constant_default(true), context = null, curve = linear_default, output = null, path2 = withPath(line);
  x2 = typeof x2 === "function" ? x2 : x2 === void 0 ? x : constant_default(x2);
  y2 = typeof y2 === "function" ? y2 : y2 === void 0 ? y : constant_default(y2);
  function line(data2) {
    var i, n = (data2 = array_default(data2)).length, d, defined0 = false, buffer;
    if (context == null)
      output = curve(buffer = path2());
    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined3(d = data2[i], i, data2)) === defined0) {
        if (defined0 = !defined0)
          output.lineStart();
        else
          output.lineEnd();
      }
      if (defined0)
        output.point(+x2(d, i, data2), +y2(d, i, data2));
    }
    if (buffer)
      return output = null, buffer + "" || null;
  }
  line.x = function(_) {
    return arguments.length ? (x2 = typeof _ === "function" ? _ : constant_default(+_), line) : x2;
  };
  line.y = function(_) {
    return arguments.length ? (y2 = typeof _ === "function" ? _ : constant_default(+_), line) : y2;
  };
  line.defined = function(_) {
    return arguments.length ? (defined3 = typeof _ === "function" ? _ : constant_default(!!_), line) : defined3;
  };
  line.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), line) : curve;
  };
  line.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), line) : context;
  };
  return line;
}

// node_modules/d3-shape/src/area.js
function area_default(x0, y0, y1) {
  var x1 = null, defined3 = constant_default(true), context = null, curve = linear_default, output = null, path2 = withPath(area);
  x0 = typeof x0 === "function" ? x0 : x0 === void 0 ? x : constant_default(+x0);
  y0 = typeof y0 === "function" ? y0 : y0 === void 0 ? constant_default(0) : constant_default(+y0);
  y1 = typeof y1 === "function" ? y1 : y1 === void 0 ? y : constant_default(+y1);
  function area(data2) {
    var i, j, k2, n = (data2 = array_default(data2)).length, d, defined0 = false, buffer, x0z = new Array(n), y0z = new Array(n);
    if (context == null)
      output = curve(buffer = path2());
    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined3(d = data2[i], i, data2)) === defined0) {
        if (defined0 = !defined0) {
          j = i;
          output.areaStart();
          output.lineStart();
        } else {
          output.lineEnd();
          output.lineStart();
          for (k2 = i - 1; k2 >= j; --k2) {
            output.point(x0z[k2], y0z[k2]);
          }
          output.lineEnd();
          output.areaEnd();
        }
      }
      if (defined0) {
        x0z[i] = +x0(d, i, data2), y0z[i] = +y0(d, i, data2);
        output.point(x1 ? +x1(d, i, data2) : x0z[i], y1 ? +y1(d, i, data2) : y0z[i]);
      }
    }
    if (buffer)
      return output = null, buffer + "" || null;
  }
  function arealine() {
    return line_default().defined(defined3).curve(curve).context(context);
  }
  area.x = function(_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : constant_default(+_), x1 = null, area) : x0;
  };
  area.x0 = function(_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : constant_default(+_), area) : x0;
  };
  area.x1 = function(_) {
    return arguments.length ? (x1 = _ == null ? null : typeof _ === "function" ? _ : constant_default(+_), area) : x1;
  };
  area.y = function(_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : constant_default(+_), y1 = null, area) : y0;
  };
  area.y0 = function(_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : constant_default(+_), area) : y0;
  };
  area.y1 = function(_) {
    return arguments.length ? (y1 = _ == null ? null : typeof _ === "function" ? _ : constant_default(+_), area) : y1;
  };
  area.lineX0 = area.lineY0 = function() {
    return arealine().x(x0).y(y0);
  };
  area.lineY1 = function() {
    return arealine().x(x0).y(y1);
  };
  area.lineX1 = function() {
    return arealine().x(x1).y(y0);
  };
  area.defined = function(_) {
    return arguments.length ? (defined3 = typeof _ === "function" ? _ : constant_default(!!_), area) : defined3;
  };
  area.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), area) : curve;
  };
  area.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), area) : context;
  };
  return area;
}

// node_modules/d3-shape/src/curve/bump.js
var Bump = class {
  constructor(context, x2) {
    this._context = context;
    this._x = x2;
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    if (this._line || this._line !== 0 && this._point === 1)
      this._context.closePath();
    this._line = 1 - this._line;
  }
  point(x2, y2) {
    x2 = +x2, y2 = +y2;
    switch (this._point) {
      case 0: {
        this._point = 1;
        if (this._line)
          this._context.lineTo(x2, y2);
        else
          this._context.moveTo(x2, y2);
        break;
      }
      case 1:
        this._point = 2;
      default: {
        if (this._x)
          this._context.bezierCurveTo(this._x0 = (this._x0 + x2) / 2, this._y0, this._x0, y2, x2, y2);
        else
          this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + y2) / 2, x2, this._y0, x2, y2);
        break;
      }
    }
    this._x0 = x2, this._y0 = y2;
  }
};
function bumpX(context) {
  return new Bump(context, true);
}
function bumpY(context) {
  return new Bump(context, false);
}

// node_modules/d3-shape/src/symbol/circle.js
var circle_default = {
  draw(context, size) {
    const r = sqrt(size / pi);
    context.moveTo(r, 0);
    context.arc(0, 0, r, 0, tau);
  }
};

// node_modules/d3-shape/src/symbol/cross.js
var cross_default = {
  draw(context, size) {
    const r = sqrt(size / 5) / 2;
    context.moveTo(-3 * r, -r);
    context.lineTo(-r, -r);
    context.lineTo(-r, -3 * r);
    context.lineTo(r, -3 * r);
    context.lineTo(r, -r);
    context.lineTo(3 * r, -r);
    context.lineTo(3 * r, r);
    context.lineTo(r, r);
    context.lineTo(r, 3 * r);
    context.lineTo(-r, 3 * r);
    context.lineTo(-r, r);
    context.lineTo(-3 * r, r);
    context.closePath();
  }
};

// node_modules/d3-shape/src/symbol/diamond.js
var tan30 = sqrt(1 / 3);
var tan30_2 = tan30 * 2;
var diamond_default = {
  draw(context, size) {
    const y2 = sqrt(size / tan30_2);
    const x2 = y2 * tan30;
    context.moveTo(0, -y2);
    context.lineTo(x2, 0);
    context.lineTo(0, y2);
    context.lineTo(-x2, 0);
    context.closePath();
  }
};

// node_modules/d3-shape/src/symbol/square.js
var square_default = {
  draw(context, size) {
    const w = sqrt(size);
    const x2 = -w / 2;
    context.rect(x2, x2, w, w);
  }
};

// node_modules/d3-shape/src/symbol/star.js
var ka = 0.8908130915292852;
var kr = sin(pi / 10) / sin(7 * pi / 10);
var kx = sin(tau / 10) * kr;
var ky = -cos(tau / 10) * kr;
var star_default = {
  draw(context, size) {
    const r = sqrt(size * ka);
    const x2 = kx * r;
    const y2 = ky * r;
    context.moveTo(0, -r);
    context.lineTo(x2, y2);
    for (let i = 1; i < 5; ++i) {
      const a2 = tau * i / 5;
      const c2 = cos(a2);
      const s2 = sin(a2);
      context.lineTo(s2 * r, -c2 * r);
      context.lineTo(c2 * x2 - s2 * y2, s2 * x2 + c2 * y2);
    }
    context.closePath();
  }
};

// node_modules/d3-shape/src/symbol/triangle.js
var sqrt3 = sqrt(3);
var triangle_default = {
  draw(context, size) {
    const y2 = -sqrt(size / (sqrt3 * 3));
    context.moveTo(0, y2 * 2);
    context.lineTo(-sqrt3 * y2, -y2);
    context.lineTo(sqrt3 * y2, -y2);
    context.closePath();
  }
};

// node_modules/d3-shape/src/symbol/wye.js
var c = -0.5;
var s = sqrt(3) / 2;
var k = 1 / sqrt(12);
var a = (k / 2 + 1) * 3;
var wye_default = {
  draw(context, size) {
    const r = sqrt(size / a);
    const x0 = r / 2, y0 = r * k;
    const x1 = x0, y1 = r * k + r;
    const x2 = -x1, y2 = y1;
    context.moveTo(x0, y0);
    context.lineTo(x1, y1);
    context.lineTo(x2, y2);
    context.lineTo(c * x0 - s * y0, s * x0 + c * y0);
    context.lineTo(c * x1 - s * y1, s * x1 + c * y1);
    context.lineTo(c * x2 - s * y2, s * x2 + c * y2);
    context.lineTo(c * x0 + s * y0, c * y0 - s * x0);
    context.lineTo(c * x1 + s * y1, c * y1 - s * x1);
    context.lineTo(c * x2 + s * y2, c * y2 - s * x2);
    context.closePath();
  }
};

// node_modules/d3-shape/src/symbol.js
function Symbol2(type, size) {
  let context = null, path2 = withPath(symbol);
  type = typeof type === "function" ? type : constant_default(type || circle_default);
  size = typeof size === "function" ? size : constant_default(size === void 0 ? 64 : +size);
  function symbol() {
    let buffer;
    if (!context)
      context = buffer = path2();
    type.apply(this, arguments).draw(context, +size.apply(this, arguments));
    if (buffer)
      return context = null, buffer + "" || null;
  }
  symbol.type = function(_) {
    return arguments.length ? (type = typeof _ === "function" ? _ : constant_default(_), symbol) : type;
  };
  symbol.size = function(_) {
    return arguments.length ? (size = typeof _ === "function" ? _ : constant_default(+_), symbol) : size;
  };
  symbol.context = function(_) {
    return arguments.length ? (context = _ == null ? null : _, symbol) : context;
  };
  return symbol;
}

// node_modules/d3-shape/src/noop.js
function noop_default() {
}

// node_modules/d3-shape/src/curve/basis.js
function point(that, x2, y2) {
  that._context.bezierCurveTo(
    (2 * that._x0 + that._x1) / 3,
    (2 * that._y0 + that._y1) / 3,
    (that._x0 + 2 * that._x1) / 3,
    (that._y0 + 2 * that._y1) / 3,
    (that._x0 + 4 * that._x1 + x2) / 6,
    (that._y0 + 4 * that._y1 + y2) / 6
  );
}
function Basis(context) {
  this._context = context;
}
Basis.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3:
        point(this, this._x1, this._y1);
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    if (this._line || this._line !== 0 && this._point === 1)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x2, y2) : this._context.moveTo(x2, y2);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
      default:
        point(this, x2, y2);
        break;
    }
    this._x0 = this._x1, this._x1 = x2;
    this._y0 = this._y1, this._y1 = y2;
  }
};
function basis_default(context) {
  return new Basis(context);
}

// node_modules/d3-shape/src/curve/basisClosed.js
function BasisClosed(context) {
  this._context = context;
}
BasisClosed.prototype = {
  areaStart: noop_default,
  areaEnd: noop_default,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3);
        this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2);
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._x2 = x2, this._y2 = y2;
        break;
      case 1:
        this._point = 2;
        this._x3 = x2, this._y3 = y2;
        break;
      case 2:
        this._point = 3;
        this._x4 = x2, this._y4 = y2;
        this._context.moveTo((this._x0 + 4 * this._x1 + x2) / 6, (this._y0 + 4 * this._y1 + y2) / 6);
        break;
      default:
        point(this, x2, y2);
        break;
    }
    this._x0 = this._x1, this._x1 = x2;
    this._y0 = this._y1, this._y1 = y2;
  }
};
function basisClosed_default(context) {
  return new BasisClosed(context);
}

// node_modules/d3-shape/src/curve/basisOpen.js
function BasisOpen(context) {
  this._context = context;
}
BasisOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || this._line !== 0 && this._point === 3)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var x0 = (this._x0 + 4 * this._x1 + x2) / 6, y0 = (this._y0 + 4 * this._y1 + y2) / 6;
        this._line ? this._context.lineTo(x0, y0) : this._context.moveTo(x0, y0);
        break;
      case 3:
        this._point = 4;
      default:
        point(this, x2, y2);
        break;
    }
    this._x0 = this._x1, this._x1 = x2;
    this._y0 = this._y1, this._y1 = y2;
  }
};
function basisOpen_default(context) {
  return new BasisOpen(context);
}

// node_modules/d3-shape/src/curve/linearClosed.js
function LinearClosed(context) {
  this._context = context;
}
LinearClosed.prototype = {
  areaStart: noop_default,
  areaEnd: noop_default,
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._point)
      this._context.closePath();
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    if (this._point)
      this._context.lineTo(x2, y2);
    else
      this._point = 1, this._context.moveTo(x2, y2);
  }
};
function linearClosed_default(context) {
  return new LinearClosed(context);
}

// node_modules/d3-shape/src/curve/monotone.js
function sign(x2) {
  return x2 < 0 ? -1 : 1;
}
function slope3(that, x2, y2) {
  var h0 = that._x1 - that._x0, h1 = x2 - that._x1, s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0), s1 = (y2 - that._y1) / (h1 || h0 < 0 && -0), p = (s0 * h1 + s1 * h0) / (h0 + h1);
  return (sign(s0) + sign(s1)) * Math.min(Math.abs(s0), Math.abs(s1), 0.5 * Math.abs(p)) || 0;
}
function slope2(that, t) {
  var h = that._x1 - that._x0;
  return h ? (3 * (that._y1 - that._y0) / h - t) / 2 : t;
}
function point2(that, t02, t12) {
  var x0 = that._x0, y0 = that._y0, x1 = that._x1, y1 = that._y1, dx = (x1 - x0) / 3;
  that._context.bezierCurveTo(x0 + dx, y0 + dx * t02, x1 - dx, y1 - dx * t12, x1, y1);
}
function MonotoneX(context) {
  this._context = context;
}
MonotoneX.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        point2(this, this._t0, slope2(this, this._t0));
        break;
    }
    if (this._line || this._line !== 0 && this._point === 1)
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x2, y2) {
    var t12 = NaN;
    x2 = +x2, y2 = +y2;
    if (x2 === this._x1 && y2 === this._y1)
      return;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x2, y2) : this._context.moveTo(x2, y2);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        point2(this, slope2(this, t12 = slope3(this, x2, y2)), t12);
        break;
      default:
        point2(this, this._t0, t12 = slope3(this, x2, y2));
        break;
    }
    this._x0 = this._x1, this._x1 = x2;
    this._y0 = this._y1, this._y1 = y2;
    this._t0 = t12;
  }
};
function MonotoneY(context) {
  this._context = new ReflectContext(context);
}
(MonotoneY.prototype = Object.create(MonotoneX.prototype)).point = function(x2, y2) {
  MonotoneX.prototype.point.call(this, y2, x2);
};
function ReflectContext(context) {
  this._context = context;
}
ReflectContext.prototype = {
  moveTo: function(x2, y2) {
    this._context.moveTo(y2, x2);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(x2, y2) {
    this._context.lineTo(y2, x2);
  },
  bezierCurveTo: function(x1, y1, x2, y2, x3, y3) {
    this._context.bezierCurveTo(y1, x1, y2, x2, y3, x3);
  }
};
function monotoneX(context) {
  return new MonotoneX(context);
}
function monotoneY(context) {
  return new MonotoneY(context);
}

// node_modules/d3-shape/src/curve/natural.js
function Natural(context) {
  this._context = context;
}
Natural.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [];
    this._y = [];
  },
  lineEnd: function() {
    var x2 = this._x, y2 = this._y, n = x2.length;
    if (n) {
      this._line ? this._context.lineTo(x2[0], y2[0]) : this._context.moveTo(x2[0], y2[0]);
      if (n === 2) {
        this._context.lineTo(x2[1], y2[1]);
      } else {
        var px = controlPoints(x2), py = controlPoints(y2);
        for (var i0 = 0, i1 = 1; i1 < n; ++i0, ++i1) {
          this._context.bezierCurveTo(px[0][i0], py[0][i0], px[1][i0], py[1][i0], x2[i1], y2[i1]);
        }
      }
    }
    if (this._line || this._line !== 0 && n === 1)
      this._context.closePath();
    this._line = 1 - this._line;
    this._x = this._y = null;
  },
  point: function(x2, y2) {
    this._x.push(+x2);
    this._y.push(+y2);
  }
};
function controlPoints(x2) {
  var i, n = x2.length - 1, m, a2 = new Array(n), b = new Array(n), r = new Array(n);
  a2[0] = 0, b[0] = 2, r[0] = x2[0] + 2 * x2[1];
  for (i = 1; i < n - 1; ++i)
    a2[i] = 1, b[i] = 4, r[i] = 4 * x2[i] + 2 * x2[i + 1];
  a2[n - 1] = 2, b[n - 1] = 7, r[n - 1] = 8 * x2[n - 1] + x2[n];
  for (i = 1; i < n; ++i)
    m = a2[i] / b[i - 1], b[i] -= m, r[i] -= m * r[i - 1];
  a2[n - 1] = r[n - 1] / b[n - 1];
  for (i = n - 2; i >= 0; --i)
    a2[i] = (r[i] - a2[i + 1]) / b[i];
  b[n - 1] = (x2[n] + a2[n - 1]) / 2;
  for (i = 0; i < n - 1; ++i)
    b[i] = 2 * x2[i + 1] - a2[i + 1];
  return [a2, b];
}
function natural_default(context) {
  return new Natural(context);
}

// node_modules/d3-shape/src/curve/step.js
function Step(context, t) {
  this._context = context;
  this._t = t;
}
Step.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (0 < this._t && this._t < 1 && this._point === 2)
      this._context.lineTo(this._x, this._y);
    if (this._line || this._line !== 0 && this._point === 1)
      this._context.closePath();
    if (this._line >= 0)
      this._t = 1 - this._t, this._line = 1 - this._line;
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x2, y2) : this._context.moveTo(x2, y2);
        break;
      case 1:
        this._point = 2;
      default: {
        if (this._t <= 0) {
          this._context.lineTo(this._x, y2);
          this._context.lineTo(x2, y2);
        } else {
          var x1 = this._x * (1 - this._t) + x2 * this._t;
          this._context.lineTo(x1, this._y);
          this._context.lineTo(x1, y2);
        }
        break;
      }
    }
    this._x = x2, this._y = y2;
  }
};
function step_default(context) {
  return new Step(context, 0.5);
}
function stepBefore(context) {
  return new Step(context, 0);
}
function stepAfter(context) {
  return new Step(context, 1);
}

// node_modules/d3-shape/src/offset/none.js
function none_default(series, order) {
  if (!((n = series.length) > 1))
    return;
  for (var i = 1, j, s0, s1 = series[order[0]], n, m = s1.length; i < n; ++i) {
    s0 = s1, s1 = series[order[i]];
    for (j = 0; j < m; ++j) {
      s1[j][1] += s1[j][0] = isNaN(s0[j][1]) ? s0[j][0] : s0[j][1];
    }
  }
}

// node_modules/d3-shape/src/order/none.js
function none_default2(series) {
  var n = series.length, o = new Array(n);
  while (--n >= 0)
    o[n] = n;
  return o;
}

// node_modules/d3-shape/src/stack.js
function stackValue(d, key) {
  return d[key];
}
function stackSeries(key) {
  const series = [];
  series.key = key;
  return series;
}
function stack_default() {
  var keys2 = constant_default([]), order = none_default2, offset = none_default, value = stackValue;
  function stack(data2) {
    var sz = Array.from(keys2.apply(this, arguments), stackSeries), i, n = sz.length, j = -1, oz;
    for (const d of data2) {
      for (i = 0, ++j; i < n; ++i) {
        (sz[i][j] = [0, +value(d, sz[i].key, j, data2)]).data = d;
      }
    }
    for (i = 0, oz = array_default(order(sz)); i < n; ++i) {
      sz[oz[i]].index = i;
    }
    offset(sz, oz);
    return sz;
  }
  stack.keys = function(_) {
    return arguments.length ? (keys2 = typeof _ === "function" ? _ : constant_default(Array.from(_)), stack) : keys2;
  };
  stack.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : constant_default(+_), stack) : value;
  };
  stack.order = function(_) {
    return arguments.length ? (order = _ == null ? none_default2 : typeof _ === "function" ? _ : constant_default(Array.from(_)), stack) : order;
  };
  stack.offset = function(_) {
    return arguments.length ? (offset = _ == null ? none_default : _, stack) : offset;
  };
  return stack;
}

// node_modules/d3-shape/src/offset/expand.js
function expand_default(series, order) {
  if (!((n = series.length) > 0))
    return;
  for (var i, n, j = 0, m = series[0].length, y2; j < m; ++j) {
    for (y2 = i = 0; i < n; ++i)
      y2 += series[i][j][1] || 0;
    if (y2)
      for (i = 0; i < n; ++i)
        series[i][j][1] /= y2;
  }
  none_default(series, order);
}

// node_modules/d3-shape/src/offset/silhouette.js
function silhouette_default(series, order) {
  if (!((n = series.length) > 0))
    return;
  for (var j = 0, s0 = series[order[0]], n, m = s0.length; j < m; ++j) {
    for (var i = 0, y2 = 0; i < n; ++i)
      y2 += series[i][j][1] || 0;
    s0[j][1] += s0[j][0] = -y2 / 2;
  }
  none_default(series, order);
}

// node_modules/d3-shape/src/offset/wiggle.js
function wiggle_default(series, order) {
  if (!((n = series.length) > 0) || !((m = (s0 = series[order[0]]).length) > 0))
    return;
  for (var y2 = 0, j = 1, s0, m, n; j < m; ++j) {
    for (var i = 0, s1 = 0, s2 = 0; i < n; ++i) {
      var si = series[order[i]], sij0 = si[j][1] || 0, sij1 = si[j - 1][1] || 0, s3 = (sij0 - sij1) / 2;
      for (var k2 = 0; k2 < i; ++k2) {
        var sk = series[order[k2]], skj0 = sk[j][1] || 0, skj1 = sk[j - 1][1] || 0;
        s3 += skj0 - skj1;
      }
      s1 += sij0, s2 += s3 * sij0;
    }
    s0[j - 1][1] += s0[j - 1][0] = y2;
    if (s1)
      y2 -= s2 / s1;
  }
  s0[j - 1][1] += s0[j - 1][0] = y2;
  none_default(series, order);
}

// node_modules/recharts/es6/shape/Symbols.js
function _typeof2(o) {
  "@babel/helpers - typeof";
  return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof2(o);
}
var _excluded5 = ["type", "size", "sizeType"];
function _extends4() {
  _extends4 = Object.assign ? Object.assign.bind() : function(target) {
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
  return _extends4.apply(this, arguments);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof2(i) ? i : String(i);
}
function _toPrimitive(t, r) {
  if ("object" != _typeof2(t) || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof2(i))
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _objectWithoutProperties4(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose5(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose5(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var symbolFactories = {
  symbolCircle: circle_default,
  symbolCross: cross_default,
  symbolDiamond: diamond_default,
  symbolSquare: square_default,
  symbolStar: star_default,
  symbolTriangle: triangle_default,
  symbolWye: wye_default
};
var RADIAN = Math.PI / 180;
var getSymbolFactory = function getSymbolFactory2(type) {
  var name = "symbol".concat((0, import_upperFirst.default)(type));
  return symbolFactories[name] || circle_default;
};
var calculateAreaSize = function calculateAreaSize2(size, sizeType, type) {
  if (sizeType === "area") {
    return size;
  }
  switch (type) {
    case "cross":
      return 5 * size * size / 9;
    case "diamond":
      return 0.5 * size * size / Math.sqrt(3);
    case "square":
      return size * size;
    case "star": {
      var angle = 18 * RADIAN;
      return 1.25 * size * size * (Math.tan(angle) - Math.tan(angle * 2) * Math.pow(Math.tan(angle), 2));
    }
    case "triangle":
      return Math.sqrt(3) * size * size / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * size * size / 8;
    default:
      return Math.PI * size * size / 4;
  }
};
var registerSymbol = function registerSymbol2(key, factory) {
  symbolFactories["symbol".concat((0, import_upperFirst.default)(key))] = factory;
};
var Symbols = function Symbols2(_ref) {
  var _ref$type = _ref.type, type = _ref$type === void 0 ? "circle" : _ref$type, _ref$size = _ref.size, size = _ref$size === void 0 ? 64 : _ref$size, _ref$sizeType = _ref.sizeType, sizeType = _ref$sizeType === void 0 ? "area" : _ref$sizeType, rest = _objectWithoutProperties4(_ref, _excluded5);
  var props = _objectSpread(_objectSpread({}, rest), {}, {
    type,
    size,
    sizeType
  });
  var getPath5 = function getPath6() {
    var symbolFactory = getSymbolFactory(type);
    var symbol = Symbol2().type(symbolFactory).size(calculateAreaSize(size, sizeType, type));
    return symbol();
  };
  var className = props.className, cx = props.cx, cy = props.cy;
  var filteredProps = filterProps(props, true);
  if (cx === +cx && cy === +cy && size === +size) {
    return /* @__PURE__ */ import_react7.default.createElement("path", _extends4({}, filteredProps, {
      className: clsx_default("recharts-symbols", className),
      transform: "translate(".concat(cx, ", ").concat(cy, ")"),
      d: getPath5()
    }));
  }
  return null;
};
Symbols.registerSymbol = registerSymbol;

// node_modules/recharts/es6/component/DefaultLegendContent.js
function _typeof3(o) {
  "@babel/helpers - typeof";
  return _typeof3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof3(o);
}
function _extends5() {
  _extends5 = Object.assign ? Object.assign.bind() : function(target) {
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
  return _extends5.apply(this, arguments);
}
function ownKeys2(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys2(Object(t), true).forEach(function(r2) {
      _defineProperty2(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys2(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey2(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _callSuper(t, o, e) {
  return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
function _possibleConstructorReturn(self2, call) {
  if (call && (_typeof3(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized2(self2);
}
function _assertThisInitialized2(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct11() {
    return !!t;
  })();
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf11(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass)
    _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf11(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}
function _defineProperty2(obj, key, value) {
  key = _toPropertyKey2(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey2(t) {
  var i = _toPrimitive2(t, "string");
  return "symbol" == _typeof3(i) ? i : String(i);
}
function _toPrimitive2(t, r) {
  if ("object" != _typeof3(t) || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof3(i))
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var SIZE = 32;
var DefaultLegendContent = /* @__PURE__ */ function(_PureComponent) {
  _inherits(DefaultLegendContent2, _PureComponent);
  function DefaultLegendContent2() {
    _classCallCheck(this, DefaultLegendContent2);
    return _callSuper(this, DefaultLegendContent2, arguments);
  }
  _createClass(DefaultLegendContent2, [{
    key: "renderIcon",
    value: (
      /**
       * Render the path of icon
       * @param {Object} data Data of each legend item
       * @return {String} Path element
       */
      function renderIcon(data2) {
        var inactiveColor = this.props.inactiveColor;
        var halfSize = SIZE / 2;
        var sixthSize = SIZE / 6;
        var thirdSize = SIZE / 3;
        var color2 = data2.inactive ? inactiveColor : data2.color;
        if (data2.type === "plainline") {
          return /* @__PURE__ */ import_react8.default.createElement("line", {
            strokeWidth: 4,
            fill: "none",
            stroke: color2,
            strokeDasharray: data2.payload.strokeDasharray,
            x1: 0,
            y1: halfSize,
            x2: SIZE,
            y2: halfSize,
            className: "recharts-legend-icon"
          });
        }
        if (data2.type === "line") {
          return /* @__PURE__ */ import_react8.default.createElement("path", {
            strokeWidth: 4,
            fill: "none",
            stroke: color2,
            d: "M0,".concat(halfSize, "h").concat(thirdSize, "\n            A").concat(sixthSize, ",").concat(sixthSize, ",0,1,1,").concat(2 * thirdSize, ",").concat(halfSize, "\n            H").concat(SIZE, "M").concat(2 * thirdSize, ",").concat(halfSize, "\n            A").concat(sixthSize, ",").concat(sixthSize, ",0,1,1,").concat(thirdSize, ",").concat(halfSize),
            className: "recharts-legend-icon"
          });
        }
        if (data2.type === "rect") {
          return /* @__PURE__ */ import_react8.default.createElement("path", {
            stroke: "none",
            fill: color2,
            d: "M0,".concat(SIZE / 8, "h").concat(SIZE, "v").concat(SIZE * 3 / 4, "h").concat(-SIZE, "z"),
            className: "recharts-legend-icon"
          });
        }
        if (/* @__PURE__ */ import_react8.default.isValidElement(data2.legendIcon)) {
          var iconProps = _objectSpread2({}, data2);
          delete iconProps.legendIcon;
          return /* @__PURE__ */ import_react8.default.cloneElement(data2.legendIcon, iconProps);
        }
        return /* @__PURE__ */ import_react8.default.createElement(Symbols, {
          fill: color2,
          cx: halfSize,
          cy: halfSize,
          size: SIZE,
          sizeType: "diameter",
          type: data2.type
        });
      }
    )
    /**
     * Draw items of legend
     * @return {ReactElement} Items
     */
  }, {
    key: "renderItems",
    value: function renderItems() {
      var _this = this;
      var _this$props = this.props, payload = _this$props.payload, iconSize = _this$props.iconSize, layout = _this$props.layout, formatter = _this$props.formatter, inactiveColor = _this$props.inactiveColor;
      var viewBox = {
        x: 0,
        y: 0,
        width: SIZE,
        height: SIZE
      };
      var itemStyle = {
        display: layout === "horizontal" ? "inline-block" : "block",
        marginRight: 10
      };
      var svgStyle = {
        display: "inline-block",
        verticalAlign: "middle",
        marginRight: 4
      };
      return payload.map(function(entry, i) {
        var finalFormatter = entry.formatter || formatter;
        var className = clsx_default(_defineProperty2(_defineProperty2({
          "recharts-legend-item": true
        }, "legend-item-".concat(i), true), "inactive", entry.inactive));
        if (entry.type === "none") {
          return null;
        }
        var entryValue = !(0, import_isFunction2.default)(entry.value) ? entry.value : null;
        warn(
          !(0, import_isFunction2.default)(entry.value),
          `The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`
          // eslint-disable-line max-len
        );
        var color2 = entry.inactive ? inactiveColor : entry.color;
        return /* @__PURE__ */ import_react8.default.createElement("li", _extends5({
          className,
          style: itemStyle,
          key: "legend-item-".concat(i)
        }, adaptEventsOfChild(_this.props, entry, i)), /* @__PURE__ */ import_react8.default.createElement(Surface, {
          width: iconSize,
          height: iconSize,
          viewBox,
          style: svgStyle
        }, _this.renderIcon(entry)), /* @__PURE__ */ import_react8.default.createElement("span", {
          className: "recharts-legend-item-text",
          style: {
            color: color2
          }
        }, finalFormatter ? finalFormatter(entryValue, entry, i) : entryValue));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props, payload = _this$props2.payload, layout = _this$props2.layout, align = _this$props2.align;
      if (!payload || !payload.length) {
        return null;
      }
      var finalStyle = {
        padding: 0,
        margin: 0,
        textAlign: layout === "horizontal" ? align : "left"
      };
      return /* @__PURE__ */ import_react8.default.createElement("ul", {
        className: "recharts-default-legend",
        style: finalStyle
      }, this.renderItems());
    }
  }]);
  return DefaultLegendContent2;
}(import_react8.PureComponent);
_defineProperty2(DefaultLegendContent, "displayName", "Legend");
_defineProperty2(DefaultLegendContent, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "middle",
  inactiveColor: "#ccc"
});

// node_modules/recharts/es6/util/payload/getUniqPayload.js
var import_uniqBy = __toESM(require_uniqBy());
var import_isFunction3 = __toESM(require_isFunction());
function getUniqPayload(payload, option, defaultUniqBy3) {
  if (option === true) {
    return (0, import_uniqBy.default)(payload, defaultUniqBy3);
  }
  if ((0, import_isFunction3.default)(option)) {
    return (0, import_uniqBy.default)(payload, option);
  }
  return payload;
}

// node_modules/recharts/es6/component/Legend.js
function _typeof4(o) {
  "@babel/helpers - typeof";
  return _typeof4 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof4(o);
}
var _excluded6 = ["ref"];
function ownKeys3(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread3(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys3(Object(t), true).forEach(function(r2) {
      _defineProperty3(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys3(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _classCallCheck2(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties2(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey3(descriptor.key), descriptor);
  }
}
function _createClass2(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties2(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties2(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _callSuper2(t, o, e) {
  return o = _getPrototypeOf2(o), _possibleConstructorReturn2(t, _isNativeReflectConstruct2() ? Reflect.construct(o, e || [], _getPrototypeOf2(t).constructor) : o.apply(t, e));
}
function _possibleConstructorReturn2(self2, call) {
  if (call && (_typeof4(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized3(self2);
}
function _isNativeReflectConstruct2() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct2 = function _isNativeReflectConstruct11() {
    return !!t;
  })();
}
function _getPrototypeOf2(o) {
  _getPrototypeOf2 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf11(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf2(o);
}
function _assertThisInitialized3(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _inherits2(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass)
    _setPrototypeOf2(subClass, superClass);
}
function _setPrototypeOf2(o, p) {
  _setPrototypeOf2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf11(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf2(o, p);
}
function _defineProperty3(obj, key, value) {
  key = _toPropertyKey3(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey3(t) {
  var i = _toPrimitive3(t, "string");
  return "symbol" == _typeof4(i) ? i : String(i);
}
function _toPrimitive3(t, r) {
  if ("object" != _typeof4(t) || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof4(i))
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _objectWithoutProperties5(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose6(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose6(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function defaultUniqBy(entry) {
  return entry.value;
}
function renderContent(content, props) {
  if (/* @__PURE__ */ import_react9.default.isValidElement(content)) {
    return /* @__PURE__ */ import_react9.default.cloneElement(content, props);
  }
  if (typeof content === "function") {
    return /* @__PURE__ */ import_react9.default.createElement(content, props);
  }
  var ref = props.ref, otherProps = _objectWithoutProperties5(props, _excluded6);
  return /* @__PURE__ */ import_react9.default.createElement(DefaultLegendContent, otherProps);
}
var EPS = 1;
var Legend = /* @__PURE__ */ function(_PureComponent) {
  _inherits2(Legend2, _PureComponent);
  function Legend2() {
    var _this;
    _classCallCheck2(this, Legend2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper2(this, Legend2, [].concat(args));
    _defineProperty3(_assertThisInitialized3(_this), "lastBoundingBox", {
      width: -1,
      height: -1
    });
    return _this;
  }
  _createClass2(Legend2, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateBBox();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.updateBBox();
    }
  }, {
    key: "getBBox",
    value: function getBBox() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        return this.wrapperNode.getBoundingClientRect();
      }
      return null;
    }
  }, {
    key: "updateBBox",
    value: function updateBBox() {
      var onBBoxUpdate = this.props.onBBoxUpdate;
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var _box = this.wrapperNode.getBoundingClientRect();
        if (Math.abs(_box.width - this.lastBoundingBox.width) > EPS || Math.abs(_box.height - this.lastBoundingBox.height) > EPS) {
          this.lastBoundingBox.width = _box.width;
          this.lastBoundingBox.height = _box.height;
          if (onBBoxUpdate) {
            onBBoxUpdate(_box);
          }
        }
      } else if (this.lastBoundingBox.width !== -1 || this.lastBoundingBox.height !== -1) {
        this.lastBoundingBox.width = -1;
        this.lastBoundingBox.height = -1;
        if (onBBoxUpdate) {
          onBBoxUpdate(null);
        }
      }
    }
  }, {
    key: "getBBoxSnapshot",
    value: function getBBoxSnapshot() {
      if (this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0) {
        return _objectSpread3({}, this.lastBoundingBox);
      }
      return {
        width: 0,
        height: 0
      };
    }
  }, {
    key: "getDefaultPosition",
    value: function getDefaultPosition(style) {
      var _this$props = this.props, layout = _this$props.layout, align = _this$props.align, verticalAlign = _this$props.verticalAlign, margin = _this$props.margin, chartWidth = _this$props.chartWidth, chartHeight = _this$props.chartHeight;
      var hPos, vPos;
      if (!style || (style.left === void 0 || style.left === null) && (style.right === void 0 || style.right === null)) {
        if (align === "center" && layout === "vertical") {
          var _box2 = this.getBBoxSnapshot();
          hPos = {
            left: ((chartWidth || 0) - _box2.width) / 2
          };
        } else {
          hPos = align === "right" ? {
            right: margin && margin.right || 0
          } : {
            left: margin && margin.left || 0
          };
        }
      }
      if (!style || (style.top === void 0 || style.top === null) && (style.bottom === void 0 || style.bottom === null)) {
        if (verticalAlign === "middle") {
          var _box3 = this.getBBoxSnapshot();
          vPos = {
            top: ((chartHeight || 0) - _box3.height) / 2
          };
        } else {
          vPos = verticalAlign === "bottom" ? {
            bottom: margin && margin.bottom || 0
          } : {
            top: margin && margin.top || 0
          };
        }
      }
      return _objectSpread3(_objectSpread3({}, hPos), vPos);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props2 = this.props, content = _this$props2.content, width = _this$props2.width, height = _this$props2.height, wrapperStyle = _this$props2.wrapperStyle, payloadUniqBy = _this$props2.payloadUniqBy, payload = _this$props2.payload;
      var outerStyle = _objectSpread3(_objectSpread3({
        position: "absolute",
        width: width || "auto",
        height: height || "auto"
      }, this.getDefaultPosition(wrapperStyle)), wrapperStyle);
      return /* @__PURE__ */ import_react9.default.createElement("div", {
        className: "recharts-legend-wrapper",
        style: outerStyle,
        ref: function ref(node) {
          _this2.wrapperNode = node;
        }
      }, renderContent(content, _objectSpread3(_objectSpread3({}, this.props), {}, {
        payload: getUniqPayload(payload, payloadUniqBy, defaultUniqBy)
      })));
    }
  }], [{
    key: "getWithHeight",
    value: function getWithHeight(item, chartWidth) {
      var layout = item.props.layout;
      if (layout === "vertical" && isNumber(item.props.height)) {
        return {
          height: item.props.height
        };
      }
      if (layout === "horizontal") {
        return {
          width: item.props.width || chartWidth
        };
      }
      return null;
    }
  }]);
  return Legend2;
}(import_react9.PureComponent);
_defineProperty3(Legend, "displayName", "Legend");
_defineProperty3(Legend, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "bottom"
});

// node_modules/recharts/es6/component/Tooltip.js
var import_react12 = __toESM(require_react());

// node_modules/recharts/es6/component/DefaultTooltipContent.js
var import_react10 = __toESM(require_react());
var import_sortBy = __toESM(require_sortBy());
var import_isNil2 = __toESM(require_isNil());
function _typeof5(o) {
  "@babel/helpers - typeof";
  return _typeof5 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof5(o);
}
function _extends6() {
  _extends6 = Object.assign ? Object.assign.bind() : function(target) {
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
  return _extends6.apply(this, arguments);
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a2 = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t)
          return;
        f = false;
      } else
        for (; !(f = (e = i.call(t)).done) && (a2.push(e.value), a2.length !== l); f = true)
          ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u))
          return;
      } finally {
        if (o)
          throw n;
      }
    }
    return a2;
  }
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
function ownKeys4(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread4(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys4(Object(t), true).forEach(function(r2) {
      _defineProperty4(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys4(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty4(obj, key, value) {
  key = _toPropertyKey4(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey4(t) {
  var i = _toPrimitive4(t, "string");
  return "symbol" == _typeof5(i) ? i : String(i);
}
function _toPrimitive4(t, r) {
  if ("object" != _typeof5(t) || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof5(i))
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function defaultFormatter(value) {
  return Array.isArray(value) && isNumOrStr(value[0]) && isNumOrStr(value[1]) ? value.join(" ~ ") : value;
}
var DefaultTooltipContent = function DefaultTooltipContent2(props) {
  var _props$separator = props.separator, separator = _props$separator === void 0 ? " : " : _props$separator, _props$contentStyle = props.contentStyle, contentStyle = _props$contentStyle === void 0 ? {} : _props$contentStyle, _props$itemStyle = props.itemStyle, itemStyle = _props$itemStyle === void 0 ? {} : _props$itemStyle, _props$labelStyle = props.labelStyle, labelStyle = _props$labelStyle === void 0 ? {} : _props$labelStyle, payload = props.payload, formatter = props.formatter, itemSorter = props.itemSorter, wrapperClassName = props.wrapperClassName, labelClassName = props.labelClassName, label = props.label, labelFormatter = props.labelFormatter, _props$accessibilityL = props.accessibilityLayer, accessibilityLayer = _props$accessibilityL === void 0 ? false : _props$accessibilityL;
  var renderContent3 = function renderContent4() {
    if (payload && payload.length) {
      var listStyle = {
        padding: 0,
        margin: 0
      };
      var items = (itemSorter ? (0, import_sortBy.default)(payload, itemSorter) : payload).map(function(entry, i) {
        if (entry.type === "none") {
          return null;
        }
        var finalItemStyle = _objectSpread4({
          display: "block",
          paddingTop: 4,
          paddingBottom: 4,
          color: entry.color || "#000"
        }, itemStyle);
        var finalFormatter = entry.formatter || formatter || defaultFormatter;
        var value = entry.value, name = entry.name;
        var finalValue = value;
        var finalName = name;
        if (finalFormatter && finalValue != null && finalName != null) {
          var formatted = finalFormatter(value, name, entry, i, payload);
          if (Array.isArray(formatted)) {
            var _formatted = _slicedToArray(formatted, 2);
            finalValue = _formatted[0];
            finalName = _formatted[1];
          } else {
            finalValue = formatted;
          }
        }
        return (
          // eslint-disable-next-line react/no-array-index-key
          /* @__PURE__ */ import_react10.default.createElement("li", {
            className: "recharts-tooltip-item",
            key: "tooltip-item-".concat(i),
            style: finalItemStyle
          }, isNumOrStr(finalName) ? /* @__PURE__ */ import_react10.default.createElement("span", {
            className: "recharts-tooltip-item-name"
          }, finalName) : null, isNumOrStr(finalName) ? /* @__PURE__ */ import_react10.default.createElement("span", {
            className: "recharts-tooltip-item-separator"
          }, separator) : null, /* @__PURE__ */ import_react10.default.createElement("span", {
            className: "recharts-tooltip-item-value"
          }, finalValue), /* @__PURE__ */ import_react10.default.createElement("span", {
            className: "recharts-tooltip-item-unit"
          }, entry.unit || ""))
        );
      });
      return /* @__PURE__ */ import_react10.default.createElement("ul", {
        className: "recharts-tooltip-item-list",
        style: listStyle
      }, items);
    }
    return null;
  };
  var finalStyle = _objectSpread4({
    margin: 0,
    padding: 10,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    whiteSpace: "nowrap"
  }, contentStyle);
  var finalLabelStyle = _objectSpread4({
    margin: 0
  }, labelStyle);
  var hasLabel = !(0, import_isNil2.default)(label);
  var finalLabel = hasLabel ? label : "";
  var wrapperCN = clsx_default("recharts-default-tooltip", wrapperClassName);
  var labelCN = clsx_default("recharts-tooltip-label", labelClassName);
  if (hasLabel && labelFormatter && payload !== void 0 && payload !== null) {
    finalLabel = labelFormatter(label, payload);
  }
  var accessibilityAttributes = accessibilityLayer ? {
    role: "status",
    "aria-live": "assertive"
  } : {};
  return /* @__PURE__ */ import_react10.default.createElement("div", _extends6({
    className: wrapperCN,
    style: finalStyle
  }, accessibilityAttributes), /* @__PURE__ */ import_react10.default.createElement("p", {
    className: labelCN,
    style: finalLabelStyle
  }, /* @__PURE__ */ import_react10.default.isValidElement(finalLabel) ? finalLabel : "".concat(finalLabel)), renderContent3());
};

// node_modules/recharts/es6/component/TooltipBoundingBox.js
var import_react11 = __toESM(require_react());

// node_modules/recharts/es6/util/tooltip/translate.js
function _typeof6(o) {
  "@babel/helpers - typeof";
  return _typeof6 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof6(o);
}
function _defineProperty5(obj, key, value) {
  key = _toPropertyKey5(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey5(t) {
  var i = _toPrimitive5(t, "string");
  return "symbol" == _typeof6(i) ? i : String(i);
}
function _toPrimitive5(t, r) {
  if ("object" != _typeof6(t) || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof6(i))
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var CSS_CLASS_PREFIX = "recharts-tooltip-wrapper";
var TOOLTIP_HIDDEN = {
  visibility: "hidden"
};
function getTooltipCSSClassName(_ref) {
  var coordinate = _ref.coordinate, translateX = _ref.translateX, translateY = _ref.translateY;
  return clsx_default(CSS_CLASS_PREFIX, _defineProperty5(_defineProperty5(_defineProperty5(_defineProperty5({}, "".concat(CSS_CLASS_PREFIX, "-right"), isNumber(translateX) && coordinate && isNumber(coordinate.x) && translateX >= coordinate.x), "".concat(CSS_CLASS_PREFIX, "-left"), isNumber(translateX) && coordinate && isNumber(coordinate.x) && translateX < coordinate.x), "".concat(CSS_CLASS_PREFIX, "-bottom"), isNumber(translateY) && coordinate && isNumber(coordinate.y) && translateY >= coordinate.y), "".concat(CSS_CLASS_PREFIX, "-top"), isNumber(translateY) && coordinate && isNumber(coordinate.y) && translateY < coordinate.y));
}
function getTooltipTranslateXY(_ref2) {
  var allowEscapeViewBox = _ref2.allowEscapeViewBox, coordinate = _ref2.coordinate, key = _ref2.key, offsetTopLeft = _ref2.offsetTopLeft, position = _ref2.position, reverseDirection = _ref2.reverseDirection, tooltipDimension = _ref2.tooltipDimension, viewBox = _ref2.viewBox, viewBoxDimension = _ref2.viewBoxDimension;
  if (position && isNumber(position[key])) {
    return position[key];
  }
  var negative = coordinate[key] - tooltipDimension - offsetTopLeft;
  var positive = coordinate[key] + offsetTopLeft;
  if (allowEscapeViewBox[key]) {
    return reverseDirection[key] ? negative : positive;
  }
  if (reverseDirection[key]) {
    var _tooltipBoundary = negative;
    var _viewBoxBoundary = viewBox[key];
    if (_tooltipBoundary < _viewBoxBoundary) {
      return Math.max(positive, viewBox[key]);
    }
    return Math.max(negative, viewBox[key]);
  }
  var tooltipBoundary = positive + tooltipDimension;
  var viewBoxBoundary = viewBox[key] + viewBoxDimension;
  if (tooltipBoundary > viewBoxBoundary) {
    return Math.max(negative, viewBox[key]);
  }
  return Math.max(positive, viewBox[key]);
}
function getTransformStyle(_ref3) {
  var translateX = _ref3.translateX, translateY = _ref3.translateY, useTranslate3d = _ref3.useTranslate3d;
  return {
    transform: useTranslate3d ? "translate3d(".concat(translateX, "px, ").concat(translateY, "px, 0)") : "translate(".concat(translateX, "px, ").concat(translateY, "px)")
  };
}
function getTooltipTranslate(_ref4) {
  var allowEscapeViewBox = _ref4.allowEscapeViewBox, coordinate = _ref4.coordinate, offsetTopLeft = _ref4.offsetTopLeft, position = _ref4.position, reverseDirection = _ref4.reverseDirection, tooltipBox = _ref4.tooltipBox, useTranslate3d = _ref4.useTranslate3d, viewBox = _ref4.viewBox;
  var cssProperties, translateX, translateY;
  if (tooltipBox.height > 0 && tooltipBox.width > 0 && coordinate) {
    translateX = getTooltipTranslateXY({
      allowEscapeViewBox,
      coordinate,
      key: "x",
      offsetTopLeft,
      position,
      reverseDirection,
      tooltipDimension: tooltipBox.width,
      viewBox,
      viewBoxDimension: viewBox.width
    });
    translateY = getTooltipTranslateXY({
      allowEscapeViewBox,
      coordinate,
      key: "y",
      offsetTopLeft,
      position,
      reverseDirection,
      tooltipDimension: tooltipBox.height,
      viewBox,
      viewBoxDimension: viewBox.height
    });
    cssProperties = getTransformStyle({
      translateX,
      translateY,
      useTranslate3d
    });
  } else {
    cssProperties = TOOLTIP_HIDDEN;
  }
  return {
    cssProperties,
    cssClasses: getTooltipCSSClassName({
      translateX,
      translateY,
      coordinate
    })
  };
}

// node_modules/recharts/es6/component/TooltipBoundingBox.js
function _typeof7(o) {
  "@babel/helpers - typeof";
  return _typeof7 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof7(o);
}
function ownKeys5(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread5(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys5(Object(t), true).forEach(function(r2) {
      _defineProperty6(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys5(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _classCallCheck3(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties3(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey6(descriptor.key), descriptor);
  }
}
function _createClass3(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties3(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties3(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _callSuper3(t, o, e) {
  return o = _getPrototypeOf3(o), _possibleConstructorReturn3(t, _isNativeReflectConstruct3() ? Reflect.construct(o, e || [], _getPrototypeOf3(t).constructor) : o.apply(t, e));
}
function _possibleConstructorReturn3(self2, call) {
  if (call && (_typeof7(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized4(self2);
}
function _isNativeReflectConstruct3() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct3 = function _isNativeReflectConstruct11() {
    return !!t;
  })();
}
function _getPrototypeOf3(o) {
  _getPrototypeOf3 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf11(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf3(o);
}
function _assertThisInitialized4(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _inherits3(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass)
    _setPrototypeOf3(subClass, superClass);
}
function _setPrototypeOf3(o, p) {
  _setPrototypeOf3 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf11(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf3(o, p);
}
function _defineProperty6(obj, key, value) {
  key = _toPropertyKey6(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey6(t) {
  var i = _toPrimitive6(t, "string");
  return "symbol" == _typeof7(i) ? i : String(i);
}
function _toPrimitive6(t, r) {
  if ("object" != _typeof7(t) || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof7(i))
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var EPSILON = 1;
var TooltipBoundingBox = /* @__PURE__ */ function(_PureComponent) {
  _inherits3(TooltipBoundingBox2, _PureComponent);
  function TooltipBoundingBox2() {
    var _this;
    _classCallCheck3(this, TooltipBoundingBox2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper3(this, TooltipBoundingBox2, [].concat(args));
    _defineProperty6(_assertThisInitialized4(_this), "state", {
      dismissed: false,
      dismissedAtCoordinate: {
        x: 0,
        y: 0
      }
    });
    _defineProperty6(_assertThisInitialized4(_this), "lastBoundingBox", {
      width: -1,
      height: -1
    });
    _defineProperty6(_assertThisInitialized4(_this), "handleKeyDown", function(event) {
      if (event.key === "Escape") {
        var _this$props$coordinat, _this$props$coordinat2, _this$props$coordinat3, _this$props$coordinat4;
        _this.setState({
          dismissed: true,
          dismissedAtCoordinate: {
            x: (_this$props$coordinat = (_this$props$coordinat2 = _this.props.coordinate) === null || _this$props$coordinat2 === void 0 ? void 0 : _this$props$coordinat2.x) !== null && _this$props$coordinat !== void 0 ? _this$props$coordinat : 0,
            y: (_this$props$coordinat3 = (_this$props$coordinat4 = _this.props.coordinate) === null || _this$props$coordinat4 === void 0 ? void 0 : _this$props$coordinat4.y) !== null && _this$props$coordinat3 !== void 0 ? _this$props$coordinat3 : 0
          }
        });
      }
    });
    return _this;
  }
  _createClass3(TooltipBoundingBox2, [{
    key: "updateBBox",
    value: function updateBBox() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var box = this.wrapperNode.getBoundingClientRect();
        if (Math.abs(box.width - this.lastBoundingBox.width) > EPSILON || Math.abs(box.height - this.lastBoundingBox.height) > EPSILON) {
          this.lastBoundingBox.width = box.width;
          this.lastBoundingBox.height = box.height;
        }
      } else if (this.lastBoundingBox.width !== -1 || this.lastBoundingBox.height !== -1) {
        this.lastBoundingBox.width = -1;
        this.lastBoundingBox.height = -1;
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener("keydown", this.handleKeyDown);
      this.updateBBox();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener("keydown", this.handleKeyDown);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this$props$coordinat5, _this$props$coordinat6;
      if (this.props.active) {
        this.updateBBox();
      }
      if (!this.state.dismissed) {
        return;
      }
      if (((_this$props$coordinat5 = this.props.coordinate) === null || _this$props$coordinat5 === void 0 ? void 0 : _this$props$coordinat5.x) !== this.state.dismissedAtCoordinate.x || ((_this$props$coordinat6 = this.props.coordinate) === null || _this$props$coordinat6 === void 0 ? void 0 : _this$props$coordinat6.y) !== this.state.dismissedAtCoordinate.y) {
        this.state.dismissed = false;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props, active = _this$props.active, allowEscapeViewBox = _this$props.allowEscapeViewBox, animationDuration = _this$props.animationDuration, animationEasing = _this$props.animationEasing, children = _this$props.children, coordinate = _this$props.coordinate, hasPayload = _this$props.hasPayload, isAnimationActive = _this$props.isAnimationActive, offset = _this$props.offset, position = _this$props.position, reverseDirection = _this$props.reverseDirection, useTranslate3d = _this$props.useTranslate3d, viewBox = _this$props.viewBox, wrapperStyle = _this$props.wrapperStyle;
      var _getTooltipTranslate = getTooltipTranslate({
        allowEscapeViewBox,
        coordinate,
        offsetTopLeft: offset,
        position,
        reverseDirection,
        tooltipBox: {
          height: this.lastBoundingBox.height,
          width: this.lastBoundingBox.width
        },
        useTranslate3d,
        viewBox
      }), cssClasses = _getTooltipTranslate.cssClasses, cssProperties = _getTooltipTranslate.cssProperties;
      var outerStyle = _objectSpread5(_objectSpread5({
        transition: isAnimationActive && active ? "transform ".concat(animationDuration, "ms ").concat(animationEasing) : void 0
      }, cssProperties), {}, {
        pointerEvents: "none",
        visibility: !this.state.dismissed && active && hasPayload ? "visible" : "hidden",
        position: "absolute",
        top: 0,
        left: 0
      }, wrapperStyle);
      return (
        // This element allow listening to the `Escape` key.
        // See https://github.com/recharts/recharts/pull/2925
        /* @__PURE__ */ import_react11.default.createElement("div", {
          tabIndex: -1,
          className: cssClasses,
          style: outerStyle,
          ref: function ref(node) {
            _this2.wrapperNode = node;
          }
        }, children)
      );
    }
  }]);
  return TooltipBoundingBox2;
}(import_react11.PureComponent);

// node_modules/recharts/es6/util/Global.js
var parseIsSsrByDefault = function parseIsSsrByDefault2() {
  return !(typeof window !== "undefined" && window.document && window.document.createElement && window.setTimeout);
};
var Global = {
  isSsr: parseIsSsrByDefault(),
  get: function get3(key) {
    return Global[key];
  },
  set: function set(key, value) {
    if (typeof key === "string") {
      Global[key] = value;
    } else {
      var keys2 = Object.keys(key);
      if (keys2 && keys2.length) {
        keys2.forEach(function(k2) {
          Global[k2] = key[k2];
        });
      }
    }
  }
};

// node_modules/recharts/es6/component/Tooltip.js
function _typeof8(o) {
  "@babel/helpers - typeof";
  return _typeof8 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof8(o);
}
function ownKeys6(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread6(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys6(Object(t), true).forEach(function(r2) {
      _defineProperty7(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys6(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _classCallCheck4(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties4(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey7(descriptor.key), descriptor);
  }
}
function _createClass4(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties4(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties4(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _callSuper4(t, o, e) {
  return o = _getPrototypeOf4(o), _possibleConstructorReturn4(t, _isNativeReflectConstruct4() ? Reflect.construct(o, e || [], _getPrototypeOf4(t).constructor) : o.apply(t, e));
}
function _possibleConstructorReturn4(self2, call) {
  if (call && (_typeof8(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized5(self2);
}
function _assertThisInitialized5(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _isNativeReflectConstruct4() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct4 = function _isNativeReflectConstruct11() {
    return !!t;
  })();
}
function _getPrototypeOf4(o) {
  _getPrototypeOf4 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf11(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf4(o);
}
function _inherits4(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass)
    _setPrototypeOf4(subClass, superClass);
}
function _setPrototypeOf4(o, p) {
  _setPrototypeOf4 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf11(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf4(o, p);
}
function _defineProperty7(obj, key, value) {
  key = _toPropertyKey7(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey7(t) {
  var i = _toPrimitive7(t, "string");
  return "symbol" == _typeof8(i) ? i : String(i);
}
function _toPrimitive7(t, r) {
  if ("object" != _typeof8(t) || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof8(i))
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function defaultUniqBy2(entry) {
  return entry.dataKey;
}
function renderContent2(content, props) {
  if (/* @__PURE__ */ import_react12.default.isValidElement(content)) {
    return /* @__PURE__ */ import_react12.default.cloneElement(content, props);
  }
  if (typeof content === "function") {
    return /* @__PURE__ */ import_react12.default.createElement(content, props);
  }
  return /* @__PURE__ */ import_react12.default.createElement(DefaultTooltipContent, props);
}
var Tooltip = /* @__PURE__ */ function(_PureComponent) {
  _inherits4(Tooltip2, _PureComponent);
  function Tooltip2() {
    _classCallCheck4(this, Tooltip2);
    return _callSuper4(this, Tooltip2, arguments);
  }
  _createClass4(Tooltip2, [{
    key: "render",
    value: function render() {
      var _this = this;
      var _this$props = this.props, active = _this$props.active, allowEscapeViewBox = _this$props.allowEscapeViewBox, animationDuration = _this$props.animationDuration, animationEasing = _this$props.animationEasing, content = _this$props.content, coordinate = _this$props.coordinate, filterNull = _this$props.filterNull, isAnimationActive = _this$props.isAnimationActive, offset = _this$props.offset, payload = _this$props.payload, payloadUniqBy = _this$props.payloadUniqBy, position = _this$props.position, reverseDirection = _this$props.reverseDirection, useTranslate3d = _this$props.useTranslate3d, viewBox = _this$props.viewBox, wrapperStyle = _this$props.wrapperStyle;
      var finalPayload = payload !== null && payload !== void 0 ? payload : [];
      if (filterNull && finalPayload.length) {
        finalPayload = getUniqPayload(payload.filter(function(entry) {
          return entry.value != null && (entry.hide !== true || _this.props.includeHidden);
        }), payloadUniqBy, defaultUniqBy2);
      }
      var hasPayload = finalPayload.length > 0;
      return /* @__PURE__ */ import_react12.default.createElement(TooltipBoundingBox, {
        allowEscapeViewBox,
        animationDuration,
        animationEasing,
        isAnimationActive,
        active,
        coordinate,
        hasPayload,
        offset,
        position,
        reverseDirection,
        useTranslate3d,
        viewBox,
        wrapperStyle
      }, renderContent2(content, _objectSpread6(_objectSpread6({}, this.props), {}, {
        payload: finalPayload
      })));
    }
  }]);
  return Tooltip2;
}(import_react12.PureComponent);
_defineProperty7(Tooltip, "displayName", "Tooltip");
_defineProperty7(Tooltip, "defaultProps", {
  accessibilityLayer: false,
  allowEscapeViewBox: {
    x: false,
    y: false
  },
  animationDuration: 400,
  animationEasing: "ease",
  contentStyle: {},
  coordinate: {
    x: 0,
    y: 0
  },
  cursor: true,
  cursorStyle: {},
  filterNull: true,
  isAnimationActive: !Global.isSsr,
  itemStyle: {},
  labelStyle: {},
  offset: 10,
  reverseDirection: {
    x: false,
    y: false
  },
  separator: " : ",
  trigger: "hover",
  useTranslate3d: false,
  viewBox: {
    x: 0,
    y: 0,
    height: 0,
    width: 0
  },
  wrapperStyle: {}
});

// node_modules/recharts/es6/component/ResponsiveContainer.js
var import_react13 = __toESM(require_react());
var import_throttle = __toESM(require_throttle());
var import_react_is2 = __toESM(require_react_is());
function _typeof9(o) {
  "@babel/helpers - typeof";
  return _typeof9 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof9(o);
}
function ownKeys7(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread7(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys7(Object(t), true).forEach(function(r2) {
      _defineProperty8(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys7(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty8(obj, key, value) {
  key = _toPropertyKey8(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey8(t) {
  var i = _toPrimitive8(t, "string");
  return "symbol" == _typeof9(i) ? i : String(i);
}
function _toPrimitive8(t, r) {
  if ("object" != _typeof9(t) || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof9(i))
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _slicedToArray2(arr, i) {
  return _arrayWithHoles2(arr) || _iterableToArrayLimit2(arr, i) || _unsupportedIterableToArray2(arr, i) || _nonIterableRest2();
}
function _nonIterableRest2() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray2(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray2(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray2(o, minLen);
}
function _arrayLikeToArray2(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit2(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a2 = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t)
          return;
        f = false;
      } else
        for (; !(f = (e = i.call(t)).done) && (a2.push(e.value), a2.length !== l); f = true)
          ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u))
          return;
      } finally {
        if (o)
          throw n;
      }
    }
    return a2;
  }
}
function _arrayWithHoles2(arr) {
  if (Array.isArray(arr))
    return arr;
}
var ResponsiveContainer = /* @__PURE__ */ (0, import_react13.forwardRef)(function(_ref, ref) {
  var aspect = _ref.aspect, _ref$initialDimension = _ref.initialDimension, initialDimension = _ref$initialDimension === void 0 ? {
    width: -1,
    height: -1
  } : _ref$initialDimension, _ref$width = _ref.width, width = _ref$width === void 0 ? "100%" : _ref$width, _ref$height = _ref.height, height = _ref$height === void 0 ? "100%" : _ref$height, _ref$minWidth = _ref.minWidth, minWidth = _ref$minWidth === void 0 ? 0 : _ref$minWidth, minHeight = _ref.minHeight, maxHeight = _ref.maxHeight, children = _ref.children, _ref$debounce = _ref.debounce, debounce = _ref$debounce === void 0 ? 0 : _ref$debounce, id = _ref.id, className = _ref.className, onResize = _ref.onResize, _ref$style = _ref.style, style = _ref$style === void 0 ? {} : _ref$style;
  var containerRef = (0, import_react13.useRef)(null);
  var onResizeRef = (0, import_react13.useRef)();
  onResizeRef.current = onResize;
  (0, import_react13.useImperativeHandle)(ref, function() {
    return Object.assign(containerRef.current, {
      get current() {
        console.warn("The usage of ref.current.current is deprecated and will no longer be supported.");
        return containerRef.current;
      }
    });
  });
  var _useState = (0, import_react13.useState)({
    containerWidth: initialDimension.width,
    containerHeight: initialDimension.height
  }), _useState2 = _slicedToArray2(_useState, 2), sizes = _useState2[0], setSizes = _useState2[1];
  var setContainerSize = (0, import_react13.useCallback)(function(newWidth, newHeight) {
    setSizes(function(prevState) {
      var roundedWidth = Math.round(newWidth);
      var roundedHeight = Math.round(newHeight);
      if (prevState.containerWidth === roundedWidth && prevState.containerHeight === roundedHeight) {
        return prevState;
      }
      return {
        containerWidth: roundedWidth,
        containerHeight: roundedHeight
      };
    });
  }, []);
  (0, import_react13.useEffect)(function() {
    var callback = function callback2(entries) {
      var _onResizeRef$current;
      var _entries$0$contentRec = entries[0].contentRect, containerWidth2 = _entries$0$contentRec.width, containerHeight2 = _entries$0$contentRec.height;
      setContainerSize(containerWidth2, containerHeight2);
      (_onResizeRef$current = onResizeRef.current) === null || _onResizeRef$current === void 0 || _onResizeRef$current.call(onResizeRef, containerWidth2, containerHeight2);
    };
    if (debounce > 0) {
      callback = (0, import_throttle.default)(callback, debounce, {
        trailing: true,
        leading: false
      });
    }
    var observer = new ResizeObserver(callback);
    var _containerRef$current = containerRef.current.getBoundingClientRect(), containerWidth = _containerRef$current.width, containerHeight = _containerRef$current.height;
    setContainerSize(containerWidth, containerHeight);
    observer.observe(containerRef.current);
    return function() {
      observer.disconnect();
    };
  }, [setContainerSize, debounce]);
  var chartContent = (0, import_react13.useMemo)(function() {
    var containerWidth = sizes.containerWidth, containerHeight = sizes.containerHeight;
    if (containerWidth < 0 || containerHeight < 0) {
      return null;
    }
    warn(isPercent(width) || isPercent(height), "The width(%s) and height(%s) are both fixed numbers,\n       maybe you don't need to use a ResponsiveContainer.", width, height);
    warn(!aspect || aspect > 0, "The aspect(%s) must be greater than zero.", aspect);
    var calculatedWidth = isPercent(width) ? containerWidth : width;
    var calculatedHeight = isPercent(height) ? containerHeight : height;
    if (aspect && aspect > 0) {
      if (calculatedWidth) {
        calculatedHeight = calculatedWidth / aspect;
      } else if (calculatedHeight) {
        calculatedWidth = calculatedHeight * aspect;
      }
      if (maxHeight && calculatedHeight > maxHeight) {
        calculatedHeight = maxHeight;
      }
    }
    warn(calculatedWidth > 0 || calculatedHeight > 0, "The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.", calculatedWidth, calculatedHeight, width, height, minWidth, minHeight, aspect);
    var isCharts = !Array.isArray(children) && (0, import_react_is2.isElement)(children) && getDisplayName(children.type).endsWith("Chart");
    return import_react13.default.Children.map(children, function(child) {
      if ((0, import_react_is2.isElement)(child)) {
        return /* @__PURE__ */ (0, import_react13.cloneElement)(child, _objectSpread7({
          width: calculatedWidth,
          height: calculatedHeight
        }, isCharts ? {
          style: _objectSpread7({
            height: "100%",
            width: "100%",
            maxHeight: calculatedHeight,
            maxWidth: calculatedWidth
          }, child.props.style)
        } : {}));
      }
      return child;
    });
  }, [aspect, children, height, maxHeight, minHeight, minWidth, sizes, width]);
  return /* @__PURE__ */ import_react13.default.createElement("div", {
    id: id ? "".concat(id) : void 0,
    className: clsx_default("recharts-responsive-container", className),
    style: _objectSpread7(_objectSpread7({}, style), {}, {
      width,
      height,
      minWidth,
      minHeight,
      maxHeight
    }),
    ref: containerRef
  }, chartContent);
});

// node_modules/recharts/es6/component/Cell.js
var Cell = function Cell2(_props) {
  return null;
};
Cell.displayName = "Cell";

// node_modules/recharts/es6/component/Text.js
var import_react14 = __toESM(require_react());
var import_isNil3 = __toESM(require_isNil());

// node_modules/recharts/es6/util/DOMUtils.js
function _typeof10(o) {
  "@babel/helpers - typeof";
  return _typeof10 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof10(o);
}
function ownKeys8(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread8(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys8(Object(t), true).forEach(function(r2) {
      _defineProperty9(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys8(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty9(obj, key, value) {
  key = _toPropertyKey9(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey9(t) {
  var i = _toPrimitive9(t, "string");
  return "symbol" == _typeof10(i) ? i : String(i);
}
function _toPrimitive9(t, r) {
  if ("object" != _typeof10(t) || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof10(i))
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var stringCache = {
  widthCache: {},
  cacheCount: 0
};
var MAX_CACHE_NUM = 2e3;
var SPAN_STYLE = {
  position: "absolute",
  top: "-20000px",
  left: 0,
  padding: 0,
  margin: 0,
  border: "none",
  whiteSpace: "pre"
};
var MEASUREMENT_SPAN_ID = "recharts_measurement_span";
function removeInvalidKeys(obj) {
  var copyObj = _objectSpread8({}, obj);
  Object.keys(copyObj).forEach(function(key) {
    if (!copyObj[key]) {
      delete copyObj[key];
    }
  });
  return copyObj;
}
var getStringSize = function getStringSize2(text) {
  var style = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (text === void 0 || text === null || Global.isSsr) {
    return {
      width: 0,
      height: 0
    };
  }
  var copyStyle = removeInvalidKeys(style);
  var cacheKey = JSON.stringify({
    text,
    copyStyle
  });
  if (stringCache.widthCache[cacheKey]) {
    return stringCache.widthCache[cacheKey];
  }
  try {
    var measurementSpan = document.getElementById(MEASUREMENT_SPAN_ID);
    if (!measurementSpan) {
      measurementSpan = document.createElement("span");
      measurementSpan.setAttribute("id", MEASUREMENT_SPAN_ID);
      measurementSpan.setAttribute("aria-hidden", "true");
      document.body.appendChild(measurementSpan);
    }
    var measurementSpanStyle = _objectSpread8(_objectSpread8({}, SPAN_STYLE), copyStyle);
    Object.assign(measurementSpan.style, measurementSpanStyle);
    measurementSpan.textContent = "".concat(text);
    var rect = measurementSpan.getBoundingClientRect();
    var result = {
      width: rect.width,
      height: rect.height
    };
    stringCache.widthCache[cacheKey] = result;
    if (++stringCache.cacheCount > MAX_CACHE_NUM) {
      stringCache.cacheCount = 0;
      stringCache.widthCache = {};
    }
    return result;
  } catch (e) {
    return {
      width: 0,
      height: 0
    };
  }
};
var getOffset = function getOffset2(rect) {
  return {
    top: rect.top + window.scrollY - document.documentElement.clientTop,
    left: rect.left + window.scrollX - document.documentElement.clientLeft
  };
};

// node_modules/recharts/es6/util/ReduceCSSCalc.js
function _typeof11(o) {
  "@babel/helpers - typeof";
  return _typeof11 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof11(o);
}
function _slicedToArray3(arr, i) {
  return _arrayWithHoles3(arr) || _iterableToArrayLimit3(arr, i) || _unsupportedIterableToArray3(arr, i) || _nonIterableRest3();
}
function _nonIterableRest3() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray3(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray3(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray3(o, minLen);
}
function _arrayLikeToArray3(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit3(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a2 = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t)
          return;
        f = false;
      } else
        for (; !(f = (e = i.call(t)).done) && (a2.push(e.value), a2.length !== l); f = true)
          ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u))
          return;
      } finally {
        if (o)
          throw n;
      }
    }
    return a2;
  }
}
function _arrayWithHoles3(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _classCallCheck5(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties5(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey10(descriptor.key), descriptor);
  }
}
function _createClass5(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties5(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties5(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _toPropertyKey10(t) {
  var i = _toPrimitive10(t, "string");
  return "symbol" == _typeof11(i) ? i : String(i);
}
function _toPrimitive10(t, r) {
  if ("object" != _typeof11(t) || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof11(i))
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var MULTIPLY_OR_DIVIDE_REGEX = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/;
var ADD_OR_SUBTRACT_REGEX = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/;
var CSS_LENGTH_UNIT_REGEX = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/;
var NUM_SPLIT_REGEX = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/;
var CONVERSION_RATES = {
  cm: 96 / 2.54,
  mm: 96 / 25.4,
  pt: 96 / 72,
  pc: 96 / 6,
  "in": 96,
  Q: 96 / (2.54 * 40),
  px: 1
};
var FIXED_CSS_LENGTH_UNITS = Object.keys(CONVERSION_RATES);
var STR_NAN = "NaN";
function convertToPx(value, unit2) {
  return value * CONVERSION_RATES[unit2];
}
var DecimalCSS = /* @__PURE__ */ function() {
  function DecimalCSS2(num, unit2) {
    _classCallCheck5(this, DecimalCSS2);
    this.num = num;
    this.unit = unit2;
    this.num = num;
    this.unit = unit2;
    if (Number.isNaN(num)) {
      this.unit = "";
    }
    if (unit2 !== "" && !CSS_LENGTH_UNIT_REGEX.test(unit2)) {
      this.num = NaN;
      this.unit = "";
    }
    if (FIXED_CSS_LENGTH_UNITS.includes(unit2)) {
      this.num = convertToPx(num, unit2);
      this.unit = "px";
    }
  }
  _createClass5(DecimalCSS2, [{
    key: "add",
    value: function add(other) {
      if (this.unit !== other.unit) {
        return new DecimalCSS2(NaN, "");
      }
      return new DecimalCSS2(this.num + other.num, this.unit);
    }
  }, {
    key: "subtract",
    value: function subtract(other) {
      if (this.unit !== other.unit) {
        return new DecimalCSS2(NaN, "");
      }
      return new DecimalCSS2(this.num - other.num, this.unit);
    }
  }, {
    key: "multiply",
    value: function multiply(other) {
      if (this.unit !== "" && other.unit !== "" && this.unit !== other.unit) {
        return new DecimalCSS2(NaN, "");
      }
      return new DecimalCSS2(this.num * other.num, this.unit || other.unit);
    }
  }, {
    key: "divide",
    value: function divide(other) {
      if (this.unit !== "" && other.unit !== "" && this.unit !== other.unit) {
        return new DecimalCSS2(NaN, "");
      }
      return new DecimalCSS2(this.num / other.num, this.unit || other.unit);
    }
  }, {
    key: "toString",
    value: function toString() {
      return "".concat(this.num).concat(this.unit);
    }
  }, {
    key: "isNaN",
    value: function isNaN2() {
      return Number.isNaN(this.num);
    }
  }], [{
    key: "parse",
    value: function parse(str) {
      var _NUM_SPLIT_REGEX$exec;
      var _ref = (_NUM_SPLIT_REGEX$exec = NUM_SPLIT_REGEX.exec(str)) !== null && _NUM_SPLIT_REGEX$exec !== void 0 ? _NUM_SPLIT_REGEX$exec : [], _ref2 = _slicedToArray3(_ref, 3), numStr = _ref2[1], unit2 = _ref2[2];
      return new DecimalCSS2(parseFloat(numStr), unit2 !== null && unit2 !== void 0 ? unit2 : "");
    }
  }]);
  return DecimalCSS2;
}();
function calculateArithmetic(expr) {
  if (expr.includes(STR_NAN)) {
    return STR_NAN;
  }
  var newExpr = expr;
  while (newExpr.includes("*") || newExpr.includes("/")) {
    var _MULTIPLY_OR_DIVIDE_R;
    var _ref3 = (_MULTIPLY_OR_DIVIDE_R = MULTIPLY_OR_DIVIDE_REGEX.exec(newExpr)) !== null && _MULTIPLY_OR_DIVIDE_R !== void 0 ? _MULTIPLY_OR_DIVIDE_R : [], _ref4 = _slicedToArray3(_ref3, 4), leftOperand = _ref4[1], operator = _ref4[2], rightOperand = _ref4[3];
    var lTs = DecimalCSS.parse(leftOperand !== null && leftOperand !== void 0 ? leftOperand : "");
    var rTs = DecimalCSS.parse(rightOperand !== null && rightOperand !== void 0 ? rightOperand : "");
    var result = operator === "*" ? lTs.multiply(rTs) : lTs.divide(rTs);
    if (result.isNaN()) {
      return STR_NAN;
    }
    newExpr = newExpr.replace(MULTIPLY_OR_DIVIDE_REGEX, result.toString());
  }
  while (newExpr.includes("+") || /.-\d+(?:\.\d+)?/.test(newExpr)) {
    var _ADD_OR_SUBTRACT_REGE;
    var _ref5 = (_ADD_OR_SUBTRACT_REGE = ADD_OR_SUBTRACT_REGEX.exec(newExpr)) !== null && _ADD_OR_SUBTRACT_REGE !== void 0 ? _ADD_OR_SUBTRACT_REGE : [], _ref6 = _slicedToArray3(_ref5, 4), _leftOperand = _ref6[1], _operator = _ref6[2], _rightOperand = _ref6[3];
    var _lTs = DecimalCSS.parse(_leftOperand !== null && _leftOperand !== void 0 ? _leftOperand : "");
    var _rTs = DecimalCSS.parse(_rightOperand !== null && _rightOperand !== void 0 ? _rightOperand : "");
    var _result = _operator === "+" ? _lTs.add(_rTs) : _lTs.subtract(_rTs);
    if (_result.isNaN()) {
      return STR_NAN;
    }
    newExpr = newExpr.replace(ADD_OR_SUBTRACT_REGEX, _result.toString());
  }
  return newExpr;
}
var PARENTHESES_REGEX = /\(([^()]*)\)/;
function calculateParentheses(expr) {
  var newExpr = expr;
  while (newExpr.includes("(")) {
    var _PARENTHESES_REGEX$ex = PARENTHESES_REGEX.exec(newExpr), _PARENTHESES_REGEX$ex2 = _slicedToArray3(_PARENTHESES_REGEX$ex, 2), parentheticalExpression = _PARENTHESES_REGEX$ex2[1];
    newExpr = newExpr.replace(PARENTHESES_REGEX, calculateArithmetic(parentheticalExpression));
  }
  return newExpr;
}
function evaluateExpression(expression) {
  var newExpr = expression.replace(/\s+/g, "");
  newExpr = calculateParentheses(newExpr);
  newExpr = calculateArithmetic(newExpr);
  return newExpr;
}
function safeEvaluateExpression(expression) {
  try {
    return evaluateExpression(expression);
  } catch (e) {
    return STR_NAN;
  }
}
function reduceCSSCalc(expression) {
  var result = safeEvaluateExpression(expression.slice(5, -1));
  if (result === STR_NAN) {
    return "";
  }
  return result;
}

// node_modules/recharts/es6/component/Text.js
var _excluded7 = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"];
var _excluded22 = ["dx", "dy", "angle", "className", "breakAll"];
function _extends7() {
  _extends7 = Object.assign ? Object.assign.bind() : function(target) {
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
  return _extends7.apply(this, arguments);
}
function _objectWithoutProperties6(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose7(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose7(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _slicedToArray4(arr, i) {
  return _arrayWithHoles4(arr) || _iterableToArrayLimit4(arr, i) || _unsupportedIterableToArray4(arr, i) || _nonIterableRest4();
}
function _nonIterableRest4() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray4(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray4(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray4(o, minLen);
}
function _arrayLikeToArray4(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit4(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a2 = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t)
          return;
        f = false;
      } else
        for (; !(f = (e = i.call(t)).done) && (a2.push(e.value), a2.length !== l); f = true)
          ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u))
          return;
      } finally {
        if (o)
          throw n;
      }
    }
    return a2;
  }
}
function _arrayWithHoles4(arr) {
  if (Array.isArray(arr))
    return arr;
}
var BREAKING_SPACES = /[ \f\n\r\t\v\u2028\u2029]+/;
var calculateWordWidths = function calculateWordWidths2(_ref) {
  var children = _ref.children, breakAll = _ref.breakAll, style = _ref.style;
  try {
    var words = [];
    if (!(0, import_isNil3.default)(children)) {
      if (breakAll) {
        words = children.toString().split("");
      } else {
        words = children.toString().split(BREAKING_SPACES);
      }
    }
    var wordsWithComputedWidth = words.map(function(word) {
      return {
        word,
        width: getStringSize(word, style).width
      };
    });
    var spaceWidth = breakAll ? 0 : getStringSize("\xA0", style).width;
    return {
      wordsWithComputedWidth,
      spaceWidth
    };
  } catch (e) {
    return null;
  }
};
var calculateWordsByLines = function calculateWordsByLines2(_ref2, initialWordsWithComputedWith, spaceWidth, lineWidth, scaleToFit) {
  var maxLines = _ref2.maxLines, children = _ref2.children, style = _ref2.style, breakAll = _ref2.breakAll;
  var shouldLimitLines = isNumber(maxLines);
  var text = children;
  var calculate = function calculate2() {
    var words = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return words.reduce(function(result2, _ref3) {
      var word = _ref3.word, width = _ref3.width;
      var currentLine = result2[result2.length - 1];
      if (currentLine && (lineWidth == null || scaleToFit || currentLine.width + width + spaceWidth < Number(lineWidth))) {
        currentLine.words.push(word);
        currentLine.width += width + spaceWidth;
      } else {
        var newLine = {
          words: [word],
          width
        };
        result2.push(newLine);
      }
      return result2;
    }, []);
  };
  var originalResult = calculate(initialWordsWithComputedWith);
  var findLongestLine = function findLongestLine2(words) {
    return words.reduce(function(a2, b) {
      return a2.width > b.width ? a2 : b;
    });
  };
  if (!shouldLimitLines) {
    return originalResult;
  }
  var suffix = "\u2026";
  var checkOverflow = function checkOverflow2(index) {
    var tempText = text.slice(0, index);
    var words = calculateWordWidths({
      breakAll,
      style,
      children: tempText + suffix
    }).wordsWithComputedWidth;
    var result2 = calculate(words);
    var doesOverflow = result2.length > maxLines || findLongestLine(result2).width > Number(lineWidth);
    return [doesOverflow, result2];
  };
  var start = 0;
  var end = text.length - 1;
  var iterations = 0;
  var trimmedResult;
  while (start <= end && iterations <= text.length - 1) {
    var middle = Math.floor((start + end) / 2);
    var prev = middle - 1;
    var _checkOverflow = checkOverflow(prev), _checkOverflow2 = _slicedToArray4(_checkOverflow, 2), doesPrevOverflow = _checkOverflow2[0], result = _checkOverflow2[1];
    var _checkOverflow3 = checkOverflow(middle), _checkOverflow4 = _slicedToArray4(_checkOverflow3, 1), doesMiddleOverflow = _checkOverflow4[0];
    if (!doesPrevOverflow && !doesMiddleOverflow) {
      start = middle + 1;
    }
    if (doesPrevOverflow && doesMiddleOverflow) {
      end = middle - 1;
    }
    if (!doesPrevOverflow && doesMiddleOverflow) {
      trimmedResult = result;
      break;
    }
    iterations++;
  }
  return trimmedResult || originalResult;
};
var getWordsWithoutCalculate = function getWordsWithoutCalculate2(children) {
  var words = !(0, import_isNil3.default)(children) ? children.toString().split(BREAKING_SPACES) : [];
  return [{
    words
  }];
};
var getWordsByLines = function getWordsByLines2(_ref4) {
  var width = _ref4.width, scaleToFit = _ref4.scaleToFit, children = _ref4.children, style = _ref4.style, breakAll = _ref4.breakAll, maxLines = _ref4.maxLines;
  if ((width || scaleToFit) && !Global.isSsr) {
    var wordsWithComputedWidth, spaceWidth;
    var wordWidths = calculateWordWidths({
      breakAll,
      children,
      style
    });
    if (wordWidths) {
      var wcw = wordWidths.wordsWithComputedWidth, sw = wordWidths.spaceWidth;
      wordsWithComputedWidth = wcw;
      spaceWidth = sw;
    } else {
      return getWordsWithoutCalculate(children);
    }
    return calculateWordsByLines({
      breakAll,
      children,
      maxLines,
      style
    }, wordsWithComputedWidth, spaceWidth, width, scaleToFit);
  }
  return getWordsWithoutCalculate(children);
};
var DEFAULT_FILL = "#808080";
var Text = function Text2(_ref5) {
  var _ref5$x = _ref5.x, propsX = _ref5$x === void 0 ? 0 : _ref5$x, _ref5$y = _ref5.y, propsY = _ref5$y === void 0 ? 0 : _ref5$y, _ref5$lineHeight = _ref5.lineHeight, lineHeight = _ref5$lineHeight === void 0 ? "1em" : _ref5$lineHeight, _ref5$capHeight = _ref5.capHeight, capHeight = _ref5$capHeight === void 0 ? "0.71em" : _ref5$capHeight, _ref5$scaleToFit = _ref5.scaleToFit, scaleToFit = _ref5$scaleToFit === void 0 ? false : _ref5$scaleToFit, _ref5$textAnchor = _ref5.textAnchor, textAnchor = _ref5$textAnchor === void 0 ? "start" : _ref5$textAnchor, _ref5$verticalAnchor = _ref5.verticalAnchor, verticalAnchor = _ref5$verticalAnchor === void 0 ? "end" : _ref5$verticalAnchor, _ref5$fill = _ref5.fill, fill = _ref5$fill === void 0 ? DEFAULT_FILL : _ref5$fill, props = _objectWithoutProperties6(_ref5, _excluded7);
  var wordsByLines = (0, import_react14.useMemo)(function() {
    return getWordsByLines({
      breakAll: props.breakAll,
      children: props.children,
      maxLines: props.maxLines,
      scaleToFit,
      style: props.style,
      width: props.width
    });
  }, [props.breakAll, props.children, props.maxLines, scaleToFit, props.style, props.width]);
  var dx = props.dx, dy = props.dy, angle = props.angle, className = props.className, breakAll = props.breakAll, textProps = _objectWithoutProperties6(props, _excluded22);
  if (!isNumOrStr(propsX) || !isNumOrStr(propsY)) {
    return null;
  }
  var x2 = propsX + (isNumber(dx) ? dx : 0);
  var y2 = propsY + (isNumber(dy) ? dy : 0);
  var startDy;
  switch (verticalAnchor) {
    case "start":
      startDy = reduceCSSCalc("calc(".concat(capHeight, ")"));
      break;
    case "middle":
      startDy = reduceCSSCalc("calc(".concat((wordsByLines.length - 1) / 2, " * -").concat(lineHeight, " + (").concat(capHeight, " / 2))"));
      break;
    default:
      startDy = reduceCSSCalc("calc(".concat(wordsByLines.length - 1, " * -").concat(lineHeight, ")"));
      break;
  }
  var transforms = [];
  if (scaleToFit) {
    var lineWidth = wordsByLines[0].width;
    var width = props.width;
    transforms.push("scale(".concat((isNumber(width) ? width / lineWidth : 1) / lineWidth, ")"));
  }
  if (angle) {
    transforms.push("rotate(".concat(angle, ", ").concat(x2, ", ").concat(y2, ")"));
  }
  if (transforms.length) {
    textProps.transform = transforms.join(" ");
  }
  return /* @__PURE__ */ import_react14.default.createElement("text", _extends7({}, filterProps(textProps, true), {
    x: x2,
    y: y2,
    className: clsx_default("recharts-text", className),
    textAnchor,
    fill: fill.includes("url") ? DEFAULT_FILL : fill
  }), wordsByLines.map(function(line, index) {
    var words = line.words.join(breakAll ? "" : " ");
    return /* @__PURE__ */ import_react14.default.createElement("tspan", {
      x: x2,
      dy: index === 0 ? startDy : lineHeight,
      key: words
    }, words);
  }));
};

// node_modules/recharts/es6/component/Label.js
var import_react16 = __toESM(require_react());
var import_isNil6 = __toESM(require_isNil());
var import_isFunction5 = __toESM(require_isFunction());
var import_isObject3 = __toESM(require_isObject());

// node_modules/recharts/es6/util/PolarUtils.js
var import_isNil5 = __toESM(require_isNil());

// node_modules/victory-vendor/es/d3-scale.js
var d3_scale_exports = {};
__export(d3_scale_exports, {
  scaleBand: () => band,
  scaleDiverging: () => diverging,
  scaleDivergingLog: () => divergingLog,
  scaleDivergingPow: () => divergingPow,
  scaleDivergingSqrt: () => divergingSqrt,
  scaleDivergingSymlog: () => divergingSymlog,
  scaleIdentity: () => identity2,
  scaleImplicit: () => implicit,
  scaleLinear: () => linear2,
  scaleLog: () => log,
  scaleOrdinal: () => ordinal,
  scalePoint: () => point3,
  scalePow: () => pow,
  scaleQuantile: () => quantile2,
  scaleQuantize: () => quantize,
  scaleRadial: () => radial,
  scaleSequential: () => sequential,
  scaleSequentialLog: () => sequentialLog,
  scaleSequentialPow: () => sequentialPow,
  scaleSequentialQuantile: () => sequentialQuantile,
  scaleSequentialSqrt: () => sequentialSqrt,
  scaleSequentialSymlog: () => sequentialSymlog,
  scaleSqrt: () => sqrt2,
  scaleSymlog: () => symlog,
  scaleThreshold: () => threshold,
  scaleTime: () => time,
  scaleUtc: () => utcTime,
  tickFormat: () => tickFormat
});

// node_modules/d3-array/src/ascending.js
function ascending(a2, b) {
  return a2 == null || b == null ? NaN : a2 < b ? -1 : a2 > b ? 1 : a2 >= b ? 0 : NaN;
}

// node_modules/d3-array/src/descending.js
function descending(a2, b) {
  return a2 == null || b == null ? NaN : b < a2 ? -1 : b > a2 ? 1 : b >= a2 ? 0 : NaN;
}

// node_modules/d3-array/src/bisector.js
function bisector(f) {
  let compare1, compare2, delta;
  if (f.length !== 2) {
    compare1 = ascending;
    compare2 = (d, x2) => ascending(f(d), x2);
    delta = (d, x2) => f(d) - x2;
  } else {
    compare1 = f === ascending || f === descending ? f : zero;
    compare2 = f;
    delta = f;
  }
  function left(a2, x2, lo = 0, hi = a2.length) {
    if (lo < hi) {
      if (compare1(x2, x2) !== 0)
        return hi;
      do {
        const mid = lo + hi >>> 1;
        if (compare2(a2[mid], x2) < 0)
          lo = mid + 1;
        else
          hi = mid;
      } while (lo < hi);
    }
    return lo;
  }
  function right(a2, x2, lo = 0, hi = a2.length) {
    if (lo < hi) {
      if (compare1(x2, x2) !== 0)
        return hi;
      do {
        const mid = lo + hi >>> 1;
        if (compare2(a2[mid], x2) <= 0)
          lo = mid + 1;
        else
          hi = mid;
      } while (lo < hi);
    }
    return lo;
  }
  function center(a2, x2, lo = 0, hi = a2.length) {
    const i = left(a2, x2, lo, hi - 1);
    return i > lo && delta(a2[i - 1], x2) > -delta(a2[i], x2) ? i - 1 : i;
  }
  return { left, center, right };
}
function zero() {
  return 0;
}

// node_modules/d3-array/src/number.js
function number(x2) {
  return x2 === null ? NaN : +x2;
}
function* numbers(values2, valueof) {
  if (valueof === void 0) {
    for (let value of values2) {
      if (value != null && (value = +value) >= value) {
        yield value;
      }
    }
  } else {
    let index = -1;
    for (let value of values2) {
      if ((value = valueof(value, ++index, values2)) != null && (value = +value) >= value) {
        yield value;
      }
    }
  }
}

// node_modules/d3-array/src/bisect.js
var ascendingBisect = bisector(ascending);
var bisectRight = ascendingBisect.right;
var bisectLeft = ascendingBisect.left;
var bisectCenter = bisector(number).center;
var bisect_default = bisectRight;

// node_modules/internmap/src/index.js
var InternMap = class extends Map {
  constructor(entries, key = keyof) {
    super();
    Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: key } });
    if (entries != null)
      for (const [key2, value] of entries)
        this.set(key2, value);
  }
  get(key) {
    return super.get(intern_get(this, key));
  }
  has(key) {
    return super.has(intern_get(this, key));
  }
  set(key, value) {
    return super.set(intern_set(this, key), value);
  }
  delete(key) {
    return super.delete(intern_delete(this, key));
  }
};
function intern_get({ _intern, _key }, value) {
  const key = _key(value);
  return _intern.has(key) ? _intern.get(key) : value;
}
function intern_set({ _intern, _key }, value) {
  const key = _key(value);
  if (_intern.has(key))
    return _intern.get(key);
  _intern.set(key, value);
  return value;
}
function intern_delete({ _intern, _key }, value) {
  const key = _key(value);
  if (_intern.has(key)) {
    value = _intern.get(key);
    _intern.delete(key);
  }
  return value;
}
function keyof(value) {
  return value !== null && typeof value === "object" ? value.valueOf() : value;
}

// node_modules/d3-array/src/sort.js
function compareDefined(compare = ascending) {
  if (compare === ascending)
    return ascendingDefined;
  if (typeof compare !== "function")
    throw new TypeError("compare is not a function");
  return (a2, b) => {
    const x2 = compare(a2, b);
    if (x2 || x2 === 0)
      return x2;
    return (compare(b, b) === 0) - (compare(a2, a2) === 0);
  };
}
function ascendingDefined(a2, b) {
  return (a2 == null || !(a2 >= a2)) - (b == null || !(b >= b)) || (a2 < b ? -1 : a2 > b ? 1 : 0);
}

// node_modules/d3-array/src/ticks.js
var e10 = Math.sqrt(50);
var e5 = Math.sqrt(10);
var e2 = Math.sqrt(2);
function tickSpec(start, stop, count) {
  const step = (stop - start) / Math.max(0, count), power = Math.floor(Math.log10(step)), error = step / Math.pow(10, power), factor = error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1;
  let i1, i2, inc;
  if (power < 0) {
    inc = Math.pow(10, -power) / factor;
    i1 = Math.round(start * inc);
    i2 = Math.round(stop * inc);
    if (i1 / inc < start)
      ++i1;
    if (i2 / inc > stop)
      --i2;
    inc = -inc;
  } else {
    inc = Math.pow(10, power) * factor;
    i1 = Math.round(start / inc);
    i2 = Math.round(stop / inc);
    if (i1 * inc < start)
      ++i1;
    if (i2 * inc > stop)
      --i2;
  }
  if (i2 < i1 && 0.5 <= count && count < 2)
    return tickSpec(start, stop, count * 2);
  return [i1, i2, inc];
}
function ticks(start, stop, count) {
  stop = +stop, start = +start, count = +count;
  if (!(count > 0))
    return [];
  if (start === stop)
    return [start];
  const reverse3 = stop < start, [i1, i2, inc] = reverse3 ? tickSpec(stop, start, count) : tickSpec(start, stop, count);
  if (!(i2 >= i1))
    return [];
  const n = i2 - i1 + 1, ticks2 = new Array(n);
  if (reverse3) {
    if (inc < 0)
      for (let i = 0; i < n; ++i)
        ticks2[i] = (i2 - i) / -inc;
    else
      for (let i = 0; i < n; ++i)
        ticks2[i] = (i2 - i) * inc;
  } else {
    if (inc < 0)
      for (let i = 0; i < n; ++i)
        ticks2[i] = (i1 + i) / -inc;
    else
      for (let i = 0; i < n; ++i)
        ticks2[i] = (i1 + i) * inc;
  }
  return ticks2;
}
function tickIncrement(start, stop, count) {
  stop = +stop, start = +start, count = +count;
  return tickSpec(start, stop, count)[2];
}
function tickStep(start, stop, count) {
  stop = +stop, start = +start, count = +count;
  const reverse3 = stop < start, inc = reverse3 ? tickIncrement(stop, start, count) : tickIncrement(start, stop, count);
  return (reverse3 ? -1 : 1) * (inc < 0 ? 1 / -inc : inc);
}

// node_modules/d3-array/src/max.js
function max(values2, valueof) {
  let max3;
  if (valueof === void 0) {
    for (const value of values2) {
      if (value != null && (max3 < value || max3 === void 0 && value >= value)) {
        max3 = value;
      }
    }
  } else {
    let index = -1;
    for (let value of values2) {
      if ((value = valueof(value, ++index, values2)) != null && (max3 < value || max3 === void 0 && value >= value)) {
        max3 = value;
      }
    }
  }
  return max3;
}

// node_modules/d3-array/src/min.js
function min(values2, valueof) {
  let min3;
  if (valueof === void 0) {
    for (const value of values2) {
      if (value != null && (min3 > value || min3 === void 0 && value >= value)) {
        min3 = value;
      }
    }
  } else {
    let index = -1;
    for (let value of values2) {
      if ((value = valueof(value, ++index, values2)) != null && (min3 > value || min3 === void 0 && value >= value)) {
        min3 = value;
      }
    }
  }
  return min3;
}

// node_modules/d3-array/src/quickselect.js
function quickselect(array, k2, left = 0, right = Infinity, compare) {
  k2 = Math.floor(k2);
  left = Math.floor(Math.max(0, left));
  right = Math.floor(Math.min(array.length - 1, right));
  if (!(left <= k2 && k2 <= right))
    return array;
  compare = compare === void 0 ? ascendingDefined : compareDefined(compare);
  while (right > left) {
    if (right - left > 600) {
      const n = right - left + 1;
      const m = k2 - left + 1;
      const z = Math.log(n);
      const s2 = 0.5 * Math.exp(2 * z / 3);
      const sd = 0.5 * Math.sqrt(z * s2 * (n - s2) / n) * (m - n / 2 < 0 ? -1 : 1);
      const newLeft = Math.max(left, Math.floor(k2 - m * s2 / n + sd));
      const newRight = Math.min(right, Math.floor(k2 + (n - m) * s2 / n + sd));
      quickselect(array, k2, newLeft, newRight, compare);
    }
    const t = array[k2];
    let i = left;
    let j = right;
    swap(array, left, k2);
    if (compare(array[right], t) > 0)
      swap(array, left, right);
    while (i < j) {
      swap(array, i, j), ++i, --j;
      while (compare(array[i], t) < 0)
        ++i;
      while (compare(array[j], t) > 0)
        --j;
    }
    if (compare(array[left], t) === 0)
      swap(array, left, j);
    else
      ++j, swap(array, j, right);
    if (j <= k2)
      left = j + 1;
    if (k2 <= j)
      right = j - 1;
  }
  return array;
}
function swap(array, i, j) {
  const t = array[i];
  array[i] = array[j];
  array[j] = t;
}

// node_modules/d3-array/src/quantile.js
function quantile(values2, p, valueof) {
  values2 = Float64Array.from(numbers(values2, valueof));
  if (!(n = values2.length) || isNaN(p = +p))
    return;
  if (p <= 0 || n < 2)
    return min(values2);
  if (p >= 1)
    return max(values2);
  var n, i = (n - 1) * p, i0 = Math.floor(i), value0 = max(quickselect(values2, i0).subarray(0, i0 + 1)), value1 = min(values2.subarray(i0 + 1));
  return value0 + (value1 - value0) * (i - i0);
}
function quantileSorted(values2, p, valueof = number) {
  if (!(n = values2.length) || isNaN(p = +p))
    return;
  if (p <= 0 || n < 2)
    return +valueof(values2[0], 0, values2);
  if (p >= 1)
    return +valueof(values2[n - 1], n - 1, values2);
  var n, i = (n - 1) * p, i0 = Math.floor(i), value0 = +valueof(values2[i0], i0, values2), value1 = +valueof(values2[i0 + 1], i0 + 1, values2);
  return value0 + (value1 - value0) * (i - i0);
}

// node_modules/d3-array/src/range.js
function range(start, stop, step) {
  start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;
  var i = -1, n = Math.max(0, Math.ceil((stop - start) / step)) | 0, range6 = new Array(n);
  while (++i < n) {
    range6[i] = start + i * step;
  }
  return range6;
}

// node_modules/d3-scale/src/init.js
function initRange(domain, range6) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(domain);
      break;
    default:
      this.range(range6).domain(domain);
      break;
  }
  return this;
}
function initInterpolator(domain, interpolator) {
  switch (arguments.length) {
    case 0:
      break;
    case 1: {
      if (typeof domain === "function")
        this.interpolator(domain);
      else
        this.range(domain);
      break;
    }
    default: {
      this.domain(domain);
      if (typeof interpolator === "function")
        this.interpolator(interpolator);
      else
        this.range(interpolator);
      break;
    }
  }
  return this;
}

// node_modules/d3-scale/src/ordinal.js
var implicit = Symbol("implicit");
function ordinal() {
  var index = new InternMap(), domain = [], range6 = [], unknown = implicit;
  function scale(d) {
    let i = index.get(d);
    if (i === void 0) {
      if (unknown !== implicit)
        return unknown;
      index.set(d, i = domain.push(d) - 1);
    }
    return range6[i % range6.length];
  }
  scale.domain = function(_) {
    if (!arguments.length)
      return domain.slice();
    domain = [], index = new InternMap();
    for (const value of _) {
      if (index.has(value))
        continue;
      index.set(value, domain.push(value) - 1);
    }
    return scale;
  };
  scale.range = function(_) {
    return arguments.length ? (range6 = Array.from(_), scale) : range6.slice();
  };
  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };
  scale.copy = function() {
    return ordinal(domain, range6).unknown(unknown);
  };
  initRange.apply(scale, arguments);
  return scale;
}

// node_modules/d3-scale/src/band.js
function band() {
  var scale = ordinal().unknown(void 0), domain = scale.domain, ordinalRange = scale.range, r0 = 0, r1 = 1, step, bandwidth, round = false, paddingInner = 0, paddingOuter = 0, align = 0.5;
  delete scale.unknown;
  function rescale() {
    var n = domain().length, reverse3 = r1 < r0, start = reverse3 ? r1 : r0, stop = reverse3 ? r0 : r1;
    step = (stop - start) / Math.max(1, n - paddingInner + paddingOuter * 2);
    if (round)
      step = Math.floor(step);
    start += (stop - start - step * (n - paddingInner)) * align;
    bandwidth = step * (1 - paddingInner);
    if (round)
      start = Math.round(start), bandwidth = Math.round(bandwidth);
    var values2 = range(n).map(function(i) {
      return start + step * i;
    });
    return ordinalRange(reverse3 ? values2.reverse() : values2);
  }
  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };
  scale.range = function(_) {
    return arguments.length ? ([r0, r1] = _, r0 = +r0, r1 = +r1, rescale()) : [r0, r1];
  };
  scale.rangeRound = function(_) {
    return [r0, r1] = _, r0 = +r0, r1 = +r1, round = true, rescale();
  };
  scale.bandwidth = function() {
    return bandwidth;
  };
  scale.step = function() {
    return step;
  };
  scale.round = function(_) {
    return arguments.length ? (round = !!_, rescale()) : round;
  };
  scale.padding = function(_) {
    return arguments.length ? (paddingInner = Math.min(1, paddingOuter = +_), rescale()) : paddingInner;
  };
  scale.paddingInner = function(_) {
    return arguments.length ? (paddingInner = Math.min(1, _), rescale()) : paddingInner;
  };
  scale.paddingOuter = function(_) {
    return arguments.length ? (paddingOuter = +_, rescale()) : paddingOuter;
  };
  scale.align = function(_) {
    return arguments.length ? (align = Math.max(0, Math.min(1, _)), rescale()) : align;
  };
  scale.copy = function() {
    return band(domain(), [r0, r1]).round(round).paddingInner(paddingInner).paddingOuter(paddingOuter).align(align);
  };
  return initRange.apply(rescale(), arguments);
}
function pointish(scale) {
  var copy3 = scale.copy;
  scale.padding = scale.paddingOuter;
  delete scale.paddingInner;
  delete scale.paddingOuter;
  scale.copy = function() {
    return pointish(copy3());
  };
  return scale;
}
function point3() {
  return pointish(band.apply(null, arguments).paddingInner(1));
}

// node_modules/d3-color/src/define.js
function define_default(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}
function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition)
    prototype[key] = definition[key];
  return prototype;
}

// node_modules/d3-color/src/color.js
function Color() {
}
var darker = 0.7;
var brighter = 1 / darker;
var reI = "\\s*([+-]?\\d+)\\s*";
var reN = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*";
var reP = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*";
var reHex = /^#([0-9a-f]{3,8})$/;
var reRgbInteger = new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`);
var reRgbPercent = new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`);
var reRgbaInteger = new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`);
var reRgbaPercent = new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`);
var reHslPercent = new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`);
var reHslaPercent = new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`);
var named = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
define_default(Color, color, {
  copy(channels) {
    return Object.assign(new this.constructor(), this, channels);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: color_formatHex,
  // Deprecated! Use color.formatHex.
  formatHex: color_formatHex,
  formatHex8: color_formatHex8,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});
function color_formatHex() {
  return this.rgb().formatHex();
}
function color_formatHex8() {
  return this.rgb().formatHex8();
}
function color_formatHsl() {
  return hslConvert(this).formatHsl();
}
function color_formatRgb() {
  return this.rgb().formatRgb();
}
function color(format3) {
  var m, l;
  format3 = (format3 + "").trim().toLowerCase();
  return (m = reHex.exec(format3)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) : l === 3 ? new Rgb(m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, (m & 15) << 4 | m & 15, 1) : l === 8 ? rgba(m >> 24 & 255, m >> 16 & 255, m >> 8 & 255, (m & 255) / 255) : l === 4 ? rgba(m >> 12 & 15 | m >> 8 & 240, m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, ((m & 15) << 4 | m & 15) / 255) : null) : (m = reRgbInteger.exec(format3)) ? new Rgb(m[1], m[2], m[3], 1) : (m = reRgbPercent.exec(format3)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) : (m = reRgbaInteger.exec(format3)) ? rgba(m[1], m[2], m[3], m[4]) : (m = reRgbaPercent.exec(format3)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) : (m = reHslPercent.exec(format3)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) : (m = reHslaPercent.exec(format3)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) : named.hasOwnProperty(format3) ? rgbn(named[format3]) : format3 === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
}
function rgbn(n) {
  return new Rgb(n >> 16 & 255, n >> 8 & 255, n & 255, 1);
}
function rgba(r, g, b, a2) {
  if (a2 <= 0)
    r = g = b = NaN;
  return new Rgb(r, g, b, a2);
}
function rgbConvert(o) {
  if (!(o instanceof Color))
    o = color(o);
  if (!o)
    return new Rgb();
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}
function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}
function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}
define_default(Rgb, rgb, extend(Color, {
  brighter(k2) {
    k2 = k2 == null ? brighter : Math.pow(brighter, k2);
    return new Rgb(this.r * k2, this.g * k2, this.b * k2, this.opacity);
  },
  darker(k2) {
    k2 = k2 == null ? darker : Math.pow(darker, k2);
    return new Rgb(this.r * k2, this.g * k2, this.b * k2, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Rgb(clampi(this.r), clampi(this.g), clampi(this.b), clampa(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && (-0.5 <= this.g && this.g < 255.5) && (-0.5 <= this.b && this.b < 255.5) && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: rgb_formatHex,
  // Deprecated! Use color.formatHex.
  formatHex: rgb_formatHex,
  formatHex8: rgb_formatHex8,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));
function rgb_formatHex() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}`;
}
function rgb_formatHex8() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function rgb_formatRgb() {
  const a2 = clampa(this.opacity);
  return `${a2 === 1 ? "rgb(" : "rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${a2 === 1 ? ")" : `, ${a2})`}`;
}
function clampa(opacity) {
  return isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity));
}
function clampi(value) {
  return Math.max(0, Math.min(255, Math.round(value) || 0));
}
function hex(value) {
  value = clampi(value);
  return (value < 16 ? "0" : "") + value.toString(16);
}
function hsla(h, s2, l, a2) {
  if (a2 <= 0)
    h = s2 = l = NaN;
  else if (l <= 0 || l >= 1)
    h = s2 = NaN;
  else if (s2 <= 0)
    h = NaN;
  return new Hsl(h, s2, l, a2);
}
function hslConvert(o) {
  if (o instanceof Hsl)
    return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color))
    o = color(o);
  if (!o)
    return new Hsl();
  if (o instanceof Hsl)
    return o;
  o = o.rgb();
  var r = o.r / 255, g = o.g / 255, b = o.b / 255, min3 = Math.min(r, g, b), max3 = Math.max(r, g, b), h = NaN, s2 = max3 - min3, l = (max3 + min3) / 2;
  if (s2) {
    if (r === max3)
      h = (g - b) / s2 + (g < b) * 6;
    else if (g === max3)
      h = (b - r) / s2 + 2;
    else
      h = (r - g) / s2 + 4;
    s2 /= l < 0.5 ? max3 + min3 : 2 - max3 - min3;
    h *= 60;
  } else {
    s2 = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s2, l, o.opacity);
}
function hsl(h, s2, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s2, l, opacity == null ? 1 : opacity);
}
function Hsl(h, s2, l, opacity) {
  this.h = +h;
  this.s = +s2;
  this.l = +l;
  this.opacity = +opacity;
}
define_default(Hsl, hsl, extend(Color, {
  brighter(k2) {
    k2 = k2 == null ? brighter : Math.pow(brighter, k2);
    return new Hsl(this.h, this.s, this.l * k2, this.opacity);
  },
  darker(k2) {
    k2 = k2 == null ? darker : Math.pow(darker, k2);
    return new Hsl(this.h, this.s, this.l * k2, this.opacity);
  },
  rgb() {
    var h = this.h % 360 + (this.h < 0) * 360, s2 = isNaN(h) || isNaN(this.s) ? 0 : this.s, l = this.l, m2 = l + (l < 0.5 ? l : 1 - l) * s2, m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  clamp() {
    return new Hsl(clamph(this.h), clampt(this.s), clampt(this.l), clampa(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && (0 <= this.l && this.l <= 1) && (0 <= this.opacity && this.opacity <= 1);
  },
  formatHsl() {
    const a2 = clampa(this.opacity);
    return `${a2 === 1 ? "hsl(" : "hsla("}${clamph(this.h)}, ${clampt(this.s) * 100}%, ${clampt(this.l) * 100}%${a2 === 1 ? ")" : `, ${a2})`}`;
  }
}));
function clamph(value) {
  value = (value || 0) % 360;
  return value < 0 ? value + 360 : value;
}
function clampt(value) {
  return Math.max(0, Math.min(1, value || 0));
}
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
}

// node_modules/d3-interpolate/src/basis.js
function basis(t12, v0, v1, v2, v3) {
  var t2 = t12 * t12, t3 = t2 * t12;
  return ((1 - 3 * t12 + 3 * t2 - t3) * v0 + (4 - 6 * t2 + 3 * t3) * v1 + (1 + 3 * t12 + 3 * t2 - 3 * t3) * v2 + t3 * v3) / 6;
}
function basis_default2(values2) {
  var n = values2.length - 1;
  return function(t) {
    var i = t <= 0 ? t = 0 : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n), v1 = values2[i], v2 = values2[i + 1], v0 = i > 0 ? values2[i - 1] : 2 * v1 - v2, v3 = i < n - 1 ? values2[i + 2] : 2 * v2 - v1;
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
}

// node_modules/d3-interpolate/src/basisClosed.js
function basisClosed_default2(values2) {
  var n = values2.length;
  return function(t) {
    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n), v0 = values2[(i + n - 1) % n], v1 = values2[i % n], v2 = values2[(i + 1) % n], v3 = values2[(i + 2) % n];
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
}

// node_modules/d3-interpolate/src/constant.js
var constant_default2 = (x2) => () => x2;

// node_modules/d3-interpolate/src/color.js
function linear(a2, d) {
  return function(t) {
    return a2 + t * d;
  };
}
function exponential(a2, b, y2) {
  return a2 = Math.pow(a2, y2), b = Math.pow(b, y2) - a2, y2 = 1 / y2, function(t) {
    return Math.pow(a2 + t * b, y2);
  };
}
function gamma(y2) {
  return (y2 = +y2) === 1 ? nogamma : function(a2, b) {
    return b - a2 ? exponential(a2, b, y2) : constant_default2(isNaN(a2) ? b : a2);
  };
}
function nogamma(a2, b) {
  var d = b - a2;
  return d ? linear(a2, d) : constant_default2(isNaN(a2) ? b : a2);
}

// node_modules/d3-interpolate/src/rgb.js
var rgb_default = function rgbGamma(y2) {
  var color2 = gamma(y2);
  function rgb2(start, end) {
    var r = color2((start = rgb(start)).r, (end = rgb(end)).r), g = color2(start.g, end.g), b = color2(start.b, end.b), opacity = nogamma(start.opacity, end.opacity);
    return function(t) {
      start.r = r(t);
      start.g = g(t);
      start.b = b(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }
  rgb2.gamma = rgbGamma;
  return rgb2;
}(1);
function rgbSpline(spline) {
  return function(colors) {
    var n = colors.length, r = new Array(n), g = new Array(n), b = new Array(n), i, color2;
    for (i = 0; i < n; ++i) {
      color2 = rgb(colors[i]);
      r[i] = color2.r || 0;
      g[i] = color2.g || 0;
      b[i] = color2.b || 0;
    }
    r = spline(r);
    g = spline(g);
    b = spline(b);
    color2.opacity = 1;
    return function(t) {
      color2.r = r(t);
      color2.g = g(t);
      color2.b = b(t);
      return color2 + "";
    };
  };
}
var rgbBasis = rgbSpline(basis_default2);
var rgbBasisClosed = rgbSpline(basisClosed_default2);

// node_modules/d3-interpolate/src/numberArray.js
function numberArray_default(a2, b) {
  if (!b)
    b = [];
  var n = a2 ? Math.min(b.length, a2.length) : 0, c2 = b.slice(), i;
  return function(t) {
    for (i = 0; i < n; ++i)
      c2[i] = a2[i] * (1 - t) + b[i] * t;
    return c2;
  };
}
function isNumberArray(x2) {
  return ArrayBuffer.isView(x2) && !(x2 instanceof DataView);
}

// node_modules/d3-interpolate/src/array.js
function genericArray(a2, b) {
  var nb = b ? b.length : 0, na = a2 ? Math.min(nb, a2.length) : 0, x2 = new Array(na), c2 = new Array(nb), i;
  for (i = 0; i < na; ++i)
    x2[i] = value_default(a2[i], b[i]);
  for (; i < nb; ++i)
    c2[i] = b[i];
  return function(t) {
    for (i = 0; i < na; ++i)
      c2[i] = x2[i](t);
    return c2;
  };
}

// node_modules/d3-interpolate/src/date.js
function date_default(a2, b) {
  var d = /* @__PURE__ */ new Date();
  return a2 = +a2, b = +b, function(t) {
    return d.setTime(a2 * (1 - t) + b * t), d;
  };
}

// node_modules/d3-interpolate/src/number.js
function number_default(a2, b) {
  return a2 = +a2, b = +b, function(t) {
    return a2 * (1 - t) + b * t;
  };
}

// node_modules/d3-interpolate/src/object.js
function object_default(a2, b) {
  var i = {}, c2 = {}, k2;
  if (a2 === null || typeof a2 !== "object")
    a2 = {};
  if (b === null || typeof b !== "object")
    b = {};
  for (k2 in b) {
    if (k2 in a2) {
      i[k2] = value_default(a2[k2], b[k2]);
    } else {
      c2[k2] = b[k2];
    }
  }
  return function(t) {
    for (k2 in i)
      c2[k2] = i[k2](t);
    return c2;
  };
}

// node_modules/d3-interpolate/src/string.js
var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
var reB = new RegExp(reA.source, "g");
function zero2(b) {
  return function() {
    return b;
  };
}
function one(b) {
  return function(t) {
    return b(t) + "";
  };
}
function string_default(a2, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, am, bm, bs, i = -1, s2 = [], q = [];
  a2 = a2 + "", b = b + "";
  while ((am = reA.exec(a2)) && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) {
      bs = b.slice(bi, bs);
      if (s2[i])
        s2[i] += bs;
      else
        s2[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) {
      if (s2[i])
        s2[i] += bm;
      else
        s2[++i] = bm;
    } else {
      s2[++i] = null;
      q.push({ i, x: number_default(am, bm) });
    }
    bi = reB.lastIndex;
  }
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s2[i])
      s2[i] += bs;
    else
      s2[++i] = bs;
  }
  return s2.length < 2 ? q[0] ? one(q[0].x) : zero2(b) : (b = q.length, function(t) {
    for (var i2 = 0, o; i2 < b; ++i2)
      s2[(o = q[i2]).i] = o.x(t);
    return s2.join("");
  });
}

// node_modules/d3-interpolate/src/value.js
function value_default(a2, b) {
  var t = typeof b, c2;
  return b == null || t === "boolean" ? constant_default2(b) : (t === "number" ? number_default : t === "string" ? (c2 = color(b)) ? (b = c2, rgb_default) : string_default : b instanceof color ? rgb_default : b instanceof Date ? date_default : isNumberArray(b) ? numberArray_default : Array.isArray(b) ? genericArray : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? object_default : number_default)(a2, b);
}

// node_modules/d3-interpolate/src/round.js
function round_default(a2, b) {
  return a2 = +a2, b = +b, function(t) {
    return Math.round(a2 * (1 - t) + b * t);
  };
}

// node_modules/d3-interpolate/src/piecewise.js
function piecewise(interpolate, values2) {
  if (values2 === void 0)
    values2 = interpolate, interpolate = value_default;
  var i = 0, n = values2.length - 1, v = values2[0], I = new Array(n < 0 ? 0 : n);
  while (i < n)
    I[i] = interpolate(v, v = values2[++i]);
  return function(t) {
    var i2 = Math.max(0, Math.min(n - 1, Math.floor(t *= n)));
    return I[i2](t - i2);
  };
}

// node_modules/d3-scale/src/constant.js
function constants(x2) {
  return function() {
    return x2;
  };
}

// node_modules/d3-scale/src/number.js
function number2(x2) {
  return +x2;
}

// node_modules/d3-scale/src/continuous.js
var unit = [0, 1];
function identity(x2) {
  return x2;
}
function normalize(a2, b) {
  return (b -= a2 = +a2) ? function(x2) {
    return (x2 - a2) / b;
  } : constants(isNaN(b) ? NaN : 0.5);
}
function clamper(a2, b) {
  var t;
  if (a2 > b)
    t = a2, a2 = b, b = t;
  return function(x2) {
    return Math.max(a2, Math.min(b, x2));
  };
}
function bimap(domain, range6, interpolate) {
  var d0 = domain[0], d1 = domain[1], r0 = range6[0], r1 = range6[1];
  if (d1 < d0)
    d0 = normalize(d1, d0), r0 = interpolate(r1, r0);
  else
    d0 = normalize(d0, d1), r0 = interpolate(r0, r1);
  return function(x2) {
    return r0(d0(x2));
  };
}
function polymap(domain, range6, interpolate) {
  var j = Math.min(domain.length, range6.length) - 1, d = new Array(j), r = new Array(j), i = -1;
  if (domain[j] < domain[0]) {
    domain = domain.slice().reverse();
    range6 = range6.slice().reverse();
  }
  while (++i < j) {
    d[i] = normalize(domain[i], domain[i + 1]);
    r[i] = interpolate(range6[i], range6[i + 1]);
  }
  return function(x2) {
    var i2 = bisect_default(domain, x2, 1, j) - 1;
    return r[i2](d[i2](x2));
  };
}
function copy(source, target) {
  return target.domain(source.domain()).range(source.range()).interpolate(source.interpolate()).clamp(source.clamp()).unknown(source.unknown());
}
function transformer() {
  var domain = unit, range6 = unit, interpolate = value_default, transform, untransform, unknown, clamp = identity, piecewise2, output, input;
  function rescale() {
    var n = Math.min(domain.length, range6.length);
    if (clamp !== identity)
      clamp = clamper(domain[0], domain[n - 1]);
    piecewise2 = n > 2 ? polymap : bimap;
    output = input = null;
    return scale;
  }
  function scale(x2) {
    return x2 == null || isNaN(x2 = +x2) ? unknown : (output || (output = piecewise2(domain.map(transform), range6, interpolate)))(transform(clamp(x2)));
  }
  scale.invert = function(y2) {
    return clamp(untransform((input || (input = piecewise2(range6, domain.map(transform), number_default)))(y2)));
  };
  scale.domain = function(_) {
    return arguments.length ? (domain = Array.from(_, number2), rescale()) : domain.slice();
  };
  scale.range = function(_) {
    return arguments.length ? (range6 = Array.from(_), rescale()) : range6.slice();
  };
  scale.rangeRound = function(_) {
    return range6 = Array.from(_), interpolate = round_default, rescale();
  };
  scale.clamp = function(_) {
    return arguments.length ? (clamp = _ ? true : identity, rescale()) : clamp !== identity;
  };
  scale.interpolate = function(_) {
    return arguments.length ? (interpolate = _, rescale()) : interpolate;
  };
  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };
  return function(t, u) {
    transform = t, untransform = u;
    return rescale();
  };
}
function continuous() {
  return transformer()(identity, identity);
}

// node_modules/d3-format/src/formatDecimal.js
function formatDecimal_default(x2) {
  return Math.abs(x2 = Math.round(x2)) >= 1e21 ? x2.toLocaleString("en").replace(/,/g, "") : x2.toString(10);
}
function formatDecimalParts(x2, p) {
  if ((i = (x2 = p ? x2.toExponential(p - 1) : x2.toExponential()).indexOf("e")) < 0)
    return null;
  var i, coefficient = x2.slice(0, i);
  return [
    coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
    +x2.slice(i + 1)
  ];
}

// node_modules/d3-format/src/exponent.js
function exponent_default(x2) {
  return x2 = formatDecimalParts(Math.abs(x2)), x2 ? x2[1] : NaN;
}

// node_modules/d3-format/src/formatGroup.js
function formatGroup_default(grouping, thousands) {
  return function(value, width) {
    var i = value.length, t = [], j = 0, g = grouping[0], length = 0;
    while (i > 0 && g > 0) {
      if (length + g + 1 > width)
        g = Math.max(1, width - length);
      t.push(value.substring(i -= g, i + g));
      if ((length += g + 1) > width)
        break;
      g = grouping[j = (j + 1) % grouping.length];
    }
    return t.reverse().join(thousands);
  };
}

// node_modules/d3-format/src/formatNumerals.js
function formatNumerals_default(numerals) {
  return function(value) {
    return value.replace(/[0-9]/g, function(i) {
      return numerals[+i];
    });
  };
}

// node_modules/d3-format/src/formatSpecifier.js
var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function formatSpecifier(specifier) {
  if (!(match = re.exec(specifier)))
    throw new Error("invalid format: " + specifier);
  var match;
  return new FormatSpecifier({
    fill: match[1],
    align: match[2],
    sign: match[3],
    symbol: match[4],
    zero: match[5],
    width: match[6],
    comma: match[7],
    precision: match[8] && match[8].slice(1),
    trim: match[9],
    type: match[10]
  });
}
formatSpecifier.prototype = FormatSpecifier.prototype;
function FormatSpecifier(specifier) {
  this.fill = specifier.fill === void 0 ? " " : specifier.fill + "";
  this.align = specifier.align === void 0 ? ">" : specifier.align + "";
  this.sign = specifier.sign === void 0 ? "-" : specifier.sign + "";
  this.symbol = specifier.symbol === void 0 ? "" : specifier.symbol + "";
  this.zero = !!specifier.zero;
  this.width = specifier.width === void 0 ? void 0 : +specifier.width;
  this.comma = !!specifier.comma;
  this.precision = specifier.precision === void 0 ? void 0 : +specifier.precision;
  this.trim = !!specifier.trim;
  this.type = specifier.type === void 0 ? "" : specifier.type + "";
}
FormatSpecifier.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};

// node_modules/d3-format/src/formatTrim.js
function formatTrim_default(s2) {
  out:
    for (var n = s2.length, i = 1, i0 = -1, i1; i < n; ++i) {
      switch (s2[i]) {
        case ".":
          i0 = i1 = i;
          break;
        case "0":
          if (i0 === 0)
            i0 = i;
          i1 = i;
          break;
        default:
          if (!+s2[i])
            break out;
          if (i0 > 0)
            i0 = 0;
          break;
      }
    }
  return i0 > 0 ? s2.slice(0, i0) + s2.slice(i1 + 1) : s2;
}

// node_modules/d3-format/src/formatPrefixAuto.js
var prefixExponent;
function formatPrefixAuto_default(x2, p) {
  var d = formatDecimalParts(x2, p);
  if (!d)
    return x2 + "";
  var coefficient = d[0], exponent = d[1], i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1, n = coefficient.length;
  return i === n ? coefficient : i > n ? coefficient + new Array(i - n + 1).join("0") : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i) : "0." + new Array(1 - i).join("0") + formatDecimalParts(x2, Math.max(0, p + i - 1))[0];
}

// node_modules/d3-format/src/formatRounded.js
function formatRounded_default(x2, p) {
  var d = formatDecimalParts(x2, p);
  if (!d)
    return x2 + "";
  var coefficient = d[0], exponent = d[1];
  return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1) : coefficient + new Array(exponent - coefficient.length + 2).join("0");
}

// node_modules/d3-format/src/formatTypes.js
var formatTypes_default = {
  "%": (x2, p) => (x2 * 100).toFixed(p),
  "b": (x2) => Math.round(x2).toString(2),
  "c": (x2) => x2 + "",
  "d": formatDecimal_default,
  "e": (x2, p) => x2.toExponential(p),
  "f": (x2, p) => x2.toFixed(p),
  "g": (x2, p) => x2.toPrecision(p),
  "o": (x2) => Math.round(x2).toString(8),
  "p": (x2, p) => formatRounded_default(x2 * 100, p),
  "r": formatRounded_default,
  "s": formatPrefixAuto_default,
  "X": (x2) => Math.round(x2).toString(16).toUpperCase(),
  "x": (x2) => Math.round(x2).toString(16)
};

// node_modules/d3-format/src/identity.js
function identity_default(x2) {
  return x2;
}

// node_modules/d3-format/src/locale.js
var map = Array.prototype.map;
var prefixes = ["y", "z", "a", "f", "p", "n", "\xB5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function locale_default(locale3) {
  var group = locale3.grouping === void 0 || locale3.thousands === void 0 ? identity_default : formatGroup_default(map.call(locale3.grouping, Number), locale3.thousands + ""), currencyPrefix = locale3.currency === void 0 ? "" : locale3.currency[0] + "", currencySuffix = locale3.currency === void 0 ? "" : locale3.currency[1] + "", decimal = locale3.decimal === void 0 ? "." : locale3.decimal + "", numerals = locale3.numerals === void 0 ? identity_default : formatNumerals_default(map.call(locale3.numerals, String)), percent = locale3.percent === void 0 ? "%" : locale3.percent + "", minus = locale3.minus === void 0 ? "\u2212" : locale3.minus + "", nan = locale3.nan === void 0 ? "NaN" : locale3.nan + "";
  function newFormat(specifier) {
    specifier = formatSpecifier(specifier);
    var fill = specifier.fill, align = specifier.align, sign2 = specifier.sign, symbol = specifier.symbol, zero3 = specifier.zero, width = specifier.width, comma = specifier.comma, precision = specifier.precision, trim = specifier.trim, type = specifier.type;
    if (type === "n")
      comma = true, type = "g";
    else if (!formatTypes_default[type])
      precision === void 0 && (precision = 12), trim = true, type = "g";
    if (zero3 || fill === "0" && align === "=")
      zero3 = true, fill = "0", align = "=";
    var prefix = symbol === "$" ? currencyPrefix : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "", suffix = symbol === "$" ? currencySuffix : /[%p]/.test(type) ? percent : "";
    var formatType = formatTypes_default[type], maybeSuffix = /[defgprs%]/.test(type);
    precision = precision === void 0 ? 6 : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision)) : Math.max(0, Math.min(20, precision));
    function format3(value) {
      var valuePrefix = prefix, valueSuffix = suffix, i, n, c2;
      if (type === "c") {
        valueSuffix = formatType(value) + valueSuffix;
        value = "";
      } else {
        value = +value;
        var valueNegative = value < 0 || 1 / value < 0;
        value = isNaN(value) ? nan : formatType(Math.abs(value), precision);
        if (trim)
          value = formatTrim_default(value);
        if (valueNegative && +value === 0 && sign2 !== "+")
          valueNegative = false;
        valuePrefix = (valueNegative ? sign2 === "(" ? sign2 : minus : sign2 === "-" || sign2 === "(" ? "" : sign2) + valuePrefix;
        valueSuffix = (type === "s" ? prefixes[8 + prefixExponent / 3] : "") + valueSuffix + (valueNegative && sign2 === "(" ? ")" : "");
        if (maybeSuffix) {
          i = -1, n = value.length;
          while (++i < n) {
            if (c2 = value.charCodeAt(i), 48 > c2 || c2 > 57) {
              valueSuffix = (c2 === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
              value = value.slice(0, i);
              break;
            }
          }
        }
      }
      if (comma && !zero3)
        value = group(value, Infinity);
      var length = valuePrefix.length + value.length + valueSuffix.length, padding = length < width ? new Array(width - length + 1).join(fill) : "";
      if (comma && zero3)
        value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";
      switch (align) {
        case "<":
          value = valuePrefix + value + valueSuffix + padding;
          break;
        case "=":
          value = valuePrefix + padding + value + valueSuffix;
          break;
        case "^":
          value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length);
          break;
        default:
          value = padding + valuePrefix + value + valueSuffix;
          break;
      }
      return numerals(value);
    }
    format3.toString = function() {
      return specifier + "";
    };
    return format3;
  }
  function formatPrefix2(specifier, value) {
    var f = newFormat((specifier = formatSpecifier(specifier), specifier.type = "f", specifier)), e = Math.max(-8, Math.min(8, Math.floor(exponent_default(value) / 3))) * 3, k2 = Math.pow(10, -e), prefix = prefixes[8 + e / 3];
    return function(value2) {
      return f(k2 * value2) + prefix;
    };
  }
  return {
    format: newFormat,
    formatPrefix: formatPrefix2
  };
}

// node_modules/d3-format/src/defaultLocale.js
var locale;
var format2;
var formatPrefix;
defaultLocale({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function defaultLocale(definition) {
  locale = locale_default(definition);
  format2 = locale.format;
  formatPrefix = locale.formatPrefix;
  return locale;
}

// node_modules/d3-format/src/precisionFixed.js
function precisionFixed_default(step) {
  return Math.max(0, -exponent_default(Math.abs(step)));
}

// node_modules/d3-format/src/precisionPrefix.js
function precisionPrefix_default(step, value) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(exponent_default(value) / 3))) * 3 - exponent_default(Math.abs(step)));
}

// node_modules/d3-format/src/precisionRound.js
function precisionRound_default(step, max3) {
  step = Math.abs(step), max3 = Math.abs(max3) - step;
  return Math.max(0, exponent_default(max3) - exponent_default(step)) + 1;
}

// node_modules/d3-scale/src/tickFormat.js
function tickFormat(start, stop, count, specifier) {
  var step = tickStep(start, stop, count), precision;
  specifier = formatSpecifier(specifier == null ? ",f" : specifier);
  switch (specifier.type) {
    case "s": {
      var value = Math.max(Math.abs(start), Math.abs(stop));
      if (specifier.precision == null && !isNaN(precision = precisionPrefix_default(step, value)))
        specifier.precision = precision;
      return formatPrefix(specifier, value);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      if (specifier.precision == null && !isNaN(precision = precisionRound_default(step, Math.max(Math.abs(start), Math.abs(stop)))))
        specifier.precision = precision - (specifier.type === "e");
      break;
    }
    case "f":
    case "%": {
      if (specifier.precision == null && !isNaN(precision = precisionFixed_default(step)))
        specifier.precision = precision - (specifier.type === "%") * 2;
      break;
    }
  }
  return format2(specifier);
}

// node_modules/d3-scale/src/linear.js
function linearish(scale) {
  var domain = scale.domain;
  scale.ticks = function(count) {
    var d = domain();
    return ticks(d[0], d[d.length - 1], count == null ? 10 : count);
  };
  scale.tickFormat = function(count, specifier) {
    var d = domain();
    return tickFormat(d[0], d[d.length - 1], count == null ? 10 : count, specifier);
  };
  scale.nice = function(count) {
    if (count == null)
      count = 10;
    var d = domain();
    var i0 = 0;
    var i1 = d.length - 1;
    var start = d[i0];
    var stop = d[i1];
    var prestep;
    var step;
    var maxIter = 10;
    if (stop < start) {
      step = start, start = stop, stop = step;
      step = i0, i0 = i1, i1 = step;
    }
    while (maxIter-- > 0) {
      step = tickIncrement(start, stop, count);
      if (step === prestep) {
        d[i0] = start;
        d[i1] = stop;
        return domain(d);
      } else if (step > 0) {
        start = Math.floor(start / step) * step;
        stop = Math.ceil(stop / step) * step;
      } else if (step < 0) {
        start = Math.ceil(start * step) / step;
        stop = Math.floor(stop * step) / step;
      } else {
        break;
      }
      prestep = step;
    }
    return scale;
  };
  return scale;
}
function linear2() {
  var scale = continuous();
  scale.copy = function() {
    return copy(scale, linear2());
  };
  initRange.apply(scale, arguments);
  return linearish(scale);
}

// node_modules/d3-scale/src/identity.js
function identity2(domain) {
  var unknown;
  function scale(x2) {
    return x2 == null || isNaN(x2 = +x2) ? unknown : x2;
  }
  scale.invert = scale;
  scale.domain = scale.range = function(_) {
    return arguments.length ? (domain = Array.from(_, number2), scale) : domain.slice();
  };
  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };
  scale.copy = function() {
    return identity2(domain).unknown(unknown);
  };
  domain = arguments.length ? Array.from(domain, number2) : [0, 1];
  return linearish(scale);
}

// node_modules/d3-scale/src/nice.js
function nice(domain, interval) {
  domain = domain.slice();
  var i0 = 0, i1 = domain.length - 1, x0 = domain[i0], x1 = domain[i1], t;
  if (x1 < x0) {
    t = i0, i0 = i1, i1 = t;
    t = x0, x0 = x1, x1 = t;
  }
  domain[i0] = interval.floor(x0);
  domain[i1] = interval.ceil(x1);
  return domain;
}

// node_modules/d3-scale/src/log.js
function transformLog(x2) {
  return Math.log(x2);
}
function transformExp(x2) {
  return Math.exp(x2);
}
function transformLogn(x2) {
  return -Math.log(-x2);
}
function transformExpn(x2) {
  return -Math.exp(-x2);
}
function pow10(x2) {
  return isFinite(x2) ? +("1e" + x2) : x2 < 0 ? 0 : x2;
}
function powp(base) {
  return base === 10 ? pow10 : base === Math.E ? Math.exp : (x2) => Math.pow(base, x2);
}
function logp(base) {
  return base === Math.E ? Math.log : base === 10 && Math.log10 || base === 2 && Math.log2 || (base = Math.log(base), (x2) => Math.log(x2) / base);
}
function reflect(f) {
  return (x2, k2) => -f(-x2, k2);
}
function loggish(transform) {
  const scale = transform(transformLog, transformExp);
  const domain = scale.domain;
  let base = 10;
  let logs;
  let pows;
  function rescale() {
    logs = logp(base), pows = powp(base);
    if (domain()[0] < 0) {
      logs = reflect(logs), pows = reflect(pows);
      transform(transformLogn, transformExpn);
    } else {
      transform(transformLog, transformExp);
    }
    return scale;
  }
  scale.base = function(_) {
    return arguments.length ? (base = +_, rescale()) : base;
  };
  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };
  scale.ticks = (count) => {
    const d = domain();
    let u = d[0];
    let v = d[d.length - 1];
    const r = v < u;
    if (r)
      [u, v] = [v, u];
    let i = logs(u);
    let j = logs(v);
    let k2;
    let t;
    const n = count == null ? 10 : +count;
    let z = [];
    if (!(base % 1) && j - i < n) {
      i = Math.floor(i), j = Math.ceil(j);
      if (u > 0)
        for (; i <= j; ++i) {
          for (k2 = 1; k2 < base; ++k2) {
            t = i < 0 ? k2 / pows(-i) : k2 * pows(i);
            if (t < u)
              continue;
            if (t > v)
              break;
            z.push(t);
          }
        }
      else
        for (; i <= j; ++i) {
          for (k2 = base - 1; k2 >= 1; --k2) {
            t = i > 0 ? k2 / pows(-i) : k2 * pows(i);
            if (t < u)
              continue;
            if (t > v)
              break;
            z.push(t);
          }
        }
      if (z.length * 2 < n)
        z = ticks(u, v, n);
    } else {
      z = ticks(i, j, Math.min(j - i, n)).map(pows);
    }
    return r ? z.reverse() : z;
  };
  scale.tickFormat = (count, specifier) => {
    if (count == null)
      count = 10;
    if (specifier == null)
      specifier = base === 10 ? "s" : ",";
    if (typeof specifier !== "function") {
      if (!(base % 1) && (specifier = formatSpecifier(specifier)).precision == null)
        specifier.trim = true;
      specifier = format2(specifier);
    }
    if (count === Infinity)
      return specifier;
    const k2 = Math.max(1, base * count / scale.ticks().length);
    return (d) => {
      let i = d / pows(Math.round(logs(d)));
      if (i * base < base - 0.5)
        i *= base;
      return i <= k2 ? specifier(d) : "";
    };
  };
  scale.nice = () => {
    return domain(nice(domain(), {
      floor: (x2) => pows(Math.floor(logs(x2))),
      ceil: (x2) => pows(Math.ceil(logs(x2)))
    }));
  };
  return scale;
}
function log() {
  const scale = loggish(transformer()).domain([1, 10]);
  scale.copy = () => copy(scale, log()).base(scale.base());
  initRange.apply(scale, arguments);
  return scale;
}

// node_modules/d3-scale/src/symlog.js
function transformSymlog(c2) {
  return function(x2) {
    return Math.sign(x2) * Math.log1p(Math.abs(x2 / c2));
  };
}
function transformSymexp(c2) {
  return function(x2) {
    return Math.sign(x2) * Math.expm1(Math.abs(x2)) * c2;
  };
}
function symlogish(transform) {
  var c2 = 1, scale = transform(transformSymlog(c2), transformSymexp(c2));
  scale.constant = function(_) {
    return arguments.length ? transform(transformSymlog(c2 = +_), transformSymexp(c2)) : c2;
  };
  return linearish(scale);
}
function symlog() {
  var scale = symlogish(transformer());
  scale.copy = function() {
    return copy(scale, symlog()).constant(scale.constant());
  };
  return initRange.apply(scale, arguments);
}

// node_modules/d3-scale/src/pow.js
function transformPow(exponent) {
  return function(x2) {
    return x2 < 0 ? -Math.pow(-x2, exponent) : Math.pow(x2, exponent);
  };
}
function transformSqrt(x2) {
  return x2 < 0 ? -Math.sqrt(-x2) : Math.sqrt(x2);
}
function transformSquare(x2) {
  return x2 < 0 ? -x2 * x2 : x2 * x2;
}
function powish(transform) {
  var scale = transform(identity, identity), exponent = 1;
  function rescale() {
    return exponent === 1 ? transform(identity, identity) : exponent === 0.5 ? transform(transformSqrt, transformSquare) : transform(transformPow(exponent), transformPow(1 / exponent));
  }
  scale.exponent = function(_) {
    return arguments.length ? (exponent = +_, rescale()) : exponent;
  };
  return linearish(scale);
}
function pow() {
  var scale = powish(transformer());
  scale.copy = function() {
    return copy(scale, pow()).exponent(scale.exponent());
  };
  initRange.apply(scale, arguments);
  return scale;
}
function sqrt2() {
  return pow.apply(null, arguments).exponent(0.5);
}

// node_modules/d3-scale/src/radial.js
function square(x2) {
  return Math.sign(x2) * x2 * x2;
}
function unsquare(x2) {
  return Math.sign(x2) * Math.sqrt(Math.abs(x2));
}
function radial() {
  var squared = continuous(), range6 = [0, 1], round = false, unknown;
  function scale(x2) {
    var y2 = unsquare(squared(x2));
    return isNaN(y2) ? unknown : round ? Math.round(y2) : y2;
  }
  scale.invert = function(y2) {
    return squared.invert(square(y2));
  };
  scale.domain = function(_) {
    return arguments.length ? (squared.domain(_), scale) : squared.domain();
  };
  scale.range = function(_) {
    return arguments.length ? (squared.range((range6 = Array.from(_, number2)).map(square)), scale) : range6.slice();
  };
  scale.rangeRound = function(_) {
    return scale.range(_).round(true);
  };
  scale.round = function(_) {
    return arguments.length ? (round = !!_, scale) : round;
  };
  scale.clamp = function(_) {
    return arguments.length ? (squared.clamp(_), scale) : squared.clamp();
  };
  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };
  scale.copy = function() {
    return radial(squared.domain(), range6).round(round).clamp(squared.clamp()).unknown(unknown);
  };
  initRange.apply(scale, arguments);
  return linearish(scale);
}

// node_modules/d3-scale/src/quantile.js
function quantile2() {
  var domain = [], range6 = [], thresholds = [], unknown;
  function rescale() {
    var i = 0, n = Math.max(1, range6.length);
    thresholds = new Array(n - 1);
    while (++i < n)
      thresholds[i - 1] = quantileSorted(domain, i / n);
    return scale;
  }
  function scale(x2) {
    return x2 == null || isNaN(x2 = +x2) ? unknown : range6[bisect_default(thresholds, x2)];
  }
  scale.invertExtent = function(y2) {
    var i = range6.indexOf(y2);
    return i < 0 ? [NaN, NaN] : [
      i > 0 ? thresholds[i - 1] : domain[0],
      i < thresholds.length ? thresholds[i] : domain[domain.length - 1]
    ];
  };
  scale.domain = function(_) {
    if (!arguments.length)
      return domain.slice();
    domain = [];
    for (let d of _)
      if (d != null && !isNaN(d = +d))
        domain.push(d);
    domain.sort(ascending);
    return rescale();
  };
  scale.range = function(_) {
    return arguments.length ? (range6 = Array.from(_), rescale()) : range6.slice();
  };
  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };
  scale.quantiles = function() {
    return thresholds.slice();
  };
  scale.copy = function() {
    return quantile2().domain(domain).range(range6).unknown(unknown);
  };
  return initRange.apply(scale, arguments);
}

// node_modules/d3-scale/src/quantize.js
function quantize() {
  var x0 = 0, x1 = 1, n = 1, domain = [0.5], range6 = [0, 1], unknown;
  function scale(x2) {
    return x2 != null && x2 <= x2 ? range6[bisect_default(domain, x2, 0, n)] : unknown;
  }
  function rescale() {
    var i = -1;
    domain = new Array(n);
    while (++i < n)
      domain[i] = ((i + 1) * x1 - (i - n) * x0) / (n + 1);
    return scale;
  }
  scale.domain = function(_) {
    return arguments.length ? ([x0, x1] = _, x0 = +x0, x1 = +x1, rescale()) : [x0, x1];
  };
  scale.range = function(_) {
    return arguments.length ? (n = (range6 = Array.from(_)).length - 1, rescale()) : range6.slice();
  };
  scale.invertExtent = function(y2) {
    var i = range6.indexOf(y2);
    return i < 0 ? [NaN, NaN] : i < 1 ? [x0, domain[0]] : i >= n ? [domain[n - 1], x1] : [domain[i - 1], domain[i]];
  };
  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : scale;
  };
  scale.thresholds = function() {
    return domain.slice();
  };
  scale.copy = function() {
    return quantize().domain([x0, x1]).range(range6).unknown(unknown);
  };
  return initRange.apply(linearish(scale), arguments);
}

// node_modules/d3-scale/src/threshold.js
function threshold() {
  var domain = [0.5], range6 = [0, 1], unknown, n = 1;
  function scale(x2) {
    return x2 != null && x2 <= x2 ? range6[bisect_default(domain, x2, 0, n)] : unknown;
  }
  scale.domain = function(_) {
    return arguments.length ? (domain = Array.from(_), n = Math.min(domain.length, range6.length - 1), scale) : domain.slice();
  };
  scale.range = function(_) {
    return arguments.length ? (range6 = Array.from(_), n = Math.min(domain.length, range6.length - 1), scale) : range6.slice();
  };
  scale.invertExtent = function(y2) {
    var i = range6.indexOf(y2);
    return [domain[i - 1], domain[i]];
  };
  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };
  scale.copy = function() {
    return threshold().domain(domain).range(range6).unknown(unknown);
  };
  return initRange.apply(scale, arguments);
}

// node_modules/d3-time/src/interval.js
var t0 = /* @__PURE__ */ new Date();
var t1 = /* @__PURE__ */ new Date();
function timeInterval(floori, offseti, count, field) {
  function interval(date2) {
    return floori(date2 = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+date2)), date2;
  }
  interval.floor = (date2) => {
    return floori(date2 = /* @__PURE__ */ new Date(+date2)), date2;
  };
  interval.ceil = (date2) => {
    return floori(date2 = new Date(date2 - 1)), offseti(date2, 1), floori(date2), date2;
  };
  interval.round = (date2) => {
    const d0 = interval(date2), d1 = interval.ceil(date2);
    return date2 - d0 < d1 - date2 ? d0 : d1;
  };
  interval.offset = (date2, step) => {
    return offseti(date2 = /* @__PURE__ */ new Date(+date2), step == null ? 1 : Math.floor(step)), date2;
  };
  interval.range = (start, stop, step) => {
    const range6 = [];
    start = interval.ceil(start);
    step = step == null ? 1 : Math.floor(step);
    if (!(start < stop) || !(step > 0))
      return range6;
    let previous;
    do
      range6.push(previous = /* @__PURE__ */ new Date(+start)), offseti(start, step), floori(start);
    while (previous < start && start < stop);
    return range6;
  };
  interval.filter = (test) => {
    return timeInterval((date2) => {
      if (date2 >= date2)
        while (floori(date2), !test(date2))
          date2.setTime(date2 - 1);
    }, (date2, step) => {
      if (date2 >= date2) {
        if (step < 0)
          while (++step <= 0) {
            while (offseti(date2, -1), !test(date2)) {
            }
          }
        else
          while (--step >= 0) {
            while (offseti(date2, 1), !test(date2)) {
            }
          }
      }
    });
  };
  if (count) {
    interval.count = (start, end) => {
      t0.setTime(+start), t1.setTime(+end);
      floori(t0), floori(t1);
      return Math.floor(count(t0, t1));
    };
    interval.every = (step) => {
      step = Math.floor(step);
      return !isFinite(step) || !(step > 0) ? null : !(step > 1) ? interval : interval.filter(field ? (d) => field(d) % step === 0 : (d) => interval.count(0, d) % step === 0);
    };
  }
  return interval;
}

// node_modules/d3-time/src/millisecond.js
var millisecond = timeInterval(() => {
}, (date2, step) => {
  date2.setTime(+date2 + step);
}, (start, end) => {
  return end - start;
});
millisecond.every = (k2) => {
  k2 = Math.floor(k2);
  if (!isFinite(k2) || !(k2 > 0))
    return null;
  if (!(k2 > 1))
    return millisecond;
  return timeInterval((date2) => {
    date2.setTime(Math.floor(date2 / k2) * k2);
  }, (date2, step) => {
    date2.setTime(+date2 + step * k2);
  }, (start, end) => {
    return (end - start) / k2;
  });
};
var milliseconds = millisecond.range;

// node_modules/d3-time/src/duration.js
var durationSecond = 1e3;
var durationMinute = durationSecond * 60;
var durationHour = durationMinute * 60;
var durationDay = durationHour * 24;
var durationWeek = durationDay * 7;
var durationMonth = durationDay * 30;
var durationYear = durationDay * 365;

// node_modules/d3-time/src/second.js
var second = timeInterval((date2) => {
  date2.setTime(date2 - date2.getMilliseconds());
}, (date2, step) => {
  date2.setTime(+date2 + step * durationSecond);
}, (start, end) => {
  return (end - start) / durationSecond;
}, (date2) => {
  return date2.getUTCSeconds();
});
var seconds = second.range;

// node_modules/d3-time/src/minute.js
var timeMinute = timeInterval((date2) => {
  date2.setTime(date2 - date2.getMilliseconds() - date2.getSeconds() * durationSecond);
}, (date2, step) => {
  date2.setTime(+date2 + step * durationMinute);
}, (start, end) => {
  return (end - start) / durationMinute;
}, (date2) => {
  return date2.getMinutes();
});
var timeMinutes = timeMinute.range;
var utcMinute = timeInterval((date2) => {
  date2.setUTCSeconds(0, 0);
}, (date2, step) => {
  date2.setTime(+date2 + step * durationMinute);
}, (start, end) => {
  return (end - start) / durationMinute;
}, (date2) => {
  return date2.getUTCMinutes();
});
var utcMinutes = utcMinute.range;

// node_modules/d3-time/src/hour.js
var timeHour = timeInterval((date2) => {
  date2.setTime(date2 - date2.getMilliseconds() - date2.getSeconds() * durationSecond - date2.getMinutes() * durationMinute);
}, (date2, step) => {
  date2.setTime(+date2 + step * durationHour);
}, (start, end) => {
  return (end - start) / durationHour;
}, (date2) => {
  return date2.getHours();
});
var timeHours = timeHour.range;
var utcHour = timeInterval((date2) => {
  date2.setUTCMinutes(0, 0, 0);
}, (date2, step) => {
  date2.setTime(+date2 + step * durationHour);
}, (start, end) => {
  return (end - start) / durationHour;
}, (date2) => {
  return date2.getUTCHours();
});
var utcHours = utcHour.range;

// node_modules/d3-time/src/day.js
var timeDay = timeInterval(
  (date2) => date2.setHours(0, 0, 0, 0),
  (date2, step) => date2.setDate(date2.getDate() + step),
  (start, end) => (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute) / durationDay,
  (date2) => date2.getDate() - 1
);
var timeDays = timeDay.range;
var utcDay = timeInterval((date2) => {
  date2.setUTCHours(0, 0, 0, 0);
}, (date2, step) => {
  date2.setUTCDate(date2.getUTCDate() + step);
}, (start, end) => {
  return (end - start) / durationDay;
}, (date2) => {
  return date2.getUTCDate() - 1;
});
var utcDays = utcDay.range;
var unixDay = timeInterval((date2) => {
  date2.setUTCHours(0, 0, 0, 0);
}, (date2, step) => {
  date2.setUTCDate(date2.getUTCDate() + step);
}, (start, end) => {
  return (end - start) / durationDay;
}, (date2) => {
  return Math.floor(date2 / durationDay);
});
var unixDays = unixDay.range;

// node_modules/d3-time/src/week.js
function timeWeekday(i) {
  return timeInterval((date2) => {
    date2.setDate(date2.getDate() - (date2.getDay() + 7 - i) % 7);
    date2.setHours(0, 0, 0, 0);
  }, (date2, step) => {
    date2.setDate(date2.getDate() + step * 7);
  }, (start, end) => {
    return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute) / durationWeek;
  });
}
var timeSunday = timeWeekday(0);
var timeMonday = timeWeekday(1);
var timeTuesday = timeWeekday(2);
var timeWednesday = timeWeekday(3);
var timeThursday = timeWeekday(4);
var timeFriday = timeWeekday(5);
var timeSaturday = timeWeekday(6);
var timeSundays = timeSunday.range;
var timeMondays = timeMonday.range;
var timeTuesdays = timeTuesday.range;
var timeWednesdays = timeWednesday.range;
var timeThursdays = timeThursday.range;
var timeFridays = timeFriday.range;
var timeSaturdays = timeSaturday.range;
function utcWeekday(i) {
  return timeInterval((date2) => {
    date2.setUTCDate(date2.getUTCDate() - (date2.getUTCDay() + 7 - i) % 7);
    date2.setUTCHours(0, 0, 0, 0);
  }, (date2, step) => {
    date2.setUTCDate(date2.getUTCDate() + step * 7);
  }, (start, end) => {
    return (end - start) / durationWeek;
  });
}
var utcSunday = utcWeekday(0);
var utcMonday = utcWeekday(1);
var utcTuesday = utcWeekday(2);
var utcWednesday = utcWeekday(3);
var utcThursday = utcWeekday(4);
var utcFriday = utcWeekday(5);
var utcSaturday = utcWeekday(6);
var utcSundays = utcSunday.range;
var utcMondays = utcMonday.range;
var utcTuesdays = utcTuesday.range;
var utcWednesdays = utcWednesday.range;
var utcThursdays = utcThursday.range;
var utcFridays = utcFriday.range;
var utcSaturdays = utcSaturday.range;

// node_modules/d3-time/src/month.js
var timeMonth = timeInterval((date2) => {
  date2.setDate(1);
  date2.setHours(0, 0, 0, 0);
}, (date2, step) => {
  date2.setMonth(date2.getMonth() + step);
}, (start, end) => {
  return end.getMonth() - start.getMonth() + (end.getFullYear() - start.getFullYear()) * 12;
}, (date2) => {
  return date2.getMonth();
});
var timeMonths = timeMonth.range;
var utcMonth = timeInterval((date2) => {
  date2.setUTCDate(1);
  date2.setUTCHours(0, 0, 0, 0);
}, (date2, step) => {
  date2.setUTCMonth(date2.getUTCMonth() + step);
}, (start, end) => {
  return end.getUTCMonth() - start.getUTCMonth() + (end.getUTCFullYear() - start.getUTCFullYear()) * 12;
}, (date2) => {
  return date2.getUTCMonth();
});
var utcMonths = utcMonth.range;

// node_modules/d3-time/src/year.js
var timeYear = timeInterval((date2) => {
  date2.setMonth(0, 1);
  date2.setHours(0, 0, 0, 0);
}, (date2, step) => {
  date2.setFullYear(date2.getFullYear() + step);
}, (start, end) => {
  return end.getFullYear() - start.getFullYear();
}, (date2) => {
  return date2.getFullYear();
});
timeYear.every = (k2) => {
  return !isFinite(k2 = Math.floor(k2)) || !(k2 > 0) ? null : timeInterval((date2) => {
    date2.setFullYear(Math.floor(date2.getFullYear() / k2) * k2);
    date2.setMonth(0, 1);
    date2.setHours(0, 0, 0, 0);
  }, (date2, step) => {
    date2.setFullYear(date2.getFullYear() + step * k2);
  });
};
var timeYears = timeYear.range;
var utcYear = timeInterval((date2) => {
  date2.setUTCMonth(0, 1);
  date2.setUTCHours(0, 0, 0, 0);
}, (date2, step) => {
  date2.setUTCFullYear(date2.getUTCFullYear() + step);
}, (start, end) => {
  return end.getUTCFullYear() - start.getUTCFullYear();
}, (date2) => {
  return date2.getUTCFullYear();
});
utcYear.every = (k2) => {
  return !isFinite(k2 = Math.floor(k2)) || !(k2 > 0) ? null : timeInterval((date2) => {
    date2.setUTCFullYear(Math.floor(date2.getUTCFullYear() / k2) * k2);
    date2.setUTCMonth(0, 1);
    date2.setUTCHours(0, 0, 0, 0);
  }, (date2, step) => {
    date2.setUTCFullYear(date2.getUTCFullYear() + step * k2);
  });
};
var utcYears = utcYear.range;

// node_modules/d3-time/src/ticks.js
function ticker(year, month, week, day, hour, minute) {
  const tickIntervals = [
    [second, 1, durationSecond],
    [second, 5, 5 * durationSecond],
    [second, 15, 15 * durationSecond],
    [second, 30, 30 * durationSecond],
    [minute, 1, durationMinute],
    [minute, 5, 5 * durationMinute],
    [minute, 15, 15 * durationMinute],
    [minute, 30, 30 * durationMinute],
    [hour, 1, durationHour],
    [hour, 3, 3 * durationHour],
    [hour, 6, 6 * durationHour],
    [hour, 12, 12 * durationHour],
    [day, 1, durationDay],
    [day, 2, 2 * durationDay],
    [week, 1, durationWeek],
    [month, 1, durationMonth],
    [month, 3, 3 * durationMonth],
    [year, 1, durationYear]
  ];
  function ticks2(start, stop, count) {
    const reverse3 = stop < start;
    if (reverse3)
      [start, stop] = [stop, start];
    const interval = count && typeof count.range === "function" ? count : tickInterval(start, stop, count);
    const ticks3 = interval ? interval.range(start, +stop + 1) : [];
    return reverse3 ? ticks3.reverse() : ticks3;
  }
  function tickInterval(start, stop, count) {
    const target = Math.abs(stop - start) / count;
    const i = bisector(([, , step2]) => step2).right(tickIntervals, target);
    if (i === tickIntervals.length)
      return year.every(tickStep(start / durationYear, stop / durationYear, count));
    if (i === 0)
      return millisecond.every(Math.max(tickStep(start, stop, count), 1));
    const [t, step] = tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i];
    return t.every(step);
  }
  return [ticks2, tickInterval];
}
var [utcTicks, utcTickInterval] = ticker(utcYear, utcMonth, utcSunday, unixDay, utcHour, utcMinute);
var [timeTicks, timeTickInterval] = ticker(timeYear, timeMonth, timeSunday, timeDay, timeHour, timeMinute);

// node_modules/d3-time-format/src/locale.js
function localDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date2 = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
    date2.setFullYear(d.y);
    return date2;
  }
  return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
}
function utcDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date2 = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
    date2.setUTCFullYear(d.y);
    return date2;
  }
  return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
}
function newDate(y2, m, d) {
  return { y: y2, m, d, H: 0, M: 0, S: 0, L: 0 };
}
function formatLocale(locale3) {
  var locale_dateTime = locale3.dateTime, locale_date = locale3.date, locale_time = locale3.time, locale_periods = locale3.periods, locale_weekdays = locale3.days, locale_shortWeekdays = locale3.shortDays, locale_months = locale3.months, locale_shortMonths = locale3.shortMonths;
  var periodRe = formatRe(locale_periods), periodLookup = formatLookup(locale_periods), weekdayRe = formatRe(locale_weekdays), weekdayLookup = formatLookup(locale_weekdays), shortWeekdayRe = formatRe(locale_shortWeekdays), shortWeekdayLookup = formatLookup(locale_shortWeekdays), monthRe = formatRe(locale_months), monthLookup = formatLookup(locale_months), shortMonthRe = formatRe(locale_shortMonths), shortMonthLookup = formatLookup(locale_shortMonths);
  var formats = {
    "a": formatShortWeekday,
    "A": formatWeekday,
    "b": formatShortMonth,
    "B": formatMonth,
    "c": null,
    "d": formatDayOfMonth,
    "e": formatDayOfMonth,
    "f": formatMicroseconds,
    "g": formatYearISO,
    "G": formatFullYearISO,
    "H": formatHour24,
    "I": formatHour12,
    "j": formatDayOfYear,
    "L": formatMilliseconds,
    "m": formatMonthNumber,
    "M": formatMinutes,
    "p": formatPeriod,
    "q": formatQuarter,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatSeconds,
    "u": formatWeekdayNumberMonday,
    "U": formatWeekNumberSunday,
    "V": formatWeekNumberISO,
    "w": formatWeekdayNumberSunday,
    "W": formatWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatYear,
    "Y": formatFullYear,
    "Z": formatZone,
    "%": formatLiteralPercent
  };
  var utcFormats = {
    "a": formatUTCShortWeekday,
    "A": formatUTCWeekday,
    "b": formatUTCShortMonth,
    "B": formatUTCMonth,
    "c": null,
    "d": formatUTCDayOfMonth,
    "e": formatUTCDayOfMonth,
    "f": formatUTCMicroseconds,
    "g": formatUTCYearISO,
    "G": formatUTCFullYearISO,
    "H": formatUTCHour24,
    "I": formatUTCHour12,
    "j": formatUTCDayOfYear,
    "L": formatUTCMilliseconds,
    "m": formatUTCMonthNumber,
    "M": formatUTCMinutes,
    "p": formatUTCPeriod,
    "q": formatUTCQuarter,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatUTCSeconds,
    "u": formatUTCWeekdayNumberMonday,
    "U": formatUTCWeekNumberSunday,
    "V": formatUTCWeekNumberISO,
    "w": formatUTCWeekdayNumberSunday,
    "W": formatUTCWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatUTCYear,
    "Y": formatUTCFullYear,
    "Z": formatUTCZone,
    "%": formatLiteralPercent
  };
  var parses = {
    "a": parseShortWeekday,
    "A": parseWeekday,
    "b": parseShortMonth,
    "B": parseMonth,
    "c": parseLocaleDateTime,
    "d": parseDayOfMonth,
    "e": parseDayOfMonth,
    "f": parseMicroseconds,
    "g": parseYear,
    "G": parseFullYear,
    "H": parseHour24,
    "I": parseHour24,
    "j": parseDayOfYear,
    "L": parseMilliseconds,
    "m": parseMonthNumber,
    "M": parseMinutes,
    "p": parsePeriod,
    "q": parseQuarter,
    "Q": parseUnixTimestamp,
    "s": parseUnixTimestampSeconds,
    "S": parseSeconds,
    "u": parseWeekdayNumberMonday,
    "U": parseWeekNumberSunday,
    "V": parseWeekNumberISO,
    "w": parseWeekdayNumberSunday,
    "W": parseWeekNumberMonday,
    "x": parseLocaleDate,
    "X": parseLocaleTime,
    "y": parseYear,
    "Y": parseFullYear,
    "Z": parseZone,
    "%": parseLiteralPercent
  };
  formats.x = newFormat(locale_date, formats);
  formats.X = newFormat(locale_time, formats);
  formats.c = newFormat(locale_dateTime, formats);
  utcFormats.x = newFormat(locale_date, utcFormats);
  utcFormats.X = newFormat(locale_time, utcFormats);
  utcFormats.c = newFormat(locale_dateTime, utcFormats);
  function newFormat(specifier, formats2) {
    return function(date2) {
      var string = [], i = -1, j = 0, n = specifier.length, c2, pad2, format3;
      if (!(date2 instanceof Date))
        date2 = /* @__PURE__ */ new Date(+date2);
      while (++i < n) {
        if (specifier.charCodeAt(i) === 37) {
          string.push(specifier.slice(j, i));
          if ((pad2 = pads[c2 = specifier.charAt(++i)]) != null)
            c2 = specifier.charAt(++i);
          else
            pad2 = c2 === "e" ? " " : "0";
          if (format3 = formats2[c2])
            c2 = format3(date2, pad2);
          string.push(c2);
          j = i + 1;
        }
      }
      string.push(specifier.slice(j, i));
      return string.join("");
    };
  }
  function newParse(specifier, Z) {
    return function(string) {
      var d = newDate(1900, void 0, 1), i = parseSpecifier(d, specifier, string += "", 0), week, day;
      if (i != string.length)
        return null;
      if ("Q" in d)
        return new Date(d.Q);
      if ("s" in d)
        return new Date(d.s * 1e3 + ("L" in d ? d.L : 0));
      if (Z && !("Z" in d))
        d.Z = 0;
      if ("p" in d)
        d.H = d.H % 12 + d.p * 12;
      if (d.m === void 0)
        d.m = "q" in d ? d.q : 0;
      if ("V" in d) {
        if (d.V < 1 || d.V > 53)
          return null;
        if (!("w" in d))
          d.w = 1;
        if ("Z" in d) {
          week = utcDate(newDate(d.y, 0, 1)), day = week.getUTCDay();
          week = day > 4 || day === 0 ? utcMonday.ceil(week) : utcMonday(week);
          week = utcDay.offset(week, (d.V - 1) * 7);
          d.y = week.getUTCFullYear();
          d.m = week.getUTCMonth();
          d.d = week.getUTCDate() + (d.w + 6) % 7;
        } else {
          week = localDate(newDate(d.y, 0, 1)), day = week.getDay();
          week = day > 4 || day === 0 ? timeMonday.ceil(week) : timeMonday(week);
          week = timeDay.offset(week, (d.V - 1) * 7);
          d.y = week.getFullYear();
          d.m = week.getMonth();
          d.d = week.getDate() + (d.w + 6) % 7;
        }
      } else if ("W" in d || "U" in d) {
        if (!("w" in d))
          d.w = "u" in d ? d.u % 7 : "W" in d ? 1 : 0;
        day = "Z" in d ? utcDate(newDate(d.y, 0, 1)).getUTCDay() : localDate(newDate(d.y, 0, 1)).getDay();
        d.m = 0;
        d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day + 5) % 7 : d.w + d.U * 7 - (day + 6) % 7;
      }
      if ("Z" in d) {
        d.H += d.Z / 100 | 0;
        d.M += d.Z % 100;
        return utcDate(d);
      }
      return localDate(d);
    };
  }
  function parseSpecifier(d, specifier, string, j) {
    var i = 0, n = specifier.length, m = string.length, c2, parse;
    while (i < n) {
      if (j >= m)
        return -1;
      c2 = specifier.charCodeAt(i++);
      if (c2 === 37) {
        c2 = specifier.charAt(i++);
        parse = parses[c2 in pads ? specifier.charAt(i++) : c2];
        if (!parse || (j = parse(d, string, j)) < 0)
          return -1;
      } else if (c2 != string.charCodeAt(j++)) {
        return -1;
      }
    }
    return j;
  }
  function parsePeriod(d, string, i) {
    var n = periodRe.exec(string.slice(i));
    return n ? (d.p = periodLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  function parseShortWeekday(d, string, i) {
    var n = shortWeekdayRe.exec(string.slice(i));
    return n ? (d.w = shortWeekdayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  function parseWeekday(d, string, i) {
    var n = weekdayRe.exec(string.slice(i));
    return n ? (d.w = weekdayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  function parseShortMonth(d, string, i) {
    var n = shortMonthRe.exec(string.slice(i));
    return n ? (d.m = shortMonthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  function parseMonth(d, string, i) {
    var n = monthRe.exec(string.slice(i));
    return n ? (d.m = monthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  function parseLocaleDateTime(d, string, i) {
    return parseSpecifier(d, locale_dateTime, string, i);
  }
  function parseLocaleDate(d, string, i) {
    return parseSpecifier(d, locale_date, string, i);
  }
  function parseLocaleTime(d, string, i) {
    return parseSpecifier(d, locale_time, string, i);
  }
  function formatShortWeekday(d) {
    return locale_shortWeekdays[d.getDay()];
  }
  function formatWeekday(d) {
    return locale_weekdays[d.getDay()];
  }
  function formatShortMonth(d) {
    return locale_shortMonths[d.getMonth()];
  }
  function formatMonth(d) {
    return locale_months[d.getMonth()];
  }
  function formatPeriod(d) {
    return locale_periods[+(d.getHours() >= 12)];
  }
  function formatQuarter(d) {
    return 1 + ~~(d.getMonth() / 3);
  }
  function formatUTCShortWeekday(d) {
    return locale_shortWeekdays[d.getUTCDay()];
  }
  function formatUTCWeekday(d) {
    return locale_weekdays[d.getUTCDay()];
  }
  function formatUTCShortMonth(d) {
    return locale_shortMonths[d.getUTCMonth()];
  }
  function formatUTCMonth(d) {
    return locale_months[d.getUTCMonth()];
  }
  function formatUTCPeriod(d) {
    return locale_periods[+(d.getUTCHours() >= 12)];
  }
  function formatUTCQuarter(d) {
    return 1 + ~~(d.getUTCMonth() / 3);
  }
  return {
    format: function(specifier) {
      var f = newFormat(specifier += "", formats);
      f.toString = function() {
        return specifier;
      };
      return f;
    },
    parse: function(specifier) {
      var p = newParse(specifier += "", false);
      p.toString = function() {
        return specifier;
      };
      return p;
    },
    utcFormat: function(specifier) {
      var f = newFormat(specifier += "", utcFormats);
      f.toString = function() {
        return specifier;
      };
      return f;
    },
    utcParse: function(specifier) {
      var p = newParse(specifier += "", true);
      p.toString = function() {
        return specifier;
      };
      return p;
    }
  };
}
var pads = { "-": "", "_": " ", "0": "0" };
var numberRe = /^\s*\d+/;
var percentRe = /^%/;
var requoteRe = /[\\^$*+?|[\]().{}]/g;
function pad(value, fill, width) {
  var sign2 = value < 0 ? "-" : "", string = (sign2 ? -value : value) + "", length = string.length;
  return sign2 + (length < width ? new Array(width - length + 1).join(fill) + string : string);
}
function requote(s2) {
  return s2.replace(requoteRe, "\\$&");
}
function formatRe(names) {
  return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
}
function formatLookup(names) {
  return new Map(names.map((name, i) => [name.toLowerCase(), i]));
}
function parseWeekdayNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.w = +n[0], i + n[0].length) : -1;
}
function parseWeekdayNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.u = +n[0], i + n[0].length) : -1;
}
function parseWeekNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.U = +n[0], i + n[0].length) : -1;
}
function parseWeekNumberISO(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.V = +n[0], i + n[0].length) : -1;
}
function parseWeekNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.W = +n[0], i + n[0].length) : -1;
}
function parseFullYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 4));
  return n ? (d.y = +n[0], i + n[0].length) : -1;
}
function parseYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), i + n[0].length) : -1;
}
function parseZone(d, string, i) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(string.slice(i, i + 6));
  return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
}
function parseQuarter(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.q = n[0] * 3 - 3, i + n[0].length) : -1;
}
function parseMonthNumber(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
}
function parseDayOfMonth(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.d = +n[0], i + n[0].length) : -1;
}
function parseDayOfYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
}
function parseHour24(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.H = +n[0], i + n[0].length) : -1;
}
function parseMinutes(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.M = +n[0], i + n[0].length) : -1;
}
function parseSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.S = +n[0], i + n[0].length) : -1;
}
function parseMilliseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.L = +n[0], i + n[0].length) : -1;
}
function parseMicroseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 6));
  return n ? (d.L = Math.floor(n[0] / 1e3), i + n[0].length) : -1;
}
function parseLiteralPercent(d, string, i) {
  var n = percentRe.exec(string.slice(i, i + 1));
  return n ? i + n[0].length : -1;
}
function parseUnixTimestamp(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.Q = +n[0], i + n[0].length) : -1;
}
function parseUnixTimestampSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.s = +n[0], i + n[0].length) : -1;
}
function formatDayOfMonth(d, p) {
  return pad(d.getDate(), p, 2);
}
function formatHour24(d, p) {
  return pad(d.getHours(), p, 2);
}
function formatHour12(d, p) {
  return pad(d.getHours() % 12 || 12, p, 2);
}
function formatDayOfYear(d, p) {
  return pad(1 + timeDay.count(timeYear(d), d), p, 3);
}
function formatMilliseconds(d, p) {
  return pad(d.getMilliseconds(), p, 3);
}
function formatMicroseconds(d, p) {
  return formatMilliseconds(d, p) + "000";
}
function formatMonthNumber(d, p) {
  return pad(d.getMonth() + 1, p, 2);
}
function formatMinutes(d, p) {
  return pad(d.getMinutes(), p, 2);
}
function formatSeconds(d, p) {
  return pad(d.getSeconds(), p, 2);
}
function formatWeekdayNumberMonday(d) {
  var day = d.getDay();
  return day === 0 ? 7 : day;
}
function formatWeekNumberSunday(d, p) {
  return pad(timeSunday.count(timeYear(d) - 1, d), p, 2);
}
function dISO(d) {
  var day = d.getDay();
  return day >= 4 || day === 0 ? timeThursday(d) : timeThursday.ceil(d);
}
function formatWeekNumberISO(d, p) {
  d = dISO(d);
  return pad(timeThursday.count(timeYear(d), d) + (timeYear(d).getDay() === 4), p, 2);
}
function formatWeekdayNumberSunday(d) {
  return d.getDay();
}
function formatWeekNumberMonday(d, p) {
  return pad(timeMonday.count(timeYear(d) - 1, d), p, 2);
}
function formatYear(d, p) {
  return pad(d.getFullYear() % 100, p, 2);
}
function formatYearISO(d, p) {
  d = dISO(d);
  return pad(d.getFullYear() % 100, p, 2);
}
function formatFullYear(d, p) {
  return pad(d.getFullYear() % 1e4, p, 4);
}
function formatFullYearISO(d, p) {
  var day = d.getDay();
  d = day >= 4 || day === 0 ? timeThursday(d) : timeThursday.ceil(d);
  return pad(d.getFullYear() % 1e4, p, 4);
}
function formatZone(d) {
  var z = d.getTimezoneOffset();
  return (z > 0 ? "-" : (z *= -1, "+")) + pad(z / 60 | 0, "0", 2) + pad(z % 60, "0", 2);
}
function formatUTCDayOfMonth(d, p) {
  return pad(d.getUTCDate(), p, 2);
}
function formatUTCHour24(d, p) {
  return pad(d.getUTCHours(), p, 2);
}
function formatUTCHour12(d, p) {
  return pad(d.getUTCHours() % 12 || 12, p, 2);
}
function formatUTCDayOfYear(d, p) {
  return pad(1 + utcDay.count(utcYear(d), d), p, 3);
}
function formatUTCMilliseconds(d, p) {
  return pad(d.getUTCMilliseconds(), p, 3);
}
function formatUTCMicroseconds(d, p) {
  return formatUTCMilliseconds(d, p) + "000";
}
function formatUTCMonthNumber(d, p) {
  return pad(d.getUTCMonth() + 1, p, 2);
}
function formatUTCMinutes(d, p) {
  return pad(d.getUTCMinutes(), p, 2);
}
function formatUTCSeconds(d, p) {
  return pad(d.getUTCSeconds(), p, 2);
}
function formatUTCWeekdayNumberMonday(d) {
  var dow = d.getUTCDay();
  return dow === 0 ? 7 : dow;
}
function formatUTCWeekNumberSunday(d, p) {
  return pad(utcSunday.count(utcYear(d) - 1, d), p, 2);
}
function UTCdISO(d) {
  var day = d.getUTCDay();
  return day >= 4 || day === 0 ? utcThursday(d) : utcThursday.ceil(d);
}
function formatUTCWeekNumberISO(d, p) {
  d = UTCdISO(d);
  return pad(utcThursday.count(utcYear(d), d) + (utcYear(d).getUTCDay() === 4), p, 2);
}
function formatUTCWeekdayNumberSunday(d) {
  return d.getUTCDay();
}
function formatUTCWeekNumberMonday(d, p) {
  return pad(utcMonday.count(utcYear(d) - 1, d), p, 2);
}
function formatUTCYear(d, p) {
  return pad(d.getUTCFullYear() % 100, p, 2);
}
function formatUTCYearISO(d, p) {
  d = UTCdISO(d);
  return pad(d.getUTCFullYear() % 100, p, 2);
}
function formatUTCFullYear(d, p) {
  return pad(d.getUTCFullYear() % 1e4, p, 4);
}
function formatUTCFullYearISO(d, p) {
  var day = d.getUTCDay();
  d = day >= 4 || day === 0 ? utcThursday(d) : utcThursday.ceil(d);
  return pad(d.getUTCFullYear() % 1e4, p, 4);
}
function formatUTCZone() {
  return "+0000";
}
function formatLiteralPercent() {
  return "%";
}
function formatUnixTimestamp(d) {
  return +d;
}
function formatUnixTimestampSeconds(d) {
  return Math.floor(+d / 1e3);
}

// node_modules/d3-time-format/src/defaultLocale.js
var locale2;
var timeFormat;
var timeParse;
var utcFormat;
var utcParse;
defaultLocale2({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function defaultLocale2(definition) {
  locale2 = formatLocale(definition);
  timeFormat = locale2.format;
  timeParse = locale2.parse;
  utcFormat = locale2.utcFormat;
  utcParse = locale2.utcParse;
  return locale2;
}

// node_modules/d3-scale/src/time.js
function date(t) {
  return new Date(t);
}
function number3(t) {
  return t instanceof Date ? +t : +/* @__PURE__ */ new Date(+t);
}
function calendar(ticks2, tickInterval, year, month, week, day, hour, minute, second2, format3) {
  var scale = continuous(), invert = scale.invert, domain = scale.domain;
  var formatMillisecond = format3(".%L"), formatSecond = format3(":%S"), formatMinute = format3("%I:%M"), formatHour = format3("%I %p"), formatDay = format3("%a %d"), formatWeek = format3("%b %d"), formatMonth = format3("%B"), formatYear2 = format3("%Y");
  function tickFormat2(date2) {
    return (second2(date2) < date2 ? formatMillisecond : minute(date2) < date2 ? formatSecond : hour(date2) < date2 ? formatMinute : day(date2) < date2 ? formatHour : month(date2) < date2 ? week(date2) < date2 ? formatDay : formatWeek : year(date2) < date2 ? formatMonth : formatYear2)(date2);
  }
  scale.invert = function(y2) {
    return new Date(invert(y2));
  };
  scale.domain = function(_) {
    return arguments.length ? domain(Array.from(_, number3)) : domain().map(date);
  };
  scale.ticks = function(interval) {
    var d = domain();
    return ticks2(d[0], d[d.length - 1], interval == null ? 10 : interval);
  };
  scale.tickFormat = function(count, specifier) {
    return specifier == null ? tickFormat2 : format3(specifier);
  };
  scale.nice = function(interval) {
    var d = domain();
    if (!interval || typeof interval.range !== "function")
      interval = tickInterval(d[0], d[d.length - 1], interval == null ? 10 : interval);
    return interval ? domain(nice(d, interval)) : scale;
  };
  scale.copy = function() {
    return copy(scale, calendar(ticks2, tickInterval, year, month, week, day, hour, minute, second2, format3));
  };
  return scale;
}
function time() {
  return initRange.apply(calendar(timeTicks, timeTickInterval, timeYear, timeMonth, timeSunday, timeDay, timeHour, timeMinute, second, timeFormat).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}

// node_modules/d3-scale/src/utcTime.js
function utcTime() {
  return initRange.apply(calendar(utcTicks, utcTickInterval, utcYear, utcMonth, utcSunday, utcDay, utcHour, utcMinute, second, utcFormat).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}

// node_modules/d3-scale/src/sequential.js
function transformer2() {
  var x0 = 0, x1 = 1, t02, t12, k10, transform, interpolator = identity, clamp = false, unknown;
  function scale(x2) {
    return x2 == null || isNaN(x2 = +x2) ? unknown : interpolator(k10 === 0 ? 0.5 : (x2 = (transform(x2) - t02) * k10, clamp ? Math.max(0, Math.min(1, x2)) : x2));
  }
  scale.domain = function(_) {
    return arguments.length ? ([x0, x1] = _, t02 = transform(x0 = +x0), t12 = transform(x1 = +x1), k10 = t02 === t12 ? 0 : 1 / (t12 - t02), scale) : [x0, x1];
  };
  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, scale) : clamp;
  };
  scale.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };
  function range6(interpolate) {
    return function(_) {
      var r0, r1;
      return arguments.length ? ([r0, r1] = _, interpolator = interpolate(r0, r1), scale) : [interpolator(0), interpolator(1)];
    };
  }
  scale.range = range6(value_default);
  scale.rangeRound = range6(round_default);
  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };
  return function(t) {
    transform = t, t02 = t(x0), t12 = t(x1), k10 = t02 === t12 ? 0 : 1 / (t12 - t02);
    return scale;
  };
}
function copy2(source, target) {
  return target.domain(source.domain()).interpolator(source.interpolator()).clamp(source.clamp()).unknown(source.unknown());
}
function sequential() {
  var scale = linearish(transformer2()(identity));
  scale.copy = function() {
    return copy2(scale, sequential());
  };
  return initInterpolator.apply(scale, arguments);
}
function sequentialLog() {
  var scale = loggish(transformer2()).domain([1, 10]);
  scale.copy = function() {
    return copy2(scale, sequentialLog()).base(scale.base());
  };
  return initInterpolator.apply(scale, arguments);
}
function sequentialSymlog() {
  var scale = symlogish(transformer2());
  scale.copy = function() {
    return copy2(scale, sequentialSymlog()).constant(scale.constant());
  };
  return initInterpolator.apply(scale, arguments);
}
function sequentialPow() {
  var scale = powish(transformer2());
  scale.copy = function() {
    return copy2(scale, sequentialPow()).exponent(scale.exponent());
  };
  return initInterpolator.apply(scale, arguments);
}
function sequentialSqrt() {
  return sequentialPow.apply(null, arguments).exponent(0.5);
}

// node_modules/d3-scale/src/sequentialQuantile.js
function sequentialQuantile() {
  var domain = [], interpolator = identity;
  function scale(x2) {
    if (x2 != null && !isNaN(x2 = +x2))
      return interpolator((bisect_default(domain, x2, 1) - 1) / (domain.length - 1));
  }
  scale.domain = function(_) {
    if (!arguments.length)
      return domain.slice();
    domain = [];
    for (let d of _)
      if (d != null && !isNaN(d = +d))
        domain.push(d);
    domain.sort(ascending);
    return scale;
  };
  scale.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };
  scale.range = function() {
    return domain.map((d, i) => interpolator(i / (domain.length - 1)));
  };
  scale.quantiles = function(n) {
    return Array.from({ length: n + 1 }, (_, i) => quantile(domain, i / n));
  };
  scale.copy = function() {
    return sequentialQuantile(interpolator).domain(domain);
  };
  return initInterpolator.apply(scale, arguments);
}

// node_modules/d3-scale/src/diverging.js
function transformer3() {
  var x0 = 0, x1 = 0.5, x2 = 1, s2 = 1, t02, t12, t2, k10, k21, interpolator = identity, transform, clamp = false, unknown;
  function scale(x3) {
    return isNaN(x3 = +x3) ? unknown : (x3 = 0.5 + ((x3 = +transform(x3)) - t12) * (s2 * x3 < s2 * t12 ? k10 : k21), interpolator(clamp ? Math.max(0, Math.min(1, x3)) : x3));
  }
  scale.domain = function(_) {
    return arguments.length ? ([x0, x1, x2] = _, t02 = transform(x0 = +x0), t12 = transform(x1 = +x1), t2 = transform(x2 = +x2), k10 = t02 === t12 ? 0 : 0.5 / (t12 - t02), k21 = t12 === t2 ? 0 : 0.5 / (t2 - t12), s2 = t12 < t02 ? -1 : 1, scale) : [x0, x1, x2];
  };
  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, scale) : clamp;
  };
  scale.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };
  function range6(interpolate) {
    return function(_) {
      var r0, r1, r2;
      return arguments.length ? ([r0, r1, r2] = _, interpolator = piecewise(interpolate, [r0, r1, r2]), scale) : [interpolator(0), interpolator(0.5), interpolator(1)];
    };
  }
  scale.range = range6(value_default);
  scale.rangeRound = range6(round_default);
  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };
  return function(t) {
    transform = t, t02 = t(x0), t12 = t(x1), t2 = t(x2), k10 = t02 === t12 ? 0 : 0.5 / (t12 - t02), k21 = t12 === t2 ? 0 : 0.5 / (t2 - t12), s2 = t12 < t02 ? -1 : 1;
    return scale;
  };
}
function diverging() {
  var scale = linearish(transformer3()(identity));
  scale.copy = function() {
    return copy2(scale, diverging());
  };
  return initInterpolator.apply(scale, arguments);
}
function divergingLog() {
  var scale = loggish(transformer3()).domain([0.1, 1, 10]);
  scale.copy = function() {
    return copy2(scale, divergingLog()).base(scale.base());
  };
  return initInterpolator.apply(scale, arguments);
}
function divergingSymlog() {
  var scale = symlogish(transformer3());
  scale.copy = function() {
    return copy2(scale, divergingSymlog()).constant(scale.constant());
  };
  return initInterpolator.apply(scale, arguments);
}
function divergingPow() {
  var scale = powish(transformer3());
  scale.copy = function() {
    return copy2(scale, divergingPow()).exponent(scale.exponent());
  };
  return initInterpolator.apply(scale, arguments);
}
function divergingSqrt() {
  return divergingPow.apply(null, arguments).exponent(0.5);
}

// node_modules/recharts/es6/util/ChartUtils.js
var import_max2 = __toESM(require_max());
var import_min2 = __toESM(require_min());
var import_isNil4 = __toESM(require_isNil());
var import_isFunction4 = __toESM(require_isFunction());
var import_isString3 = __toESM(require_isString());
var import_get3 = __toESM(require_get());
var import_flatMap = __toESM(require_flatMap());
var import_isNaN2 = __toESM(require_isNaN());
var import_upperFirst2 = __toESM(require_upperFirst());
var import_isEqual = __toESM(require_isEqual());
var import_sortBy2 = __toESM(require_sortBy());

// node_modules/recharts-scale/es6/getNiceTickValues.js
var import_decimal2 = __toESM(require_decimal());

// node_modules/recharts-scale/es6/util/utils.js
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray5(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray5(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray5(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray5(o, minLen);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter))
    return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray5(arr);
}
function _arrayLikeToArray5(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
var identity3 = function identity4(i) {
  return i;
};
var PLACE_HOLDER = {
  "@@functional/placeholder": true
};
var isPlaceHolder = function isPlaceHolder2(val) {
  return val === PLACE_HOLDER;
};
var curry0 = function curry02(fn) {
  return function _curried() {
    if (arguments.length === 0 || arguments.length === 1 && isPlaceHolder(arguments.length <= 0 ? void 0 : arguments[0])) {
      return _curried;
    }
    return fn.apply(void 0, arguments);
  };
};
var curryN = function curryN2(n, fn) {
  if (n === 1) {
    return fn;
  }
  return curry0(function() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var argsLength = args.filter(function(arg) {
      return arg !== PLACE_HOLDER;
    }).length;
    if (argsLength >= n) {
      return fn.apply(void 0, args);
    }
    return curryN2(n - argsLength, curry0(function() {
      for (var _len2 = arguments.length, restArgs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        restArgs[_key2] = arguments[_key2];
      }
      var newArgs = args.map(function(arg) {
        return isPlaceHolder(arg) ? restArgs.shift() : arg;
      });
      return fn.apply(void 0, _toConsumableArray(newArgs).concat(restArgs));
    }));
  });
};
var curry = function curry2(fn) {
  return curryN(fn.length, fn);
};
var range2 = function range3(begin, end) {
  var arr = [];
  for (var i = begin; i < end; ++i) {
    arr[i - begin] = i;
  }
  return arr;
};
var map2 = curry(function(fn, arr) {
  if (Array.isArray(arr)) {
    return arr.map(fn);
  }
  return Object.keys(arr).map(function(key) {
    return arr[key];
  }).map(fn);
});
var compose = function compose2() {
  for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
  }
  if (!args.length) {
    return identity3;
  }
  var fns = args.reverse();
  var firstFn = fns[0];
  var tailsFn = fns.slice(1);
  return function() {
    return tailsFn.reduce(function(res, fn) {
      return fn(res);
    }, firstFn.apply(void 0, arguments));
  };
};
var reverse = function reverse2(arr) {
  if (Array.isArray(arr)) {
    return arr.reverse();
  }
  return arr.split("").reverse.join("");
};
var memoize = function memoize2(fn) {
  var lastArgs = null;
  var lastResult2 = null;
  return function() {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }
    if (lastArgs && args.every(function(val, i) {
      return val === lastArgs[i];
    })) {
      return lastResult2;
    }
    lastArgs = args;
    lastResult2 = fn.apply(void 0, args);
    return lastResult2;
  };
};

// node_modules/recharts-scale/es6/util/arithmetic.js
var import_decimal = __toESM(require_decimal());
function getDigitCount(value) {
  var result;
  if (value === 0) {
    result = 1;
  } else {
    result = Math.floor(new import_decimal.default(value).abs().log(10).toNumber()) + 1;
  }
  return result;
}
function rangeStep(start, end, step) {
  var num = new import_decimal.default(start);
  var i = 0;
  var result = [];
  while (num.lt(end) && i < 1e5) {
    result.push(num.toNumber());
    num = num.add(step);
    i++;
  }
  return result;
}
var interpolateNumber3 = curry(function(a2, b, t) {
  var newA = +a2;
  var newB = +b;
  return newA + t * (newB - newA);
});
var uninterpolateNumber = curry(function(a2, b, x2) {
  var diff = b - +a2;
  diff = diff || Infinity;
  return (x2 - a2) / diff;
});
var uninterpolateTruncation = curry(function(a2, b, x2) {
  var diff = b - +a2;
  diff = diff || Infinity;
  return Math.max(0, Math.min(1, (x2 - a2) / diff));
});
var arithmetic_default = {
  rangeStep,
  getDigitCount,
  interpolateNumber: interpolateNumber3,
  uninterpolateNumber,
  uninterpolateTruncation
};

// node_modules/recharts-scale/es6/getNiceTickValues.js
function _toConsumableArray2(arr) {
  return _arrayWithoutHoles2(arr) || _iterableToArray2(arr) || _unsupportedIterableToArray6(arr) || _nonIterableSpread2();
}
function _nonIterableSpread2() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray2(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter))
    return Array.from(iter);
}
function _arrayWithoutHoles2(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray6(arr);
}
function _slicedToArray5(arr, i) {
  return _arrayWithHoles5(arr) || _iterableToArrayLimit5(arr, i) || _unsupportedIterableToArray6(arr, i) || _nonIterableRest5();
}
function _nonIterableRest5() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray6(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray6(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray6(o, minLen);
}
function _arrayLikeToArray6(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit5(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = void 0;
  try {
    for (var _i = arr[Symbol.iterator](), _s3; !(_n = (_s3 = _i.next()).done); _n = true) {
      _arr.push(_s3.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles5(arr) {
  if (Array.isArray(arr))
    return arr;
}
function getValidInterval(_ref) {
  var _ref2 = _slicedToArray5(_ref, 2), min3 = _ref2[0], max3 = _ref2[1];
  var validMin = min3, validMax = max3;
  if (min3 > max3) {
    validMin = max3;
    validMax = min3;
  }
  return [validMin, validMax];
}
function getFormatStep(roughStep, allowDecimals, correctionFactor) {
  if (roughStep.lte(0)) {
    return new import_decimal2.default(0);
  }
  var digitCount = arithmetic_default.getDigitCount(roughStep.toNumber());
  var digitCountValue = new import_decimal2.default(10).pow(digitCount);
  var stepRatio = roughStep.div(digitCountValue);
  var stepRatioScale = digitCount !== 1 ? 0.05 : 0.1;
  var amendStepRatio = new import_decimal2.default(Math.ceil(stepRatio.div(stepRatioScale).toNumber())).add(correctionFactor).mul(stepRatioScale);
  var formatStep = amendStepRatio.mul(digitCountValue);
  return allowDecimals ? formatStep : new import_decimal2.default(Math.ceil(formatStep));
}
function getTickOfSingleValue(value, tickCount, allowDecimals) {
  var step = 1;
  var middle = new import_decimal2.default(value);
  if (!middle.isint() && allowDecimals) {
    var absVal = Math.abs(value);
    if (absVal < 1) {
      step = new import_decimal2.default(10).pow(arithmetic_default.getDigitCount(value) - 1);
      middle = new import_decimal2.default(Math.floor(middle.div(step).toNumber())).mul(step);
    } else if (absVal > 1) {
      middle = new import_decimal2.default(Math.floor(value));
    }
  } else if (value === 0) {
    middle = new import_decimal2.default(Math.floor((tickCount - 1) / 2));
  } else if (!allowDecimals) {
    middle = new import_decimal2.default(Math.floor(value));
  }
  var middleIndex = Math.floor((tickCount - 1) / 2);
  var fn = compose(map2(function(n) {
    return middle.add(new import_decimal2.default(n - middleIndex).mul(step)).toNumber();
  }), range2);
  return fn(0, tickCount);
}
function calculateStep(min3, max3, tickCount, allowDecimals) {
  var correctionFactor = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
  if (!Number.isFinite((max3 - min3) / (tickCount - 1))) {
    return {
      step: new import_decimal2.default(0),
      tickMin: new import_decimal2.default(0),
      tickMax: new import_decimal2.default(0)
    };
  }
  var step = getFormatStep(new import_decimal2.default(max3).sub(min3).div(tickCount - 1), allowDecimals, correctionFactor);
  var middle;
  if (min3 <= 0 && max3 >= 0) {
    middle = new import_decimal2.default(0);
  } else {
    middle = new import_decimal2.default(min3).add(max3).div(2);
    middle = middle.sub(new import_decimal2.default(middle).mod(step));
  }
  var belowCount = Math.ceil(middle.sub(min3).div(step).toNumber());
  var upCount = Math.ceil(new import_decimal2.default(max3).sub(middle).div(step).toNumber());
  var scaleCount = belowCount + upCount + 1;
  if (scaleCount > tickCount) {
    return calculateStep(min3, max3, tickCount, allowDecimals, correctionFactor + 1);
  }
  if (scaleCount < tickCount) {
    upCount = max3 > 0 ? upCount + (tickCount - scaleCount) : upCount;
    belowCount = max3 > 0 ? belowCount : belowCount + (tickCount - scaleCount);
  }
  return {
    step,
    tickMin: middle.sub(new import_decimal2.default(belowCount).mul(step)),
    tickMax: middle.add(new import_decimal2.default(upCount).mul(step))
  };
}
function getNiceTickValuesFn(_ref3) {
  var _ref4 = _slicedToArray5(_ref3, 2), min3 = _ref4[0], max3 = _ref4[1];
  var tickCount = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6;
  var allowDecimals = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  var count = Math.max(tickCount, 2);
  var _getValidInterval = getValidInterval([min3, max3]), _getValidInterval2 = _slicedToArray5(_getValidInterval, 2), cormin = _getValidInterval2[0], cormax = _getValidInterval2[1];
  if (cormin === -Infinity || cormax === Infinity) {
    var _values = cormax === Infinity ? [cormin].concat(_toConsumableArray2(range2(0, tickCount - 1).map(function() {
      return Infinity;
    }))) : [].concat(_toConsumableArray2(range2(0, tickCount - 1).map(function() {
      return -Infinity;
    })), [cormax]);
    return min3 > max3 ? reverse(_values) : _values;
  }
  if (cormin === cormax) {
    return getTickOfSingleValue(cormin, tickCount, allowDecimals);
  }
  var _calculateStep = calculateStep(cormin, cormax, count, allowDecimals), step = _calculateStep.step, tickMin = _calculateStep.tickMin, tickMax = _calculateStep.tickMax;
  var values2 = arithmetic_default.rangeStep(tickMin, tickMax.add(new import_decimal2.default(0.1).mul(step)), step);
  return min3 > max3 ? reverse(values2) : values2;
}
function getTickValuesFn(_ref5) {
  var _ref6 = _slicedToArray5(_ref5, 2), min3 = _ref6[0], max3 = _ref6[1];
  var tickCount = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6;
  var allowDecimals = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  var count = Math.max(tickCount, 2);
  var _getValidInterval3 = getValidInterval([min3, max3]), _getValidInterval4 = _slicedToArray5(_getValidInterval3, 2), cormin = _getValidInterval4[0], cormax = _getValidInterval4[1];
  if (cormin === -Infinity || cormax === Infinity) {
    return [min3, max3];
  }
  if (cormin === cormax) {
    return getTickOfSingleValue(cormin, tickCount, allowDecimals);
  }
  var step = getFormatStep(new import_decimal2.default(cormax).sub(cormin).div(count - 1), allowDecimals, 0);
  var fn = compose(map2(function(n) {
    return new import_decimal2.default(cormin).add(new import_decimal2.default(n).mul(step)).toNumber();
  }), range2);
  var values2 = fn(0, count).filter(function(entry) {
    return entry >= cormin && entry <= cormax;
  });
  return min3 > max3 ? reverse(values2) : values2;
}
function getTickValuesFixedDomainFn(_ref7, tickCount) {
  var _ref8 = _slicedToArray5(_ref7, 2), min3 = _ref8[0], max3 = _ref8[1];
  var allowDecimals = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  var _getValidInterval5 = getValidInterval([min3, max3]), _getValidInterval6 = _slicedToArray5(_getValidInterval5, 2), cormin = _getValidInterval6[0], cormax = _getValidInterval6[1];
  if (cormin === -Infinity || cormax === Infinity) {
    return [min3, max3];
  }
  if (cormin === cormax) {
    return [cormin];
  }
  var count = Math.max(tickCount, 2);
  var step = getFormatStep(new import_decimal2.default(cormax).sub(cormin).div(count - 1), allowDecimals, 0);
  var values2 = [].concat(_toConsumableArray2(arithmetic_default.rangeStep(new import_decimal2.default(cormin), new import_decimal2.default(cormax).sub(new import_decimal2.default(0.99).mul(step)), step)), [cormax]);
  return min3 > max3 ? reverse(values2) : values2;
}
var getNiceTickValues = memoize(getNiceTickValuesFn);
var getTickValues = memoize(getTickValuesFn);
var getTickValuesFixedDomain = memoize(getTickValuesFixedDomainFn);

// node_modules/recharts/es6/cartesian/ErrorBar.js
var import_react15 = __toESM(require_react());
var _excluded8 = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];
function _extends8() {
  _extends8 = Object.assign ? Object.assign.bind() : function(target) {
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
  return _extends8.apply(this, arguments);
}
function _slicedToArray6(arr, i) {
  return _arrayWithHoles6(arr) || _iterableToArrayLimit6(arr, i) || _unsupportedIterableToArray7(arr, i) || _nonIterableRest6();
}
function _nonIterableRest6() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray7(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray7(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray7(o, minLen);
}
function _arrayLikeToArray7(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit6(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a2 = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t)
          return;
        f = false;
      } else
        for (; !(f = (e = i.call(t)).done) && (a2.push(e.value), a2.length !== l); f = true)
          ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u))
          return;
      } finally {
        if (o)
          throw n;
      }
    }
    return a2;
  }
}
function _arrayWithHoles6(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _objectWithoutProperties7(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose8(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose8(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function ErrorBar(props) {
  var offset = props.offset, layout = props.layout, width = props.width, dataKey = props.dataKey, data2 = props.data, dataPointFormatter = props.dataPointFormatter, xAxis = props.xAxis, yAxis = props.yAxis, others = _objectWithoutProperties7(props, _excluded8);
  var svgProps = filterProps(others, false);
  !!(props.direction === "x" && xAxis.type !== "number") ? true ? invariant(false, 'ErrorBar requires Axis type property to be "number".') : invariant(false) : void 0;
  var errorBars = data2.map(function(entry) {
    var _dataPointFormatter = dataPointFormatter(entry, dataKey), x2 = _dataPointFormatter.x, y2 = _dataPointFormatter.y, value = _dataPointFormatter.value, errorVal = _dataPointFormatter.errorVal;
    if (!errorVal) {
      return null;
    }
    var lineCoordinates = [];
    var lowBound, highBound;
    if (Array.isArray(errorVal)) {
      var _errorVal = _slicedToArray6(errorVal, 2);
      lowBound = _errorVal[0];
      highBound = _errorVal[1];
    } else {
      lowBound = highBound = errorVal;
    }
    if (layout === "vertical") {
      var scale = xAxis.scale;
      var yMid = y2 + offset;
      var yMin = yMid + width;
      var yMax = yMid - width;
      var xMin = scale(value - lowBound);
      var xMax = scale(value + highBound);
      lineCoordinates.push({
        x1: xMax,
        y1: yMin,
        x2: xMax,
        y2: yMax
      });
      lineCoordinates.push({
        x1: xMin,
        y1: yMid,
        x2: xMax,
        y2: yMid
      });
      lineCoordinates.push({
        x1: xMin,
        y1: yMin,
        x2: xMin,
        y2: yMax
      });
    } else if (layout === "horizontal") {
      var _scale = yAxis.scale;
      var xMid = x2 + offset;
      var _xMin = xMid - width;
      var _xMax = xMid + width;
      var _yMin = _scale(value - lowBound);
      var _yMax = _scale(value + highBound);
      lineCoordinates.push({
        x1: _xMin,
        y1: _yMax,
        x2: _xMax,
        y2: _yMax
      });
      lineCoordinates.push({
        x1: xMid,
        y1: _yMin,
        x2: xMid,
        y2: _yMax
      });
      lineCoordinates.push({
        x1: _xMin,
        y1: _yMin,
        x2: _xMax,
        y2: _yMin
      });
    }
    return /* @__PURE__ */ import_react15.default.createElement(Layer, _extends8({
      className: "recharts-errorBar",
      key: "bar-".concat(lineCoordinates.map(function(c2) {
        return "".concat(c2.x1, "-").concat(c2.x2, "-").concat(c2.y1, "-").concat(c2.y2);
      }))
    }, svgProps), lineCoordinates.map(function(coordinates) {
      return /* @__PURE__ */ import_react15.default.createElement("line", _extends8({}, coordinates, {
        key: "line-".concat(coordinates.x1, "-").concat(coordinates.x2, "-").concat(coordinates.y1, "-").concat(coordinates.y2)
      }));
    }));
  });
  return /* @__PURE__ */ import_react15.default.createElement(Layer, {
    className: "recharts-errorBars"
  }, errorBars);
}
ErrorBar.defaultProps = {
  stroke: "black",
  strokeWidth: 1.5,
  width: 5,
  offset: 0,
  layout: "horizontal"
};
ErrorBar.displayName = "ErrorBar";

// node_modules/recharts/es6/util/getLegendProps.js
function _typeof12(o) {
  "@babel/helpers - typeof";
  return _typeof12 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof12(o);
}
function ownKeys9(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread9(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys9(Object(t), true).forEach(function(r2) {
      _defineProperty10(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys9(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty10(obj, key, value) {
  key = _toPropertyKey11(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey11(t) {
  var i = _toPrimitive11(t, "string");
  return "symbol" == _typeof12(i) ? i : String(i);
}
function _toPrimitive11(t, r) {
  if ("object" != _typeof12(t) || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof12(i))
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var getLegendProps = function getLegendProps2(_ref) {
  var children = _ref.children, formattedGraphicalItems = _ref.formattedGraphicalItems, legendWidth = _ref.legendWidth, legendContent = _ref.legendContent;
  var legendItem = findChildByType(children, Legend);
  if (!legendItem) {
    return null;
  }
  var legendData;
  if (legendItem.props && legendItem.props.payload) {
    legendData = legendItem.props && legendItem.props.payload;
  } else if (legendContent === "children") {
    legendData = (formattedGraphicalItems || []).reduce(function(result, _ref2) {
      var item = _ref2.item, props = _ref2.props;
      var data2 = props.sectors || props.data || [];
      return result.concat(data2.map(function(entry) {
        return {
          type: legendItem.props.iconType || item.props.legendType,
          value: entry.name,
          color: entry.fill,
          payload: entry
        };
      }));
    }, []);
  } else {
    legendData = (formattedGraphicalItems || []).map(function(_ref3) {
      var item = _ref3.item;
      var _item$props = item.props, dataKey = _item$props.dataKey, name = _item$props.name, legendType = _item$props.legendType, hide = _item$props.hide;
      return {
        inactive: hide,
        dataKey,
        type: legendItem.props.iconType || legendType || "square",
        color: getMainColorOfGraphicItem(item),
        value: name || dataKey,
        // @ts-expect-error property strokeDasharray is required in Payload but optional in props
        payload: item.props
      };
    });
  }
  return _objectSpread9(_objectSpread9(_objectSpread9({}, legendItem.props), Legend.getWithHeight(legendItem, legendWidth)), {}, {
    payload: legendData,
    item: legendItem
  });
};

// node_modules/recharts/es6/util/ChartUtils.js
function _typeof13(o) {
  "@babel/helpers - typeof";
  return _typeof13 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof13(o);
}
function ownKeys10(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread10(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys10(Object(t), true).forEach(function(r2) {
      _defineProperty11(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys10(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty11(obj, key, value) {
  key = _toPropertyKey12(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey12(t) {
  var i = _toPrimitive12(t, "string");
  return "symbol" == _typeof13(i) ? i : String(i);
}
function _toPrimitive12(t, r) {
  if ("object" != _typeof13(t) || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof13(i))
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toConsumableArray3(arr) {
  return _arrayWithoutHoles3(arr) || _iterableToArray3(arr) || _unsupportedIterableToArray8(arr) || _nonIterableSpread3();
}
function _nonIterableSpread3() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray8(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray8(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray8(o, minLen);
}
function _iterableToArray3(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles3(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray8(arr);
}
function _arrayLikeToArray8(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function getValueByDataKey(obj, dataKey, defaultValue) {
  if ((0, import_isNil4.default)(obj) || (0, import_isNil4.default)(dataKey)) {
    return defaultValue;
  }
  if (isNumOrStr(dataKey)) {
    return (0, import_get3.default)(obj, dataKey, defaultValue);
  }
  if ((0, import_isFunction4.default)(dataKey)) {
    return dataKey(obj);
  }
  return defaultValue;
}
function getDomainOfDataByKey(data2, key, type, filterNil) {
  var flattenData = (0, import_flatMap.default)(data2, function(entry) {
    return getValueByDataKey(entry, key);
  });
  if (type === "number") {
    var domain = flattenData.filter(function(entry) {
      return isNumber(entry) || parseFloat(entry);
    });
    return domain.length ? [(0, import_min2.default)(domain), (0, import_max2.default)(domain)] : [Infinity, -Infinity];
  }
  var validateData = filterNil ? flattenData.filter(function(entry) {
    return !(0, import_isNil4.default)(entry);
  }) : flattenData;
  return validateData.map(function(entry) {
    return isNumOrStr(entry) || entry instanceof Date ? entry : "";
  });
}
var calculateActiveTickIndex = function calculateActiveTickIndex2(coordinate) {
  var _ticks$length;
  var ticks2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  var unsortedTicks = arguments.length > 2 ? arguments[2] : void 0;
  var axis = arguments.length > 3 ? arguments[3] : void 0;
  var index = -1;
  var len = (_ticks$length = ticks2 === null || ticks2 === void 0 ? void 0 : ticks2.length) !== null && _ticks$length !== void 0 ? _ticks$length : 0;
  if (len <= 1) {
    return 0;
  }
  if (axis && axis.axisType === "angleAxis" && Math.abs(Math.abs(axis.range[1] - axis.range[0]) - 360) <= 1e-6) {
    var range6 = axis.range;
    for (var i = 0; i < len; i++) {
      var before = i > 0 ? unsortedTicks[i - 1].coordinate : unsortedTicks[len - 1].coordinate;
      var cur = unsortedTicks[i].coordinate;
      var after = i >= len - 1 ? unsortedTicks[0].coordinate : unsortedTicks[i + 1].coordinate;
      var sameDirectionCoord = void 0;
      if (mathSign(cur - before) !== mathSign(after - cur)) {
        var diffInterval = [];
        if (mathSign(after - cur) === mathSign(range6[1] - range6[0])) {
          sameDirectionCoord = after;
          var curInRange = cur + range6[1] - range6[0];
          diffInterval[0] = Math.min(curInRange, (curInRange + before) / 2);
          diffInterval[1] = Math.max(curInRange, (curInRange + before) / 2);
        } else {
          sameDirectionCoord = before;
          var afterInRange = after + range6[1] - range6[0];
          diffInterval[0] = Math.min(cur, (afterInRange + cur) / 2);
          diffInterval[1] = Math.max(cur, (afterInRange + cur) / 2);
        }
        var sameInterval = [Math.min(cur, (sameDirectionCoord + cur) / 2), Math.max(cur, (sameDirectionCoord + cur) / 2)];
        if (coordinate > sameInterval[0] && coordinate <= sameInterval[1] || coordinate >= diffInterval[0] && coordinate <= diffInterval[1]) {
          index = unsortedTicks[i].index;
          break;
        }
      } else {
        var minValue = Math.min(before, after);
        var maxValue = Math.max(before, after);
        if (coordinate > (minValue + cur) / 2 && coordinate <= (maxValue + cur) / 2) {
          index = unsortedTicks[i].index;
          break;
        }
      }
    }
  } else {
    for (var _i = 0; _i < len; _i++) {
      if (_i === 0 && coordinate <= (ticks2[_i].coordinate + ticks2[_i + 1].coordinate) / 2 || _i > 0 && _i < len - 1 && coordinate > (ticks2[_i].coordinate + ticks2[_i - 1].coordinate) / 2 && coordinate <= (ticks2[_i].coordinate + ticks2[_i + 1].coordinate) / 2 || _i === len - 1 && coordinate > (ticks2[_i].coordinate + ticks2[_i - 1].coordinate) / 2) {
        index = ticks2[_i].index;
        break;
      }
    }
  }
  return index;
};
var getMainColorOfGraphicItem = function getMainColorOfGraphicItem2(item) {
  var _ref = item, displayName = _ref.type.displayName;
  var _item$props = item.props, stroke = _item$props.stroke, fill = _item$props.fill;
  var result;
  switch (displayName) {
    case "Line":
      result = stroke;
      break;
    case "Area":
    case "Radar":
      result = stroke && stroke !== "none" ? stroke : fill;
      break;
    default:
      result = fill;
      break;
  }
  return result;
};
var getBarSizeList = function getBarSizeList2(_ref2) {
  var globalSize = _ref2.barSize, _ref2$stackGroups = _ref2.stackGroups, stackGroups = _ref2$stackGroups === void 0 ? {} : _ref2$stackGroups;
  if (!stackGroups) {
    return {};
  }
  var result = {};
  var numericAxisIds = Object.keys(stackGroups);
  for (var i = 0, len = numericAxisIds.length; i < len; i++) {
    var sgs = stackGroups[numericAxisIds[i]].stackGroups;
    var stackIds = Object.keys(sgs);
    for (var j = 0, sLen = stackIds.length; j < sLen; j++) {
      var _sgs$stackIds$j = sgs[stackIds[j]], items = _sgs$stackIds$j.items, cateAxisId = _sgs$stackIds$j.cateAxisId;
      var barItems = items.filter(function(item) {
        return getDisplayName(item.type).indexOf("Bar") >= 0;
      });
      if (barItems && barItems.length) {
        var selfSize = barItems[0].props.barSize;
        var cateId = barItems[0].props[cateAxisId];
        if (!result[cateId]) {
          result[cateId] = [];
        }
        result[cateId].push({
          item: barItems[0],
          stackList: barItems.slice(1),
          barSize: (0, import_isNil4.default)(selfSize) ? globalSize : selfSize
        });
      }
    }
  }
  return result;
};
var getBarPosition = function getBarPosition2(_ref3) {
  var barGap = _ref3.barGap, barCategoryGap = _ref3.barCategoryGap, bandSize = _ref3.bandSize, _ref3$sizeList = _ref3.sizeList, sizeList = _ref3$sizeList === void 0 ? [] : _ref3$sizeList, maxBarSize = _ref3.maxBarSize;
  var len = sizeList.length;
  if (len < 1)
    return null;
  var realBarGap = getPercentValue(barGap, bandSize, 0, true);
  var result;
  var initialValue = [];
  if (sizeList[0].barSize === +sizeList[0].barSize) {
    var useFull = false;
    var fullBarSize = bandSize / len;
    var sum = sizeList.reduce(function(res, entry) {
      return res + entry.barSize || 0;
    }, 0);
    sum += (len - 1) * realBarGap;
    if (sum >= bandSize) {
      sum -= (len - 1) * realBarGap;
      realBarGap = 0;
    }
    if (sum >= bandSize && fullBarSize > 0) {
      useFull = true;
      fullBarSize *= 0.9;
      sum = len * fullBarSize;
    }
    var offset = (bandSize - sum) / 2 >> 0;
    var prev = {
      offset: offset - realBarGap,
      size: 0
    };
    result = sizeList.reduce(function(res, entry) {
      var newPosition = {
        item: entry.item,
        position: {
          offset: prev.offset + prev.size + realBarGap,
          // @ts-expect-error the type check above does not check for type number explicitly
          size: useFull ? fullBarSize : entry.barSize
        }
      };
      var newRes = [].concat(_toConsumableArray3(res), [newPosition]);
      prev = newRes[newRes.length - 1].position;
      if (entry.stackList && entry.stackList.length) {
        entry.stackList.forEach(function(item) {
          newRes.push({
            item,
            position: prev
          });
        });
      }
      return newRes;
    }, initialValue);
  } else {
    var _offset = getPercentValue(barCategoryGap, bandSize, 0, true);
    if (bandSize - 2 * _offset - (len - 1) * realBarGap <= 0) {
      realBarGap = 0;
    }
    var originalSize = (bandSize - 2 * _offset - (len - 1) * realBarGap) / len;
    if (originalSize > 1) {
      originalSize >>= 0;
    }
    var size = maxBarSize === +maxBarSize ? Math.min(originalSize, maxBarSize) : originalSize;
    result = sizeList.reduce(function(res, entry, i) {
      var newRes = [].concat(_toConsumableArray3(res), [{
        item: entry.item,
        position: {
          offset: _offset + (originalSize + realBarGap) * i + (originalSize - size) / 2,
          size
        }
      }]);
      if (entry.stackList && entry.stackList.length) {
        entry.stackList.forEach(function(item) {
          newRes.push({
            item,
            position: newRes[newRes.length - 1].position
          });
        });
      }
      return newRes;
    }, initialValue);
  }
  return result;
};
var appendOffsetOfLegend = function appendOffsetOfLegend2(offset, _unused, props, legendBox) {
  var children = props.children, width = props.width, margin = props.margin;
  var legendWidth = width - (margin.left || 0) - (margin.right || 0);
  var legendProps = getLegendProps({
    children,
    legendWidth
  });
  if (legendProps) {
    var _ref4 = legendBox || {}, boxWidth = _ref4.width, boxHeight = _ref4.height;
    var align = legendProps.align, verticalAlign = legendProps.verticalAlign, layout = legendProps.layout;
    if ((layout === "vertical" || layout === "horizontal" && verticalAlign === "middle") && align !== "center" && isNumber(offset[align])) {
      return _objectSpread10(_objectSpread10({}, offset), {}, _defineProperty11({}, align, offset[align] + (boxWidth || 0)));
    }
    if ((layout === "horizontal" || layout === "vertical" && align === "center") && verticalAlign !== "middle" && isNumber(offset[verticalAlign])) {
      return _objectSpread10(_objectSpread10({}, offset), {}, _defineProperty11({}, verticalAlign, offset[verticalAlign] + (boxHeight || 0)));
    }
  }
  return offset;
};
var isErrorBarRelevantForAxis = function isErrorBarRelevantForAxis2(layout, axisType, direction) {
  if ((0, import_isNil4.default)(axisType)) {
    return true;
  }
  if (layout === "horizontal") {
    return axisType === "yAxis";
  }
  if (layout === "vertical") {
    return axisType === "xAxis";
  }
  if (direction === "x") {
    return axisType === "xAxis";
  }
  if (direction === "y") {
    return axisType === "yAxis";
  }
  return true;
};
var getDomainOfErrorBars = function getDomainOfErrorBars2(data2, item, dataKey, layout, axisType) {
  var children = item.props.children;
  var errorBars = findAllByType(children, ErrorBar).filter(function(errorBarChild) {
    return isErrorBarRelevantForAxis(layout, axisType, errorBarChild.props.direction);
  });
  if (errorBars && errorBars.length) {
    var keys2 = errorBars.map(function(errorBarChild) {
      return errorBarChild.props.dataKey;
    });
    return data2.reduce(function(result, entry) {
      var entryValue = getValueByDataKey(entry, dataKey, 0);
      var mainValue = Array.isArray(entryValue) ? [(0, import_min2.default)(entryValue), (0, import_max2.default)(entryValue)] : [entryValue, entryValue];
      var errorDomain = keys2.reduce(function(prevErrorArr, k2) {
        var errorValue = getValueByDataKey(entry, k2, 0);
        var lowerValue = mainValue[0] - Math.abs(Array.isArray(errorValue) ? errorValue[0] : errorValue);
        var upperValue = mainValue[1] + Math.abs(Array.isArray(errorValue) ? errorValue[1] : errorValue);
        return [Math.min(lowerValue, prevErrorArr[0]), Math.max(upperValue, prevErrorArr[1])];
      }, [Infinity, -Infinity]);
      return [Math.min(errorDomain[0], result[0]), Math.max(errorDomain[1], result[1])];
    }, [Infinity, -Infinity]);
  }
  return null;
};
var parseErrorBarsOfAxis = function parseErrorBarsOfAxis2(data2, items, dataKey, axisType, layout) {
  var domains = items.map(function(item) {
    return getDomainOfErrorBars(data2, item, dataKey, layout, axisType);
  }).filter(function(entry) {
    return !(0, import_isNil4.default)(entry);
  });
  if (domains && domains.length) {
    return domains.reduce(function(result, entry) {
      return [Math.min(result[0], entry[0]), Math.max(result[1], entry[1])];
    }, [Infinity, -Infinity]);
  }
  return null;
};
var getDomainOfItemsWithSameAxis = function getDomainOfItemsWithSameAxis2(data2, items, type, layout, filterNil) {
  var domains = items.map(function(item) {
    var dataKey = item.props.dataKey;
    if (type === "number" && dataKey) {
      return getDomainOfErrorBars(data2, item, dataKey, layout) || getDomainOfDataByKey(data2, dataKey, type, filterNil);
    }
    return getDomainOfDataByKey(data2, dataKey, type, filterNil);
  });
  if (type === "number") {
    return domains.reduce(
      // @ts-expect-error if (type === number) means that the domain is numerical type
      // - but this link is missing in the type definition
      function(result, entry) {
        return [Math.min(result[0], entry[0]), Math.max(result[1], entry[1])];
      },
      [Infinity, -Infinity]
    );
  }
  var tag = {};
  return domains.reduce(function(result, entry) {
    for (var i = 0, len = entry.length; i < len; i++) {
      if (!tag[entry[i]]) {
        tag[entry[i]] = true;
        result.push(entry[i]);
      }
    }
    return result;
  }, []);
};
var isCategoricalAxis = function isCategoricalAxis2(layout, axisType) {
  return layout === "horizontal" && axisType === "xAxis" || layout === "vertical" && axisType === "yAxis" || layout === "centric" && axisType === "angleAxis" || layout === "radial" && axisType === "radiusAxis";
};
var getTicksOfAxis = function getTicksOfAxis2(axis, isGrid, isAll) {
  if (!axis)
    return null;
  var scale = axis.scale;
  var duplicateDomain = axis.duplicateDomain, type = axis.type, range6 = axis.range;
  var offsetForBand = axis.realScaleType === "scaleBand" ? scale.bandwidth() / 2 : 2;
  var offset = (isGrid || isAll) && type === "category" && scale.bandwidth ? scale.bandwidth() / offsetForBand : 0;
  offset = axis.axisType === "angleAxis" && (range6 === null || range6 === void 0 ? void 0 : range6.length) >= 2 ? mathSign(range6[0] - range6[1]) * 2 * offset : offset;
  if (isGrid && (axis.ticks || axis.niceTicks)) {
    var result = (axis.ticks || axis.niceTicks).map(function(entry) {
      var scaleContent = duplicateDomain ? duplicateDomain.indexOf(entry) : entry;
      return {
        // If the scaleContent is not a number, the coordinate will be NaN.
        // That could be the case for example with a PointScale and a string as domain.
        coordinate: scale(scaleContent) + offset,
        value: entry,
        offset
      };
    });
    return result.filter(function(row) {
      return !(0, import_isNaN2.default)(row.coordinate);
    });
  }
  if (axis.isCategorical && axis.categoricalDomain) {
    return axis.categoricalDomain.map(function(entry, index) {
      return {
        coordinate: scale(entry) + offset,
        value: entry,
        index,
        offset
      };
    });
  }
  if (scale.ticks && !isAll) {
    return scale.ticks(axis.tickCount).map(function(entry) {
      return {
        coordinate: scale(entry) + offset,
        value: entry,
        offset
      };
    });
  }
  return scale.domain().map(function(entry, index) {
    return {
      coordinate: scale(entry) + offset,
      value: duplicateDomain ? duplicateDomain[entry] : entry,
      index,
      offset
    };
  });
};
var handlerWeakMap = /* @__PURE__ */ new WeakMap();
var combineEventHandlers = function combineEventHandlers2(defaultHandler, childHandler) {
  if (typeof childHandler !== "function") {
    return defaultHandler;
  }
  if (!handlerWeakMap.has(defaultHandler)) {
    handlerWeakMap.set(defaultHandler, /* @__PURE__ */ new WeakMap());
  }
  var childWeakMap = handlerWeakMap.get(defaultHandler);
  if (childWeakMap.has(childHandler)) {
    return childWeakMap.get(childHandler);
  }
  var combineHandler = function combineHandler2() {
    defaultHandler.apply(void 0, arguments);
    childHandler.apply(void 0, arguments);
  };
  childWeakMap.set(childHandler, combineHandler);
  return combineHandler;
};
var parseScale = function parseScale2(axis, chartType, hasBar) {
  var scale = axis.scale, type = axis.type, layout = axis.layout, axisType = axis.axisType;
  if (scale === "auto") {
    if (layout === "radial" && axisType === "radiusAxis") {
      return {
        scale: band(),
        realScaleType: "band"
      };
    }
    if (layout === "radial" && axisType === "angleAxis") {
      return {
        scale: linear2(),
        realScaleType: "linear"
      };
    }
    if (type === "category" && chartType && (chartType.indexOf("LineChart") >= 0 || chartType.indexOf("AreaChart") >= 0 || chartType.indexOf("ComposedChart") >= 0 && !hasBar)) {
      return {
        scale: point3(),
        realScaleType: "point"
      };
    }
    if (type === "category") {
      return {
        scale: band(),
        realScaleType: "band"
      };
    }
    return {
      scale: linear2(),
      realScaleType: "linear"
    };
  }
  if ((0, import_isString3.default)(scale)) {
    var name = "scale".concat((0, import_upperFirst2.default)(scale));
    return {
      scale: (d3_scale_exports[name] || point3)(),
      realScaleType: d3_scale_exports[name] ? name : "point"
    };
  }
  return (0, import_isFunction4.default)(scale) ? {
    scale
  } : {
    scale: point3(),
    realScaleType: "point"
  };
};
var EPS2 = 1e-4;
var checkDomainOfScale = function checkDomainOfScale2(scale) {
  var domain = scale.domain();
  if (!domain || domain.length <= 2) {
    return;
  }
  var len = domain.length;
  var range6 = scale.range();
  var minValue = Math.min(range6[0], range6[1]) - EPS2;
  var maxValue = Math.max(range6[0], range6[1]) + EPS2;
  var first = scale(domain[0]);
  var last2 = scale(domain[len - 1]);
  if (first < minValue || first > maxValue || last2 < minValue || last2 > maxValue) {
    scale.domain([domain[0], domain[len - 1]]);
  }
};
var findPositionOfBar = function findPositionOfBar2(barPosition, child) {
  if (!barPosition) {
    return null;
  }
  for (var i = 0, len = barPosition.length; i < len; i++) {
    if (barPosition[i].item === child) {
      return barPosition[i].position;
    }
  }
  return null;
};
var truncateByDomain = function truncateByDomain2(value, domain) {
  if (!domain || domain.length !== 2 || !isNumber(domain[0]) || !isNumber(domain[1])) {
    return value;
  }
  var minValue = Math.min(domain[0], domain[1]);
  var maxValue = Math.max(domain[0], domain[1]);
  var result = [value[0], value[1]];
  if (!isNumber(value[0]) || value[0] < minValue) {
    result[0] = minValue;
  }
  if (!isNumber(value[1]) || value[1] > maxValue) {
    result[1] = maxValue;
  }
  if (result[0] > maxValue) {
    result[0] = maxValue;
  }
  if (result[1] < minValue) {
    result[1] = minValue;
  }
  return result;
};
var offsetSign = function offsetSign2(series) {
  var n = series.length;
  if (n <= 0) {
    return;
  }
  for (var j = 0, m = series[0].length; j < m; ++j) {
    var positive = 0;
    var negative = 0;
    for (var i = 0; i < n; ++i) {
      var value = (0, import_isNaN2.default)(series[i][j][1]) ? series[i][j][0] : series[i][j][1];
      if (value >= 0) {
        series[i][j][0] = positive;
        series[i][j][1] = positive + value;
        positive = series[i][j][1];
      } else {
        series[i][j][0] = negative;
        series[i][j][1] = negative + value;
        negative = series[i][j][1];
      }
    }
  }
};
var offsetPositive = function offsetPositive2(series) {
  var n = series.length;
  if (n <= 0) {
    return;
  }
  for (var j = 0, m = series[0].length; j < m; ++j) {
    var positive = 0;
    for (var i = 0; i < n; ++i) {
      var value = (0, import_isNaN2.default)(series[i][j][1]) ? series[i][j][0] : series[i][j][1];
      if (value >= 0) {
        series[i][j][0] = positive;
        series[i][j][1] = positive + value;
        positive = series[i][j][1];
      } else {
        series[i][j][0] = 0;
        series[i][j][1] = 0;
      }
    }
  }
};
var STACK_OFFSET_MAP = {
  sign: offsetSign,
  // @ts-expect-error definitelytyped types are incorrect
  expand: expand_default,
  // @ts-expect-error definitelytyped types are incorrect
  none: none_default,
  // @ts-expect-error definitelytyped types are incorrect
  silhouette: silhouette_default,
  // @ts-expect-error definitelytyped types are incorrect
  wiggle: wiggle_default,
  positive: offsetPositive
};
var getStackedData = function getStackedData2(data2, stackItems, offsetType) {
  var dataKeys = stackItems.map(function(item) {
    return item.props.dataKey;
  });
  var offsetAccessor = STACK_OFFSET_MAP[offsetType];
  var stack = stack_default().keys(dataKeys).value(function(d, key) {
    return +getValueByDataKey(d, key, 0);
  }).order(none_default2).offset(offsetAccessor);
  return stack(data2);
};
var getStackGroupsByAxisId = function getStackGroupsByAxisId2(data2, _items, numericAxisId, cateAxisId, offsetType, reverseStackOrder) {
  if (!data2) {
    return null;
  }
  var items = reverseStackOrder ? _items.reverse() : _items;
  var parentStackGroupsInitialValue = {};
  var stackGroups = items.reduce(function(result, item) {
    var _item$props2 = item.props, stackId = _item$props2.stackId, hide = _item$props2.hide;
    if (hide) {
      return result;
    }
    var axisId = item.props[numericAxisId];
    var parentGroup = result[axisId] || {
      hasStack: false,
      stackGroups: {}
    };
    if (isNumOrStr(stackId)) {
      var childGroup = parentGroup.stackGroups[stackId] || {
        numericAxisId,
        cateAxisId,
        items: []
      };
      childGroup.items.push(item);
      parentGroup.hasStack = true;
      parentGroup.stackGroups[stackId] = childGroup;
    } else {
      parentGroup.stackGroups[uniqueId("_stackId_")] = {
        numericAxisId,
        cateAxisId,
        items: [item]
      };
    }
    return _objectSpread10(_objectSpread10({}, result), {}, _defineProperty11({}, axisId, parentGroup));
  }, parentStackGroupsInitialValue);
  var axisStackGroupsInitialValue = {};
  return Object.keys(stackGroups).reduce(function(result, axisId) {
    var group = stackGroups[axisId];
    if (group.hasStack) {
      var stackGroupsInitialValue = {};
      group.stackGroups = Object.keys(group.stackGroups).reduce(function(res, stackId) {
        var g = group.stackGroups[stackId];
        return _objectSpread10(_objectSpread10({}, res), {}, _defineProperty11({}, stackId, {
          numericAxisId,
          cateAxisId,
          items: g.items,
          stackedData: getStackedData(data2, g.items, offsetType)
        }));
      }, stackGroupsInitialValue);
    }
    return _objectSpread10(_objectSpread10({}, result), {}, _defineProperty11({}, axisId, group));
  }, axisStackGroupsInitialValue);
};
var getTicksOfScale = function getTicksOfScale2(scale, opts) {
  var realScaleType = opts.realScaleType, type = opts.type, tickCount = opts.tickCount, originalDomain = opts.originalDomain, allowDecimals = opts.allowDecimals;
  var scaleType = realScaleType || opts.scale;
  if (scaleType !== "auto" && scaleType !== "linear") {
    return null;
  }
  if (tickCount && type === "number" && originalDomain && (originalDomain[0] === "auto" || originalDomain[1] === "auto")) {
    var domain = scale.domain();
    if (!domain.length) {
      return null;
    }
    var tickValues = getNiceTickValues(domain, tickCount, allowDecimals);
    scale.domain([(0, import_min2.default)(tickValues), (0, import_max2.default)(tickValues)]);
    return {
      niceTicks: tickValues
    };
  }
  if (tickCount && type === "number") {
    var _domain = scale.domain();
    var _tickValues = getTickValuesFixedDomain(_domain, tickCount, allowDecimals);
    return {
      niceTicks: _tickValues
    };
  }
  return null;
};
var getCateCoordinateOfBar = function getCateCoordinateOfBar2(_ref6) {
  var axis = _ref6.axis, ticks2 = _ref6.ticks, offset = _ref6.offset, bandSize = _ref6.bandSize, entry = _ref6.entry, index = _ref6.index;
  if (axis.type === "category") {
    return ticks2[index] ? ticks2[index].coordinate + offset : null;
  }
  var value = getValueByDataKey(entry, axis.dataKey, axis.domain[index]);
  return !(0, import_isNil4.default)(value) ? axis.scale(value) - bandSize / 2 + offset : null;
};
var getBaseValueOfBar = function getBaseValueOfBar2(_ref7) {
  var numericAxis = _ref7.numericAxis;
  var domain = numericAxis.scale.domain();
  if (numericAxis.type === "number") {
    var minValue = Math.min(domain[0], domain[1]);
    var maxValue = Math.max(domain[0], domain[1]);
    if (minValue <= 0 && maxValue >= 0) {
      return 0;
    }
    if (maxValue < 0) {
      return maxValue;
    }
    return minValue;
  }
  return domain[0];
};
var getStackedDataOfItem = function getStackedDataOfItem2(item, stackGroups) {
  var stackId = item.props.stackId;
  if (isNumOrStr(stackId)) {
    var group = stackGroups[stackId];
    if (group) {
      var itemIndex = group.items.indexOf(item);
      return itemIndex >= 0 ? group.stackedData[itemIndex] : null;
    }
  }
  return null;
};
var getDomainOfSingle = function getDomainOfSingle2(data2) {
  return data2.reduce(function(result, entry) {
    return [(0, import_min2.default)(entry.concat([result[0]]).filter(isNumber)), (0, import_max2.default)(entry.concat([result[1]]).filter(isNumber))];
  }, [Infinity, -Infinity]);
};
var getDomainOfStackGroups = function getDomainOfStackGroups2(stackGroups, startIndex, endIndex) {
  return Object.keys(stackGroups).reduce(function(result, stackId) {
    var group = stackGroups[stackId];
    var stackedData = group.stackedData;
    var domain = stackedData.reduce(function(res, entry) {
      var s2 = getDomainOfSingle(entry.slice(startIndex, endIndex + 1));
      return [Math.min(res[0], s2[0]), Math.max(res[1], s2[1])];
    }, [Infinity, -Infinity]);
    return [Math.min(domain[0], result[0]), Math.max(domain[1], result[1])];
  }, [Infinity, -Infinity]).map(function(result) {
    return result === Infinity || result === -Infinity ? 0 : result;
  });
};
var MIN_VALUE_REG = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/;
var MAX_VALUE_REG = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/;
var parseSpecifiedDomain = function parseSpecifiedDomain2(specifiedDomain, dataDomain, allowDataOverflow) {
  if ((0, import_isFunction4.default)(specifiedDomain)) {
    return specifiedDomain(dataDomain, allowDataOverflow);
  }
  if (!Array.isArray(specifiedDomain)) {
    return dataDomain;
  }
  var domain = [];
  if (isNumber(specifiedDomain[0])) {
    domain[0] = allowDataOverflow ? specifiedDomain[0] : Math.min(specifiedDomain[0], dataDomain[0]);
  } else if (MIN_VALUE_REG.test(specifiedDomain[0])) {
    var value = +MIN_VALUE_REG.exec(specifiedDomain[0])[1];
    domain[0] = dataDomain[0] - value;
  } else if ((0, import_isFunction4.default)(specifiedDomain[0])) {
    domain[0] = specifiedDomain[0](dataDomain[0]);
  } else {
    domain[0] = dataDomain[0];
  }
  if (isNumber(specifiedDomain[1])) {
    domain[1] = allowDataOverflow ? specifiedDomain[1] : Math.max(specifiedDomain[1], dataDomain[1]);
  } else if (MAX_VALUE_REG.test(specifiedDomain[1])) {
    var _value = +MAX_VALUE_REG.exec(specifiedDomain[1])[1];
    domain[1] = dataDomain[1] + _value;
  } else if ((0, import_isFunction4.default)(specifiedDomain[1])) {
    domain[1] = specifiedDomain[1](dataDomain[1]);
  } else {
    domain[1] = dataDomain[1];
  }
  return domain;
};
var getBandSizeOfAxis = function getBandSizeOfAxis2(axis, ticks2, isBar) {
  if (axis && axis.scale && axis.scale.bandwidth) {
    var bandWidth = axis.scale.bandwidth();
    if (!isBar || bandWidth > 0) {
      return bandWidth;
    }
  }
  if (axis && ticks2 && ticks2.length >= 2) {
    var orderedTicks = (0, import_sortBy2.default)(ticks2, function(o) {
      return o.coordinate;
    });
    var bandSize = Infinity;
    for (var i = 1, len = orderedTicks.length; i < len; i++) {
      var cur = orderedTicks[i];
      var prev = orderedTicks[i - 1];
      bandSize = Math.min((cur.coordinate || 0) - (prev.coordinate || 0), bandSize);
    }
    return bandSize === Infinity ? 0 : bandSize;
  }
  return isBar ? void 0 : 0;
};
var parseDomainOfCategoryAxis = function parseDomainOfCategoryAxis2(specifiedDomain, calculatedDomain, axisChild) {
  if (!specifiedDomain || !specifiedDomain.length) {
    return calculatedDomain;
  }
  if ((0, import_isEqual.default)(specifiedDomain, (0, import_get3.default)(axisChild, "type.defaultProps.domain"))) {
    return calculatedDomain;
  }
  return specifiedDomain;
};
var getTooltipItem = function getTooltipItem2(graphicalItem, payload) {
  var _graphicalItem$props = graphicalItem.props, dataKey = _graphicalItem$props.dataKey, name = _graphicalItem$props.name, unit2 = _graphicalItem$props.unit, formatter = _graphicalItem$props.formatter, tooltipType = _graphicalItem$props.tooltipType, chartType = _graphicalItem$props.chartType, hide = _graphicalItem$props.hide;
  return _objectSpread10(_objectSpread10({}, filterProps(graphicalItem, false)), {}, {
    dataKey,
    unit: unit2,
    formatter,
    name: name || dataKey,
    color: getMainColorOfGraphicItem(graphicalItem),
    value: getValueByDataKey(payload, dataKey),
    type: tooltipType,
    payload,
    chartType,
    hide
  });
};

// node_modules/recharts/es6/util/PolarUtils.js
function _typeof14(o) {
  "@babel/helpers - typeof";
  return _typeof14 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof14(o);
}
function ownKeys11(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread11(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys11(Object(t), true).forEach(function(r2) {
      _defineProperty12(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys11(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty12(obj, key, value) {
  key = _toPropertyKey13(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey13(t) {
  var i = _toPrimitive13(t, "string");
  return "symbol" == _typeof14(i) ? i : String(i);
}
function _toPrimitive13(t, r) {
  if ("object" != _typeof14(t) || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof14(i))
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var RADIAN2 = Math.PI / 180;
var radianToDegree = function radianToDegree2(angleInRadian) {
  return angleInRadian * 180 / Math.PI;
};
var polarToCartesian = function polarToCartesian2(cx, cy, radius, angle) {
  return {
    x: cx + Math.cos(-RADIAN2 * angle) * radius,
    y: cy + Math.sin(-RADIAN2 * angle) * radius
  };
};
var distanceBetweenPoints = function distanceBetweenPoints2(point4, anotherPoint) {
  var x1 = point4.x, y1 = point4.y;
  var x2 = anotherPoint.x, y2 = anotherPoint.y;
  return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
};
var getAngleOfPoint = function getAngleOfPoint2(_ref, _ref2) {
  var x2 = _ref.x, y2 = _ref.y;
  var cx = _ref2.cx, cy = _ref2.cy;
  var radius = distanceBetweenPoints({
    x: x2,
    y: y2
  }, {
    x: cx,
    y: cy
  });
  if (radius <= 0) {
    return {
      radius
    };
  }
  var cos2 = (x2 - cx) / radius;
  var angleInRadian = Math.acos(cos2);
  if (y2 > cy) {
    angleInRadian = 2 * Math.PI - angleInRadian;
  }
  return {
    radius,
    angle: radianToDegree(angleInRadian),
    angleInRadian
  };
};
var formatAngleOfSector = function formatAngleOfSector2(_ref3) {
  var startAngle = _ref3.startAngle, endAngle = _ref3.endAngle;
  var startCnt = Math.floor(startAngle / 360);
  var endCnt = Math.floor(endAngle / 360);
  var min3 = Math.min(startCnt, endCnt);
  return {
    startAngle: startAngle - min3 * 360,
    endAngle: endAngle - min3 * 360
  };
};
var reverseFormatAngleOfSetor = function reverseFormatAngleOfSetor2(angle, _ref4) {
  var startAngle = _ref4.startAngle, endAngle = _ref4.endAngle;
  var startCnt = Math.floor(startAngle / 360);
  var endCnt = Math.floor(endAngle / 360);
  var min3 = Math.min(startCnt, endCnt);
  return angle + min3 * 360;
};
var inRangeOfSector = function inRangeOfSector2(_ref5, sector) {
  var x2 = _ref5.x, y2 = _ref5.y;
  var _getAngleOfPoint = getAngleOfPoint({
    x: x2,
    y: y2
  }, sector), radius = _getAngleOfPoint.radius, angle = _getAngleOfPoint.angle;
  var innerRadius = sector.innerRadius, outerRadius = sector.outerRadius;
  if (radius < innerRadius || radius > outerRadius) {
    return false;
  }
  if (radius === 0) {
    return true;
  }
  var _formatAngleOfSector = formatAngleOfSector(sector), startAngle = _formatAngleOfSector.startAngle, endAngle = _formatAngleOfSector.endAngle;
  var formatAngle = angle;
  var inRange;
  if (startAngle <= endAngle) {
    while (formatAngle > endAngle) {
      formatAngle -= 360;
    }
    while (formatAngle < startAngle) {
      formatAngle += 360;
    }
    inRange = formatAngle >= startAngle && formatAngle <= endAngle;
  } else {
    while (formatAngle > startAngle) {
      formatAngle -= 360;
    }
    while (formatAngle < endAngle) {
      formatAngle += 360;
    }
    inRange = formatAngle >= endAngle && formatAngle <= startAngle;
  }
  if (inRange) {
    return _objectSpread11(_objectSpread11({}, sector), {}, {
      radius,
      angle: reverseFormatAngleOfSetor(formatAngle, sector)
    });
  }
  return null;
};

// node_modules/recharts/es6/component/Label.js
function _typeof15(o) {
  "@babel/helpers - typeof";
  return _typeof15 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof15(o);
}
var _excluded9 = ["offset"];
function _toConsumableArray4(arr) {
  return _arrayWithoutHoles4(arr) || _iterableToArray4(arr) || _unsupportedIterableToArray9(arr) || _nonIterableSpread4();
}
function _nonIterableSpread4() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray9(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray9(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray9(o, minLen);
}
function _iterableToArray4(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles4(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray9(arr);
}
function _arrayLikeToArray9(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _objectWithoutProperties8(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose9(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose9(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function ownKeys12(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread12(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys12(Object(t), true).forEach(function(r2) {
      _defineProperty13(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys12(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty13(obj, key, value) {
  key = _toPropertyKey14(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey14(t) {
  var i = _toPrimitive14(t, "string");
  return "symbol" == _typeof15(i) ? i : String(i);
}
function _toPrimitive14(t, r) {
  if ("object" != _typeof15(t) || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof15(i))
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _extends9() {
  _extends9 = Object.assign ? Object.assign.bind() : function(target) {
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
  return _extends9.apply(this, arguments);
}
var getLabel = function getLabel2(props) {
  var value = props.value, formatter = props.formatter;
  var label = (0, import_isNil6.default)(props.children) ? value : props.children;
  if ((0, import_isFunction5.default)(formatter)) {
    return formatter(label);
  }
  return label;
};
var getDeltaAngle = function getDeltaAngle2(startAngle, endAngle) {
  var sign2 = mathSign(endAngle - startAngle);
  var deltaAngle = Math.min(Math.abs(endAngle - startAngle), 360);
  return sign2 * deltaAngle;
};
var renderRadialLabel = function renderRadialLabel2(labelProps, label, attrs) {
  var position = labelProps.position, viewBox = labelProps.viewBox, offset = labelProps.offset, className = labelProps.className;
  var _ref = viewBox, cx = _ref.cx, cy = _ref.cy, innerRadius = _ref.innerRadius, outerRadius = _ref.outerRadius, startAngle = _ref.startAngle, endAngle = _ref.endAngle, clockWise = _ref.clockWise;
  var radius = (innerRadius + outerRadius) / 2;
  var deltaAngle = getDeltaAngle(startAngle, endAngle);
  var sign2 = deltaAngle >= 0 ? 1 : -1;
  var labelAngle, direction;
  if (position === "insideStart") {
    labelAngle = startAngle + sign2 * offset;
    direction = clockWise;
  } else if (position === "insideEnd") {
    labelAngle = endAngle - sign2 * offset;
    direction = !clockWise;
  } else if (position === "end") {
    labelAngle = endAngle + sign2 * offset;
    direction = clockWise;
  }
  direction = deltaAngle <= 0 ? direction : !direction;
  var startPoint = polarToCartesian(cx, cy, radius, labelAngle);
  var endPoint = polarToCartesian(cx, cy, radius, labelAngle + (direction ? 1 : -1) * 359);
  var path2 = "M".concat(startPoint.x, ",").concat(startPoint.y, "\n    A").concat(radius, ",").concat(radius, ",0,1,").concat(direction ? 0 : 1, ",\n    ").concat(endPoint.x, ",").concat(endPoint.y);
  var id = (0, import_isNil6.default)(labelProps.id) ? uniqueId("recharts-radial-line-") : labelProps.id;
  return /* @__PURE__ */ import_react16.default.createElement("text", _extends9({}, attrs, {
    dominantBaseline: "central",
    className: clsx_default("recharts-radial-bar-label", className)
  }), /* @__PURE__ */ import_react16.default.createElement("defs", null, /* @__PURE__ */ import_react16.default.createElement("path", {
    id,
    d: path2
  })), /* @__PURE__ */ import_react16.default.createElement("textPath", {
    xlinkHref: "#".concat(id)
  }, label));
};
var getAttrsOfPolarLabel = function getAttrsOfPolarLabel2(props) {
  var viewBox = props.viewBox, offset = props.offset, position = props.position;
  var _ref2 = viewBox, cx = _ref2.cx, cy = _ref2.cy, innerRadius = _ref2.innerRadius, outerRadius = _ref2.outerRadius, startAngle = _ref2.startAngle, endAngle = _ref2.endAngle;
  var midAngle = (startAngle + endAngle) / 2;
  if (position === "outside") {
    var _polarToCartesian = polarToCartesian(cx, cy, outerRadius + offset, midAngle), _x = _polarToCartesian.x, _y = _polarToCartesian.y;
    return {
      x: _x,
      y: _y,
      textAnchor: _x >= cx ? "start" : "end",
      verticalAnchor: "middle"
    };
  }
  if (position === "center") {
    return {
      x: cx,
      y: cy,
      textAnchor: "middle",
      verticalAnchor: "middle"
    };
  }
  if (position === "centerTop") {
    return {
      x: cx,
      y: cy,
      textAnchor: "middle",
      verticalAnchor: "start"
    };
  }
  if (position === "centerBottom") {
    return {
      x: cx,
      y: cy,
      textAnchor: "middle",
      verticalAnchor: "end"
    };
  }
  var r = (innerRadius + outerRadius) / 2;
  var _polarToCartesian2 = polarToCartesian(cx, cy, r, midAngle), x2 = _polarToCartesian2.x, y2 = _polarToCartesian2.y;
  return {
    x: x2,
    y: y2,
    textAnchor: "middle",
    verticalAnchor: "middle"
  };
};
var getAttrsOfCartesianLabel = function getAttrsOfCartesianLabel2(props) {
  var viewBox = props.viewBox, parentViewBox = props.parentViewBox, offset = props.offset, position = props.position;
  var _ref3 = viewBox, x2 = _ref3.x, y2 = _ref3.y, width = _ref3.width, height = _ref3.height;
  var verticalSign = height >= 0 ? 1 : -1;
  var verticalOffset = verticalSign * offset;
  var verticalEnd = verticalSign > 0 ? "end" : "start";
  var verticalStart = verticalSign > 0 ? "start" : "end";
  var horizontalSign = width >= 0 ? 1 : -1;
  var horizontalOffset = horizontalSign * offset;
  var horizontalEnd = horizontalSign > 0 ? "end" : "start";
  var horizontalStart = horizontalSign > 0 ? "start" : "end";
  if (position === "top") {
    var attrs = {
      x: x2 + width / 2,
      y: y2 - verticalSign * offset,
      textAnchor: "middle",
      verticalAnchor: verticalEnd
    };
    return _objectSpread12(_objectSpread12({}, attrs), parentViewBox ? {
      height: Math.max(y2 - parentViewBox.y, 0),
      width
    } : {});
  }
  if (position === "bottom") {
    var _attrs = {
      x: x2 + width / 2,
      y: y2 + height + verticalOffset,
      textAnchor: "middle",
      verticalAnchor: verticalStart
    };
    return _objectSpread12(_objectSpread12({}, _attrs), parentViewBox ? {
      height: Math.max(parentViewBox.y + parentViewBox.height - (y2 + height), 0),
      width
    } : {});
  }
  if (position === "left") {
    var _attrs2 = {
      x: x2 - horizontalOffset,
      y: y2 + height / 2,
      textAnchor: horizontalEnd,
      verticalAnchor: "middle"
    };
    return _objectSpread12(_objectSpread12({}, _attrs2), parentViewBox ? {
      width: Math.max(_attrs2.x - parentViewBox.x, 0),
      height
    } : {});
  }
  if (position === "right") {
    var _attrs3 = {
      x: x2 + width + horizontalOffset,
      y: y2 + height / 2,
      textAnchor: horizontalStart,
      verticalAnchor: "middle"
    };
    return _objectSpread12(_objectSpread12({}, _attrs3), parentViewBox ? {
      width: Math.max(parentViewBox.x + parentViewBox.width - _attrs3.x, 0),
      height
    } : {});
  }
  var sizeAttrs = parentViewBox ? {
    width,
    height
  } : {};
  if (position === "insideLeft") {
    return _objectSpread12({
      x: x2 + horizontalOffset,
      y: y2 + height / 2,
      textAnchor: horizontalStart,
      verticalAnchor: "middle"
    }, sizeAttrs);
  }
  if (position === "insideRight") {
    return _objectSpread12({
      x: x2 + width - horizontalOffset,
      y: y2 + height / 2,
      textAnchor: horizontalEnd,
      verticalAnchor: "middle"
    }, sizeAttrs);
  }
  if (position === "insideTop") {
    return _objectSpread12({
      x: x2 + width / 2,
      y: y2 + verticalOffset,
      textAnchor: "middle",
      verticalAnchor: verticalStart
    }, sizeAttrs);
  }
  if (position === "insideBottom") {
    return _objectSpread12({
      x: x2 + width / 2,
      y: y2 + height - verticalOffset,
      textAnchor: "middle",
      verticalAnchor: verticalEnd
    }, sizeAttrs);
  }
  if (position === "insideTopLeft") {
    return _objectSpread12({
      x: x2 + horizontalOffset,
      y: y2 + verticalOffset,
      textAnchor: horizontalStart,
      verticalAnchor: verticalStart
    }, sizeAttrs);
  }
  if (position === "insideTopRight") {
    return _objectSpread12({
      x: x2 + width - horizontalOffset,
      y: y2 + verticalOffset,
      textAnchor: horizontalEnd,
      verticalAnchor: verticalStart
    }, sizeAttrs);
  }
  if (position === "insideBottomLeft") {
    return _objectSpread12({
      x: x2 + horizontalOffset,
      y: y2 + height - verticalOffset,
      textAnchor: horizontalStart,
      verticalAnchor: verticalEnd
    }, sizeAttrs);
  }
  if (position === "insideBottomRight") {
    return _objectSpread12({
      x: x2 + width - horizontalOffset,
      y: y2 + height - verticalOffset,
      textAnchor: horizontalEnd,
      verticalAnchor: verticalEnd
    }, sizeAttrs);
  }
  if ((0, import_isObject3.default)(position) && (isNumber(position.x) || isPercent(position.x)) && (isNumber(position.y) || isPercent(position.y))) {
    return _objectSpread12({
      x: x2 + getPercentValue(position.x, width),
      y: y2 + getPercentValue(position.y, height),
      textAnchor: "end",
      verticalAnchor: "end"
    }, sizeAttrs);
  }
  return _objectSpread12({
    x: x2 + width / 2,
    y: y2 + height / 2,
    textAnchor: "middle",
    verticalAnchor: "middle"
  }, sizeAttrs);
};
var isPolar = function isPolar2(viewBox) {
  return "cx" in viewBox && isNumber(viewBox.cx);
};
function Label2(_ref4) {
  var _ref4$offset = _ref4.offset, offset = _ref4$offset === void 0 ? 5 : _ref4$offset, restProps = _objectWithoutProperties8(_ref4, _excluded9);
  var props = _objectSpread12({
    offset
  }, restProps);
  var viewBox = props.viewBox, position = props.position, value = props.value, children = props.children, content = props.content, _props$className = props.className, className = _props$className === void 0 ? "" : _props$className, textBreakAll = props.textBreakAll;
  if (!viewBox || (0, import_isNil6.default)(value) && (0, import_isNil6.default)(children) && !/* @__PURE__ */ (0, import_react16.isValidElement)(content) && !(0, import_isFunction5.default)(content)) {
    return null;
  }
  if (/* @__PURE__ */ (0, import_react16.isValidElement)(content)) {
    return /* @__PURE__ */ (0, import_react16.cloneElement)(content, props);
  }
  var label;
  if ((0, import_isFunction5.default)(content)) {
    label = /* @__PURE__ */ (0, import_react16.createElement)(content, props);
    if (/* @__PURE__ */ (0, import_react16.isValidElement)(label)) {
      return label;
    }
  } else {
    label = getLabel(props);
  }
  var isPolarLabel = isPolar(viewBox);
  var attrs = filterProps(props, true);
  if (isPolarLabel && (position === "insideStart" || position === "insideEnd" || position === "end")) {
    return renderRadialLabel(props, label, attrs);
  }
  var positionAttrs = isPolarLabel ? getAttrsOfPolarLabel(props) : getAttrsOfCartesianLabel(props);
  return /* @__PURE__ */ import_react16.default.createElement(Text, _extends9({
    className: clsx_default("recharts-label", className)
  }, attrs, positionAttrs, {
    breakAll: textBreakAll
  }), label);
}
Label2.displayName = "Label";
var parseViewBox = function parseViewBox2(props) {
  var cx = props.cx, cy = props.cy, angle = props.angle, startAngle = props.startAngle, endAngle = props.endAngle, r = props.r, radius = props.radius, innerRadius = props.innerRadius, outerRadius = props.outerRadius, x2 = props.x, y2 = props.y, top = props.top, left = props.left, width = props.width, height = props.height, clockWise = props.clockWise, labelViewBox = props.labelViewBox;
  if (labelViewBox) {
    return labelViewBox;
  }
  if (isNumber(width) && isNumber(height)) {
    if (isNumber(x2) && isNumber(y2)) {
      return {
        x: x2,
        y: y2,
        width,
        height
      };
    }
    if (isNumber(top) && isNumber(left)) {
      return {
        x: top,
        y: left,
        width,
        height
      };
    }
  }
  if (isNumber(x2) && isNumber(y2)) {
    return {
      x: x2,
      y: y2,
      width: 0,
      height: 0
    };
  }
  if (isNumber(cx) && isNumber(cy)) {
    return {
      cx,
      cy,
      startAngle: startAngle || angle || 0,
      endAngle: endAngle || angle || 0,
      innerRadius: innerRadius || 0,
      outerRadius: outerRadius || radius || r || 0,
      clockWise
    };
  }
  if (props.viewBox) {
    return props.viewBox;
  }
  return {};
};
var parseLabel = function parseLabel2(label, viewBox) {
  if (!label) {
    return null;
  }
  if (label === true) {
    return /* @__PURE__ */ import_react16.default.createElement(Label2, {
      key: "label-implicit",
      viewBox
    });
  }
  if (isNumOrStr(label)) {
    return /* @__PURE__ */ import_react16.default.createElement(Label2, {
      key: "label-implicit",
      viewBox,
      value: label
    });
  }
  if (/* @__PURE__ */ (0, import_react16.isValidElement)(label)) {
    if (label.type === Label2) {
      return /* @__PURE__ */ (0, import_react16.cloneElement)(label, {
        key: "label-implicit",
        viewBox
      });
    }
    return /* @__PURE__ */ import_react16.default.createElement(Label2, {
      key: "label-implicit",
      content: label,
      viewBox
    });
  }
  if ((0, import_isFunction5.default)(label)) {
    return /* @__PURE__ */ import_react16.default.createElement(Label2, {
      key: "label-implicit",
      content: label,
      viewBox
    });
  }
  if ((0, import_isObject3.default)(label)) {
    return /* @__PURE__ */ import_react16.default.createElement(Label2, _extends9({
      viewBox
    }, label, {
      key: "label-implicit"
    }));
  }
  return null;
};
var renderCallByParent = function renderCallByParent2(parentProps, viewBox) {
  var checkPropsLabel = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  if (!parentProps || !parentProps.children && checkPropsLabel && !parentProps.label) {
    return null;
  }
  var children = parentProps.children;
  var parentViewBox = parseViewBox(parentProps);
  var explicitChildren = findAllByType(children, Label2).map(function(child, index) {
    return /* @__PURE__ */ (0, import_react16.cloneElement)(child, {
      viewBox: viewBox || parentViewBox,
      // eslint-disable-next-line react/no-array-index-key
      key: "label-".concat(index)
    });
  });
  if (!checkPropsLabel) {
    return explicitChildren;
  }
  var implicitLabel = parseLabel(parentProps.label, viewBox || parentViewBox);
  return [implicitLabel].concat(_toConsumableArray4(explicitChildren));
};
Label2.parseViewBox = parseViewBox;
Label2.renderCallByParent = renderCallByParent;

// node_modules/recharts/es6/component/LabelList.js
var import_react17 = __toESM(require_react());
var import_isNil7 = __toESM(require_isNil());
var import_isObject4 = __toESM(require_isObject());
var import_isFunction6 = __toESM(require_isFunction());
var import_last = __toESM(require_last());
function _typeof16(o) {
  "@babel/helpers - typeof";
  return _typeof16 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof16(o);
}
var _excluded10 = ["valueAccessor"];
var _excluded23 = ["data", "dataKey", "clockWise", "id", "textBreakAll"];
function _toConsumableArray5(arr) {
  return _arrayWithoutHoles5(arr) || _iterableToArray5(arr) || _unsupportedIterableToArray10(arr) || _nonIterableSpread5();
}
function _nonIterableSpread5() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray10(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray10(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray10(o, minLen);
}
function _iterableToArray5(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles5(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray10(arr);
}
function _arrayLikeToArray10(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _extends10() {
  _extends10 = Object.assign ? Object.assign.bind() : function(target) {
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
  return _extends10.apply(this, arguments);
}
function ownKeys13(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread13(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys13(Object(t), true).forEach(function(r2) {
      _defineProperty14(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys13(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty14(obj, key, value) {
  key = _toPropertyKey15(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey15(t) {
  var i = _toPrimitive15(t, "string");
  return "symbol" == _typeof16(i) ? i : String(i);
}
function _toPrimitive15(t, r) {
  if ("object" != _typeof16(t) || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof16(i))
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _objectWithoutProperties9(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose10(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose10(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var defaultAccessor = function defaultAccessor2(entry) {
  return Array.isArray(entry.value) ? (0, import_last.default)(entry.value) : entry.value;
};
function LabelList(_ref) {
  var _ref$valueAccessor = _ref.valueAccessor, valueAccessor = _ref$valueAccessor === void 0 ? defaultAccessor : _ref$valueAccessor, restProps = _objectWithoutProperties9(_ref, _excluded10);
  var data2 = restProps.data, dataKey = restProps.dataKey, clockWise = restProps.clockWise, id = restProps.id, textBreakAll = restProps.textBreakAll, others = _objectWithoutProperties9(restProps, _excluded23);
  if (!data2 || !data2.length) {
    return null;
  }
  return /* @__PURE__ */ import_react17.default.createElement(Layer, {
    className: "recharts-label-list"
  }, data2.map(function(entry, index) {
    var value = (0, import_isNil7.default)(dataKey) ? valueAccessor(entry, index) : getValueByDataKey(entry && entry.payload, dataKey);
    var idProps = (0, import_isNil7.default)(id) ? {} : {
      id: "".concat(id, "-").concat(index)
    };
    return /* @__PURE__ */ import_react17.default.createElement(Label2, _extends10({}, filterProps(entry, true), others, idProps, {
      parentViewBox: entry.parentViewBox,
      value,
      textBreakAll,
      viewBox: Label2.parseViewBox((0, import_isNil7.default)(clockWise) ? entry : _objectSpread13(_objectSpread13({}, entry), {}, {
        clockWise
      })),
      key: "label-".concat(index),
      index
    }));
  }));
}
LabelList.displayName = "LabelList";
function parseLabelList(label, data2) {
  if (!label) {
    return null;
  }
  if (label === true) {
    return /* @__PURE__ */ import_react17.default.createElement(LabelList, {
      key: "labelList-implicit",
      data: data2
    });
  }
  if (/* @__PURE__ */ import_react17.default.isValidElement(label) || (0, import_isFunction6.default)(label)) {
    return /* @__PURE__ */ import_react17.default.createElement(LabelList, {
      key: "labelList-implicit",
      data: data2,
      content: label
    });
  }
  if ((0, import_isObject4.default)(label)) {
    return /* @__PURE__ */ import_react17.default.createElement(LabelList, _extends10({
      data: data2
    }, label, {
      key: "labelList-implicit"
    }));
  }
  return null;
}
function renderCallByParent3(parentProps, data2) {
  var checkPropsLabel = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  if (!parentProps || !parentProps.children && checkPropsLabel && !parentProps.label) {
    return null;
  }
  var children = parentProps.children;
  var explicitChildren = findAllByType(children, LabelList).map(function(child, index) {
    return /* @__PURE__ */ (0, import_react17.cloneElement)(child, {
      data: data2,
      // eslint-disable-next-line react/no-array-index-key
      key: "labelList-".concat(index)
    });
  });
  if (!checkPropsLabel) {
    return explicitChildren;
  }
  var implicitLabelList = parseLabelList(parentProps.label, data2);
  return [implicitLabelList].concat(_toConsumableArray5(explicitChildren));
}
LabelList.renderCallByParent = renderCallByParent3;

// node_modules/recharts/es6/shape/Sector.js
var import_react18 = __toESM(require_react());
function _typeof17(o) {
  "@babel/helpers - typeof";
  return _typeof17 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof17(o);
}
function _extends11() {
  _extends11 = Object.assign ? Object.assign.bind() : function(target) {
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
  return _extends11.apply(this, arguments);
}
function ownKeys14(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread14(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys14(Object(t), true).forEach(function(r2) {
      _defineProperty15(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys14(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty15(obj, key, value) {
  key = _toPropertyKey16(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey16(t) {
  var i = _toPrimitive16(t, "string");
  return "symbol" == _typeof17(i) ? i : String(i);
}
function _toPrimitive16(t, r) {
  if ("object" != _typeof17(t) || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof17(i))
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var getDeltaAngle3 = function getDeltaAngle4(startAngle, endAngle) {
  var sign2 = mathSign(endAngle - startAngle);
  var deltaAngle = Math.min(Math.abs(endAngle - startAngle), 359.999);
  return sign2 * deltaAngle;
};
var getTangentCircle = function getTangentCircle2(_ref) {
  var cx = _ref.cx, cy = _ref.cy, radius = _ref.radius, angle = _ref.angle, sign2 = _ref.sign, isExternal = _ref.isExternal, cornerRadius = _ref.cornerRadius, cornerIsExternal = _ref.cornerIsExternal;
  var centerRadius = cornerRadius * (isExternal ? 1 : -1) + radius;
  var theta = Math.asin(cornerRadius / centerRadius) / RADIAN2;
  var centerAngle = cornerIsExternal ? angle : angle + sign2 * theta;
  var center = polarToCartesian(cx, cy, centerRadius, centerAngle);
  var circleTangency = polarToCartesian(cx, cy, radius, centerAngle);
  var lineTangencyAngle = cornerIsExternal ? angle - sign2 * theta : angle;
  var lineTangency = polarToCartesian(cx, cy, centerRadius * Math.cos(theta * RADIAN2), lineTangencyAngle);
  return {
    center,
    circleTangency,
    lineTangency,
    theta
  };
};
var getSectorPath = function getSectorPath2(_ref2) {
  var cx = _ref2.cx, cy = _ref2.cy, innerRadius = _ref2.innerRadius, outerRadius = _ref2.outerRadius, startAngle = _ref2.startAngle, endAngle = _ref2.endAngle;
  var angle = getDeltaAngle3(startAngle, endAngle);
  var tempEndAngle = startAngle + angle;
  var outerStartPoint = polarToCartesian(cx, cy, outerRadius, startAngle);
  var outerEndPoint = polarToCartesian(cx, cy, outerRadius, tempEndAngle);
  var path2 = "M ".concat(outerStartPoint.x, ",").concat(outerStartPoint.y, "\n    A ").concat(outerRadius, ",").concat(outerRadius, ",0,\n    ").concat(+(Math.abs(angle) > 180), ",").concat(+(startAngle > tempEndAngle), ",\n    ").concat(outerEndPoint.x, ",").concat(outerEndPoint.y, "\n  ");
  if (innerRadius > 0) {
    var innerStartPoint = polarToCartesian(cx, cy, innerRadius, startAngle);
    var innerEndPoint = polarToCartesian(cx, cy, innerRadius, tempEndAngle);
    path2 += "L ".concat(innerEndPoint.x, ",").concat(innerEndPoint.y, "\n            A ").concat(innerRadius, ",").concat(innerRadius, ",0,\n            ").concat(+(Math.abs(angle) > 180), ",").concat(+(startAngle <= tempEndAngle), ",\n            ").concat(innerStartPoint.x, ",").concat(innerStartPoint.y, " Z");
  } else {
    path2 += "L ".concat(cx, ",").concat(cy, " Z");
  }
  return path2;
};
var getSectorWithCorner = function getSectorWithCorner2(_ref3) {
  var cx = _ref3.cx, cy = _ref3.cy, innerRadius = _ref3.innerRadius, outerRadius = _ref3.outerRadius, cornerRadius = _ref3.cornerRadius, forceCornerRadius = _ref3.forceCornerRadius, cornerIsExternal = _ref3.cornerIsExternal, startAngle = _ref3.startAngle, endAngle = _ref3.endAngle;
  var sign2 = mathSign(endAngle - startAngle);
  var _getTangentCircle = getTangentCircle({
    cx,
    cy,
    radius: outerRadius,
    angle: startAngle,
    sign: sign2,
    cornerRadius,
    cornerIsExternal
  }), soct = _getTangentCircle.circleTangency, solt = _getTangentCircle.lineTangency, sot = _getTangentCircle.theta;
  var _getTangentCircle2 = getTangentCircle({
    cx,
    cy,
    radius: outerRadius,
    angle: endAngle,
    sign: -sign2,
    cornerRadius,
    cornerIsExternal
  }), eoct = _getTangentCircle2.circleTangency, eolt = _getTangentCircle2.lineTangency, eot = _getTangentCircle2.theta;
  var outerArcAngle = cornerIsExternal ? Math.abs(startAngle - endAngle) : Math.abs(startAngle - endAngle) - sot - eot;
  if (outerArcAngle < 0) {
    if (forceCornerRadius) {
      return "M ".concat(solt.x, ",").concat(solt.y, "\n        a").concat(cornerRadius, ",").concat(cornerRadius, ",0,0,1,").concat(cornerRadius * 2, ",0\n        a").concat(cornerRadius, ",").concat(cornerRadius, ",0,0,1,").concat(-cornerRadius * 2, ",0\n      ");
    }
    return getSectorPath({
      cx,
      cy,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle
    });
  }
  var path2 = "M ".concat(solt.x, ",").concat(solt.y, "\n    A").concat(cornerRadius, ",").concat(cornerRadius, ",0,0,").concat(+(sign2 < 0), ",").concat(soct.x, ",").concat(soct.y, "\n    A").concat(outerRadius, ",").concat(outerRadius, ",0,").concat(+(outerArcAngle > 180), ",").concat(+(sign2 < 0), ",").concat(eoct.x, ",").concat(eoct.y, "\n    A").concat(cornerRadius, ",").concat(cornerRadius, ",0,0,").concat(+(sign2 < 0), ",").concat(eolt.x, ",").concat(eolt.y, "\n  ");
  if (innerRadius > 0) {
    var _getTangentCircle3 = getTangentCircle({
      cx,
      cy,
      radius: innerRadius,
      angle: startAngle,
      sign: sign2,
      isExternal: true,
      cornerRadius,
      cornerIsExternal
    }), sict = _getTangentCircle3.circleTangency, silt = _getTangentCircle3.lineTangency, sit = _getTangentCircle3.theta;
    var _getTangentCircle4 = getTangentCircle({
      cx,
      cy,
      radius: innerRadius,
      angle: endAngle,
      sign: -sign2,
      isExternal: true,
      cornerRadius,
      cornerIsExternal
    }), eict = _getTangentCircle4.circleTangency, eilt = _getTangentCircle4.lineTangency, eit = _getTangentCircle4.theta;
    var innerArcAngle = cornerIsExternal ? Math.abs(startAngle - endAngle) : Math.abs(startAngle - endAngle) - sit - eit;
    if (innerArcAngle < 0 && cornerRadius === 0) {
      return "".concat(path2, "L").concat(cx, ",").concat(cy, "Z");
    }
    path2 += "L".concat(eilt.x, ",").concat(eilt.y, "\n      A").concat(cornerRadius, ",").concat(cornerRadius, ",0,0,").concat(+(sign2 < 0), ",").concat(eict.x, ",").concat(eict.y, "\n      A").concat(innerRadius, ",").concat(innerRadius, ",0,").concat(+(innerArcAngle > 180), ",").concat(+(sign2 > 0), ",").concat(sict.x, ",").concat(sict.y, "\n      A").concat(cornerRadius, ",").concat(cornerRadius, ",0,0,").concat(+(sign2 < 0), ",").concat(silt.x, ",").concat(silt.y, "Z");
  } else {
    path2 += "L".concat(cx, ",").concat(cy, "Z");
  }
  return path2;
};
var defaultProps = {
  cx: 0,
  cy: 0,
  innerRadius: 0,
  outerRadius: 0,
  startAngle: 0,
  endAngle: 0,
  cornerRadius: 0,
  forceCornerRadius: false,
  cornerIsExternal: false
};
var Sector = function Sector2(sectorProps) {
  var props = _objectSpread14(_objectSpread14({}, defaultProps), sectorProps);
  var cx = props.cx, cy = props.cy, innerRadius = props.innerRadius, outerRadius = props.outerRadius, cornerRadius = props.cornerRadius, forceCornerRadius = props.forceCornerRadius, cornerIsExternal = props.cornerIsExternal, startAngle = props.startAngle, endAngle = props.endAngle, className = props.className;
  if (outerRadius < innerRadius || startAngle === endAngle) {
    return null;
  }
  var layerClass = clsx_default("recharts-sector", className);
  var deltaRadius = outerRadius - innerRadius;
  var cr = getPercentValue(cornerRadius, deltaRadius, 0, true);
  var path2;
  if (cr > 0 && Math.abs(startAngle - endAngle) < 360) {
    path2 = getSectorWithCorner({
      cx,
      cy,
      innerRadius,
      outerRadius,
      cornerRadius: Math.min(cr, deltaRadius / 2),
      forceCornerRadius,
      cornerIsExternal,
      startAngle,
      endAngle
    });
  } else {
    path2 = getSectorPath({
      cx,
      cy,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle
    });
  }
  return /* @__PURE__ */ import_react18.default.createElement("path", _extends11({}, filterProps(props, true), {
    className: layerClass,
    d: path2,
    role: "img"
  }));
};

// node_modules/recharts/es6/shape/Curve.js
var import_react19 = __toESM(require_react());
var import_upperFirst3 = __toESM(require_upperFirst());
var import_isFunction7 = __toESM(require_isFunction());
function _typeof18(o) {
  "@babel/helpers - typeof";
  return _typeof18 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof18(o);
}
function _extends12() {
  _extends12 = Object.assign ? Object.assign.bind() : function(target) {
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
  return _extends12.apply(this, arguments);
}
function ownKeys15(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread15(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys15(Object(t), true).forEach(function(r2) {
      _defineProperty16(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys15(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty16(obj, key, value) {
  key = _toPropertyKey17(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey17(t) {
  var i = _toPrimitive17(t, "string");
  return "symbol" == _typeof18(i) ? i : String(i);
}
function _toPrimitive17(t, r) {
  if ("object" != _typeof18(t) || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof18(i))
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var CURVE_FACTORIES = {
  curveBasisClosed: basisClosed_default,
  curveBasisOpen: basisOpen_default,
  curveBasis: basis_default,
  curveBumpX: bumpX,
  curveBumpY: bumpY,
  curveLinearClosed: linearClosed_default,
  curveLinear: linear_default,
  curveMonotoneX: monotoneX,
  curveMonotoneY: monotoneY,
  curveNatural: natural_default,
  curveStep: step_default,
  curveStepAfter: stepAfter,
  curveStepBefore: stepBefore
};
var defined = function defined2(p) {
  return p.x === +p.x && p.y === +p.y;
};
var getX = function getX2(p) {
  return p.x;
};
var getY = function getY2(p) {
  return p.y;
};
var getCurveFactory = function getCurveFactory2(type, layout) {
  if ((0, import_isFunction7.default)(type)) {
    return type;
  }
  var name = "curve".concat((0, import_upperFirst3.default)(type));
  if ((name === "curveMonotone" || name === "curveBump") && layout) {
    return CURVE_FACTORIES["".concat(name).concat(layout === "vertical" ? "Y" : "X")];
  }
  return CURVE_FACTORIES[name] || linear_default;
};
var getPath = function getPath2(_ref) {
  var _ref$type = _ref.type, type = _ref$type === void 0 ? "linear" : _ref$type, _ref$points = _ref.points, points = _ref$points === void 0 ? [] : _ref$points, baseLine = _ref.baseLine, layout = _ref.layout, _ref$connectNulls = _ref.connectNulls, connectNulls = _ref$connectNulls === void 0 ? false : _ref$connectNulls;
  var curveFactory = getCurveFactory(type, layout);
  var formatPoints = connectNulls ? points.filter(function(entry) {
    return defined(entry);
  }) : points;
  var lineFunction;
  if (Array.isArray(baseLine)) {
    var formatBaseLine = connectNulls ? baseLine.filter(function(base) {
      return defined(base);
    }) : baseLine;
    var areaPoints = formatPoints.map(function(entry, index) {
      return _objectSpread15(_objectSpread15({}, entry), {}, {
        base: formatBaseLine[index]
      });
    });
    if (layout === "vertical") {
      lineFunction = area_default().y(getY).x1(getX).x0(function(d) {
        return d.base.x;
      });
    } else {
      lineFunction = area_default().x(getX).y1(getY).y0(function(d) {
        return d.base.y;
      });
    }
    lineFunction.defined(defined).curve(curveFactory);
    return lineFunction(areaPoints);
  }
  if (layout === "vertical" && isNumber(baseLine)) {
    lineFunction = area_default().y(getY).x1(getX).x0(baseLine);
  } else if (isNumber(baseLine)) {
    lineFunction = area_default().x(getX).y1(getY).y0(baseLine);
  } else {
    lineFunction = line_default().x(getX).y(getY);
  }
  lineFunction.defined(defined).curve(curveFactory);
  return lineFunction(formatPoints);
};
var Curve = function Curve2(props) {
  var className = props.className, points = props.points, path2 = props.path, pathRef = props.pathRef;
  if ((!points || !points.length) && !path2) {
    return null;
  }
  var realPath = points && points.length ? getPath(props) : path2;
  return /* @__PURE__ */ import_react19.default.createElement("path", _extends12({}, filterProps(props, false), adaptEventHandlers(props), {
    className: clsx_default("recharts-curve", className),
    d: realPath,
    ref: pathRef
  }));
};

// node_modules/recharts/es6/shape/Rectangle.js
var import_react27 = __toESM(require_react());

// node_modules/react-smooth/es6/Animate.js
var import_react20 = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());

// node_modules/fast-equals/dist/esm/index.mjs
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
function combineComparators(comparatorA, comparatorB) {
  return function isEqual4(a2, b, state) {
    return comparatorA(a2, b, state) && comparatorB(a2, b, state);
  };
}
function createIsCircular(areItemsEqual) {
  return function isCircular(a2, b, state) {
    if (!a2 || !b || typeof a2 !== "object" || typeof b !== "object") {
      return areItemsEqual(a2, b, state);
    }
    var cache = state.cache;
    var cachedA = cache.get(a2);
    var cachedB = cache.get(b);
    if (cachedA && cachedB) {
      return cachedA === b && cachedB === a2;
    }
    cache.set(a2, b);
    cache.set(b, a2);
    var result = areItemsEqual(a2, b, state);
    cache.delete(a2);
    cache.delete(b);
    return result;
  };
}
function getStrictProperties(object) {
  return getOwnPropertyNames(object).concat(getOwnPropertySymbols(object));
}
var hasOwn = Object.hasOwn || function(object, property) {
  return hasOwnProperty.call(object, property);
};
function sameValueZeroEqual(a2, b) {
  return a2 || b ? a2 === b : a2 === b || a2 !== a2 && b !== b;
}
var OWNER = "_owner";
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var keys = Object.keys;
function areArraysEqual(a2, b, state) {
  var index = a2.length;
  if (b.length !== index) {
    return false;
  }
  while (index-- > 0) {
    if (!state.equals(a2[index], b[index], index, index, a2, b, state)) {
      return false;
    }
  }
  return true;
}
function areDatesEqual(a2, b) {
  return sameValueZeroEqual(a2.getTime(), b.getTime());
}
function areMapsEqual(a2, b, state) {
  if (a2.size !== b.size) {
    return false;
  }
  var matchedIndices = {};
  var aIterable = a2.entries();
  var index = 0;
  var aResult;
  var bResult;
  while (aResult = aIterable.next()) {
    if (aResult.done) {
      break;
    }
    var bIterable = b.entries();
    var hasMatch = false;
    var matchIndex = 0;
    while (bResult = bIterable.next()) {
      if (bResult.done) {
        break;
      }
      var _a = aResult.value, aKey = _a[0], aValue = _a[1];
      var _b = bResult.value, bKey = _b[0], bValue = _b[1];
      if (!hasMatch && !matchedIndices[matchIndex] && (hasMatch = state.equals(aKey, bKey, index, matchIndex, a2, b, state) && state.equals(aValue, bValue, aKey, bKey, a2, b, state))) {
        matchedIndices[matchIndex] = true;
      }
      matchIndex++;
    }
    if (!hasMatch) {
      return false;
    }
    index++;
  }
  return true;
}
function areObjectsEqual(a2, b, state) {
  var properties = keys(a2);
  var index = properties.length;
  if (keys(b).length !== index) {
    return false;
  }
  var property;
  while (index-- > 0) {
    property = properties[index];
    if (property === OWNER && (a2.$$typeof || b.$$typeof) && a2.$$typeof !== b.$$typeof) {
      return false;
    }
    if (!hasOwn(b, property) || !state.equals(a2[property], b[property], property, property, a2, b, state)) {
      return false;
    }
  }
  return true;
}
function areObjectsEqualStrict(a2, b, state) {
  var properties = getStrictProperties(a2);
  var index = properties.length;
  if (getStrictProperties(b).length !== index) {
    return false;
  }
  var property;
  var descriptorA;
  var descriptorB;
  while (index-- > 0) {
    property = properties[index];
    if (property === OWNER && (a2.$$typeof || b.$$typeof) && a2.$$typeof !== b.$$typeof) {
      return false;
    }
    if (!hasOwn(b, property)) {
      return false;
    }
    if (!state.equals(a2[property], b[property], property, property, a2, b, state)) {
      return false;
    }
    descriptorA = getOwnPropertyDescriptor(a2, property);
    descriptorB = getOwnPropertyDescriptor(b, property);
    if ((descriptorA || descriptorB) && (!descriptorA || !descriptorB || descriptorA.configurable !== descriptorB.configurable || descriptorA.enumerable !== descriptorB.enumerable || descriptorA.writable !== descriptorB.writable)) {
      return false;
    }
  }
  return true;
}
function arePrimitiveWrappersEqual(a2, b) {
  return sameValueZeroEqual(a2.valueOf(), b.valueOf());
}
function areRegExpsEqual(a2, b) {
  return a2.source === b.source && a2.flags === b.flags;
}
function areSetsEqual(a2, b, state) {
  if (a2.size !== b.size) {
    return false;
  }
  var matchedIndices = {};
  var aIterable = a2.values();
  var aResult;
  var bResult;
  while (aResult = aIterable.next()) {
    if (aResult.done) {
      break;
    }
    var bIterable = b.values();
    var hasMatch = false;
    var matchIndex = 0;
    while (bResult = bIterable.next()) {
      if (bResult.done) {
        break;
      }
      if (!hasMatch && !matchedIndices[matchIndex] && (hasMatch = state.equals(aResult.value, bResult.value, aResult.value, bResult.value, a2, b, state))) {
        matchedIndices[matchIndex] = true;
      }
      matchIndex++;
    }
    if (!hasMatch) {
      return false;
    }
  }
  return true;
}
function areTypedArraysEqual(a2, b) {
  var index = a2.length;
  if (b.length !== index) {
    return false;
  }
  while (index-- > 0) {
    if (a2[index] !== b[index]) {
      return false;
    }
  }
  return true;
}
var ARGUMENTS_TAG = "[object Arguments]";
var BOOLEAN_TAG = "[object Boolean]";
var DATE_TAG = "[object Date]";
var MAP_TAG = "[object Map]";
var NUMBER_TAG = "[object Number]";
var OBJECT_TAG = "[object Object]";
var REG_EXP_TAG = "[object RegExp]";
var SET_TAG = "[object Set]";
var STRING_TAG = "[object String]";
var isArray = Array.isArray;
var isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView ? ArrayBuffer.isView : null;
var assign = Object.assign;
var getTag = Object.prototype.toString.call.bind(Object.prototype.toString);
function createEqualityComparator(_a) {
  var areArraysEqual2 = _a.areArraysEqual, areDatesEqual2 = _a.areDatesEqual, areMapsEqual2 = _a.areMapsEqual, areObjectsEqual2 = _a.areObjectsEqual, arePrimitiveWrappersEqual2 = _a.arePrimitiveWrappersEqual, areRegExpsEqual2 = _a.areRegExpsEqual, areSetsEqual2 = _a.areSetsEqual, areTypedArraysEqual2 = _a.areTypedArraysEqual;
  return function comparator(a2, b, state) {
    if (a2 === b) {
      return true;
    }
    if (a2 == null || b == null || typeof a2 !== "object" || typeof b !== "object") {
      return a2 !== a2 && b !== b;
    }
    var constructor = a2.constructor;
    if (constructor !== b.constructor) {
      return false;
    }
    if (constructor === Object) {
      return areObjectsEqual2(a2, b, state);
    }
    if (isArray(a2)) {
      return areArraysEqual2(a2, b, state);
    }
    if (isTypedArray != null && isTypedArray(a2)) {
      return areTypedArraysEqual2(a2, b, state);
    }
    if (constructor === Date) {
      return areDatesEqual2(a2, b, state);
    }
    if (constructor === RegExp) {
      return areRegExpsEqual2(a2, b, state);
    }
    if (constructor === Map) {
      return areMapsEqual2(a2, b, state);
    }
    if (constructor === Set) {
      return areSetsEqual2(a2, b, state);
    }
    var tag = getTag(a2);
    if (tag === DATE_TAG) {
      return areDatesEqual2(a2, b, state);
    }
    if (tag === REG_EXP_TAG) {
      return areRegExpsEqual2(a2, b, state);
    }
    if (tag === MAP_TAG) {
      return areMapsEqual2(a2, b, state);
    }
    if (tag === SET_TAG) {
      return areSetsEqual2(a2, b, state);
    }
    if (tag === OBJECT_TAG) {
      return typeof a2.then !== "function" && typeof b.then !== "function" && areObjectsEqual2(a2, b, state);
    }
    if (tag === ARGUMENTS_TAG) {
      return areObjectsEqual2(a2, b, state);
    }
    if (tag === BOOLEAN_TAG || tag === NUMBER_TAG || tag === STRING_TAG) {
      return arePrimitiveWrappersEqual2(a2, b, state);
    }
    return false;
  };
}
function createEqualityComparatorConfig(_a) {
  var circular = _a.circular, createCustomConfig = _a.createCustomConfig, strict = _a.strict;
  var config = {
    areArraysEqual: strict ? areObjectsEqualStrict : areArraysEqual,
    areDatesEqual,
    areMapsEqual: strict ? combineComparators(areMapsEqual, areObjectsEqualStrict) : areMapsEqual,
    areObjectsEqual: strict ? areObjectsEqualStrict : areObjectsEqual,
    arePrimitiveWrappersEqual,
    areRegExpsEqual,
    areSetsEqual: strict ? combineComparators(areSetsEqual, areObjectsEqualStrict) : areSetsEqual,
    areTypedArraysEqual: strict ? areObjectsEqualStrict : areTypedArraysEqual
  };
  if (createCustomConfig) {
    config = assign({}, config, createCustomConfig(config));
  }
  if (circular) {
    var areArraysEqual$1 = createIsCircular(config.areArraysEqual);
    var areMapsEqual$1 = createIsCircular(config.areMapsEqual);
    var areObjectsEqual$1 = createIsCircular(config.areObjectsEqual);
    var areSetsEqual$1 = createIsCircular(config.areSetsEqual);
    config = assign({}, config, {
      areArraysEqual: areArraysEqual$1,
      areMapsEqual: areMapsEqual$1,
      areObjectsEqual: areObjectsEqual$1,
      areSetsEqual: areSetsEqual$1
    });
  }
  return config;
}
function createInternalEqualityComparator(compare) {
  return function(a2, b, _indexOrKeyA, _indexOrKeyB, _parentA, _parentB, state) {
    return compare(a2, b, state);
  };
}
function createIsEqual(_a) {
  var circular = _a.circular, comparator = _a.comparator, createState = _a.createState, equals = _a.equals, strict = _a.strict;
  if (createState) {
    return function isEqual4(a2, b) {
      var _a2 = createState(), _b = _a2.cache, cache = _b === void 0 ? circular ? /* @__PURE__ */ new WeakMap() : void 0 : _b, meta = _a2.meta;
      return comparator(a2, b, {
        cache,
        equals,
        meta,
        strict
      });
    };
  }
  if (circular) {
    return function isEqual4(a2, b) {
      return comparator(a2, b, {
        cache: /* @__PURE__ */ new WeakMap(),
        equals,
        meta: void 0,
        strict
      });
    };
  }
  var state = {
    cache: void 0,
    equals,
    meta: void 0,
    strict
  };
  return function isEqual4(a2, b) {
    return comparator(a2, b, state);
  };
}
var deepEqual = createCustomEqual();
var strictDeepEqual = createCustomEqual({ strict: true });
var circularDeepEqual = createCustomEqual({ circular: true });
var strictCircularDeepEqual = createCustomEqual({
  circular: true,
  strict: true
});
var shallowEqual2 = createCustomEqual({
  createInternalComparator: function() {
    return sameValueZeroEqual;
  }
});
var strictShallowEqual = createCustomEqual({
  strict: true,
  createInternalComparator: function() {
    return sameValueZeroEqual;
  }
});
var circularShallowEqual = createCustomEqual({
  circular: true,
  createInternalComparator: function() {
    return sameValueZeroEqual;
  }
});
var strictCircularShallowEqual = createCustomEqual({
  circular: true,
  createInternalComparator: function() {
    return sameValueZeroEqual;
  },
  strict: true
});
function createCustomEqual(options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.circular, circular = _a === void 0 ? false : _a, createCustomInternalComparator = options.createInternalComparator, createState = options.createState, _b = options.strict, strict = _b === void 0 ? false : _b;
  var config = createEqualityComparatorConfig(options);
  var comparator = createEqualityComparator(config);
  var equals = createCustomInternalComparator ? createCustomInternalComparator(comparator) : createInternalEqualityComparator(comparator);
  return createIsEqual({ circular, comparator, createState, equals, strict });
}

// node_modules/react-smooth/es6/setRafTimeout.js
function safeRequestAnimationFrame(callback) {
  if (typeof requestAnimationFrame !== "undefined")
    requestAnimationFrame(callback);
}
function setRafTimeout(callback) {
  var timeout2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  var currTime = -1;
  var shouldUpdate = function shouldUpdate2(now) {
    if (currTime < 0) {
      currTime = now;
    }
    if (now - currTime > timeout2) {
      callback(now);
      currTime = -1;
    } else {
      safeRequestAnimationFrame(shouldUpdate2);
    }
  };
  requestAnimationFrame(shouldUpdate);
}

// node_modules/react-smooth/es6/AnimateManager.js
function _typeof19(o) {
  "@babel/helpers - typeof";
  return _typeof19 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof19(o);
}
function _toArray(arr) {
  return _arrayWithHoles7(arr) || _iterableToArray6(arr) || _unsupportedIterableToArray11(arr) || _nonIterableRest7();
}
function _nonIterableRest7() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray11(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray11(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray11(o, minLen);
}
function _arrayLikeToArray11(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _iterableToArray6(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithHoles7(arr) {
  if (Array.isArray(arr))
    return arr;
}
function createAnimateManager() {
  var currStyle = {};
  var handleChange = function handleChange2() {
    return null;
  };
  var shouldStop = false;
  var setStyle = function setStyle2(_style) {
    if (shouldStop) {
      return;
    }
    if (Array.isArray(_style)) {
      if (!_style.length) {
        return;
      }
      var styles = _style;
      var _styles = _toArray(styles), curr = _styles[0], restStyles = _styles.slice(1);
      if (typeof curr === "number") {
        setRafTimeout(setStyle2.bind(null, restStyles), curr);
        return;
      }
      setStyle2(curr);
      setRafTimeout(setStyle2.bind(null, restStyles));
      return;
    }
    if (_typeof19(_style) === "object") {
      currStyle = _style;
      handleChange(currStyle);
    }
    if (typeof _style === "function") {
      _style();
    }
  };
  return {
    stop: function stop() {
      shouldStop = true;
    },
    start: function start(style) {
      shouldStop = false;
      setStyle(style);
    },
    subscribe: function subscribe(_handleChange) {
      handleChange = _handleChange;
      return function() {
        handleChange = function handleChange2() {
          return null;
        };
      };
    }
  };
}

// node_modules/react-smooth/es6/util.js
function _typeof20(o) {
  "@babel/helpers - typeof";
  return _typeof20 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof20(o);
}
function ownKeys16(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread16(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys16(Object(t), true).forEach(function(r2) {
      _defineProperty17(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys16(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty17(obj, key, value) {
  key = _toPropertyKey18(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey18(arg) {
  var key = _toPrimitive18(arg, "string");
  return _typeof20(key) === "symbol" ? key : String(key);
}
function _toPrimitive18(input, hint) {
  if (_typeof20(input) !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (_typeof20(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
var getIntersectionKeys = function getIntersectionKeys2(preObj, nextObj) {
  return [Object.keys(preObj), Object.keys(nextObj)].reduce(function(a2, b) {
    return a2.filter(function(c2) {
      return b.includes(c2);
    });
  });
};
var identity5 = function identity6(param) {
  return param;
};
var getDashCase = function getDashCase2(name) {
  return name.replace(/([A-Z])/g, function(v) {
    return "-".concat(v.toLowerCase());
  });
};
var mapObject = function mapObject2(fn, obj) {
  return Object.keys(obj).reduce(function(res, key) {
    return _objectSpread16(_objectSpread16({}, res), {}, _defineProperty17({}, key, fn(key, obj[key])));
  }, {});
};
var getTransitionVal = function getTransitionVal2(props, duration, easing) {
  return props.map(function(prop) {
    return "".concat(getDashCase(prop), " ").concat(duration, "ms ").concat(easing);
  }).join(",");
};
var isDev2 = true;
var warn3 = function warn4(condition, format3, a2, b, c2, d, e, f) {
  if (isDev2 && typeof console !== "undefined" && console.warn) {
    if (format3 === void 0) {
      console.warn("LogUtils requires an error message argument");
    }
    if (!condition) {
      if (format3 === void 0) {
        console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
      } else {
        var args = [a2, b, c2, d, e, f];
        var argIndex = 0;
        console.warn(format3.replace(/%s/g, function() {
          return args[argIndex++];
        }));
      }
    }
  }
};

// node_modules/react-smooth/es6/easing.js
function _slicedToArray7(arr, i) {
  return _arrayWithHoles8(arr) || _iterableToArrayLimit7(arr, i) || _unsupportedIterableToArray12(arr, i) || _nonIterableRest8();
}
function _nonIterableRest8() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit7(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a2 = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t)
          return;
        f = false;
      } else
        for (; !(f = (e = i.call(t)).done) && (a2.push(e.value), a2.length !== l); f = true)
          ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u))
          return;
      } finally {
        if (o)
          throw n;
      }
    }
    return a2;
  }
}
function _arrayWithHoles8(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _toConsumableArray6(arr) {
  return _arrayWithoutHoles6(arr) || _iterableToArray7(arr) || _unsupportedIterableToArray12(arr) || _nonIterableSpread6();
}
function _nonIterableSpread6() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray12(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray12(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray12(o, minLen);
}
function _iterableToArray7(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles6(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray12(arr);
}
function _arrayLikeToArray12(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
var ACCURACY = 1e-4;
var cubicBezierFactor = function cubicBezierFactor2(c1, c2) {
  return [0, 3 * c1, 3 * c2 - 6 * c1, 3 * c1 - 3 * c2 + 1];
};
var multyTime = function multyTime2(params, t) {
  return params.map(function(param, i) {
    return param * Math.pow(t, i);
  }).reduce(function(pre, curr) {
    return pre + curr;
  });
};
var cubicBezier = function cubicBezier2(c1, c2) {
  return function(t) {
    var params = cubicBezierFactor(c1, c2);
    return multyTime(params, t);
  };
};
var derivativeCubicBezier = function derivativeCubicBezier2(c1, c2) {
  return function(t) {
    var params = cubicBezierFactor(c1, c2);
    var newParams = [].concat(_toConsumableArray6(params.map(function(param, i) {
      return param * i;
    }).slice(1)), [0]);
    return multyTime(newParams, t);
  };
};
var configBezier = function configBezier2() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var x1 = args[0], y1 = args[1], x2 = args[2], y2 = args[3];
  if (args.length === 1) {
    switch (args[0]) {
      case "linear":
        x1 = 0;
        y1 = 0;
        x2 = 1;
        y2 = 1;
        break;
      case "ease":
        x1 = 0.25;
        y1 = 0.1;
        x2 = 0.25;
        y2 = 1;
        break;
      case "ease-in":
        x1 = 0.42;
        y1 = 0;
        x2 = 1;
        y2 = 1;
        break;
      case "ease-out":
        x1 = 0.42;
        y1 = 0;
        x2 = 0.58;
        y2 = 1;
        break;
      case "ease-in-out":
        x1 = 0;
        y1 = 0;
        x2 = 0.58;
        y2 = 1;
        break;
      default: {
        var easing = args[0].split("(");
        if (easing[0] === "cubic-bezier" && easing[1].split(")")[0].split(",").length === 4) {
          var _easing$1$split$0$spl = easing[1].split(")")[0].split(",").map(function(x3) {
            return parseFloat(x3);
          });
          var _easing$1$split$0$spl2 = _slicedToArray7(_easing$1$split$0$spl, 4);
          x1 = _easing$1$split$0$spl2[0];
          y1 = _easing$1$split$0$spl2[1];
          x2 = _easing$1$split$0$spl2[2];
          y2 = _easing$1$split$0$spl2[3];
        } else {
          warn3(false, "[configBezier]: arguments should be one of oneOf 'linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', instead received %s", args);
        }
      }
    }
  }
  warn3([x1, x2, y1, y2].every(function(num) {
    return typeof num === "number" && num >= 0 && num <= 1;
  }), "[configBezier]: arguments should be x1, y1, x2, y2 of [0, 1] instead received %s", args);
  var curveX = cubicBezier(x1, x2);
  var curveY = cubicBezier(y1, y2);
  var derCurveX = derivativeCubicBezier(x1, x2);
  var rangeValue = function rangeValue2(value) {
    if (value > 1) {
      return 1;
    }
    if (value < 0) {
      return 0;
    }
    return value;
  };
  var bezier = function bezier2(_t) {
    var t = _t > 1 ? 1 : _t;
    var x3 = t;
    for (var i = 0; i < 8; ++i) {
      var evalT = curveX(x3) - t;
      var derVal = derCurveX(x3);
      if (Math.abs(evalT - t) < ACCURACY || derVal < ACCURACY) {
        return curveY(x3);
      }
      x3 = rangeValue(x3 - evalT / derVal);
    }
    return curveY(x3);
  };
  bezier.isStepper = false;
  return bezier;
};
var configSpring = function configSpring2() {
  var config = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  var _config$stiff = config.stiff, stiff = _config$stiff === void 0 ? 100 : _config$stiff, _config$damping = config.damping, damping = _config$damping === void 0 ? 8 : _config$damping, _config$dt = config.dt, dt = _config$dt === void 0 ? 17 : _config$dt;
  var stepper = function stepper2(currX, destX, currV) {
    var FSpring = -(currX - destX) * stiff;
    var FDamping = currV * damping;
    var newV = currV + (FSpring - FDamping) * dt / 1e3;
    var newX = currV * dt / 1e3 + currX;
    if (Math.abs(newX - destX) < ACCURACY && Math.abs(newV) < ACCURACY) {
      return [destX, 0];
    }
    return [newX, newV];
  };
  stepper.isStepper = true;
  stepper.dt = dt;
  return stepper;
};
var configEasing = function configEasing2() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }
  var easing = args[0];
  if (typeof easing === "string") {
    switch (easing) {
      case "ease":
      case "ease-in-out":
      case "ease-out":
      case "ease-in":
      case "linear":
        return configBezier(easing);
      case "spring":
        return configSpring();
      default:
        if (easing.split("(")[0] === "cubic-bezier") {
          return configBezier(easing);
        }
        warn3(false, "[configEasing]: first argument should be one of 'ease', 'ease-in', 'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', 'linear' and 'spring', instead  received %s", args);
    }
  }
  if (typeof easing === "function") {
    return easing;
  }
  warn3(false, "[configEasing]: first argument type should be function or string, instead received %s", args);
  return null;
};

// node_modules/react-smooth/es6/configUpdate.js
function _typeof21(o) {
  "@babel/helpers - typeof";
  return _typeof21 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof21(o);
}
function _toConsumableArray7(arr) {
  return _arrayWithoutHoles7(arr) || _iterableToArray8(arr) || _unsupportedIterableToArray13(arr) || _nonIterableSpread7();
}
function _nonIterableSpread7() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray8(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles7(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray13(arr);
}
function ownKeys17(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread17(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys17(Object(t), true).forEach(function(r2) {
      _defineProperty18(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys17(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty18(obj, key, value) {
  key = _toPropertyKey19(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey19(arg) {
  var key = _toPrimitive19(arg, "string");
  return _typeof21(key) === "symbol" ? key : String(key);
}
function _toPrimitive19(input, hint) {
  if (_typeof21(input) !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (_typeof21(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _slicedToArray8(arr, i) {
  return _arrayWithHoles9(arr) || _iterableToArrayLimit8(arr, i) || _unsupportedIterableToArray13(arr, i) || _nonIterableRest9();
}
function _nonIterableRest9() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray13(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray13(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray13(o, minLen);
}
function _arrayLikeToArray13(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit8(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a2 = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t)
          return;
        f = false;
      } else
        for (; !(f = (e = i.call(t)).done) && (a2.push(e.value), a2.length !== l); f = true)
          ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u))
          return;
      } finally {
        if (o)
          throw n;
      }
    }
    return a2;
  }
}
function _arrayWithHoles9(arr) {
  if (Array.isArray(arr))
    return arr;
}
var alpha = function alpha2(begin, end, k2) {
  return begin + (end - begin) * k2;
};
var needContinue = function needContinue2(_ref) {
  var from = _ref.from, to = _ref.to;
  return from !== to;
};
var calStepperVals = function calStepperVals2(easing, preVals, steps) {
  var nextStepVals = mapObject(function(key, val) {
    if (needContinue(val)) {
      var _easing = easing(val.from, val.to, val.velocity), _easing2 = _slicedToArray8(_easing, 2), newX = _easing2[0], newV = _easing2[1];
      return _objectSpread17(_objectSpread17({}, val), {}, {
        from: newX,
        velocity: newV
      });
    }
    return val;
  }, preVals);
  if (steps < 1) {
    return mapObject(function(key, val) {
      if (needContinue(val)) {
        return _objectSpread17(_objectSpread17({}, val), {}, {
          velocity: alpha(val.velocity, nextStepVals[key].velocity, steps),
          from: alpha(val.from, nextStepVals[key].from, steps)
        });
      }
      return val;
    }, preVals);
  }
  return calStepperVals2(easing, nextStepVals, steps - 1);
};
var configUpdate_default = function(from, to, easing, duration, render) {
  var interKeys = getIntersectionKeys(from, to);
  var timingStyle = interKeys.reduce(function(res, key) {
    return _objectSpread17(_objectSpread17({}, res), {}, _defineProperty18({}, key, [from[key], to[key]]));
  }, {});
  var stepperStyle = interKeys.reduce(function(res, key) {
    return _objectSpread17(_objectSpread17({}, res), {}, _defineProperty18({}, key, {
      from: from[key],
      velocity: 0,
      to: to[key]
    }));
  }, {});
  var cafId = -1;
  var preTime;
  var beginTime;
  var update = function update2() {
    return null;
  };
  var getCurrStyle = function getCurrStyle2() {
    return mapObject(function(key, val) {
      return val.from;
    }, stepperStyle);
  };
  var shouldStopAnimation = function shouldStopAnimation2() {
    return !Object.values(stepperStyle).filter(needContinue).length;
  };
  var stepperUpdate = function stepperUpdate2(now) {
    if (!preTime) {
      preTime = now;
    }
    var deltaTime = now - preTime;
    var steps = deltaTime / easing.dt;
    stepperStyle = calStepperVals(easing, stepperStyle, steps);
    render(_objectSpread17(_objectSpread17(_objectSpread17({}, from), to), getCurrStyle(stepperStyle)));
    preTime = now;
    if (!shouldStopAnimation()) {
      cafId = requestAnimationFrame(update);
    }
  };
  var timingUpdate = function timingUpdate2(now) {
    if (!beginTime) {
      beginTime = now;
    }
    var t = (now - beginTime) / duration;
    var currStyle = mapObject(function(key, val) {
      return alpha.apply(void 0, _toConsumableArray7(val).concat([easing(t)]));
    }, timingStyle);
    render(_objectSpread17(_objectSpread17(_objectSpread17({}, from), to), currStyle));
    if (t < 1) {
      cafId = requestAnimationFrame(update);
    } else {
      var finalStyle = mapObject(function(key, val) {
        return alpha.apply(void 0, _toConsumableArray7(val).concat([easing(1)]));
      }, timingStyle);
      render(_objectSpread17(_objectSpread17(_objectSpread17({}, from), to), finalStyle));
    }
  };
  update = easing.isStepper ? stepperUpdate : timingUpdate;
  return function() {
    requestAnimationFrame(update);
    return function() {
      cancelAnimationFrame(cafId);
    };
  };
};

// node_modules/react-smooth/es6/Animate.js
function _typeof22(o) {
  "@babel/helpers - typeof";
  return _typeof22 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof22(o);
}
var _excluded11 = ["children", "begin", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];
function _objectWithoutProperties10(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose11(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose11(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _toConsumableArray8(arr) {
  return _arrayWithoutHoles8(arr) || _iterableToArray9(arr) || _unsupportedIterableToArray14(arr) || _nonIterableSpread8();
}
function _nonIterableSpread8() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray14(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray14(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray14(o, minLen);
}
function _iterableToArray9(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles8(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray14(arr);
}
function _arrayLikeToArray14(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function ownKeys18(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread18(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys18(Object(t), true).forEach(function(r2) {
      _defineProperty19(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys18(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty19(obj, key, value) {
  key = _toPropertyKey20(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _classCallCheck6(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties6(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey20(descriptor.key), descriptor);
  }
}
function _createClass6(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties6(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties6(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _toPropertyKey20(arg) {
  var key = _toPrimitive20(arg, "string");
  return _typeof22(key) === "symbol" ? key : String(key);
}
function _toPrimitive20(input, hint) {
  if (_typeof22(input) !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (_typeof22(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _inherits5(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass)
    _setPrototypeOf5(subClass, superClass);
}
function _setPrototypeOf5(o, p) {
  _setPrototypeOf5 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf11(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf5(o, p);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct5();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf5(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf5(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn5(this, result);
  };
}
function _possibleConstructorReturn5(self2, call) {
  if (call && (_typeof22(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized6(self2);
}
function _assertThisInitialized6(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _isNativeReflectConstruct5() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf5(o) {
  _getPrototypeOf5 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf11(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf5(o);
}
var Animate = /* @__PURE__ */ function(_PureComponent) {
  _inherits5(Animate2, _PureComponent);
  var _super = _createSuper(Animate2);
  function Animate2(props, context) {
    var _this;
    _classCallCheck6(this, Animate2);
    _this = _super.call(this, props, context);
    var _this$props = _this.props, isActive = _this$props.isActive, attributeName = _this$props.attributeName, from = _this$props.from, to = _this$props.to, steps = _this$props.steps, children = _this$props.children, duration = _this$props.duration;
    _this.handleStyleChange = _this.handleStyleChange.bind(_assertThisInitialized6(_this));
    _this.changeStyle = _this.changeStyle.bind(_assertThisInitialized6(_this));
    if (!isActive || duration <= 0) {
      _this.state = {
        style: {}
      };
      if (typeof children === "function") {
        _this.state = {
          style: to
        };
      }
      return _possibleConstructorReturn5(_this);
    }
    if (steps && steps.length) {
      _this.state = {
        style: steps[0].style
      };
    } else if (from) {
      if (typeof children === "function") {
        _this.state = {
          style: from
        };
        return _possibleConstructorReturn5(_this);
      }
      _this.state = {
        style: attributeName ? _defineProperty19({}, attributeName, from) : from
      };
    } else {
      _this.state = {
        style: {}
      };
    }
    return _this;
  }
  _createClass6(Animate2, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props2 = this.props, isActive = _this$props2.isActive, canBegin = _this$props2.canBegin;
      this.mounted = true;
      if (!isActive || !canBegin) {
        return;
      }
      this.runAnimation(this.props);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props3 = this.props, isActive = _this$props3.isActive, canBegin = _this$props3.canBegin, attributeName = _this$props3.attributeName, shouldReAnimate = _this$props3.shouldReAnimate, to = _this$props3.to, currentFrom = _this$props3.from;
      var style = this.state.style;
      if (!canBegin) {
        return;
      }
      if (!isActive) {
        var newState = {
          style: attributeName ? _defineProperty19({}, attributeName, to) : to
        };
        if (this.state && style) {
          if (attributeName && style[attributeName] !== to || !attributeName && style !== to) {
            this.setState(newState);
          }
        }
        return;
      }
      if (deepEqual(prevProps.to, to) && prevProps.canBegin && prevProps.isActive) {
        return;
      }
      var isTriggered = !prevProps.canBegin || !prevProps.isActive;
      if (this.manager) {
        this.manager.stop();
      }
      if (this.stopJSAnimation) {
        this.stopJSAnimation();
      }
      var from = isTriggered || shouldReAnimate ? currentFrom : prevProps.to;
      if (this.state && style) {
        var _newState = {
          style: attributeName ? _defineProperty19({}, attributeName, from) : from
        };
        if (attributeName && [attributeName] !== from || !attributeName && style !== from) {
          this.setState(_newState);
        }
      }
      this.runAnimation(_objectSpread18(_objectSpread18({}, this.props), {}, {
        from,
        begin: 0
      }));
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.mounted = false;
      var onAnimationEnd2 = this.props.onAnimationEnd;
      if (this.unSubscribe) {
        this.unSubscribe();
      }
      if (this.manager) {
        this.manager.stop();
        this.manager = null;
      }
      if (this.stopJSAnimation) {
        this.stopJSAnimation();
      }
      if (onAnimationEnd2) {
        onAnimationEnd2();
      }
    }
  }, {
    key: "handleStyleChange",
    value: function handleStyleChange(style) {
      this.changeStyle(style);
    }
  }, {
    key: "changeStyle",
    value: function changeStyle(style) {
      if (this.mounted) {
        this.setState({
          style
        });
      }
    }
  }, {
    key: "runJSAnimation",
    value: function runJSAnimation(props) {
      var _this2 = this;
      var from = props.from, to = props.to, duration = props.duration, easing = props.easing, begin = props.begin, onAnimationEnd2 = props.onAnimationEnd, onAnimationStart2 = props.onAnimationStart;
      var startAnimation = configUpdate_default(from, to, configEasing(easing), duration, this.changeStyle);
      var finalStartAnimation = function finalStartAnimation2() {
        _this2.stopJSAnimation = startAnimation();
      };
      this.manager.start([onAnimationStart2, begin, finalStartAnimation, duration, onAnimationEnd2]);
    }
  }, {
    key: "runStepAnimation",
    value: function runStepAnimation(props) {
      var _this3 = this;
      var steps = props.steps, begin = props.begin, onAnimationStart2 = props.onAnimationStart;
      var _steps$ = steps[0], initialStyle = _steps$.style, _steps$$duration = _steps$.duration, initialTime = _steps$$duration === void 0 ? 0 : _steps$$duration;
      var addStyle = function addStyle2(sequence, nextItem, index) {
        if (index === 0) {
          return sequence;
        }
        var duration = nextItem.duration, _nextItem$easing = nextItem.easing, easing = _nextItem$easing === void 0 ? "ease" : _nextItem$easing, style = nextItem.style, nextProperties = nextItem.properties, onAnimationEnd2 = nextItem.onAnimationEnd;
        var preItem = index > 0 ? steps[index - 1] : nextItem;
        var properties = nextProperties || Object.keys(style);
        if (typeof easing === "function" || easing === "spring") {
          return [].concat(_toConsumableArray8(sequence), [_this3.runJSAnimation.bind(_this3, {
            from: preItem.style,
            to: style,
            duration,
            easing
          }), duration]);
        }
        var transition = getTransitionVal(properties, duration, easing);
        var newStyle = _objectSpread18(_objectSpread18(_objectSpread18({}, preItem.style), style), {}, {
          transition
        });
        return [].concat(_toConsumableArray8(sequence), [newStyle, duration, onAnimationEnd2]).filter(identity5);
      };
      return this.manager.start([onAnimationStart2].concat(_toConsumableArray8(steps.reduce(addStyle, [initialStyle, Math.max(initialTime, begin)])), [props.onAnimationEnd]));
    }
  }, {
    key: "runAnimation",
    value: function runAnimation(props) {
      if (!this.manager) {
        this.manager = createAnimateManager();
      }
      var begin = props.begin, duration = props.duration, attributeName = props.attributeName, propsTo = props.to, easing = props.easing, onAnimationStart2 = props.onAnimationStart, onAnimationEnd2 = props.onAnimationEnd, steps = props.steps, children = props.children;
      var manager = this.manager;
      this.unSubscribe = manager.subscribe(this.handleStyleChange);
      if (typeof easing === "function" || typeof children === "function" || easing === "spring") {
        this.runJSAnimation(props);
        return;
      }
      if (steps.length > 1) {
        this.runStepAnimation(props);
        return;
      }
      var to = attributeName ? _defineProperty19({}, attributeName, propsTo) : propsTo;
      var transition = getTransitionVal(Object.keys(to), duration, easing);
      manager.start([onAnimationStart2, begin, _objectSpread18(_objectSpread18({}, to), {}, {
        transition
      }), duration, onAnimationEnd2]);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props, children = _this$props4.children, begin = _this$props4.begin, duration = _this$props4.duration, attributeName = _this$props4.attributeName, easing = _this$props4.easing, isActive = _this$props4.isActive, steps = _this$props4.steps, from = _this$props4.from, to = _this$props4.to, canBegin = _this$props4.canBegin, onAnimationEnd2 = _this$props4.onAnimationEnd, shouldReAnimate = _this$props4.shouldReAnimate, onAnimationReStart = _this$props4.onAnimationReStart, others = _objectWithoutProperties10(_this$props4, _excluded11);
      var count = import_react20.Children.count(children);
      var stateStyle = this.state.style;
      if (typeof children === "function") {
        return children(stateStyle);
      }
      if (!isActive || count === 0 || duration <= 0) {
        return children;
      }
      var cloneContainer = function cloneContainer2(container) {
        var _container$props = container.props, _container$props$styl = _container$props.style, style = _container$props$styl === void 0 ? {} : _container$props$styl, className = _container$props.className;
        var res = /* @__PURE__ */ (0, import_react20.cloneElement)(container, _objectSpread18(_objectSpread18({}, others), {}, {
          style: _objectSpread18(_objectSpread18({}, style), stateStyle),
          className
        }));
        return res;
      };
      if (count === 1) {
        return cloneContainer(import_react20.Children.only(children));
      }
      return /* @__PURE__ */ import_react20.default.createElement("div", null, import_react20.Children.map(children, function(child) {
        return cloneContainer(child);
      }));
    }
  }]);
  return Animate2;
}(import_react20.PureComponent);
Animate.displayName = "Animate";
Animate.defaultProps = {
  begin: 0,
  duration: 1e3,
  from: "",
  to: "",
  attributeName: "",
  easing: "ease",
  isActive: true,
  canBegin: true,
  steps: [],
  onAnimationEnd: function onAnimationEnd() {
  },
  onAnimationStart: function onAnimationStart() {
  }
};
Animate.propTypes = {
  from: import_prop_types.default.oneOfType([import_prop_types.default.object, import_prop_types.default.string]),
  to: import_prop_types.default.oneOfType([import_prop_types.default.object, import_prop_types.default.string]),
  attributeName: import_prop_types.default.string,
  // animation duration
  duration: import_prop_types.default.number,
  begin: import_prop_types.default.number,
  easing: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.func]),
  steps: import_prop_types.default.arrayOf(import_prop_types.default.shape({
    duration: import_prop_types.default.number.isRequired,
    style: import_prop_types.default.object.isRequired,
    easing: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]), import_prop_types.default.func]),
    // transition css properties(dash case), optional
    properties: import_prop_types.default.arrayOf("string"),
    onAnimationEnd: import_prop_types.default.func
  })),
  children: import_prop_types.default.oneOfType([import_prop_types.default.node, import_prop_types.default.func]),
  isActive: import_prop_types.default.bool,
  canBegin: import_prop_types.default.bool,
  onAnimationEnd: import_prop_types.default.func,
  // decide if it should reanimate with initial from style when props change
  shouldReAnimate: import_prop_types.default.bool,
  onAnimationStart: import_prop_types.default.func,
  onAnimationReStart: import_prop_types.default.func
};
var Animate_default = Animate;

// node_modules/react-smooth/es6/AnimateGroup.js
var import_react26 = __toESM(require_react());

// node_modules/react-transition-group/esm/Transition.js
var import_prop_types3 = __toESM(require_prop_types());
var import_react22 = __toESM(require_react());
var import_react_dom = __toESM(require_react_dom());

// node_modules/react-transition-group/esm/config.js
var config_default = {
  disabled: false
};

// node_modules/react-transition-group/esm/utils/PropTypes.js
var import_prop_types2 = __toESM(require_prop_types());
var timeoutsShape = true ? import_prop_types2.default.oneOfType([import_prop_types2.default.number, import_prop_types2.default.shape({
  enter: import_prop_types2.default.number,
  exit: import_prop_types2.default.number,
  appear: import_prop_types2.default.number
}).isRequired]) : null;
var classNamesShape = true ? import_prop_types2.default.oneOfType([import_prop_types2.default.string, import_prop_types2.default.shape({
  enter: import_prop_types2.default.string,
  exit: import_prop_types2.default.string,
  active: import_prop_types2.default.string
}), import_prop_types2.default.shape({
  enter: import_prop_types2.default.string,
  enterDone: import_prop_types2.default.string,
  enterActive: import_prop_types2.default.string,
  exit: import_prop_types2.default.string,
  exitDone: import_prop_types2.default.string,
  exitActive: import_prop_types2.default.string
})]) : null;

// node_modules/react-transition-group/esm/TransitionGroupContext.js
var import_react21 = __toESM(require_react());
var TransitionGroupContext_default = import_react21.default.createContext(null);

// node_modules/react-transition-group/esm/utils/reflow.js
var forceReflow = function forceReflow2(node) {
  return node.scrollTop;
};

// node_modules/react-transition-group/esm/Transition.js
var UNMOUNTED = "unmounted";
var EXITED = "exited";
var ENTERING = "entering";
var ENTERED = "entered";
var EXITING = "exiting";
var Transition = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(Transition2, _React$Component);
  function Transition2(props, context) {
    var _this;
    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context;
    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;
    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }
    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }
  Transition2.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;
    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }
    return null;
  };
  var _proto = Transition2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;
    if (prevProps !== this.props) {
      var status = this.state.status;
      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }
    this.updateStatus(false, nextStatus);
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };
  _proto.getTimeouts = function getTimeouts() {
    var timeout2 = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout2;
    if (timeout2 != null && typeof timeout2 !== "number") {
      exit = timeout2.exit;
      enter = timeout2.enter;
      appear = timeout2.appear !== void 0 ? timeout2.appear : enter;
    }
    return {
      exit,
      enter,
      appear
    };
  };
  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }
    if (nextStatus !== null) {
      this.cancelNextCallback();
      if (nextStatus === ENTERING) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var node = this.props.nodeRef ? this.props.nodeRef.current : import_react_dom.default.findDOMNode(this);
          if (node)
            forceReflow(node);
        }
        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };
  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;
    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;
    var _ref2 = this.props.nodeRef ? [appearing] : [import_react_dom.default.findDOMNode(this), appearing], maybeNode = _ref2[0], maybeAppearing = _ref2[1];
    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter;
    if (!mounting && !enter || config_default.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function() {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }
    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function() {
      _this2.props.onEntering(maybeNode, maybeAppearing);
      _this2.onTransitionEnd(enterTimeout, function() {
        _this2.safeSetState({
          status: ENTERED
        }, function() {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };
  _proto.performExit = function performExit() {
    var _this3 = this;
    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? void 0 : import_react_dom.default.findDOMNode(this);
    if (!exit || config_default.disabled) {
      this.safeSetState({
        status: EXITED
      }, function() {
        _this3.props.onExited(maybeNode);
      });
      return;
    }
    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function() {
      _this3.props.onExiting(maybeNode);
      _this3.onTransitionEnd(timeouts.exit, function() {
        _this3.safeSetState({
          status: EXITED
        }, function() {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };
  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };
  _proto.safeSetState = function safeSetState(nextState, callback) {
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };
  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;
    var active = true;
    this.nextCallback = function(event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };
    this.nextCallback.cancel = function() {
      active = false;
    };
    return this.nextCallback;
  };
  _proto.onTransitionEnd = function onTransitionEnd(timeout2, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : import_react_dom.default.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout2 == null && !this.props.addEndListener;
    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback], maybeNode = _ref3[0], maybeNextCallback = _ref3[1];
      this.props.addEndListener(maybeNode, maybeNextCallback);
    }
    if (timeout2 != null) {
      setTimeout(this.nextCallback, timeout2);
    }
  };
  _proto.render = function render() {
    var status = this.state.status;
    if (status === UNMOUNTED) {
      return null;
    }
    var _this$props = this.props, children = _this$props.children, _in = _this$props.in, _mountOnEnter = _this$props.mountOnEnter, _unmountOnExit = _this$props.unmountOnExit, _appear = _this$props.appear, _enter = _this$props.enter, _exit = _this$props.exit, _timeout = _this$props.timeout, _addEndListener = _this$props.addEndListener, _onEnter = _this$props.onEnter, _onEntering = _this$props.onEntering, _onEntered = _this$props.onEntered, _onExit = _this$props.onExit, _onExiting = _this$props.onExiting, _onExited = _this$props.onExited, _nodeRef = _this$props.nodeRef, childProps = _objectWithoutPropertiesLoose(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ import_react22.default.createElement(TransitionGroupContext_default.Provider, {
        value: null
      }, typeof children === "function" ? children(status, childProps) : import_react22.default.cloneElement(import_react22.default.Children.only(children), childProps))
    );
  };
  return Transition2;
}(import_react22.default.Component);
Transition.contextType = TransitionGroupContext_default;
Transition.propTypes = true ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: import_prop_types3.default.shape({
    current: typeof Element === "undefined" ? import_prop_types3.default.any : function(propValue, key, componentName, location, propFullName, secret) {
      var value = propValue[key];
      return import_prop_types3.default.instanceOf(value && "ownerDocument" in value ? value.ownerDocument.defaultView.Element : Element)(propValue, key, componentName, location, propFullName, secret);
    }
  }),
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: import_prop_types3.default.oneOfType([import_prop_types3.default.func.isRequired, import_prop_types3.default.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: import_prop_types3.default.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: import_prop_types3.default.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: import_prop_types3.default.bool,
  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: import_prop_types3.default.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: import_prop_types3.default.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: import_prop_types3.default.bool,
  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function timeout(props) {
    var pt = timeoutsShape;
    if (!props.addEndListener)
      pt = pt.isRequired;
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    return pt.apply(void 0, [props].concat(args));
  },
  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: import_prop_types3.default.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: import_prop_types3.default.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: import_prop_types3.default.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: import_prop_types3.default.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: import_prop_types3.default.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: import_prop_types3.default.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: import_prop_types3.default.func
} : {};
function noop() {
}
Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
var Transition_default = Transition;

// node_modules/react-transition-group/esm/TransitionGroup.js
var import_prop_types4 = __toESM(require_prop_types());
var import_react24 = __toESM(require_react());

// node_modules/react-transition-group/esm/utils/ChildMapping.js
var import_react23 = __toESM(require_react());
function getChildMapping(children, mapFn) {
  var mapper = function mapper2(child) {
    return mapFn && (0, import_react23.isValidElement)(child) ? mapFn(child) : child;
  };
  var result = /* @__PURE__ */ Object.create(null);
  if (children)
    import_react23.Children.map(children, function(c2) {
      return c2;
    }).forEach(function(child) {
      result[child.key] = mapper(child);
    });
  return result;
}
function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};
  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  }
  var nextKeysPending = /* @__PURE__ */ Object.create(null);
  var pendingKeys = [];
  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }
  var i;
  var childMapping = {};
  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }
    childMapping[nextKey] = getValueForKey(nextKey);
  }
  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }
  return childMapping;
}
function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}
function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function(child) {
    return (0, import_react23.cloneElement)(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, "appear", props),
      enter: getProp(child, "enter", props),
      exit: getProp(child, "exit", props)
    });
  });
}
function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function(key) {
    var child = children[key];
    if (!(0, import_react23.isValidElement)(child))
      return;
    var hasPrev = key in prevChildMapping;
    var hasNext = key in nextChildMapping;
    var prevChild = prevChildMapping[key];
    var isLeaving = (0, import_react23.isValidElement)(prevChild) && !prevChild.props.in;
    if (hasNext && (!hasPrev || isLeaving)) {
      children[key] = (0, import_react23.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, "exit", nextProps),
        enter: getProp(child, "enter", nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      children[key] = (0, import_react23.cloneElement)(child, {
        in: false
      });
    } else if (hasNext && hasPrev && (0, import_react23.isValidElement)(prevChild)) {
      children[key] = (0, import_react23.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, "exit", nextProps),
        enter: getProp(child, "enter", nextProps)
      });
    }
  });
  return children;
}

// node_modules/react-transition-group/esm/TransitionGroup.js
var values = Object.values || function(obj) {
  return Object.keys(obj).map(function(k2) {
    return obj[k2];
  });
};
var defaultProps2 = {
  component: "div",
  childFactory: function childFactory(child) {
    return child;
  }
};
var TransitionGroup = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(TransitionGroup2, _React$Component);
  function TransitionGroup2(props, context) {
    var _this;
    _this = _React$Component.call(this, props, context) || this;
    var handleExited = _this.handleExited.bind(_assertThisInitialized(_this));
    _this.state = {
      contextValue: {
        isMounting: true
      },
      handleExited,
      firstRender: true
    };
    return _this;
  }
  var _proto = TransitionGroup2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true;
    this.setState({
      contextValue: {
        isMounting: false
      }
    });
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };
  TransitionGroup2.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children, handleExited = _ref.handleExited, firstRender = _ref.firstRender;
    return {
      children: firstRender ? getInitialChildMapping(nextProps, handleExited) : getNextChildMapping(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  };
  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = getChildMapping(this.props.children);
    if (child.key in currentChildMapping)
      return;
    if (child.props.onExited) {
      child.props.onExited(node);
    }
    if (this.mounted) {
      this.setState(function(state) {
        var children = _extends({}, state.children);
        delete children[child.key];
        return {
          children
        };
      });
    }
  };
  _proto.render = function render() {
    var _this$props = this.props, Component4 = _this$props.component, childFactory2 = _this$props.childFactory, props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);
    var contextValue = this.state.contextValue;
    var children = values(this.state.children).map(childFactory2);
    delete props.appear;
    delete props.enter;
    delete props.exit;
    if (Component4 === null) {
      return /* @__PURE__ */ import_react24.default.createElement(TransitionGroupContext_default.Provider, {
        value: contextValue
      }, children);
    }
    return /* @__PURE__ */ import_react24.default.createElement(TransitionGroupContext_default.Provider, {
      value: contextValue
    }, /* @__PURE__ */ import_react24.default.createElement(Component4, props, children));
  };
  return TransitionGroup2;
}(import_react24.default.Component);
TransitionGroup.propTypes = true ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: import_prop_types4.default.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: import_prop_types4.default.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: import_prop_types4.default.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: import_prop_types4.default.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: import_prop_types4.default.bool,
  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: import_prop_types4.default.func
} : {};
TransitionGroup.defaultProps = defaultProps2;
var TransitionGroup_default = TransitionGroup;

// node_modules/react-smooth/es6/AnimateGroup.js
var import_prop_types6 = __toESM(require_prop_types());

// node_modules/react-smooth/es6/AnimateGroupChild.js
var import_react25 = __toESM(require_react());
var import_prop_types5 = __toESM(require_prop_types());
var _excluded12 = ["children", "appearOptions", "enterOptions", "leaveOptions"];
function _typeof23(o) {
  "@babel/helpers - typeof";
  return _typeof23 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof23(o);
}
function _extends13() {
  _extends13 = Object.assign ? Object.assign.bind() : function(target) {
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
  return _extends13.apply(this, arguments);
}
function _objectWithoutProperties11(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose12(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose12(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function ownKeys19(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread19(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys19(Object(t), true).forEach(function(r2) {
      _defineProperty20(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys19(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _classCallCheck7(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties7(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey21(descriptor.key), descriptor);
  }
}
function _createClass7(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties7(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties7(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _inherits6(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass)
    _setPrototypeOf6(subClass, superClass);
}
function _setPrototypeOf6(o, p) {
  _setPrototypeOf6 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf11(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf6(o, p);
}
function _createSuper2(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct6();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf6(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf6(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn6(this, result);
  };
}
function _possibleConstructorReturn6(self2, call) {
  if (call && (_typeof23(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized7(self2);
}
function _assertThisInitialized7(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _isNativeReflectConstruct6() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf6(o) {
  _getPrototypeOf6 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf11(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf6(o);
}
function _defineProperty20(obj, key, value) {
  key = _toPropertyKey21(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey21(arg) {
  var key = _toPrimitive21(arg, "string");
  return _typeof23(key) === "symbol" ? key : String(key);
}
function _toPrimitive21(input, hint) {
  if (_typeof23(input) !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (_typeof23(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
var parseDurationOfSingleTransition = function parseDurationOfSingleTransition2() {
  var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  var steps = options.steps, duration = options.duration;
  if (steps && steps.length) {
    return steps.reduce(function(result, entry) {
      return result + (Number.isFinite(entry.duration) && entry.duration > 0 ? entry.duration : 0);
    }, 0);
  }
  if (Number.isFinite(duration)) {
    return duration;
  }
  return 0;
};
var AnimateGroupChild = /* @__PURE__ */ function(_Component) {
  _inherits6(AnimateGroupChild2, _Component);
  var _super = _createSuper2(AnimateGroupChild2);
  function AnimateGroupChild2() {
    var _this;
    _classCallCheck7(this, AnimateGroupChild2);
    _this = _super.call(this);
    _defineProperty20(_assertThisInitialized7(_this), "handleEnter", function(node, isAppearing) {
      var _this$props = _this.props, appearOptions = _this$props.appearOptions, enterOptions = _this$props.enterOptions;
      _this.handleStyleActive(isAppearing ? appearOptions : enterOptions);
    });
    _defineProperty20(_assertThisInitialized7(_this), "handleExit", function() {
      var leaveOptions = _this.props.leaveOptions;
      _this.handleStyleActive(leaveOptions);
    });
    _this.state = {
      isActive: false
    };
    return _this;
  }
  _createClass7(AnimateGroupChild2, [{
    key: "handleStyleActive",
    value: function handleStyleActive(style) {
      if (style) {
        var onAnimationEnd2 = style.onAnimationEnd ? function() {
          style.onAnimationEnd();
        } : null;
        this.setState(_objectSpread19(_objectSpread19({}, style), {}, {
          onAnimationEnd: onAnimationEnd2,
          isActive: true
        }));
      }
    }
  }, {
    key: "parseTimeout",
    value: function parseTimeout() {
      var _this$props2 = this.props, appearOptions = _this$props2.appearOptions, enterOptions = _this$props2.enterOptions, leaveOptions = _this$props2.leaveOptions;
      return parseDurationOfSingleTransition(appearOptions) + parseDurationOfSingleTransition(enterOptions) + parseDurationOfSingleTransition(leaveOptions);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props3 = this.props, children = _this$props3.children, appearOptions = _this$props3.appearOptions, enterOptions = _this$props3.enterOptions, leaveOptions = _this$props3.leaveOptions, props = _objectWithoutProperties11(_this$props3, _excluded12);
      return /* @__PURE__ */ import_react25.default.createElement(Transition_default, _extends13({}, props, {
        onEnter: this.handleEnter,
        onExit: this.handleExit,
        timeout: this.parseTimeout()
      }), function() {
        return /* @__PURE__ */ import_react25.default.createElement(Animate_default, _this2.state, import_react25.Children.only(children));
      });
    }
  }]);
  return AnimateGroupChild2;
}(import_react25.Component);
AnimateGroupChild.propTypes = {
  appearOptions: import_prop_types5.default.object,
  enterOptions: import_prop_types5.default.object,
  leaveOptions: import_prop_types5.default.object,
  children: import_prop_types5.default.element
};
var AnimateGroupChild_default = AnimateGroupChild;

// node_modules/react-smooth/es6/AnimateGroup.js
function AnimateGroup(props) {
  var component = props.component, children = props.children, appear = props.appear, enter = props.enter, leave = props.leave;
  return /* @__PURE__ */ import_react26.default.createElement(TransitionGroup_default, {
    component
  }, import_react26.Children.map(children, function(child, index) {
    return /* @__PURE__ */ import_react26.default.createElement(AnimateGroupChild_default, {
      appearOptions: appear,
      enterOptions: enter,
      leaveOptions: leave,
      key: "child-".concat(index)
      // eslint-disable-line
    }, child);
  }));
}
AnimateGroup.propTypes = {
  appear: import_prop_types6.default.object,
  enter: import_prop_types6.default.object,
  leave: import_prop_types6.default.object,
  children: import_prop_types6.default.oneOfType([import_prop_types6.default.array, import_prop_types6.default.element]),
  component: import_prop_types6.default.any
};
AnimateGroup.defaultProps = {
  component: "span"
};

// node_modules/react-smooth/es6/index.js
var es6_default = Animate_default;

// node_modules/recharts/es6/shape/Rectangle.js
function _typeof24(o) {
  "@babel/helpers - typeof";
  return _typeof24 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof24(o);
}
function _extends14() {
  _extends14 = Object.assign ? Object.assign.bind() : function(target) {
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
  return _extends14.apply(this, arguments);
}
function _slicedToArray9(arr, i) {
  return _arrayWithHoles10(arr) || _iterableToArrayLimit9(arr, i) || _unsupportedIterableToArray15(arr, i) || _nonIterableRest10();
}
function _nonIterableRest10() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray15(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray15(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray15(o, minLen);
}
function _arrayLikeToArray15(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit9(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a2 = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t)
          return;
        f = false;
      } else
        for (; !(f = (e = i.call(t)).done) && (a2.push(e.value), a2.length !== l); f = true)
          ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u))
          return;
      } finally {
        if (o)
          throw n;
      }
    }
    return a2;
  }
}
function _arrayWithHoles10(arr) {
  if (Array.isArray(arr))
    return arr;
}
function ownKeys20(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread20(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys20(Object(t), true).forEach(function(r2) {
      _defineProperty21(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys20(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty21(obj, key, value) {
  key = _toPropertyKey22(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey22(t) {
  var i = _toPrimitive22(t, "string");
  return "symbol" == _typeof24(i) ? i : String(i);
}
function _toPrimitive22(t, r) {
  if ("object" != _typeof24(t) || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof24(i))
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var getRectanglePath = function getRectanglePath2(x2, y2, width, height, radius) {
  var maxRadius = Math.min(Math.abs(width) / 2, Math.abs(height) / 2);
  var ySign = height >= 0 ? 1 : -1;
  var xSign = width >= 0 ? 1 : -1;
  var clockWise = height >= 0 && width >= 0 || height < 0 && width < 0 ? 1 : 0;
  var path2;
  if (maxRadius > 0 && radius instanceof Array) {
    var newRadius = [0, 0, 0, 0];
    for (var i = 0, len = 4; i < len; i++) {
      newRadius[i] = radius[i] > maxRadius ? maxRadius : radius[i];
    }
    path2 = "M".concat(x2, ",").concat(y2 + ySign * newRadius[0]);
    if (newRadius[0] > 0) {
      path2 += "A ".concat(newRadius[0], ",").concat(newRadius[0], ",0,0,").concat(clockWise, ",").concat(x2 + xSign * newRadius[0], ",").concat(y2);
    }
    path2 += "L ".concat(x2 + width - xSign * newRadius[1], ",").concat(y2);
    if (newRadius[1] > 0) {
      path2 += "A ".concat(newRadius[1], ",").concat(newRadius[1], ",0,0,").concat(clockWise, ",\n        ").concat(x2 + width, ",").concat(y2 + ySign * newRadius[1]);
    }
    path2 += "L ".concat(x2 + width, ",").concat(y2 + height - ySign * newRadius[2]);
    if (newRadius[2] > 0) {
      path2 += "A ".concat(newRadius[2], ",").concat(newRadius[2], ",0,0,").concat(clockWise, ",\n        ").concat(x2 + width - xSign * newRadius[2], ",").concat(y2 + height);
    }
    path2 += "L ".concat(x2 + xSign * newRadius[3], ",").concat(y2 + height);
    if (newRadius[3] > 0) {
      path2 += "A ".concat(newRadius[3], ",").concat(newRadius[3], ",0,0,").concat(clockWise, ",\n        ").concat(x2, ",").concat(y2 + height - ySign * newRadius[3]);
    }
    path2 += "Z";
  } else if (maxRadius > 0 && radius === +radius && radius > 0) {
    var _newRadius = Math.min(maxRadius, radius);
    path2 = "M ".concat(x2, ",").concat(y2 + ySign * _newRadius, "\n            A ").concat(_newRadius, ",").concat(_newRadius, ",0,0,").concat(clockWise, ",").concat(x2 + xSign * _newRadius, ",").concat(y2, "\n            L ").concat(x2 + width - xSign * _newRadius, ",").concat(y2, "\n            A ").concat(_newRadius, ",").concat(_newRadius, ",0,0,").concat(clockWise, ",").concat(x2 + width, ",").concat(y2 + ySign * _newRadius, "\n            L ").concat(x2 + width, ",").concat(y2 + height - ySign * _newRadius, "\n            A ").concat(_newRadius, ",").concat(_newRadius, ",0,0,").concat(clockWise, ",").concat(x2 + width - xSign * _newRadius, ",").concat(y2 + height, "\n            L ").concat(x2 + xSign * _newRadius, ",").concat(y2 + height, "\n            A ").concat(_newRadius, ",").concat(_newRadius, ",0,0,").concat(clockWise, ",").concat(x2, ",").concat(y2 + height - ySign * _newRadius, " Z");
  } else {
    path2 = "M ".concat(x2, ",").concat(y2, " h ").concat(width, " v ").concat(height, " h ").concat(-width, " Z");
  }
  return path2;
};
var isInRectangle = function isInRectangle2(point4, rect) {
  if (!point4 || !rect) {
    return false;
  }
  var px = point4.x, py = point4.y;
  var x2 = rect.x, y2 = rect.y, width = rect.width, height = rect.height;
  if (Math.abs(width) > 0 && Math.abs(height) > 0) {
    var minX = Math.min(x2, x2 + width);
    var maxX = Math.max(x2, x2 + width);
    var minY = Math.min(y2, y2 + height);
    var maxY = Math.max(y2, y2 + height);
    return px >= minX && px <= maxX && py >= minY && py <= maxY;
  }
  return false;
};
var defaultProps3 = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  // The radius of border
  // The radius of four corners when radius is a number
  // The radius of left-top, right-top, right-bottom, left-bottom when radius is an array
  radius: 0,
  isAnimationActive: false,
  isUpdateAnimationActive: false,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
};
var Rectangle = function Rectangle2(rectangleProps) {
  var props = _objectSpread20(_objectSpread20({}, defaultProps3), rectangleProps);
  var pathRef = (0, import_react27.useRef)();
  var _useState = (0, import_react27.useState)(-1), _useState2 = _slicedToArray9(_useState, 2), totalLength = _useState2[0], setTotalLength = _useState2[1];
  (0, import_react27.useEffect)(function() {
    if (pathRef.current && pathRef.current.getTotalLength) {
      try {
        var pathTotalLength = pathRef.current.getTotalLength();
        if (pathTotalLength) {
          setTotalLength(pathTotalLength);
        }
      } catch (err) {
      }
    }
  }, []);
  var x2 = props.x, y2 = props.y, width = props.width, height = props.height, radius = props.radius, className = props.className;
  var animationEasing = props.animationEasing, animationDuration = props.animationDuration, animationBegin = props.animationBegin, isAnimationActive = props.isAnimationActive, isUpdateAnimationActive = props.isUpdateAnimationActive;
  if (x2 !== +x2 || y2 !== +y2 || width !== +width || height !== +height || width === 0 || height === 0) {
    return null;
  }
  var layerClass = clsx_default("recharts-rectangle", className);
  if (!isUpdateAnimationActive) {
    return /* @__PURE__ */ import_react27.default.createElement("path", _extends14({}, filterProps(props, true), {
      className: layerClass,
      d: getRectanglePath(x2, y2, width, height, radius)
    }));
  }
  return /* @__PURE__ */ import_react27.default.createElement(es6_default, {
    canBegin: totalLength > 0,
    from: {
      width,
      height,
      x: x2,
      y: y2
    },
    to: {
      width,
      height,
      x: x2,
      y: y2
    },
    duration: animationDuration,
    animationEasing,
    isActive: isUpdateAnimationActive
  }, function(_ref) {
    var currWidth = _ref.width, currHeight = _ref.height, currX = _ref.x, currY = _ref.y;
    return /* @__PURE__ */ import_react27.default.createElement(es6_default, {
      canBegin: totalLength > 0,
      from: "0px ".concat(totalLength === -1 ? 1 : totalLength, "px"),
      to: "".concat(totalLength, "px 0px"),
      attributeName: "strokeDasharray",
      begin: animationBegin,
      duration: animationDuration,
      isActive: isAnimationActive,
      easing: animationEasing
    }, /* @__PURE__ */ import_react27.default.createElement("path", _extends14({}, filterProps(props, true), {
      className: layerClass,
      d: getRectanglePath(currX, currY, currWidth, currHeight, radius),
      ref: pathRef
    })));
  });
};

// node_modules/recharts/es6/shape/Dot.js
var import_react28 = __toESM(require_react());
function _extends15() {
  _extends15 = Object.assign ? Object.assign.bind() : function(target) {
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
  return _extends15.apply(this, arguments);
}
var Dot = function Dot2(props) {
  var cx = props.cx, cy = props.cy, r = props.r, className = props.className;
  var layerClass = clsx_default("recharts-dot", className);
  if (cx === +cx && cy === +cy && r === +r) {
    return /* @__PURE__ */ import_react28.default.createElement("circle", _extends15({}, filterProps(props, false), adaptEventHandlers(props), {
      className: layerClass,
      cx,
      cy,
      r
    }));
  }
  return null;
};

// node_modules/recharts/es6/shape/Cross.js
var import_react29 = __toESM(require_react());
function _typeof25(o) {
  "@babel/helpers - typeof";
  return _typeof25 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof25(o);
}
var _excluded13 = ["x", "y", "top", "left", "width", "height", "className"];
function _extends16() {
  _extends16 = Object.assign ? Object.assign.bind() : function(target) {
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
  return _extends16.apply(this, arguments);
}
function ownKeys21(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread21(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys21(Object(t), true).forEach(function(r2) {
      _defineProperty22(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys21(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty22(obj, key, value) {
  key = _toPropertyKey23(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey23(t) {
  var i = _toPrimitive23(t, "string");
  return "symbol" == _typeof25(i) ? i : String(i);
}
function _toPrimitive23(t, r) {
  if ("object" != _typeof25(t) || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof25(i))
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _objectWithoutProperties12(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose13(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose13(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var getPath3 = function getPath4(x2, y2, width, height, top, left) {
  return "M".concat(x2, ",").concat(top, "v").concat(height, "M").concat(left, ",").concat(y2, "h").concat(width);
};
var Cross = function Cross2(_ref) {
  var _ref$x = _ref.x, x2 = _ref$x === void 0 ? 0 : _ref$x, _ref$y = _ref.y, y2 = _ref$y === void 0 ? 0 : _ref$y, _ref$top = _ref.top, top = _ref$top === void 0 ? 0 : _ref$top, _ref$left = _ref.left, left = _ref$left === void 0 ? 0 : _ref$left, _ref$width = _ref.width, width = _ref$width === void 0 ? 0 : _ref$width, _ref$height = _ref.height, height = _ref$height === void 0 ? 0 : _ref$height, className = _ref.className, rest = _objectWithoutProperties12(_ref, _excluded13);
  var props = _objectSpread21({
    x: x2,
    y: y2,
    top,
    left,
    width,
    height
  }, rest);
  if (!isNumber(x2) || !isNumber(y2) || !isNumber(width) || !isNumber(height) || !isNumber(top) || !isNumber(left)) {
    return null;
  }
  return /* @__PURE__ */ import_react29.default.createElement("path", _extends16({}, filterProps(props, true), {
    className: clsx_default("recharts-cross", className),
    d: getPath3(x2, y2, width, height, top, left)
  }));
};

// node_modules/recharts/es6/util/ActiveShapeUtils.js
var import_react31 = __toESM(require_react());
var import_isFunction8 = __toESM(require_isFunction());
var import_isPlainObject = __toESM(require_isPlainObject());
var import_isBoolean = __toESM(require_isBoolean());
var import_isEqual2 = __toESM(require_isEqual());

// node_modules/recharts/es6/shape/Trapezoid.js
var import_react30 = __toESM(require_react());
function _typeof26(o) {
  "@babel/helpers - typeof";
  return _typeof26 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof26(o);
}
function _extends17() {
  _extends17 = Object.assign ? Object.assign.bind() : function(target) {
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
  return _extends17.apply(this, arguments);
}
function _slicedToArray10(arr, i) {
  return _arrayWithHoles11(arr) || _iterableToArrayLimit10(arr, i) || _unsupportedIterableToArray16(arr, i) || _nonIterableRest11();
}
function _nonIterableRest11() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray16(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray16(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray16(o, minLen);
}
function _arrayLikeToArray16(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit10(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a2 = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t)
          return;
        f = false;
      } else
        for (; !(f = (e = i.call(t)).done) && (a2.push(e.value), a2.length !== l); f = true)
          ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u))
          return;
      } finally {
        if (o)
          throw n;
      }
    }
    return a2;
  }
}
function _arrayWithHoles11(arr) {
  if (Array.isArray(arr))
    return arr;
}
function ownKeys22(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread22(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys22(Object(t), true).forEach(function(r2) {
      _defineProperty23(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys22(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty23(obj, key, value) {
  key = _toPropertyKey24(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey24(t) {
  var i = _toPrimitive24(t, "string");
  return "symbol" == _typeof26(i) ? i : String(i);
}
function _toPrimitive24(t, r) {
  if ("object" != _typeof26(t) || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof26(i))
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var getTrapezoidPath = function getTrapezoidPath2(x2, y2, upperWidth, lowerWidth, height) {
  var widthGap = upperWidth - lowerWidth;
  var path2;
  path2 = "M ".concat(x2, ",").concat(y2);
  path2 += "L ".concat(x2 + upperWidth, ",").concat(y2);
  path2 += "L ".concat(x2 + upperWidth - widthGap / 2, ",").concat(y2 + height);
  path2 += "L ".concat(x2 + upperWidth - widthGap / 2 - lowerWidth, ",").concat(y2 + height);
  path2 += "L ".concat(x2, ",").concat(y2, " Z");
  return path2;
};
var defaultProps4 = {
  x: 0,
  y: 0,
  upperWidth: 0,
  lowerWidth: 0,
  height: 0,
  isUpdateAnimationActive: false,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
};
var Trapezoid = function Trapezoid2(props) {
  var trapezoidProps = _objectSpread22(_objectSpread22({}, defaultProps4), props);
  var pathRef = (0, import_react30.useRef)();
  var _useState = (0, import_react30.useState)(-1), _useState2 = _slicedToArray10(_useState, 2), totalLength = _useState2[0], setTotalLength = _useState2[1];
  (0, import_react30.useEffect)(function() {
    if (pathRef.current && pathRef.current.getTotalLength) {
      try {
        var pathTotalLength = pathRef.current.getTotalLength();
        if (pathTotalLength) {
          setTotalLength(pathTotalLength);
        }
      } catch (err) {
      }
    }
  }, []);
  var x2 = trapezoidProps.x, y2 = trapezoidProps.y, upperWidth = trapezoidProps.upperWidth, lowerWidth = trapezoidProps.lowerWidth, height = trapezoidProps.height, className = trapezoidProps.className;
  var animationEasing = trapezoidProps.animationEasing, animationDuration = trapezoidProps.animationDuration, animationBegin = trapezoidProps.animationBegin, isUpdateAnimationActive = trapezoidProps.isUpdateAnimationActive;
  if (x2 !== +x2 || y2 !== +y2 || upperWidth !== +upperWidth || lowerWidth !== +lowerWidth || height !== +height || upperWidth === 0 && lowerWidth === 0 || height === 0) {
    return null;
  }
  var layerClass = clsx_default("recharts-trapezoid", className);
  if (!isUpdateAnimationActive) {
    return /* @__PURE__ */ import_react30.default.createElement("g", null, /* @__PURE__ */ import_react30.default.createElement("path", _extends17({}, filterProps(trapezoidProps, true), {
      className: layerClass,
      d: getTrapezoidPath(x2, y2, upperWidth, lowerWidth, height)
    })));
  }
  return /* @__PURE__ */ import_react30.default.createElement(es6_default, {
    canBegin: totalLength > 0,
    from: {
      upperWidth: 0,
      lowerWidth: 0,
      height,
      x: x2,
      y: y2
    },
    to: {
      upperWidth,
      lowerWidth,
      height,
      x: x2,
      y: y2
    },
    duration: animationDuration,
    animationEasing,
    isActive: isUpdateAnimationActive
  }, function(_ref) {
    var currUpperWidth = _ref.upperWidth, currLowerWidth = _ref.lowerWidth, currHeight = _ref.height, currX = _ref.x, currY = _ref.y;
    return /* @__PURE__ */ import_react30.default.createElement(es6_default, {
      canBegin: totalLength > 0,
      from: "0px ".concat(totalLength === -1 ? 1 : totalLength, "px"),
      to: "".concat(totalLength, "px 0px"),
      attributeName: "strokeDasharray",
      begin: animationBegin,
      duration: animationDuration,
      easing: animationEasing
    }, /* @__PURE__ */ import_react30.default.createElement("path", _extends17({}, filterProps(trapezoidProps, true), {
      className: layerClass,
      d: getTrapezoidPath(currX, currY, currUpperWidth, currLowerWidth, currHeight),
      ref: pathRef
    })));
  });
};

// node_modules/recharts/es6/util/ActiveShapeUtils.js
var _excluded14 = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];
function _typeof27(o) {
  "@babel/helpers - typeof";
  return _typeof27 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof27(o);
}
function _objectWithoutProperties13(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose14(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose14(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function ownKeys23(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread23(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys23(Object(t), true).forEach(function(r2) {
      _defineProperty24(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys23(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty24(obj, key, value) {
  key = _toPropertyKey25(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey25(t) {
  var i = _toPrimitive25(t, "string");
  return "symbol" == _typeof27(i) ? i : String(i);
}
function _toPrimitive25(t, r) {
  if ("object" != _typeof27(t) || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof27(i))
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function defaultPropTransformer(option, props) {
  return _objectSpread23(_objectSpread23({}, props), option);
}
function isSymbolsProps(shapeType, _elementProps) {
  return shapeType === "symbols";
}
function ShapeSelector(_ref) {
  var shapeType = _ref.shapeType, elementProps = _ref.elementProps;
  switch (shapeType) {
    case "rectangle":
      return /* @__PURE__ */ import_react31.default.createElement(Rectangle, elementProps);
    case "trapezoid":
      return /* @__PURE__ */ import_react31.default.createElement(Trapezoid, elementProps);
    case "sector":
      return /* @__PURE__ */ import_react31.default.createElement(Sector, elementProps);
    case "symbols":
      if (isSymbolsProps(shapeType, elementProps)) {
        return /* @__PURE__ */ import_react31.default.createElement(Symbols, elementProps);
      }
      break;
    default:
      return null;
  }
}
function getPropsFromShapeOption(option) {
  if (/* @__PURE__ */ (0, import_react31.isValidElement)(option)) {
    return option.props;
  }
  return option;
}
function Shape(_ref2) {
  var option = _ref2.option, shapeType = _ref2.shapeType, _ref2$propTransformer = _ref2.propTransformer, propTransformer = _ref2$propTransformer === void 0 ? defaultPropTransformer : _ref2$propTransformer, _ref2$activeClassName = _ref2.activeClassName, activeClassName = _ref2$activeClassName === void 0 ? "recharts-active-shape" : _ref2$activeClassName, isActive = _ref2.isActive, props = _objectWithoutProperties13(_ref2, _excluded14);
  var shape;
  if (/* @__PURE__ */ (0, import_react31.isValidElement)(option)) {
    shape = /* @__PURE__ */ (0, import_react31.cloneElement)(option, _objectSpread23(_objectSpread23({}, props), getPropsFromShapeOption(option)));
  } else if ((0, import_isFunction8.default)(option)) {
    shape = option(props);
  } else if ((0, import_isPlainObject.default)(option) && !(0, import_isBoolean.default)(option)) {
    var nextProps = propTransformer(option, props);
    shape = /* @__PURE__ */ import_react31.default.createElement(ShapeSelector, {
      shapeType,
      elementProps: nextProps
    });
  } else {
    var elementProps = props;
    shape = /* @__PURE__ */ import_react31.default.createElement(ShapeSelector, {
      shapeType,
      elementProps
    });
  }
  if (isActive) {
    return /* @__PURE__ */ import_react31.default.createElement(Layer, {
      className: activeClassName
    }, shape);
  }
  return shape;
}
function isFunnel(graphicalItem, _item) {
  return _item != null && "trapezoids" in graphicalItem.props;
}
function isPie(graphicalItem, _item) {
  return _item != null && "sectors" in graphicalItem.props;
}
function isScatter(graphicalItem, _item) {
  return _item != null && "points" in graphicalItem.props;
}
function compareFunnel(shapeData, activeTooltipItem) {
  var _activeTooltipItem$la, _activeTooltipItem$la2;
  var xMatches = shapeData.x === (activeTooltipItem === null || activeTooltipItem === void 0 || (_activeTooltipItem$la = activeTooltipItem.labelViewBox) === null || _activeTooltipItem$la === void 0 ? void 0 : _activeTooltipItem$la.x) || shapeData.x === activeTooltipItem.x;
  var yMatches = shapeData.y === (activeTooltipItem === null || activeTooltipItem === void 0 || (_activeTooltipItem$la2 = activeTooltipItem.labelViewBox) === null || _activeTooltipItem$la2 === void 0 ? void 0 : _activeTooltipItem$la2.y) || shapeData.y === activeTooltipItem.y;
  return xMatches && yMatches;
}
function comparePie(shapeData, activeTooltipItem) {
  var startAngleMatches = shapeData.endAngle === activeTooltipItem.endAngle;
  var endAngleMatches = shapeData.startAngle === activeTooltipItem.startAngle;
  return startAngleMatches && endAngleMatches;
}
function compareScatter(shapeData, activeTooltipItem) {
  var xMatches = shapeData.x === activeTooltipItem.x;
  var yMatches = shapeData.y === activeTooltipItem.y;
  var zMatches = shapeData.z === activeTooltipItem.z;
  return xMatches && yMatches && zMatches;
}
function getComparisonFn(graphicalItem, activeItem) {
  var comparison;
  if (isFunnel(graphicalItem, activeItem)) {
    comparison = compareFunnel;
  } else if (isPie(graphicalItem, activeItem)) {
    comparison = comparePie;
  } else if (isScatter(graphicalItem, activeItem)) {
    comparison = compareScatter;
  }
  return comparison;
}
function getShapeDataKey(graphicalItem, activeItem) {
  var shapeKey;
  if (isFunnel(graphicalItem, activeItem)) {
    shapeKey = "trapezoids";
  } else if (isPie(graphicalItem, activeItem)) {
    shapeKey = "sectors";
  } else if (isScatter(graphicalItem, activeItem)) {
    shapeKey = "points";
  }
  return shapeKey;
}
function getActiveShapeTooltipPayload(graphicalItem, activeItem) {
  if (isFunnel(graphicalItem, activeItem)) {
    var _activeItem$tooltipPa;
    return (_activeItem$tooltipPa = activeItem.tooltipPayload) === null || _activeItem$tooltipPa === void 0 || (_activeItem$tooltipPa = _activeItem$tooltipPa[0]) === null || _activeItem$tooltipPa === void 0 || (_activeItem$tooltipPa = _activeItem$tooltipPa.payload) === null || _activeItem$tooltipPa === void 0 ? void 0 : _activeItem$tooltipPa.payload;
  }
  if (isPie(graphicalItem, activeItem)) {
    var _activeItem$tooltipPa2;
    return (_activeItem$tooltipPa2 = activeItem.tooltipPayload) === null || _activeItem$tooltipPa2 === void 0 || (_activeItem$tooltipPa2 = _activeItem$tooltipPa2[0]) === null || _activeItem$tooltipPa2 === void 0 || (_activeItem$tooltipPa2 = _activeItem$tooltipPa2.payload) === null || _activeItem$tooltipPa2 === void 0 ? void 0 : _activeItem$tooltipPa2.payload;
  }
  if (isScatter(graphicalItem, activeItem)) {
    return activeItem.payload;
  }
  return {};
}
function getActiveShapeIndexForTooltip(_ref3) {
  var activeTooltipItem = _ref3.activeTooltipItem, graphicalItem = _ref3.graphicalItem, itemData = _ref3.itemData;
  var shapeKey = getShapeDataKey(graphicalItem, activeTooltipItem);
  var tooltipPayload = getActiveShapeTooltipPayload(graphicalItem, activeTooltipItem);
  var activeItemMatches = itemData.filter(function(datum, dataIndex) {
    var valuesMatch = (0, import_isEqual2.default)(tooltipPayload, datum);
    var mouseCoordinateMatches = graphicalItem.props[shapeKey].filter(function(shapeData) {
      var comparison = getComparisonFn(graphicalItem, activeTooltipItem);
      return comparison(shapeData, activeTooltipItem);
    });
    var indexOfMouseCoordinates = graphicalItem.props[shapeKey].indexOf(mouseCoordinateMatches[mouseCoordinateMatches.length - 1]);
    var coordinatesMatch = dataIndex === indexOfMouseCoordinates;
    return valuesMatch && coordinatesMatch;
  });
  var activeIndex = itemData.indexOf(activeItemMatches[activeItemMatches.length - 1]);
  return activeIndex;
}

// node_modules/recharts/es6/cartesian/Brush.js
var import_react32 = __toESM(require_react());
var import_isFunction9 = __toESM(require_isFunction());
var import_range2 = __toESM(require_range());

// node_modules/recharts/es6/util/CssPrefixUtils.js
function _typeof28(o) {
  "@babel/helpers - typeof";
  return _typeof28 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof28(o);
}
function ownKeys24(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread24(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys24(Object(t), true).forEach(function(r2) {
      _defineProperty25(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys24(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty25(obj, key, value) {
  key = _toPropertyKey26(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey26(t) {
  var i = _toPrimitive26(t, "string");
  return "symbol" == _typeof28(i) ? i : String(i);
}
function _toPrimitive26(t, r) {
  if ("object" != _typeof28(t) || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof28(i))
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var PREFIX_LIST = ["Webkit", "Moz", "O", "ms"];
var generatePrefixStyle = function generatePrefixStyle2(name, value) {
  if (!name) {
    return null;
  }
  var camelName = name.replace(/(\w)/, function(v) {
    return v.toUpperCase();
  });
  var result = PREFIX_LIST.reduce(function(res, entry) {
    return _objectSpread24(_objectSpread24({}, res), {}, _defineProperty25({}, entry + camelName, value));
  }, {});
  result[name] = value;
  return result;
};

// node_modules/recharts/es6/cartesian/Brush.js
function _typeof29(o) {
  "@babel/helpers - typeof";
  return _typeof29 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof29(o);
}
function _extends18() {
  _extends18 = Object.assign ? Object.assign.bind() : function(target) {
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
  return _extends18.apply(this, arguments);
}
function ownKeys25(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread25(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys25(Object(t), true).forEach(function(r2) {
      _defineProperty26(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys25(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _classCallCheck8(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties8(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey27(descriptor.key), descriptor);
  }
}
function _createClass8(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties8(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties8(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _callSuper5(t, o, e) {
  return o = _getPrototypeOf7(o), _possibleConstructorReturn7(t, _isNativeReflectConstruct7() ? Reflect.construct(o, e || [], _getPrototypeOf7(t).constructor) : o.apply(t, e));
}
function _possibleConstructorReturn7(self2, call) {
  if (call && (_typeof29(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized8(self2);
}
function _isNativeReflectConstruct7() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct7 = function _isNativeReflectConstruct11() {
    return !!t;
  })();
}
function _getPrototypeOf7(o) {
  _getPrototypeOf7 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf11(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf7(o);
}
function _assertThisInitialized8(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _inherits7(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass)
    _setPrototypeOf7(subClass, superClass);
}
function _setPrototypeOf7(o, p) {
  _setPrototypeOf7 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf11(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf7(o, p);
}
function _defineProperty26(obj, key, value) {
  key = _toPropertyKey27(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey27(t) {
  var i = _toPrimitive27(t, "string");
  return "symbol" == _typeof29(i) ? i : String(i);
}
function _toPrimitive27(t, r) {
  if ("object" != _typeof29(t) || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof29(i))
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var createScale = function createScale2(_ref) {
  var data2 = _ref.data, startIndex = _ref.startIndex, endIndex = _ref.endIndex, x2 = _ref.x, width = _ref.width, travellerWidth = _ref.travellerWidth;
  if (!data2 || !data2.length) {
    return {};
  }
  var len = data2.length;
  var scale = point3().domain((0, import_range2.default)(0, len)).range([x2, x2 + width - travellerWidth]);
  var scaleValues = scale.domain().map(function(entry) {
    return scale(entry);
  });
  return {
    isTextActive: false,
    isSlideMoving: false,
    isTravellerMoving: false,
    isTravellerFocused: false,
    startX: scale(startIndex),
    endX: scale(endIndex),
    scale,
    scaleValues
  };
};
var isTouch = function isTouch2(e) {
  return e.changedTouches && !!e.changedTouches.length;
};
var Brush = /* @__PURE__ */ function(_PureComponent) {
  _inherits7(Brush2, _PureComponent);
  function Brush2(props) {
    var _this;
    _classCallCheck8(this, Brush2);
    _this = _callSuper5(this, Brush2, [props]);
    _defineProperty26(_assertThisInitialized8(_this), "handleDrag", function(e) {
      if (_this.leaveTimer) {
        clearTimeout(_this.leaveTimer);
        _this.leaveTimer = null;
      }
      if (_this.state.isTravellerMoving) {
        _this.handleTravellerMove(e);
      } else if (_this.state.isSlideMoving) {
        _this.handleSlideDrag(e);
      }
    });
    _defineProperty26(_assertThisInitialized8(_this), "handleTouchMove", function(e) {
      if (e.changedTouches != null && e.changedTouches.length > 0) {
        _this.handleDrag(e.changedTouches[0]);
      }
    });
    _defineProperty26(_assertThisInitialized8(_this), "handleDragEnd", function() {
      _this.setState({
        isTravellerMoving: false,
        isSlideMoving: false
      }, function() {
        var _this$props = _this.props, endIndex = _this$props.endIndex, onDragEnd = _this$props.onDragEnd, startIndex = _this$props.startIndex;
        onDragEnd === null || onDragEnd === void 0 || onDragEnd({
          endIndex,
          startIndex
        });
      });
      _this.detachDragEndListener();
    });
    _defineProperty26(_assertThisInitialized8(_this), "handleLeaveWrapper", function() {
      if (_this.state.isTravellerMoving || _this.state.isSlideMoving) {
        _this.leaveTimer = window.setTimeout(_this.handleDragEnd, _this.props.leaveTimeOut);
      }
    });
    _defineProperty26(_assertThisInitialized8(_this), "handleEnterSlideOrTraveller", function() {
      _this.setState({
        isTextActive: true
      });
    });
    _defineProperty26(_assertThisInitialized8(_this), "handleLeaveSlideOrTraveller", function() {
      _this.setState({
        isTextActive: false
      });
    });
    _defineProperty26(_assertThisInitialized8(_this), "handleSlideDragStart", function(e) {
      var event = isTouch(e) ? e.changedTouches[0] : e;
      _this.setState({
        isTravellerMoving: false,
        isSlideMoving: true,
        slideMoveStartX: event.pageX
      });
      _this.attachDragEndListener();
    });
    _this.travellerDragStartHandlers = {
      startX: _this.handleTravellerDragStart.bind(_assertThisInitialized8(_this), "startX"),
      endX: _this.handleTravellerDragStart.bind(_assertThisInitialized8(_this), "endX")
    };
    _this.state = {};
    return _this;
  }
  _createClass8(Brush2, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.leaveTimer) {
        clearTimeout(this.leaveTimer);
        this.leaveTimer = null;
      }
      this.detachDragEndListener();
    }
  }, {
    key: "getIndex",
    value: function getIndex(_ref2) {
      var startX = _ref2.startX, endX = _ref2.endX;
      var scaleValues = this.state.scaleValues;
      var _this$props2 = this.props, gap = _this$props2.gap, data2 = _this$props2.data;
      var lastIndex = data2.length - 1;
      var min3 = Math.min(startX, endX);
      var max3 = Math.max(startX, endX);
      var minIndex = Brush2.getIndexInRange(scaleValues, min3);
      var maxIndex = Brush2.getIndexInRange(scaleValues, max3);
      return {
        startIndex: minIndex - minIndex % gap,
        endIndex: maxIndex === lastIndex ? lastIndex : maxIndex - maxIndex % gap
      };
    }
  }, {
    key: "getTextOfTick",
    value: function getTextOfTick(index) {
      var _this$props3 = this.props, data2 = _this$props3.data, tickFormatter = _this$props3.tickFormatter, dataKey = _this$props3.dataKey;
      var text = getValueByDataKey(data2[index], dataKey, index);
      return (0, import_isFunction9.default)(tickFormatter) ? tickFormatter(text, index) : text;
    }
  }, {
    key: "attachDragEndListener",
    value: function attachDragEndListener() {
      window.addEventListener("mouseup", this.handleDragEnd, true);
      window.addEventListener("touchend", this.handleDragEnd, true);
      window.addEventListener("mousemove", this.handleDrag, true);
    }
  }, {
    key: "detachDragEndListener",
    value: function detachDragEndListener() {
      window.removeEventListener("mouseup", this.handleDragEnd, true);
      window.removeEventListener("touchend", this.handleDragEnd, true);
      window.removeEventListener("mousemove", this.handleDrag, true);
    }
  }, {
    key: "handleSlideDrag",
    value: function handleSlideDrag(e) {
      var _this$state = this.state, slideMoveStartX = _this$state.slideMoveStartX, startX = _this$state.startX, endX = _this$state.endX;
      var _this$props4 = this.props, x2 = _this$props4.x, width = _this$props4.width, travellerWidth = _this$props4.travellerWidth, startIndex = _this$props4.startIndex, endIndex = _this$props4.endIndex, onChange = _this$props4.onChange;
      var delta = e.pageX - slideMoveStartX;
      if (delta > 0) {
        delta = Math.min(delta, x2 + width - travellerWidth - endX, x2 + width - travellerWidth - startX);
      } else if (delta < 0) {
        delta = Math.max(delta, x2 - startX, x2 - endX);
      }
      var newIndex = this.getIndex({
        startX: startX + delta,
        endX: endX + delta
      });
      if ((newIndex.startIndex !== startIndex || newIndex.endIndex !== endIndex) && onChange) {
        onChange(newIndex);
      }
      this.setState({
        startX: startX + delta,
        endX: endX + delta,
        slideMoveStartX: e.pageX
      });
    }
  }, {
    key: "handleTravellerDragStart",
    value: function handleTravellerDragStart(id, e) {
      var event = isTouch(e) ? e.changedTouches[0] : e;
      this.setState({
        isSlideMoving: false,
        isTravellerMoving: true,
        movingTravellerId: id,
        brushMoveStartX: event.pageX
      });
      this.attachDragEndListener();
    }
  }, {
    key: "handleTravellerMove",
    value: function handleTravellerMove(e) {
      var _this$state2 = this.state, brushMoveStartX = _this$state2.brushMoveStartX, movingTravellerId = _this$state2.movingTravellerId, endX = _this$state2.endX, startX = _this$state2.startX;
      var prevValue = this.state[movingTravellerId];
      var _this$props5 = this.props, x2 = _this$props5.x, width = _this$props5.width, travellerWidth = _this$props5.travellerWidth, onChange = _this$props5.onChange, gap = _this$props5.gap, data2 = _this$props5.data;
      var params = {
        startX: this.state.startX,
        endX: this.state.endX
      };
      var delta = e.pageX - brushMoveStartX;
      if (delta > 0) {
        delta = Math.min(delta, x2 + width - travellerWidth - prevValue);
      } else if (delta < 0) {
        delta = Math.max(delta, x2 - prevValue);
      }
      params[movingTravellerId] = prevValue + delta;
      var newIndex = this.getIndex(params);
      var startIndex = newIndex.startIndex, endIndex = newIndex.endIndex;
      var isFullGap = function isFullGap2() {
        var lastIndex = data2.length - 1;
        if (movingTravellerId === "startX" && (endX > startX ? startIndex % gap === 0 : endIndex % gap === 0) || endX < startX && endIndex === lastIndex || movingTravellerId === "endX" && (endX > startX ? endIndex % gap === 0 : startIndex % gap === 0) || endX > startX && endIndex === lastIndex) {
          return true;
        }
        return false;
      };
      this.setState(_defineProperty26(_defineProperty26({}, movingTravellerId, prevValue + delta), "brushMoveStartX", e.pageX), function() {
        if (onChange) {
          if (isFullGap()) {
            onChange(newIndex);
          }
        }
      });
    }
  }, {
    key: "handleTravellerMoveKeyboard",
    value: function handleTravellerMoveKeyboard(direction, id) {
      var _this2 = this;
      var _this$state3 = this.state, scaleValues = _this$state3.scaleValues, startX = _this$state3.startX, endX = _this$state3.endX;
      var currentScaleValue = this.state[id];
      var currentIndex = scaleValues.indexOf(currentScaleValue);
      if (currentIndex === -1) {
        return;
      }
      var newIndex = currentIndex + direction;
      if (newIndex === -1 || newIndex >= scaleValues.length) {
        return;
      }
      var newScaleValue = scaleValues[newIndex];
      if (id === "startX" && newScaleValue >= endX || id === "endX" && newScaleValue <= startX) {
        return;
      }
      this.setState(_defineProperty26({}, id, newScaleValue), function() {
        _this2.props.onChange(_this2.getIndex({
          startX: _this2.state.startX,
          endX: _this2.state.endX
        }));
      });
    }
  }, {
    key: "renderBackground",
    value: function renderBackground() {
      var _this$props6 = this.props, x2 = _this$props6.x, y2 = _this$props6.y, width = _this$props6.width, height = _this$props6.height, fill = _this$props6.fill, stroke = _this$props6.stroke;
      return /* @__PURE__ */ import_react32.default.createElement("rect", {
        stroke,
        fill,
        x: x2,
        y: y2,
        width,
        height
      });
    }
  }, {
    key: "renderPanorama",
    value: function renderPanorama() {
      var _this$props7 = this.props, x2 = _this$props7.x, y2 = _this$props7.y, width = _this$props7.width, height = _this$props7.height, data2 = _this$props7.data, children = _this$props7.children, padding = _this$props7.padding;
      var chartElement = import_react32.Children.only(children);
      if (!chartElement) {
        return null;
      }
      return /* @__PURE__ */ import_react32.default.cloneElement(chartElement, {
        x: x2,
        y: y2,
        width,
        height,
        margin: padding,
        compact: true,
        data: data2
      });
    }
  }, {
    key: "renderTravellerLayer",
    value: function renderTravellerLayer(travellerX, id) {
      var _this3 = this;
      var _this$props8 = this.props, y2 = _this$props8.y, travellerWidth = _this$props8.travellerWidth, height = _this$props8.height, traveller = _this$props8.traveller, ariaLabel = _this$props8.ariaLabel, data2 = _this$props8.data, startIndex = _this$props8.startIndex, endIndex = _this$props8.endIndex;
      var x2 = Math.max(travellerX, this.props.x);
      var travellerProps = _objectSpread25(_objectSpread25({}, filterProps(this.props, false)), {}, {
        x: x2,
        y: y2,
        width: travellerWidth,
        height
      });
      var ariaLabelBrush = ariaLabel || "Min value: ".concat(data2[startIndex].name, ", Max value: ").concat(data2[endIndex].name);
      return /* @__PURE__ */ import_react32.default.createElement(Layer, {
        tabIndex: 0,
        role: "slider",
        "aria-label": ariaLabelBrush,
        "aria-valuenow": travellerX,
        className: "recharts-brush-traveller",
        onMouseEnter: this.handleEnterSlideOrTraveller,
        onMouseLeave: this.handleLeaveSlideOrTraveller,
        onMouseDown: this.travellerDragStartHandlers[id],
        onTouchStart: this.travellerDragStartHandlers[id],
        onKeyDown: function onKeyDown(e) {
          if (!["ArrowLeft", "ArrowRight"].includes(e.key)) {
            return;
          }
          e.preventDefault();
          e.stopPropagation();
          _this3.handleTravellerMoveKeyboard(e.key === "ArrowRight" ? 1 : -1, id);
        },
        onFocus: function onFocus() {
          _this3.setState({
            isTravellerFocused: true
          });
        },
        onBlur: function onBlur() {
          _this3.setState({
            isTravellerFocused: false
          });
        },
        style: {
          cursor: "col-resize"
        }
      }, Brush2.renderTraveller(traveller, travellerProps));
    }
  }, {
    key: "renderSlide",
    value: function renderSlide(startX, endX) {
      var _this$props9 = this.props, y2 = _this$props9.y, height = _this$props9.height, stroke = _this$props9.stroke, travellerWidth = _this$props9.travellerWidth;
      var x2 = Math.min(startX, endX) + travellerWidth;
      var width = Math.max(Math.abs(endX - startX) - travellerWidth, 0);
      return /* @__PURE__ */ import_react32.default.createElement("rect", {
        className: "recharts-brush-slide",
        onMouseEnter: this.handleEnterSlideOrTraveller,
        onMouseLeave: this.handleLeaveSlideOrTraveller,
        onMouseDown: this.handleSlideDragStart,
        onTouchStart: this.handleSlideDragStart,
        style: {
          cursor: "move"
        },
        stroke: "none",
        fill: stroke,
        fillOpacity: 0.2,
        x: x2,
        y: y2,
        width,
        height
      });
    }
  }, {
    key: "renderText",
    value: function renderText() {
      var _this$props10 = this.props, startIndex = _this$props10.startIndex, endIndex = _this$props10.endIndex, y2 = _this$props10.y, height = _this$props10.height, travellerWidth = _this$props10.travellerWidth, stroke = _this$props10.stroke;
      var _this$state4 = this.state, startX = _this$state4.startX, endX = _this$state4.endX;
      var offset = 5;
      var attrs = {
        pointerEvents: "none",
        fill: stroke
      };
      return /* @__PURE__ */ import_react32.default.createElement(Layer, {
        className: "recharts-brush-texts"
      }, /* @__PURE__ */ import_react32.default.createElement(Text, _extends18({
        textAnchor: "end",
        verticalAnchor: "middle",
        x: Math.min(startX, endX) - offset,
        y: y2 + height / 2
      }, attrs), this.getTextOfTick(startIndex)), /* @__PURE__ */ import_react32.default.createElement(Text, _extends18({
        textAnchor: "start",
        verticalAnchor: "middle",
        x: Math.max(startX, endX) + travellerWidth + offset,
        y: y2 + height / 2
      }, attrs), this.getTextOfTick(endIndex)));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props11 = this.props, data2 = _this$props11.data, className = _this$props11.className, children = _this$props11.children, x2 = _this$props11.x, y2 = _this$props11.y, width = _this$props11.width, height = _this$props11.height, alwaysShowText = _this$props11.alwaysShowText;
      var _this$state5 = this.state, startX = _this$state5.startX, endX = _this$state5.endX, isTextActive = _this$state5.isTextActive, isSlideMoving = _this$state5.isSlideMoving, isTravellerMoving = _this$state5.isTravellerMoving, isTravellerFocused = _this$state5.isTravellerFocused;
      if (!data2 || !data2.length || !isNumber(x2) || !isNumber(y2) || !isNumber(width) || !isNumber(height) || width <= 0 || height <= 0) {
        return null;
      }
      var layerClass = clsx_default("recharts-brush", className);
      var isPanoramic = import_react32.default.Children.count(children) === 1;
      var style = generatePrefixStyle("userSelect", "none");
      return /* @__PURE__ */ import_react32.default.createElement(Layer, {
        className: layerClass,
        onMouseLeave: this.handleLeaveWrapper,
        onTouchMove: this.handleTouchMove,
        style
      }, this.renderBackground(), isPanoramic && this.renderPanorama(), this.renderSlide(startX, endX), this.renderTravellerLayer(startX, "startX"), this.renderTravellerLayer(endX, "endX"), (isTextActive || isSlideMoving || isTravellerMoving || isTravellerFocused || alwaysShowText) && this.renderText());
    }
  }], [{
    key: "renderDefaultTraveller",
    value: function renderDefaultTraveller(props) {
      var x2 = props.x, y2 = props.y, width = props.width, height = props.height, stroke = props.stroke;
      var lineY = Math.floor(y2 + height / 2) - 1;
      return /* @__PURE__ */ import_react32.default.createElement(import_react32.default.Fragment, null, /* @__PURE__ */ import_react32.default.createElement("rect", {
        x: x2,
        y: y2,
        width,
        height,
        fill: stroke,
        stroke: "none"
      }), /* @__PURE__ */ import_react32.default.createElement("line", {
        x1: x2 + 1,
        y1: lineY,
        x2: x2 + width - 1,
        y2: lineY,
        fill: "none",
        stroke: "#fff"
      }), /* @__PURE__ */ import_react32.default.createElement("line", {
        x1: x2 + 1,
        y1: lineY + 2,
        x2: x2 + width - 1,
        y2: lineY + 2,
        fill: "none",
        stroke: "#fff"
      }));
    }
  }, {
    key: "renderTraveller",
    value: function renderTraveller(option, props) {
      var rectangle;
      if (/* @__PURE__ */ import_react32.default.isValidElement(option)) {
        rectangle = /* @__PURE__ */ import_react32.default.cloneElement(option, props);
      } else if ((0, import_isFunction9.default)(option)) {
        rectangle = option(props);
      } else {
        rectangle = Brush2.renderDefaultTraveller(props);
      }
      return rectangle;
    }
  }, {
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var data2 = nextProps.data, width = nextProps.width, x2 = nextProps.x, travellerWidth = nextProps.travellerWidth, updateId = nextProps.updateId, startIndex = nextProps.startIndex, endIndex = nextProps.endIndex;
      if (data2 !== prevState.prevData || updateId !== prevState.prevUpdateId) {
        return _objectSpread25({
          prevData: data2,
          prevTravellerWidth: travellerWidth,
          prevUpdateId: updateId,
          prevX: x2,
          prevWidth: width
        }, data2 && data2.length ? createScale({
          data: data2,
          width,
          x: x2,
          travellerWidth,
          startIndex,
          endIndex
        }) : {
          scale: null,
          scaleValues: null
        });
      }
      if (prevState.scale && (width !== prevState.prevWidth || x2 !== prevState.prevX || travellerWidth !== prevState.prevTravellerWidth)) {
        prevState.scale.range([x2, x2 + width - travellerWidth]);
        var scaleValues = prevState.scale.domain().map(function(entry) {
          return prevState.scale(entry);
        });
        return {
          prevData: data2,
          prevTravellerWidth: travellerWidth,
          prevUpdateId: updateId,
          prevX: x2,
          prevWidth: width,
          startX: prevState.scale(nextProps.startIndex),
          endX: prevState.scale(nextProps.endIndex),
          scaleValues
        };
      }
      return null;
    }
  }, {
    key: "getIndexInRange",
    value: function getIndexInRange(valueRange, x2) {
      var len = valueRange.length;
      var start = 0;
      var end = len - 1;
      while (end - start > 1) {
        var middle = Math.floor((start + end) / 2);
        if (valueRange[middle] > x2) {
          end = middle;
        } else {
          start = middle;
        }
      }
      return x2 >= valueRange[end] ? end : start;
    }
  }]);
  return Brush2;
}(import_react32.PureComponent);
_defineProperty26(Brush, "displayName", "Brush");
_defineProperty26(Brush, "defaultProps", {
  height: 40,
  travellerWidth: 5,
  gap: 1,
  fill: "#fff",
  stroke: "#666",
  padding: {
    top: 1,
    right: 1,
    bottom: 1,
    left: 1
  },
  leaveTimeOut: 1e3,
  alwaysShowText: false
});

// node_modules/recharts/es6/cartesian/ReferenceLine.js
var import_react36 = __toESM(require_react());
var import_isFunction10 = __toESM(require_isFunction());
var import_some = __toESM(require_some());

// node_modules/recharts/es6/util/IfOverflowMatches.js
var ifOverflowMatches = function ifOverflowMatches2(props, value) {
  var alwaysShow = props.alwaysShow;
  var ifOverflow = props.ifOverflow;
  if (alwaysShow) {
    ifOverflow = "extendDomain";
  }
  return ifOverflow === value;
};

// node_modules/recharts/es6/util/CartesianUtils.js
var import_mapValues = __toESM(require_mapValues());
var import_every = __toESM(require_every());

// node_modules/recharts/es6/cartesian/Bar.js
var import_react34 = __toESM(require_react());
var import_isEqual3 = __toESM(require_isEqual());
var import_isNil8 = __toESM(require_isNil());

// node_modules/recharts/es6/util/BarUtils.js
var import_react33 = __toESM(require_react());
var _excluded15 = ["x", "y"];
function _typeof30(o) {
  "@babel/helpers - typeof";
  return _typeof30 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof30(o);
}
function _extends19() {
  _extends19 = Object.assign ? Object.assign.bind() : function(target) {
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
  return _extends19.apply(this, arguments);
}
function ownKeys26(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread26(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys26(Object(t), true).forEach(function(r2) {
      _defineProperty27(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys26(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty27(obj, key, value) {
  key = _toPropertyKey28(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey28(t) {
  var i = _toPrimitive28(t, "string");
  return "symbol" == _typeof30(i) ? i : String(i);
}
function _toPrimitive28(t, r) {
  if ("object" != _typeof30(t) || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof30(i))
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _objectWithoutProperties14(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose15(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose15(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function typeguardBarRectangleProps(_ref, props) {
  var xProp = _ref.x, yProp = _ref.y, option = _objectWithoutProperties14(_ref, _excluded15);
  var xValue = "".concat(xProp);
  var x2 = parseInt(xValue, 10);
  var yValue = "".concat(yProp);
  var y2 = parseInt(yValue, 10);
  var heightValue = "".concat(props.height || option.height);
  var height = parseInt(heightValue, 10);
  var widthValue = "".concat(props.width || option.width);
  var width = parseInt(widthValue, 10);
  return _objectSpread26(_objectSpread26(_objectSpread26(_objectSpread26(_objectSpread26({}, props), option), x2 ? {
    x: x2
  } : {}), y2 ? {
    y: y2
  } : {}), {}, {
    height,
    width,
    name: props.name,
    radius: props.radius
  });
}
function BarRectangle(props) {
  return /* @__PURE__ */ import_react33.default.createElement(Shape, _extends19({
    shapeType: "rectangle",
    propTransformer: typeguardBarRectangleProps,
    activeClassName: "recharts-active-bar"
  }, props));
}
var minPointSizeCallback = function minPointSizeCallback2(minPointSize) {
  var defaultValue = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return function(value, index) {
    if (typeof minPointSize === "number")
      return minPointSize;
    var isValueNumber = typeof value === "number";
    if (isValueNumber) {
      return minPointSize(value, index);
    }
    !isValueNumber ? true ? invariant(false, "minPointSize callback function received a value with type of ".concat(_typeof30(value), ". Currently only numbers are supported.")) : invariant(false) : void 0;
    return defaultValue;
  };
};

// node_modules/recharts/es6/cartesian/Bar.js
var _excluded16 = ["value", "background"];
var _Bar;
function _typeof31(o) {
  "@babel/helpers - typeof";
  return _typeof31 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof31(o);
}
function _objectWithoutProperties15(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose16(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose16(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _extends20() {
  _extends20 = Object.assign ? Object.assign.bind() : function(target) {
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
  return _extends20.apply(this, arguments);
}
function ownKeys27(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread27(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys27(Object(t), true).forEach(function(r2) {
      _defineProperty28(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys27(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _classCallCheck9(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties9(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey29(descriptor.key), descriptor);
  }
}
function _createClass9(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties9(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties9(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _callSuper6(t, o, e) {
  return o = _getPrototypeOf8(o), _possibleConstructorReturn8(t, _isNativeReflectConstruct8() ? Reflect.construct(o, e || [], _getPrototypeOf8(t).constructor) : o.apply(t, e));
}
function _possibleConstructorReturn8(self2, call) {
  if (call && (_typeof31(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized9(self2);
}
function _isNativeReflectConstruct8() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct8 = function _isNativeReflectConstruct11() {
    return !!t;
  })();
}
function _getPrototypeOf8(o) {
  _getPrototypeOf8 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf11(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf8(o);
}
function _assertThisInitialized9(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _inherits8(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass)
    _setPrototypeOf8(subClass, superClass);
}
function _setPrototypeOf8(o, p) {
  _setPrototypeOf8 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf11(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf8(o, p);
}
function _defineProperty28(obj, key, value) {
  key = _toPropertyKey29(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey29(t) {
  var i = _toPrimitive29(t, "string");
  return "symbol" == _typeof31(i) ? i : String(i);
}
function _toPrimitive29(t, r) {
  if ("object" != _typeof31(t) || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof31(i))
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var Bar = /* @__PURE__ */ function(_PureComponent) {
  _inherits8(Bar2, _PureComponent);
  function Bar2() {
    var _this;
    _classCallCheck9(this, Bar2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper6(this, Bar2, [].concat(args));
    _defineProperty28(_assertThisInitialized9(_this), "state", {
      isAnimationFinished: false
    });
    _defineProperty28(_assertThisInitialized9(_this), "id", uniqueId("recharts-bar-"));
    _defineProperty28(_assertThisInitialized9(_this), "handleAnimationEnd", function() {
      var onAnimationEnd2 = _this.props.onAnimationEnd;
      _this.setState({
        isAnimationFinished: true
      });
      if (onAnimationEnd2) {
        onAnimationEnd2();
      }
    });
    _defineProperty28(_assertThisInitialized9(_this), "handleAnimationStart", function() {
      var onAnimationStart2 = _this.props.onAnimationStart;
      _this.setState({
        isAnimationFinished: false
      });
      if (onAnimationStart2) {
        onAnimationStart2();
      }
    });
    return _this;
  }
  _createClass9(Bar2, [{
    key: "renderRectanglesStatically",
    value: function renderRectanglesStatically(data2) {
      var _this2 = this;
      var _this$props = this.props, shape = _this$props.shape, dataKey = _this$props.dataKey, activeIndex = _this$props.activeIndex, activeBar = _this$props.activeBar;
      var baseProps = filterProps(this.props, false);
      return data2 && data2.map(function(entry, i) {
        var isActive = i === activeIndex;
        var option = isActive ? activeBar : shape;
        var props = _objectSpread27(_objectSpread27(_objectSpread27({}, baseProps), entry), {}, {
          isActive,
          option,
          index: i,
          dataKey,
          onAnimationStart: _this2.handleAnimationStart,
          onAnimationEnd: _this2.handleAnimationEnd
        });
        return /* @__PURE__ */ import_react34.default.createElement(Layer, _extends20({
          className: "recharts-bar-rectangle"
        }, adaptEventsOfChild(_this2.props, entry, i), {
          key: "rectangle-".concat(entry === null || entry === void 0 ? void 0 : entry.x, "-").concat(entry === null || entry === void 0 ? void 0 : entry.y, "-").concat(entry === null || entry === void 0 ? void 0 : entry.value)
        }), /* @__PURE__ */ import_react34.default.createElement(BarRectangle, props));
      });
    }
  }, {
    key: "renderRectanglesWithAnimation",
    value: function renderRectanglesWithAnimation() {
      var _this3 = this;
      var _this$props2 = this.props, data2 = _this$props2.data, layout = _this$props2.layout, isAnimationActive = _this$props2.isAnimationActive, animationBegin = _this$props2.animationBegin, animationDuration = _this$props2.animationDuration, animationEasing = _this$props2.animationEasing, animationId = _this$props2.animationId;
      var prevData = this.state.prevData;
      return /* @__PURE__ */ import_react34.default.createElement(es6_default, {
        begin: animationBegin,
        duration: animationDuration,
        isActive: isAnimationActive,
        easing: animationEasing,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "bar-".concat(animationId),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function(_ref) {
        var t = _ref.t;
        var stepData = data2.map(function(entry, index) {
          var prev = prevData && prevData[index];
          if (prev) {
            var interpolatorX = interpolateNumber(prev.x, entry.x);
            var interpolatorY = interpolateNumber(prev.y, entry.y);
            var interpolatorWidth = interpolateNumber(prev.width, entry.width);
            var interpolatorHeight = interpolateNumber(prev.height, entry.height);
            return _objectSpread27(_objectSpread27({}, entry), {}, {
              x: interpolatorX(t),
              y: interpolatorY(t),
              width: interpolatorWidth(t),
              height: interpolatorHeight(t)
            });
          }
          if (layout === "horizontal") {
            var _interpolatorHeight = interpolateNumber(0, entry.height);
            var h = _interpolatorHeight(t);
            return _objectSpread27(_objectSpread27({}, entry), {}, {
              y: entry.y + entry.height - h,
              height: h
            });
          }
          var interpolator = interpolateNumber(0, entry.width);
          var w = interpolator(t);
          return _objectSpread27(_objectSpread27({}, entry), {}, {
            width: w
          });
        });
        return /* @__PURE__ */ import_react34.default.createElement(Layer, null, _this3.renderRectanglesStatically(stepData));
      });
    }
  }, {
    key: "renderRectangles",
    value: function renderRectangles() {
      var _this$props3 = this.props, data2 = _this$props3.data, isAnimationActive = _this$props3.isAnimationActive;
      var prevData = this.state.prevData;
      if (isAnimationActive && data2 && data2.length && (!prevData || !(0, import_isEqual3.default)(prevData, data2))) {
        return this.renderRectanglesWithAnimation();
      }
      return this.renderRectanglesStatically(data2);
    }
  }, {
    key: "renderBackground",
    value: function renderBackground() {
      var _this4 = this;
      var _this$props4 = this.props, data2 = _this$props4.data, dataKey = _this$props4.dataKey, activeIndex = _this$props4.activeIndex;
      var backgroundProps = filterProps(this.props.background, false);
      return data2.map(function(entry, i) {
        var value = entry.value, background = entry.background, rest = _objectWithoutProperties15(entry, _excluded16);
        if (!background) {
          return null;
        }
        var props = _objectSpread27(_objectSpread27(_objectSpread27(_objectSpread27(_objectSpread27({}, rest), {}, {
          fill: "#eee"
        }, background), backgroundProps), adaptEventsOfChild(_this4.props, entry, i)), {}, {
          onAnimationStart: _this4.handleAnimationStart,
          onAnimationEnd: _this4.handleAnimationEnd,
          dataKey,
          index: i,
          key: "background-bar-".concat(i),
          className: "recharts-bar-background-rectangle"
        });
        return /* @__PURE__ */ import_react34.default.createElement(BarRectangle, _extends20({
          option: _this4.props.background,
          isActive: i === activeIndex
        }, props));
      });
    }
  }, {
    key: "renderErrorBar",
    value: function renderErrorBar(needClip, clipPathId) {
      if (this.props.isAnimationActive && !this.state.isAnimationFinished) {
        return null;
      }
      var _this$props5 = this.props, data2 = _this$props5.data, xAxis = _this$props5.xAxis, yAxis = _this$props5.yAxis, layout = _this$props5.layout, children = _this$props5.children;
      var errorBarItems = findAllByType(children, ErrorBar);
      if (!errorBarItems) {
        return null;
      }
      var offset = layout === "vertical" ? data2[0].height / 2 : data2[0].width / 2;
      var dataPointFormatter = function dataPointFormatter2(dataPoint, dataKey) {
        var value = Array.isArray(dataPoint.value) ? dataPoint.value[1] : dataPoint.value;
        return {
          x: dataPoint.x,
          y: dataPoint.y,
          value,
          errorVal: getValueByDataKey(dataPoint, dataKey)
        };
      };
      var errorBarProps = {
        clipPath: needClip ? "url(#clipPath-".concat(clipPathId, ")") : null
      };
      return /* @__PURE__ */ import_react34.default.createElement(Layer, errorBarProps, errorBarItems.map(function(item) {
        return /* @__PURE__ */ import_react34.default.cloneElement(item, {
          key: "error-bar-".concat(clipPathId, "-").concat(item.props.dataKey),
          data: data2,
          xAxis,
          yAxis,
          layout,
          offset,
          dataPointFormatter
        });
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props6 = this.props, hide = _this$props6.hide, data2 = _this$props6.data, className = _this$props6.className, xAxis = _this$props6.xAxis, yAxis = _this$props6.yAxis, left = _this$props6.left, top = _this$props6.top, width = _this$props6.width, height = _this$props6.height, isAnimationActive = _this$props6.isAnimationActive, background = _this$props6.background, id = _this$props6.id;
      if (hide || !data2 || !data2.length) {
        return null;
      }
      var isAnimationFinished = this.state.isAnimationFinished;
      var layerClass = clsx_default("recharts-bar", className);
      var needClipX = xAxis && xAxis.allowDataOverflow;
      var needClipY = yAxis && yAxis.allowDataOverflow;
      var needClip = needClipX || needClipY;
      var clipPathId = (0, import_isNil8.default)(id) ? this.id : id;
      return /* @__PURE__ */ import_react34.default.createElement(Layer, {
        className: layerClass
      }, needClipX || needClipY ? /* @__PURE__ */ import_react34.default.createElement("defs", null, /* @__PURE__ */ import_react34.default.createElement("clipPath", {
        id: "clipPath-".concat(clipPathId)
      }, /* @__PURE__ */ import_react34.default.createElement("rect", {
        x: needClipX ? left : left - width / 2,
        y: needClipY ? top : top - height / 2,
        width: needClipX ? width : width * 2,
        height: needClipY ? height : height * 2
      }))) : null, /* @__PURE__ */ import_react34.default.createElement(Layer, {
        className: "recharts-bar-rectangles",
        clipPath: needClip ? "url(#clipPath-".concat(clipPathId, ")") : null
      }, background ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(needClip, clipPathId), (!isAnimationActive || isAnimationFinished) && LabelList.renderCallByParent(this.props, data2));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.animationId !== prevState.prevAnimationId) {
        return {
          prevAnimationId: nextProps.animationId,
          curData: nextProps.data,
          prevData: prevState.curData
        };
      }
      if (nextProps.data !== prevState.curData) {
        return {
          curData: nextProps.data
        };
      }
      return null;
    }
  }]);
  return Bar2;
}(import_react34.PureComponent);
_Bar = Bar;
_defineProperty28(Bar, "displayName", "Bar");
_defineProperty28(Bar, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  legendType: "rect",
  minPointSize: 0,
  hide: false,
  data: [],
  layout: "vertical",
  activeBar: false,
  isAnimationActive: !Global.isSsr,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "ease"
});
_defineProperty28(Bar, "getComposedData", function(_ref2) {
  var props = _ref2.props, item = _ref2.item, barPosition = _ref2.barPosition, bandSize = _ref2.bandSize, xAxis = _ref2.xAxis, yAxis = _ref2.yAxis, xAxisTicks = _ref2.xAxisTicks, yAxisTicks = _ref2.yAxisTicks, stackedData = _ref2.stackedData, dataStartIndex = _ref2.dataStartIndex, displayedData = _ref2.displayedData, offset = _ref2.offset;
  var pos = findPositionOfBar(barPosition, item);
  if (!pos) {
    return null;
  }
  var layout = props.layout;
  var _item$props = item.props, dataKey = _item$props.dataKey, children = _item$props.children, minPointSizeProp = _item$props.minPointSize;
  var numericAxis = layout === "horizontal" ? yAxis : xAxis;
  var stackedDomain = stackedData ? numericAxis.scale.domain() : null;
  var baseValue = getBaseValueOfBar({
    numericAxis
  });
  var cells = findAllByType(children, Cell);
  var rects = displayedData.map(function(entry, index) {
    var value, x2, y2, width, height, background;
    if (stackedData) {
      value = truncateByDomain(stackedData[dataStartIndex + index], stackedDomain);
    } else {
      value = getValueByDataKey(entry, dataKey);
      if (!Array.isArray(value)) {
        value = [baseValue, value];
      }
    }
    var minPointSize = minPointSizeCallback(minPointSizeProp, _Bar.defaultProps.minPointSize)(value[1], index);
    if (layout === "horizontal") {
      var _ref4;
      var _ref3 = [yAxis.scale(value[0]), yAxis.scale(value[1])], baseValueScale = _ref3[0], currentValueScale = _ref3[1];
      x2 = getCateCoordinateOfBar({
        axis: xAxis,
        ticks: xAxisTicks,
        bandSize,
        offset: pos.offset,
        entry,
        index
      });
      y2 = (_ref4 = currentValueScale !== null && currentValueScale !== void 0 ? currentValueScale : baseValueScale) !== null && _ref4 !== void 0 ? _ref4 : void 0;
      width = pos.size;
      var computedHeight = baseValueScale - currentValueScale;
      height = Number.isNaN(computedHeight) ? 0 : computedHeight;
      background = {
        x: x2,
        y: yAxis.y,
        width,
        height: yAxis.height
      };
      if (Math.abs(minPointSize) > 0 && Math.abs(height) < Math.abs(minPointSize)) {
        var delta = mathSign(height || minPointSize) * (Math.abs(minPointSize) - Math.abs(height));
        y2 -= delta;
        height += delta;
      }
    } else {
      var _ref5 = [xAxis.scale(value[0]), xAxis.scale(value[1])], _baseValueScale = _ref5[0], _currentValueScale = _ref5[1];
      x2 = _baseValueScale;
      y2 = getCateCoordinateOfBar({
        axis: yAxis,
        ticks: yAxisTicks,
        bandSize,
        offset: pos.offset,
        entry,
        index
      });
      width = _currentValueScale - _baseValueScale;
      height = pos.size;
      background = {
        x: xAxis.x,
        y: y2,
        width: xAxis.width,
        height
      };
      if (Math.abs(minPointSize) > 0 && Math.abs(width) < Math.abs(minPointSize)) {
        var _delta = mathSign(width || minPointSize) * (Math.abs(minPointSize) - Math.abs(width));
        width += _delta;
      }
    }
    return _objectSpread27(_objectSpread27(_objectSpread27({}, entry), {}, {
      x: x2,
      y: y2,
      width,
      height,
      value: stackedData ? value : value[1],
      payload: entry,
      background
    }, cells && cells[index] && cells[index].props), {}, {
      tooltipPayload: [getTooltipItem(item, entry)],
      tooltipPosition: {
        x: x2 + width / 2,
        y: y2 + height / 2
      }
    });
  });
  return _objectSpread27({
    data: rects,
    layout
  }, offset);
});

// node_modules/recharts/es6/util/CartesianUtils.js
function _typeof32(o) {
  "@babel/helpers - typeof";
  return _typeof32 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof32(o);
}
function _classCallCheck10(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties10(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey30(descriptor.key), descriptor);
  }
}
function _createClass10(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties10(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties10(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function ownKeys28(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread28(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys28(Object(t), true).forEach(function(r2) {
      _defineProperty29(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys28(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty29(obj, key, value) {
  key = _toPropertyKey30(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey30(t) {
  var i = _toPrimitive30(t, "string");
  return "symbol" == _typeof32(i) ? i : String(i);
}
function _toPrimitive30(t, r) {
  if ("object" != _typeof32(t) || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof32(i))
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var formatAxisMap = function formatAxisMap2(props, axisMap, offset, axisType, chartName) {
  var width = props.width, height = props.height, layout = props.layout, children = props.children;
  var ids = Object.keys(axisMap);
  var steps = {
    left: offset.left,
    leftMirror: offset.left,
    right: width - offset.right,
    rightMirror: width - offset.right,
    top: offset.top,
    topMirror: offset.top,
    bottom: height - offset.bottom,
    bottomMirror: height - offset.bottom
  };
  var hasBar = !!findChildByType(children, Bar);
  return ids.reduce(function(result, id) {
    var axis = axisMap[id];
    var orientation = axis.orientation, domain = axis.domain, _axis$padding = axis.padding, padding = _axis$padding === void 0 ? {} : _axis$padding, mirror = axis.mirror, reversed = axis.reversed;
    var offsetKey = "".concat(orientation).concat(mirror ? "Mirror" : "");
    var calculatedPadding, range6, x2, y2, needSpace;
    if (axis.type === "number" && (axis.padding === "gap" || axis.padding === "no-gap")) {
      var diff = domain[1] - domain[0];
      var smallestDistanceBetweenValues = Infinity;
      var sortedValues = axis.categoricalDomain.sort();
      sortedValues.forEach(function(value, index) {
        if (index > 0) {
          smallestDistanceBetweenValues = Math.min((value || 0) - (sortedValues[index - 1] || 0), smallestDistanceBetweenValues);
        }
      });
      var smallestDistanceInPercent = smallestDistanceBetweenValues / diff;
      var rangeWidth = axis.layout === "vertical" ? offset.height : offset.width;
      if (axis.padding === "gap") {
        calculatedPadding = smallestDistanceInPercent * rangeWidth / 2;
      }
      if (axis.padding === "no-gap") {
        var gap = getPercentValue(props.barCategoryGap, smallestDistanceInPercent * rangeWidth);
        var halfBand = smallestDistanceInPercent * rangeWidth / 2;
        calculatedPadding = halfBand - gap - (halfBand - gap) / rangeWidth * gap;
      }
    }
    if (axisType === "xAxis") {
      range6 = [offset.left + (padding.left || 0) + (calculatedPadding || 0), offset.left + offset.width - (padding.right || 0) - (calculatedPadding || 0)];
    } else if (axisType === "yAxis") {
      range6 = layout === "horizontal" ? [offset.top + offset.height - (padding.bottom || 0), offset.top + (padding.top || 0)] : [offset.top + (padding.top || 0) + (calculatedPadding || 0), offset.top + offset.height - (padding.bottom || 0) - (calculatedPadding || 0)];
    } else {
      range6 = axis.range;
    }
    if (reversed) {
      range6 = [range6[1], range6[0]];
    }
    var _parseScale = parseScale(axis, chartName, hasBar), scale = _parseScale.scale, realScaleType = _parseScale.realScaleType;
    scale.domain(domain).range(range6);
    checkDomainOfScale(scale);
    var ticks2 = getTicksOfScale(scale, _objectSpread28(_objectSpread28({}, axis), {}, {
      realScaleType
    }));
    if (axisType === "xAxis") {
      needSpace = orientation === "top" && !mirror || orientation === "bottom" && mirror;
      x2 = offset.left;
      y2 = steps[offsetKey] - needSpace * axis.height;
    } else if (axisType === "yAxis") {
      needSpace = orientation === "left" && !mirror || orientation === "right" && mirror;
      x2 = steps[offsetKey] - needSpace * axis.width;
      y2 = offset.top;
    }
    var finalAxis = _objectSpread28(_objectSpread28(_objectSpread28({}, axis), ticks2), {}, {
      realScaleType,
      x: x2,
      y: y2,
      scale,
      width: axisType === "xAxis" ? offset.width : axis.width,
      height: axisType === "yAxis" ? offset.height : axis.height
    });
    finalAxis.bandSize = getBandSizeOfAxis(finalAxis, ticks2);
    if (!axis.hide && axisType === "xAxis") {
      steps[offsetKey] += (needSpace ? -1 : 1) * finalAxis.height;
    } else if (!axis.hide) {
      steps[offsetKey] += (needSpace ? -1 : 1) * finalAxis.width;
    }
    return _objectSpread28(_objectSpread28({}, result), {}, _defineProperty29({}, id, finalAxis));
  }, {});
};
var rectWithPoints = function rectWithPoints2(_ref, _ref2) {
  var x1 = _ref.x, y1 = _ref.y;
  var x2 = _ref2.x, y2 = _ref2.y;
  return {
    x: Math.min(x1, x2),
    y: Math.min(y1, y2),
    width: Math.abs(x2 - x1),
    height: Math.abs(y2 - y1)
  };
};
var rectWithCoords = function rectWithCoords2(_ref3) {
  var x1 = _ref3.x1, y1 = _ref3.y1, x2 = _ref3.x2, y2 = _ref3.y2;
  return rectWithPoints({
    x: x1,
    y: y1
  }, {
    x: x2,
    y: y2
  });
};
var ScaleHelper = /* @__PURE__ */ function() {
  function ScaleHelper2(scale) {
    _classCallCheck10(this, ScaleHelper2);
    this.scale = scale;
  }
  _createClass10(ScaleHelper2, [{
    key: "domain",
    get: function get7() {
      return this.scale.domain;
    }
  }, {
    key: "range",
    get: function get7() {
      return this.scale.range;
    }
  }, {
    key: "rangeMin",
    get: function get7() {
      return this.range()[0];
    }
  }, {
    key: "rangeMax",
    get: function get7() {
      return this.range()[1];
    }
  }, {
    key: "bandwidth",
    get: function get7() {
      return this.scale.bandwidth;
    }
  }, {
    key: "apply",
    value: function apply(value) {
      var _ref4 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, bandAware = _ref4.bandAware, position = _ref4.position;
      if (value === void 0) {
        return void 0;
      }
      if (position) {
        switch (position) {
          case "start": {
            return this.scale(value);
          }
          case "middle": {
            var offset = this.bandwidth ? this.bandwidth() / 2 : 0;
            return this.scale(value) + offset;
          }
          case "end": {
            var _offset = this.bandwidth ? this.bandwidth() : 0;
            return this.scale(value) + _offset;
          }
          default: {
            return this.scale(value);
          }
        }
      }
      if (bandAware) {
        var _offset2 = this.bandwidth ? this.bandwidth() / 2 : 0;
        return this.scale(value) + _offset2;
      }
      return this.scale(value);
    }
  }, {
    key: "isInRange",
    value: function isInRange(value) {
      var range6 = this.range();
      var first = range6[0];
      var last2 = range6[range6.length - 1];
      return first <= last2 ? value >= first && value <= last2 : value >= last2 && value <= first;
    }
  }], [{
    key: "create",
    value: function create(obj) {
      return new ScaleHelper2(obj);
    }
  }]);
  return ScaleHelper2;
}();
_defineProperty29(ScaleHelper, "EPS", 1e-4);
var createLabeledScales = function createLabeledScales2(options) {
  var scales = Object.keys(options).reduce(function(res, key) {
    return _objectSpread28(_objectSpread28({}, res), {}, _defineProperty29({}, key, ScaleHelper.create(options[key])));
  }, {});
  return _objectSpread28(_objectSpread28({}, scales), {}, {
    apply: function apply(coord) {
      var _ref5 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, bandAware = _ref5.bandAware, position = _ref5.position;
      return (0, import_mapValues.default)(coord, function(value, label) {
        return scales[label].apply(value, {
          bandAware,
          position
        });
      });
    },
    isInRange: function isInRange(coord) {
      return (0, import_every.default)(coord, function(value, label) {
        return scales[label].isInRange(value);
      });
    }
  });
};
function normalizeAngle(angle) {
  return (angle % 180 + 180) % 180;
}
var getAngledRectangleWidth = function getAngledRectangleWidth2(_ref6) {
  var width = _ref6.width, height = _ref6.height;
  var angle = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  var normalizedAngle = normalizeAngle(angle);
  var angleRadians = normalizedAngle * Math.PI / 180;
  var angleThreshold = Math.atan(height / width);
  var angledWidth = angleRadians > angleThreshold && angleRadians < Math.PI - angleThreshold ? height / Math.sin(angleRadians) : width / Math.cos(angleRadians);
  return Math.abs(angledWidth);
};

// node_modules/recharts/es6/context/chartLayoutContext.js
var import_react35 = __toESM(require_react());
var import_find = __toESM(require_find());
var import_every2 = __toESM(require_every());

// node_modules/recharts/es6/util/calculateViewBox.js
var import_memoize = __toESM(require_memoize());
var calculateViewBox = (0, import_memoize.default)(function(offset) {
  return {
    x: offset.left,
    y: offset.top,
    width: offset.width,
    height: offset.height
  };
}, function(offset) {
  return ["l", offset.left, "t", offset.top, "w", offset.width, "h", offset.height].join("");
});

// node_modules/recharts/es6/context/chartLayoutContext.js
function _typeof33(o) {
  "@babel/helpers - typeof";
  return _typeof33 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof33(o);
}
var XAxisContext = /* @__PURE__ */ (0, import_react35.createContext)(void 0);
var YAxisContext = /* @__PURE__ */ (0, import_react35.createContext)(void 0);
var ViewBoxContext = /* @__PURE__ */ (0, import_react35.createContext)(void 0);
var OffsetContext = /* @__PURE__ */ (0, import_react35.createContext)({});
var ClipPathIdContext = /* @__PURE__ */ (0, import_react35.createContext)(void 0);
var ChartHeightContext = /* @__PURE__ */ (0, import_react35.createContext)(0);
var ChartWidthContext = /* @__PURE__ */ (0, import_react35.createContext)(0);
var ChartLayoutContextProvider = function ChartLayoutContextProvider2(props) {
  var _props$state = props.state, xAxisMap = _props$state.xAxisMap, yAxisMap = _props$state.yAxisMap, offset = _props$state.offset, clipPathId = props.clipPathId, children = props.children, width = props.width, height = props.height;
  var viewBox = calculateViewBox(offset);
  return /* @__PURE__ */ import_react35.default.createElement(XAxisContext.Provider, {
    value: xAxisMap
  }, /* @__PURE__ */ import_react35.default.createElement(YAxisContext.Provider, {
    value: yAxisMap
  }, /* @__PURE__ */ import_react35.default.createElement(OffsetContext.Provider, {
    value: offset
  }, /* @__PURE__ */ import_react35.default.createElement(ViewBoxContext.Provider, {
    value: viewBox
  }, /* @__PURE__ */ import_react35.default.createElement(ClipPathIdContext.Provider, {
    value: clipPathId
  }, /* @__PURE__ */ import_react35.default.createElement(ChartHeightContext.Provider, {
    value: height
  }, /* @__PURE__ */ import_react35.default.createElement(ChartWidthContext.Provider, {
    value: width
  }, children)))))));
};
var useClipPathId = function useClipPathId2() {
  return (0, import_react35.useContext)(ClipPathIdContext);
};
function getKeysForDebug(object) {
  var keys2 = Object.keys(object);
  if (keys2.length === 0) {
    return "There are no available ids.";
  }
  return "Available ids are: ".concat(keys2, ".");
}
var useXAxisOrThrow = function useXAxisOrThrow2(xAxisId) {
  var xAxisMap = (0, import_react35.useContext)(XAxisContext);
  !(xAxisMap != null) ? true ? invariant(false, "Could not find Recharts context; are you sure this is rendered inside a Recharts wrapper component?") : invariant(false) : void 0;
  var xAxis = xAxisMap[xAxisId];
  !(xAxis != null) ? true ? invariant(false, 'Could not find xAxis by id "'.concat(xAxisId, '" [').concat(_typeof33(xAxisId), "]. ").concat(getKeysForDebug(xAxisMap))) : invariant(false) : void 0;
  return xAxis;
};
var useYAxisOrThrow = function useYAxisOrThrow2(yAxisId) {
  var yAxisMap = (0, import_react35.useContext)(YAxisContext);
  !(yAxisMap != null) ? true ? invariant(false, "Could not find Recharts context; are you sure this is rendered inside a Recharts wrapper component?") : invariant(false) : void 0;
  var yAxis = yAxisMap[yAxisId];
  !(yAxis != null) ? true ? invariant(false, 'Could not find yAxis by id "'.concat(yAxisId, '" [').concat(_typeof33(yAxisId), "]. ").concat(getKeysForDebug(yAxisMap))) : invariant(false) : void 0;
  return yAxis;
};
var useViewBox = function useViewBox2() {
  var viewBox = (0, import_react35.useContext)(ViewBoxContext);
  return viewBox;
};
var useChartWidth = function useChartWidth2() {
  return (0, import_react35.useContext)(ChartWidthContext);
};
var useChartHeight = function useChartHeight2() {
  return (0, import_react35.useContext)(ChartHeightContext);
};

// node_modules/recharts/es6/cartesian/ReferenceLine.js
function _typeof34(o) {
  "@babel/helpers - typeof";
  return _typeof34 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof34(o);
}
function ownKeys29(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread29(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys29(Object(t), true).forEach(function(r2) {
      _defineProperty30(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys29(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty30(obj, key, value) {
  key = _toPropertyKey31(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey31(t) {
  var i = _toPrimitive31(t, "string");
  return "symbol" == _typeof34(i) ? i : String(i);
}
function _toPrimitive31(t, r) {
  if ("object" != _typeof34(t) || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof34(i))
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _slicedToArray11(arr, i) {
  return _arrayWithHoles12(arr) || _iterableToArrayLimit11(arr, i) || _unsupportedIterableToArray17(arr, i) || _nonIterableRest12();
}
function _nonIterableRest12() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray17(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray17(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray17(o, minLen);
}
function _arrayLikeToArray17(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit11(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a2 = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t)
          return;
        f = false;
      } else
        for (; !(f = (e = i.call(t)).done) && (a2.push(e.value), a2.length !== l); f = true)
          ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u))
          return;
      } finally {
        if (o)
          throw n;
      }
    }
    return a2;
  }
}
function _arrayWithHoles12(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _extends21() {
  _extends21 = Object.assign ? Object.assign.bind() : function(target) {
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
  return _extends21.apply(this, arguments);
}
var renderLine = function renderLine2(option, props) {
  var line;
  if (/* @__PURE__ */ import_react36.default.isValidElement(option)) {
    line = /* @__PURE__ */ import_react36.default.cloneElement(option, props);
  } else if ((0, import_isFunction10.default)(option)) {
    line = option(props);
  } else {
    line = /* @__PURE__ */ import_react36.default.createElement("line", _extends21({}, props, {
      className: "recharts-reference-line-line"
    }));
  }
  return line;
};
var getEndPoints = function getEndPoints2(scales, isFixedX, isFixedY, isSegment, viewBox, position, xAxisOrientation, yAxisOrientation, props) {
  var x2 = viewBox.x, y2 = viewBox.y, width = viewBox.width, height = viewBox.height;
  if (isFixedY) {
    var yCoord = props.y;
    var coord = scales.y.apply(yCoord, {
      position
    });
    if (ifOverflowMatches(props, "discard") && !scales.y.isInRange(coord)) {
      return null;
    }
    var points = [{
      x: x2 + width,
      y: coord
    }, {
      x: x2,
      y: coord
    }];
    return yAxisOrientation === "left" ? points.reverse() : points;
  }
  if (isFixedX) {
    var xCoord = props.x;
    var _coord = scales.x.apply(xCoord, {
      position
    });
    if (ifOverflowMatches(props, "discard") && !scales.x.isInRange(_coord)) {
      return null;
    }
    var _points = [{
      x: _coord,
      y: y2 + height
    }, {
      x: _coord,
      y: y2
    }];
    return xAxisOrientation === "top" ? _points.reverse() : _points;
  }
  if (isSegment) {
    var segment = props.segment;
    var _points2 = segment.map(function(p) {
      return scales.apply(p, {
        position
      });
    });
    if (ifOverflowMatches(props, "discard") && (0, import_some.default)(_points2, function(p) {
      return !scales.isInRange(p);
    })) {
      return null;
    }
    return _points2;
  }
  return null;
};
function ReferenceLine(props) {
  var fixedX = props.x, fixedY = props.y, segment = props.segment, xAxisId = props.xAxisId, yAxisId = props.yAxisId, shape = props.shape, className = props.className, alwaysShow = props.alwaysShow;
  var clipPathId = useClipPathId();
  var xAxis = useXAxisOrThrow(xAxisId);
  var yAxis = useYAxisOrThrow(yAxisId);
  var viewBox = useViewBox();
  if (!clipPathId || !viewBox) {
    return null;
  }
  warn(alwaysShow === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
  var scales = createLabeledScales({
    x: xAxis.scale,
    y: yAxis.scale
  });
  var isX = isNumOrStr(fixedX);
  var isY = isNumOrStr(fixedY);
  var isSegment = segment && segment.length === 2;
  var endPoints = getEndPoints(scales, isX, isY, isSegment, viewBox, props.position, xAxis.orientation, yAxis.orientation, props);
  if (!endPoints) {
    return null;
  }
  var _endPoints = _slicedToArray11(endPoints, 2), _endPoints$ = _endPoints[0], x1 = _endPoints$.x, y1 = _endPoints$.y, _endPoints$2 = _endPoints[1], x2 = _endPoints$2.x, y2 = _endPoints$2.y;
  var clipPath = ifOverflowMatches(props, "hidden") ? "url(#".concat(clipPathId, ")") : void 0;
  var lineProps = _objectSpread29(_objectSpread29({
    clipPath
  }, filterProps(props, true)), {}, {
    x1,
    y1,
    x2,
    y2
  });
  return /* @__PURE__ */ import_react36.default.createElement(Layer, {
    className: clsx_default("recharts-reference-line", className)
  }, renderLine(shape, lineProps), Label2.renderCallByParent(props, rectWithCoords({
    x1,
    y1,
    x2,
    y2
  })));
}
ReferenceLine.displayName = "ReferenceLine";
ReferenceLine.defaultProps = {
  isFront: false,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  fill: "none",
  stroke: "#ccc",
  fillOpacity: 1,
  strokeWidth: 1,
  position: "middle"
};

// node_modules/recharts/es6/cartesian/ReferenceDot.js
var import_react37 = __toESM(require_react());
var import_isFunction11 = __toESM(require_isFunction());
function _typeof35(o) {
  "@babel/helpers - typeof";
  return _typeof35 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof35(o);
}
function _extends22() {
  _extends22 = Object.assign ? Object.assign.bind() : function(target) {
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
  return _extends22.apply(this, arguments);
}
function ownKeys30(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread30(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys30(Object(t), true).forEach(function(r2) {
      _defineProperty31(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys30(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty31(obj, key, value) {
  key = _toPropertyKey32(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey32(t) {
  var i = _toPrimitive32(t, "string");
  return "symbol" == _typeof35(i) ? i : String(i);
}
function _toPrimitive32(t, r) {
  if ("object" != _typeof35(t) || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof35(i))
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var getCoordinate = function getCoordinate2(props) {
  var x2 = props.x, y2 = props.y, xAxis = props.xAxis, yAxis = props.yAxis;
  var scales = createLabeledScales({
    x: xAxis.scale,
    y: yAxis.scale
  });
  var result = scales.apply({
    x: x2,
    y: y2
  }, {
    bandAware: true
  });
  if (ifOverflowMatches(props, "discard") && !scales.isInRange(result)) {
    return null;
  }
  return result;
};
function ReferenceDot(props) {
  var x2 = props.x, y2 = props.y, r = props.r, alwaysShow = props.alwaysShow, clipPathId = props.clipPathId;
  var isX = isNumOrStr(x2);
  var isY = isNumOrStr(y2);
  warn(alwaysShow === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
  if (!isX || !isY) {
    return null;
  }
  var coordinate = getCoordinate(props);
  if (!coordinate) {
    return null;
  }
  var cx = coordinate.x, cy = coordinate.y;
  var shape = props.shape, className = props.className;
  var clipPath = ifOverflowMatches(props, "hidden") ? "url(#".concat(clipPathId, ")") : void 0;
  var dotProps = _objectSpread30(_objectSpread30({
    clipPath
  }, filterProps(props, true)), {}, {
    cx,
    cy
  });
  return /* @__PURE__ */ import_react37.default.createElement(Layer, {
    className: clsx_default("recharts-reference-dot", className)
  }, ReferenceDot.renderDot(shape, dotProps), Label2.renderCallByParent(props, {
    x: cx - r,
    y: cy - r,
    width: 2 * r,
    height: 2 * r
  }));
}
ReferenceDot.displayName = "ReferenceDot";
ReferenceDot.defaultProps = {
  isFront: false,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: "#fff",
  stroke: "#ccc",
  fillOpacity: 1,
  strokeWidth: 1
};
ReferenceDot.renderDot = function(option, props) {
  var dot;
  if (/* @__PURE__ */ import_react37.default.isValidElement(option)) {
    dot = /* @__PURE__ */ import_react37.default.cloneElement(option, props);
  } else if ((0, import_isFunction11.default)(option)) {
    dot = option(props);
  } else {
    dot = /* @__PURE__ */ import_react37.default.createElement(Dot, _extends22({}, props, {
      cx: props.cx,
      cy: props.cy,
      className: "recharts-reference-dot-dot"
    }));
  }
  return dot;
};

// node_modules/recharts/es6/cartesian/ReferenceArea.js
var import_react38 = __toESM(require_react());
var import_isFunction12 = __toESM(require_isFunction());
function _typeof36(o) {
  "@babel/helpers - typeof";
  return _typeof36 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof36(o);
}
function _extends23() {
  _extends23 = Object.assign ? Object.assign.bind() : function(target) {
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
  return _extends23.apply(this, arguments);
}
function ownKeys31(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread31(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys31(Object(t), true).forEach(function(r2) {
      _defineProperty32(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys31(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty32(obj, key, value) {
  key = _toPropertyKey33(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey33(t) {
  var i = _toPrimitive33(t, "string");
  return "symbol" == _typeof36(i) ? i : String(i);
}
function _toPrimitive33(t, r) {
  if ("object" != _typeof36(t) || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof36(i))
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var getRect = function getRect2(hasX1, hasX2, hasY1, hasY2, props) {
  var xValue1 = props.x1, xValue2 = props.x2, yValue1 = props.y1, yValue2 = props.y2, xAxis = props.xAxis, yAxis = props.yAxis;
  if (!xAxis || !yAxis)
    return null;
  var scales = createLabeledScales({
    x: xAxis.scale,
    y: yAxis.scale
  });
  var p1 = {
    x: hasX1 ? scales.x.apply(xValue1, {
      position: "start"
    }) : scales.x.rangeMin,
    y: hasY1 ? scales.y.apply(yValue1, {
      position: "start"
    }) : scales.y.rangeMin
  };
  var p2 = {
    x: hasX2 ? scales.x.apply(xValue2, {
      position: "end"
    }) : scales.x.rangeMax,
    y: hasY2 ? scales.y.apply(yValue2, {
      position: "end"
    }) : scales.y.rangeMax
  };
  if (ifOverflowMatches(props, "discard") && (!scales.isInRange(p1) || !scales.isInRange(p2))) {
    return null;
  }
  return rectWithPoints(p1, p2);
};
function ReferenceArea(props) {
  var x1 = props.x1, x2 = props.x2, y1 = props.y1, y2 = props.y2, className = props.className, alwaysShow = props.alwaysShow, clipPathId = props.clipPathId;
  warn(alwaysShow === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
  var hasX1 = isNumOrStr(x1);
  var hasX2 = isNumOrStr(x2);
  var hasY1 = isNumOrStr(y1);
  var hasY2 = isNumOrStr(y2);
  var shape = props.shape;
  if (!hasX1 && !hasX2 && !hasY1 && !hasY2 && !shape) {
    return null;
  }
  var rect = getRect(hasX1, hasX2, hasY1, hasY2, props);
  if (!rect && !shape) {
    return null;
  }
  var clipPath = ifOverflowMatches(props, "hidden") ? "url(#".concat(clipPathId, ")") : void 0;
  return /* @__PURE__ */ import_react38.default.createElement(Layer, {
    className: clsx_default("recharts-reference-area", className)
  }, ReferenceArea.renderRect(shape, _objectSpread31(_objectSpread31({
    clipPath
  }, filterProps(props, true)), rect)), Label2.renderCallByParent(props, rect));
}
ReferenceArea.displayName = "ReferenceArea";
ReferenceArea.defaultProps = {
  isFront: false,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: "#ccc",
  fillOpacity: 0.5,
  stroke: "none",
  strokeWidth: 1
};
ReferenceArea.renderRect = function(option, props) {
  var rect;
  if (/* @__PURE__ */ import_react38.default.isValidElement(option)) {
    rect = /* @__PURE__ */ import_react38.default.cloneElement(option, props);
  } else if ((0, import_isFunction12.default)(option)) {
    rect = option(props);
  } else {
    rect = /* @__PURE__ */ import_react38.default.createElement(Rectangle, _extends23({}, props, {
      className: "recharts-reference-area-rect"
    }));
  }
  return rect;
};

// node_modules/recharts/es6/cartesian/CartesianAxis.js
var import_react39 = __toESM(require_react());
var import_isFunction14 = __toESM(require_isFunction());
var import_get4 = __toESM(require_get());

// node_modules/recharts/es6/cartesian/getTicks.js
var import_isFunction13 = __toESM(require_isFunction());

// node_modules/recharts/es6/util/getEveryNthWithCondition.js
function getEveryNthWithCondition(array, n, isValid) {
  if (n < 1) {
    return [];
  }
  if (n === 1 && isValid === void 0) {
    return array;
  }
  var result = [];
  for (var i = 0; i < array.length; i += n) {
    if (isValid === void 0 || isValid(array[i]) === true) {
      result.push(array[i]);
    } else {
      return void 0;
    }
  }
  return result;
}

// node_modules/recharts/es6/util/TickUtils.js
function getAngledTickWidth(contentSize, unitSize, angle) {
  var size = {
    width: contentSize.width + unitSize.width,
    height: contentSize.height + unitSize.height
  };
  return getAngledRectangleWidth(size, angle);
}
function getTickBoundaries(viewBox, sign2, sizeKey) {
  var isWidth = sizeKey === "width";
  var x2 = viewBox.x, y2 = viewBox.y, width = viewBox.width, height = viewBox.height;
  if (sign2 === 1) {
    return {
      start: isWidth ? x2 : y2,
      end: isWidth ? x2 + width : y2 + height
    };
  }
  return {
    start: isWidth ? x2 + width : y2 + height,
    end: isWidth ? x2 : y2
  };
}
function isVisible(sign2, tickPosition, getSize, start, end) {
  if (sign2 * tickPosition < sign2 * start || sign2 * tickPosition > sign2 * end) {
    return false;
  }
  var size = getSize();
  return sign2 * (tickPosition - sign2 * size / 2 - start) >= 0 && sign2 * (tickPosition + sign2 * size / 2 - end) <= 0;
}
function getNumberIntervalTicks(ticks2, interval) {
  return getEveryNthWithCondition(ticks2, interval + 1);
}

// node_modules/recharts/es6/cartesian/getEquidistantTicks.js
function getEquidistantTicks(sign2, boundaries, getTickSize, ticks2, minTickGap) {
  var result = (ticks2 || []).slice();
  var initialStart = boundaries.start, end = boundaries.end;
  var index = 0;
  var stepsize = 1;
  var start = initialStart;
  var _loop = function _loop2() {
    var entry = ticks2 === null || ticks2 === void 0 ? void 0 : ticks2[index];
    if (entry === void 0) {
      return {
        v: getEveryNthWithCondition(ticks2, stepsize)
      };
    }
    var i = index;
    var size;
    var getSize = function getSize2() {
      if (size === void 0) {
        size = getTickSize(entry, i);
      }
      return size;
    };
    var tickCoord = entry.coordinate;
    var isShow = index === 0 || isVisible(sign2, tickCoord, getSize, start, end);
    if (!isShow) {
      index = 0;
      start = initialStart;
      stepsize += 1;
    }
    if (isShow) {
      start = tickCoord + sign2 * (getSize() / 2 + minTickGap);
      index += stepsize;
    }
  }, _ret;
  while (stepsize <= result.length) {
    _ret = _loop();
    if (_ret)
      return _ret.v;
  }
  return [];
}

// node_modules/recharts/es6/cartesian/getTicks.js
function _typeof37(o) {
  "@babel/helpers - typeof";
  return _typeof37 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof37(o);
}
function ownKeys32(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread32(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys32(Object(t), true).forEach(function(r2) {
      _defineProperty33(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys32(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty33(obj, key, value) {
  key = _toPropertyKey34(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey34(t) {
  var i = _toPrimitive34(t, "string");
  return "symbol" == _typeof37(i) ? i : String(i);
}
function _toPrimitive34(t, r) {
  if ("object" != _typeof37(t) || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof37(i))
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function getTicksEnd(sign2, boundaries, getTickSize, ticks2, minTickGap) {
  var result = (ticks2 || []).slice();
  var len = result.length;
  var start = boundaries.start;
  var end = boundaries.end;
  var _loop = function _loop2(i2) {
    var entry = result[i2];
    var size;
    var getSize = function getSize2() {
      if (size === void 0) {
        size = getTickSize(entry, i2);
      }
      return size;
    };
    if (i2 === len - 1) {
      var gap = sign2 * (entry.coordinate + sign2 * getSize() / 2 - end);
      result[i2] = entry = _objectSpread32(_objectSpread32({}, entry), {}, {
        tickCoord: gap > 0 ? entry.coordinate - gap * sign2 : entry.coordinate
      });
    } else {
      result[i2] = entry = _objectSpread32(_objectSpread32({}, entry), {}, {
        tickCoord: entry.coordinate
      });
    }
    var isShow = isVisible(sign2, entry.tickCoord, getSize, start, end);
    if (isShow) {
      end = entry.tickCoord - sign2 * (getSize() / 2 + minTickGap);
      result[i2] = _objectSpread32(_objectSpread32({}, entry), {}, {
        isShow: true
      });
    }
  };
  for (var i = len - 1; i >= 0; i--) {
    _loop(i);
  }
  return result;
}
function getTicksStart(sign2, boundaries, getTickSize, ticks2, minTickGap, preserveEnd) {
  var result = (ticks2 || []).slice();
  var len = result.length;
  var start = boundaries.start, end = boundaries.end;
  if (preserveEnd) {
    var tail = ticks2[len - 1];
    var tailSize = getTickSize(tail, len - 1);
    var tailGap = sign2 * (tail.coordinate + sign2 * tailSize / 2 - end);
    result[len - 1] = tail = _objectSpread32(_objectSpread32({}, tail), {}, {
      tickCoord: tailGap > 0 ? tail.coordinate - tailGap * sign2 : tail.coordinate
    });
    var isTailShow = isVisible(sign2, tail.tickCoord, function() {
      return tailSize;
    }, start, end);
    if (isTailShow) {
      end = tail.tickCoord - sign2 * (tailSize / 2 + minTickGap);
      result[len - 1] = _objectSpread32(_objectSpread32({}, tail), {}, {
        isShow: true
      });
    }
  }
  var count = preserveEnd ? len - 1 : len;
  var _loop2 = function _loop22(i2) {
    var entry = result[i2];
    var size;
    var getSize = function getSize2() {
      if (size === void 0) {
        size = getTickSize(entry, i2);
      }
      return size;
    };
    if (i2 === 0) {
      var gap = sign2 * (entry.coordinate - sign2 * getSize() / 2 - start);
      result[i2] = entry = _objectSpread32(_objectSpread32({}, entry), {}, {
        tickCoord: gap < 0 ? entry.coordinate - gap * sign2 : entry.coordinate
      });
    } else {
      result[i2] = entry = _objectSpread32(_objectSpread32({}, entry), {}, {
        tickCoord: entry.coordinate
      });
    }
    var isShow = isVisible(sign2, entry.tickCoord, getSize, start, end);
    if (isShow) {
      start = entry.tickCoord + sign2 * (getSize() / 2 + minTickGap);
      result[i2] = _objectSpread32(_objectSpread32({}, entry), {}, {
        isShow: true
      });
    }
  };
  for (var i = 0; i < count; i++) {
    _loop2(i);
  }
  return result;
}
function getTicks(props, fontSize, letterSpacing) {
  var tick = props.tick, ticks2 = props.ticks, viewBox = props.viewBox, minTickGap = props.minTickGap, orientation = props.orientation, interval = props.interval, tickFormatter = props.tickFormatter, unit2 = props.unit, angle = props.angle;
  if (!ticks2 || !ticks2.length || !tick) {
    return [];
  }
  if (isNumber(interval) || Global.isSsr) {
    return getNumberIntervalTicks(ticks2, typeof interval === "number" && isNumber(interval) ? interval : 0);
  }
  var candidates = [];
  var sizeKey = orientation === "top" || orientation === "bottom" ? "width" : "height";
  var unitSize = unit2 && sizeKey === "width" ? getStringSize(unit2, {
    fontSize,
    letterSpacing
  }) : {
    width: 0,
    height: 0
  };
  var getTickSize = function getTickSize2(content, index) {
    var value = (0, import_isFunction13.default)(tickFormatter) ? tickFormatter(content.value, index) : content.value;
    return sizeKey === "width" ? getAngledTickWidth(getStringSize(value, {
      fontSize,
      letterSpacing
    }), unitSize, angle) : getStringSize(value, {
      fontSize,
      letterSpacing
    })[sizeKey];
  };
  var sign2 = ticks2.length >= 2 ? mathSign(ticks2[1].coordinate - ticks2[0].coordinate) : 1;
  var boundaries = getTickBoundaries(viewBox, sign2, sizeKey);
  if (interval === "equidistantPreserveStart") {
    return getEquidistantTicks(sign2, boundaries, getTickSize, ticks2, minTickGap);
  }
  if (interval === "preserveStart" || interval === "preserveStartEnd") {
    candidates = getTicksStart(sign2, boundaries, getTickSize, ticks2, minTickGap, interval === "preserveStartEnd");
  } else {
    candidates = getTicksEnd(sign2, boundaries, getTickSize, ticks2, minTickGap);
  }
  return candidates.filter(function(entry) {
    return entry.isShow;
  });
}

// node_modules/recharts/es6/cartesian/CartesianAxis.js
var _excluded17 = ["viewBox"];
var _excluded24 = ["viewBox"];
var _excluded32 = ["ticks"];
function _typeof38(o) {
  "@babel/helpers - typeof";
  return _typeof38 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof38(o);
}
function _extends24() {
  _extends24 = Object.assign ? Object.assign.bind() : function(target) {
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
  return _extends24.apply(this, arguments);
}
function ownKeys33(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread33(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys33(Object(t), true).forEach(function(r2) {
      _defineProperty34(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys33(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _objectWithoutProperties16(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose17(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose17(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _classCallCheck11(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties11(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey35(descriptor.key), descriptor);
  }
}
function _createClass11(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties11(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties11(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _callSuper7(t, o, e) {
  return o = _getPrototypeOf9(o), _possibleConstructorReturn9(t, _isNativeReflectConstruct9() ? Reflect.construct(o, e || [], _getPrototypeOf9(t).constructor) : o.apply(t, e));
}
function _possibleConstructorReturn9(self2, call) {
  if (call && (_typeof38(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized10(self2);
}
function _assertThisInitialized10(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _isNativeReflectConstruct9() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct9 = function _isNativeReflectConstruct11() {
    return !!t;
  })();
}
function _getPrototypeOf9(o) {
  _getPrototypeOf9 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf11(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf9(o);
}
function _inherits9(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass)
    _setPrototypeOf9(subClass, superClass);
}
function _setPrototypeOf9(o, p) {
  _setPrototypeOf9 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf11(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf9(o, p);
}
function _defineProperty34(obj, key, value) {
  key = _toPropertyKey35(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey35(t) {
  var i = _toPrimitive35(t, "string");
  return "symbol" == _typeof38(i) ? i : String(i);
}
function _toPrimitive35(t, r) {
  if ("object" != _typeof38(t) || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof38(i))
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var CartesianAxis = /* @__PURE__ */ function(_Component) {
  _inherits9(CartesianAxis2, _Component);
  function CartesianAxis2(props) {
    var _this;
    _classCallCheck11(this, CartesianAxis2);
    _this = _callSuper7(this, CartesianAxis2, [props]);
    _this.state = {
      fontSize: "",
      letterSpacing: ""
    };
    return _this;
  }
  _createClass11(CartesianAxis2, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(_ref, nextState) {
      var viewBox = _ref.viewBox, restProps = _objectWithoutProperties16(_ref, _excluded17);
      var _this$props = this.props, viewBoxOld = _this$props.viewBox, restPropsOld = _objectWithoutProperties16(_this$props, _excluded24);
      return !shallowEqual(viewBox, viewBoxOld) || !shallowEqual(restProps, restPropsOld) || !shallowEqual(nextState, this.state);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var htmlLayer = this.layerReference;
      if (!htmlLayer)
        return;
      var tick = htmlLayer.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];
      if (tick) {
        this.setState({
          fontSize: window.getComputedStyle(tick).fontSize,
          letterSpacing: window.getComputedStyle(tick).letterSpacing
        });
      }
    }
    /**
     * Calculate the coordinates of endpoints in ticks
     * @param  {Object} data The data of a simple tick
     * @return {Object} (x1, y1): The coordinate of endpoint close to tick text
     *  (x2, y2): The coordinate of endpoint close to axis
     */
  }, {
    key: "getTickLineCoord",
    value: function getTickLineCoord(data2) {
      var _this$props2 = this.props, x2 = _this$props2.x, y2 = _this$props2.y, width = _this$props2.width, height = _this$props2.height, orientation = _this$props2.orientation, tickSize = _this$props2.tickSize, mirror = _this$props2.mirror, tickMargin = _this$props2.tickMargin;
      var x1, x22, y1, y22, tx, ty;
      var sign2 = mirror ? -1 : 1;
      var finalTickSize = data2.tickSize || tickSize;
      var tickCoord = isNumber(data2.tickCoord) ? data2.tickCoord : data2.coordinate;
      switch (orientation) {
        case "top":
          x1 = x22 = data2.coordinate;
          y22 = y2 + +!mirror * height;
          y1 = y22 - sign2 * finalTickSize;
          ty = y1 - sign2 * tickMargin;
          tx = tickCoord;
          break;
        case "left":
          y1 = y22 = data2.coordinate;
          x22 = x2 + +!mirror * width;
          x1 = x22 - sign2 * finalTickSize;
          tx = x1 - sign2 * tickMargin;
          ty = tickCoord;
          break;
        case "right":
          y1 = y22 = data2.coordinate;
          x22 = x2 + +mirror * width;
          x1 = x22 + sign2 * finalTickSize;
          tx = x1 + sign2 * tickMargin;
          ty = tickCoord;
          break;
        default:
          x1 = x22 = data2.coordinate;
          y22 = y2 + +mirror * height;
          y1 = y22 + sign2 * finalTickSize;
          ty = y1 + sign2 * tickMargin;
          tx = tickCoord;
          break;
      }
      return {
        line: {
          x1,
          y1,
          x2: x22,
          y2: y22
        },
        tick: {
          x: tx,
          y: ty
        }
      };
    }
  }, {
    key: "getTickTextAnchor",
    value: function getTickTextAnchor() {
      var _this$props3 = this.props, orientation = _this$props3.orientation, mirror = _this$props3.mirror;
      var textAnchor;
      switch (orientation) {
        case "left":
          textAnchor = mirror ? "start" : "end";
          break;
        case "right":
          textAnchor = mirror ? "end" : "start";
          break;
        default:
          textAnchor = "middle";
          break;
      }
      return textAnchor;
    }
  }, {
    key: "getTickVerticalAnchor",
    value: function getTickVerticalAnchor() {
      var _this$props4 = this.props, orientation = _this$props4.orientation, mirror = _this$props4.mirror;
      var verticalAnchor = "end";
      switch (orientation) {
        case "left":
        case "right":
          verticalAnchor = "middle";
          break;
        case "top":
          verticalAnchor = mirror ? "start" : "end";
          break;
        default:
          verticalAnchor = mirror ? "end" : "start";
          break;
      }
      return verticalAnchor;
    }
  }, {
    key: "renderAxisLine",
    value: function renderAxisLine() {
      var _this$props5 = this.props, x2 = _this$props5.x, y2 = _this$props5.y, width = _this$props5.width, height = _this$props5.height, orientation = _this$props5.orientation, mirror = _this$props5.mirror, axisLine = _this$props5.axisLine;
      var props = _objectSpread33(_objectSpread33(_objectSpread33({}, filterProps(this.props, false)), filterProps(axisLine, false)), {}, {
        fill: "none"
      });
      if (orientation === "top" || orientation === "bottom") {
        var needHeight = +(orientation === "top" && !mirror || orientation === "bottom" && mirror);
        props = _objectSpread33(_objectSpread33({}, props), {}, {
          x1: x2,
          y1: y2 + needHeight * height,
          x2: x2 + width,
          y2: y2 + needHeight * height
        });
      } else {
        var needWidth = +(orientation === "left" && !mirror || orientation === "right" && mirror);
        props = _objectSpread33(_objectSpread33({}, props), {}, {
          x1: x2 + needWidth * width,
          y1: y2,
          x2: x2 + needWidth * width,
          y2: y2 + height
        });
      }
      return /* @__PURE__ */ import_react39.default.createElement("line", _extends24({}, props, {
        className: clsx_default("recharts-cartesian-axis-line", (0, import_get4.default)(axisLine, "className"))
      }));
    }
  }, {
    key: "renderTicks",
    value: (
      /**
       * render the ticks
       * @param {Array} ticks The ticks to actually render (overrides what was passed in props)
       * @param {string} fontSize Fontsize to consider for tick spacing
       * @param {string} letterSpacing Letterspacing to consider for tick spacing
       * @return {ReactComponent} renderedTicks
       */
      function renderTicks(ticks2, fontSize, letterSpacing) {
        var _this2 = this;
        var _this$props6 = this.props, tickLine = _this$props6.tickLine, stroke = _this$props6.stroke, tick = _this$props6.tick, tickFormatter = _this$props6.tickFormatter, unit2 = _this$props6.unit;
        var finalTicks = getTicks(_objectSpread33(_objectSpread33({}, this.props), {}, {
          ticks: ticks2
        }), fontSize, letterSpacing);
        var textAnchor = this.getTickTextAnchor();
        var verticalAnchor = this.getTickVerticalAnchor();
        var axisProps = filterProps(this.props, false);
        var customTickProps = filterProps(tick, false);
        var tickLineProps = _objectSpread33(_objectSpread33({}, axisProps), {}, {
          fill: "none"
        }, filterProps(tickLine, false));
        var items = finalTicks.map(function(entry, i) {
          var _this2$getTickLineCoo = _this2.getTickLineCoord(entry), lineCoord = _this2$getTickLineCoo.line, tickCoord = _this2$getTickLineCoo.tick;
          var tickProps = _objectSpread33(_objectSpread33(_objectSpread33(_objectSpread33({
            textAnchor,
            verticalAnchor
          }, axisProps), {}, {
            stroke: "none",
            fill: stroke
          }, customTickProps), tickCoord), {}, {
            index: i,
            payload: entry,
            visibleTicksCount: finalTicks.length,
            tickFormatter
          });
          return /* @__PURE__ */ import_react39.default.createElement(Layer, _extends24({
            className: "recharts-cartesian-axis-tick",
            key: "tick-".concat(entry.value, "-").concat(entry.coordinate, "-").concat(entry.tickCoord)
          }, adaptEventsOfChild(_this2.props, entry, i)), tickLine && /* @__PURE__ */ import_react39.default.createElement("line", _extends24({}, tickLineProps, lineCoord, {
            className: clsx_default("recharts-cartesian-axis-tick-line", (0, import_get4.default)(tickLine, "className"))
          })), tick && CartesianAxis2.renderTickItem(tick, tickProps, "".concat((0, import_isFunction14.default)(tickFormatter) ? tickFormatter(entry.value, i) : entry.value).concat(unit2 || "")));
        });
        return /* @__PURE__ */ import_react39.default.createElement("g", {
          className: "recharts-cartesian-axis-ticks"
        }, items);
      }
    )
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var _this$props7 = this.props, axisLine = _this$props7.axisLine, width = _this$props7.width, height = _this$props7.height, ticksGenerator = _this$props7.ticksGenerator, className = _this$props7.className, hide = _this$props7.hide;
      if (hide) {
        return null;
      }
      var _this$props8 = this.props, ticks2 = _this$props8.ticks, noTicksProps = _objectWithoutProperties16(_this$props8, _excluded32);
      var finalTicks = ticks2;
      if ((0, import_isFunction14.default)(ticksGenerator)) {
        finalTicks = ticks2 && ticks2.length > 0 ? ticksGenerator(this.props) : ticksGenerator(noTicksProps);
      }
      if (width <= 0 || height <= 0 || !finalTicks || !finalTicks.length) {
        return null;
      }
      return /* @__PURE__ */ import_react39.default.createElement(Layer, {
        className: clsx_default("recharts-cartesian-axis", className),
        ref: function ref(_ref2) {
          _this3.layerReference = _ref2;
        }
      }, axisLine && this.renderAxisLine(), this.renderTicks(finalTicks, this.state.fontSize, this.state.letterSpacing), Label2.renderCallByParent(this.props));
    }
  }], [{
    key: "renderTickItem",
    value: function renderTickItem(option, props, value) {
      var tickItem;
      if (/* @__PURE__ */ import_react39.default.isValidElement(option)) {
        tickItem = /* @__PURE__ */ import_react39.default.cloneElement(option, props);
      } else if ((0, import_isFunction14.default)(option)) {
        tickItem = option(props);
      } else {
        tickItem = /* @__PURE__ */ import_react39.default.createElement(Text, _extends24({}, props, {
          className: "recharts-cartesian-axis-tick-value"
        }), value);
      }
      return tickItem;
    }
  }]);
  return CartesianAxis2;
}(import_react39.Component);
_defineProperty34(CartesianAxis, "displayName", "CartesianAxis");
_defineProperty34(CartesianAxis, "defaultProps", {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  viewBox: {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  },
  // The orientation of axis
  orientation: "bottom",
  // The ticks
  ticks: [],
  stroke: "#666",
  tickLine: true,
  axisLine: true,
  tick: true,
  mirror: false,
  minTickGap: 5,
  // The width or height of tick
  tickSize: 6,
  tickMargin: 2,
  interval: "preserveEnd"
});

// node_modules/recharts/es6/cartesian/XAxis.js
var import_react40 = __toESM(require_react());
function _extends25() {
  _extends25 = Object.assign ? Object.assign.bind() : function(target) {
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
  return _extends25.apply(this, arguments);
}
var XAxis = function XAxis2(_ref) {
  var xAxisId = _ref.xAxisId;
  var width = useChartWidth();
  var height = useChartHeight();
  var axisOptions = useXAxisOrThrow(xAxisId);
  if (axisOptions == null) {
    return null;
  }
  return (
    // @ts-expect-error the axisOptions type is not exactly what CartesianAxis is expecting.
    /* @__PURE__ */ import_react40.default.createElement(CartesianAxis, _extends25({}, axisOptions, {
      className: clsx_default("recharts-".concat(axisOptions.axisType, " ").concat(axisOptions.axisType), axisOptions.className),
      viewBox: {
        x: 0,
        y: 0,
        width,
        height
      },
      ticksGenerator: function ticksGenerator(axis) {
        return getTicksOfAxis(axis, true);
      }
    }))
  );
};
XAxis.displayName = "XAxis";
XAxis.defaultProps = {
  allowDecimals: true,
  hide: false,
  orientation: "bottom",
  width: 0,
  height: 30,
  mirror: false,
  xAxisId: 0,
  tickCount: 5,
  type: "category",
  padding: {
    left: 0,
    right: 0
  },
  allowDataOverflow: false,
  scale: "auto",
  reversed: false,
  allowDuplicatedCategory: true
};

// node_modules/recharts/es6/cartesian/YAxis.js
var import_react41 = __toESM(require_react());
function _extends26() {
  _extends26 = Object.assign ? Object.assign.bind() : function(target) {
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
  return _extends26.apply(this, arguments);
}
var YAxis = function YAxis2(_ref) {
  var yAxisId = _ref.yAxisId;
  var width = useChartWidth();
  var height = useChartHeight();
  var axisOptions = useYAxisOrThrow(yAxisId);
  if (axisOptions == null) {
    return null;
  }
  return (
    // @ts-expect-error the axisOptions type is not exactly what CartesianAxis is expecting.
    /* @__PURE__ */ import_react41.default.createElement(CartesianAxis, _extends26({}, axisOptions, {
      className: clsx_default("recharts-".concat(axisOptions.axisType, " ").concat(axisOptions.axisType), axisOptions.className),
      viewBox: {
        x: 0,
        y: 0,
        width,
        height
      },
      ticksGenerator: function ticksGenerator(axis) {
        return getTicksOfAxis(axis, true);
      }
    }))
  );
};
YAxis.displayName = "YAxis";
YAxis.defaultProps = {
  allowDuplicatedCategory: true,
  allowDecimals: true,
  hide: false,
  orientation: "left",
  width: 60,
  height: 0,
  mirror: false,
  yAxisId: 0,
  tickCount: 5,
  type: "number",
  padding: {
    top: 0,
    bottom: 0
  },
  allowDataOverflow: false,
  scale: "auto",
  reversed: false
};

// node_modules/recharts/es6/chart/generateCategoricalChart.js
var import_react43 = __toESM(require_react());
var import_isNil9 = __toESM(require_isNil());
var import_isFunction15 = __toESM(require_isFunction());
var import_range3 = __toESM(require_range());
var import_get5 = __toESM(require_get());
var import_sortBy3 = __toESM(require_sortBy());
var import_throttle2 = __toESM(require_throttle());

// node_modules/recharts/es6/util/DetectReferenceElementsDomain.js
function _toConsumableArray9(arr) {
  return _arrayWithoutHoles9(arr) || _iterableToArray10(arr) || _unsupportedIterableToArray18(arr) || _nonIterableSpread9();
}
function _nonIterableSpread9() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray18(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray18(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray18(o, minLen);
}
function _iterableToArray10(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles9(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray18(arr);
}
function _arrayLikeToArray18(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
var detectReferenceElementsDomain = function detectReferenceElementsDomain2(children, domain, axisId, axisType, specifiedTicks) {
  var lines = findAllByType(children, ReferenceLine);
  var dots = findAllByType(children, ReferenceDot);
  var elements = [].concat(_toConsumableArray9(lines), _toConsumableArray9(dots));
  var areas = findAllByType(children, ReferenceArea);
  var idKey = "".concat(axisType, "Id");
  var valueKey = axisType[0];
  var finalDomain = domain;
  if (elements.length) {
    finalDomain = elements.reduce(function(result, el) {
      if (el.props[idKey] === axisId && ifOverflowMatches(el.props, "extendDomain") && isNumber(el.props[valueKey])) {
        var value = el.props[valueKey];
        return [Math.min(result[0], value), Math.max(result[1], value)];
      }
      return result;
    }, finalDomain);
  }
  if (areas.length) {
    var key1 = "".concat(valueKey, "1");
    var key2 = "".concat(valueKey, "2");
    finalDomain = areas.reduce(function(result, el) {
      if (el.props[idKey] === axisId && ifOverflowMatches(el.props, "extendDomain") && isNumber(el.props[key1]) && isNumber(el.props[key2])) {
        var value1 = el.props[key1];
        var value2 = el.props[key2];
        return [Math.min(result[0], value1, value2), Math.max(result[1], value1, value2)];
      }
      return result;
    }, finalDomain);
  }
  if (specifiedTicks && specifiedTicks.length) {
    finalDomain = specifiedTicks.reduce(function(result, tick) {
      if (isNumber(tick)) {
        return [Math.min(result[0], tick), Math.max(result[1], tick)];
      }
      return result;
    }, finalDomain);
  }
  return finalDomain;
};

// node_modules/recharts/es6/util/Events.js
var import_eventemitter3 = __toESM(require_eventemitter3());
var eventCenter = new import_eventemitter3.default();
var SYNC_EVENT = "recharts.syncMouseEvents";

// node_modules/recharts/es6/chart/AccessibilityManager.js
function _typeof39(o) {
  "@babel/helpers - typeof";
  return _typeof39 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof39(o);
}
function _classCallCheck12(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties12(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey36(descriptor.key), descriptor);
  }
}
function _createClass12(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties12(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties12(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _defineProperty35(obj, key, value) {
  key = _toPropertyKey36(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey36(t) {
  var i = _toPrimitive36(t, "string");
  return "symbol" == _typeof39(i) ? i : String(i);
}
function _toPrimitive36(t, r) {
  if ("object" != _typeof39(t) || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof39(i))
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var AccessibilityManager = /* @__PURE__ */ function() {
  function AccessibilityManager2() {
    _classCallCheck12(this, AccessibilityManager2);
    _defineProperty35(this, "activeIndex", 0);
    _defineProperty35(this, "coordinateList", []);
    _defineProperty35(this, "layout", "horizontal");
  }
  _createClass12(AccessibilityManager2, [{
    key: "setDetails",
    value: function setDetails(_ref) {
      var _ref2;
      var _ref$coordinateList = _ref.coordinateList, coordinateList = _ref$coordinateList === void 0 ? null : _ref$coordinateList, _ref$container = _ref.container, container = _ref$container === void 0 ? null : _ref$container, _ref$layout = _ref.layout, layout = _ref$layout === void 0 ? null : _ref$layout, _ref$offset = _ref.offset, offset = _ref$offset === void 0 ? null : _ref$offset, _ref$mouseHandlerCall = _ref.mouseHandlerCallback, mouseHandlerCallback = _ref$mouseHandlerCall === void 0 ? null : _ref$mouseHandlerCall;
      this.coordinateList = (_ref2 = coordinateList !== null && coordinateList !== void 0 ? coordinateList : this.coordinateList) !== null && _ref2 !== void 0 ? _ref2 : [];
      this.container = container !== null && container !== void 0 ? container : this.container;
      this.layout = layout !== null && layout !== void 0 ? layout : this.layout;
      this.offset = offset !== null && offset !== void 0 ? offset : this.offset;
      this.mouseHandlerCallback = mouseHandlerCallback !== null && mouseHandlerCallback !== void 0 ? mouseHandlerCallback : this.mouseHandlerCallback;
      this.activeIndex = Math.min(Math.max(this.activeIndex, 0), this.coordinateList.length - 1);
    }
  }, {
    key: "focus",
    value: function focus() {
      this.spoofMouse();
    }
  }, {
    key: "keyboardEvent",
    value: function keyboardEvent(e) {
      if (this.coordinateList.length === 0) {
        return;
      }
      switch (e.key) {
        case "ArrowRight": {
          if (this.layout !== "horizontal") {
            return;
          }
          this.activeIndex = Math.min(this.activeIndex + 1, this.coordinateList.length - 1);
          this.spoofMouse();
          break;
        }
        case "ArrowLeft": {
          if (this.layout !== "horizontal") {
            return;
          }
          this.activeIndex = Math.max(this.activeIndex - 1, 0);
          this.spoofMouse();
          break;
        }
        default: {
          break;
        }
      }
    }
  }, {
    key: "setIndex",
    value: function setIndex(newIndex) {
      this.activeIndex = newIndex;
    }
  }, {
    key: "spoofMouse",
    value: function spoofMouse() {
      var _window, _window2;
      if (this.layout !== "horizontal") {
        return;
      }
      if (this.coordinateList.length === 0) {
        return;
      }
      var _this$container$getBo = this.container.getBoundingClientRect(), x2 = _this$container$getBo.x, y2 = _this$container$getBo.y, height = _this$container$getBo.height;
      var coordinate = this.coordinateList[this.activeIndex].coordinate;
      var scrollOffsetX = ((_window = window) === null || _window === void 0 ? void 0 : _window.scrollX) || 0;
      var scrollOffsetY = ((_window2 = window) === null || _window2 === void 0 ? void 0 : _window2.scrollY) || 0;
      var pageX = x2 + coordinate + scrollOffsetX;
      var pageY = y2 + this.offset.top + height / 2 + scrollOffsetY;
      this.mouseHandlerCallback({
        pageX,
        pageY
      });
    }
  }]);
  return AccessibilityManager2;
}();

// node_modules/recharts/es6/util/isDomainSpecifiedByUser.js
function isDomainSpecifiedByUser(domain, allowDataOverflow, axisType) {
  if (axisType === "number" && allowDataOverflow === true && Array.isArray(domain)) {
    var domainStart = domain === null || domain === void 0 ? void 0 : domain[0];
    var domainEnd = domain === null || domain === void 0 ? void 0 : domain[1];
    if (!!domainStart && !!domainEnd && isNumber(domainStart) && isNumber(domainEnd)) {
      return true;
    }
  }
  return false;
}

// node_modules/recharts/es6/component/Cursor.js
var import_react42 = __toESM(require_react());

// node_modules/recharts/es6/util/cursor/getCursorRectangle.js
function getCursorRectangle(layout, activeCoordinate, offset, tooltipAxisBandSize) {
  var halfSize = tooltipAxisBandSize / 2;
  return {
    stroke: "none",
    fill: "#ccc",
    x: layout === "horizontal" ? activeCoordinate.x - halfSize : offset.left + 0.5,
    y: layout === "horizontal" ? offset.top + 0.5 : activeCoordinate.y - halfSize,
    width: layout === "horizontal" ? tooltipAxisBandSize : offset.width - 1,
    height: layout === "horizontal" ? offset.height - 1 : tooltipAxisBandSize
  };
}

// node_modules/recharts/es6/util/cursor/getRadialCursorPoints.js
function getRadialCursorPoints(activeCoordinate) {
  var cx = activeCoordinate.cx, cy = activeCoordinate.cy, radius = activeCoordinate.radius, startAngle = activeCoordinate.startAngle, endAngle = activeCoordinate.endAngle;
  var startPoint = polarToCartesian(cx, cy, radius, startAngle);
  var endPoint = polarToCartesian(cx, cy, radius, endAngle);
  return {
    points: [startPoint, endPoint],
    cx,
    cy,
    radius,
    startAngle,
    endAngle
  };
}

// node_modules/recharts/es6/util/cursor/getCursorPoints.js
function getCursorPoints(layout, activeCoordinate, offset) {
  var x1, y1, x2, y2;
  if (layout === "horizontal") {
    x1 = activeCoordinate.x;
    x2 = x1;
    y1 = offset.top;
    y2 = offset.top + offset.height;
  } else if (layout === "vertical") {
    y1 = activeCoordinate.y;
    y2 = y1;
    x1 = offset.left;
    x2 = offset.left + offset.width;
  } else if (activeCoordinate.cx != null && activeCoordinate.cy != null) {
    if (layout === "centric") {
      var cx = activeCoordinate.cx, cy = activeCoordinate.cy, innerRadius = activeCoordinate.innerRadius, outerRadius = activeCoordinate.outerRadius, angle = activeCoordinate.angle;
      var innerPoint = polarToCartesian(cx, cy, innerRadius, angle);
      var outerPoint = polarToCartesian(cx, cy, outerRadius, angle);
      x1 = innerPoint.x;
      y1 = innerPoint.y;
      x2 = outerPoint.x;
      y2 = outerPoint.y;
    } else {
      return getRadialCursorPoints(activeCoordinate);
    }
  }
  return [{
    x: x1,
    y: y1
  }, {
    x: x2,
    y: y2
  }];
}

// node_modules/recharts/es6/component/Cursor.js
function _typeof40(o) {
  "@babel/helpers - typeof";
  return _typeof40 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof40(o);
}
function ownKeys34(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread34(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys34(Object(t), true).forEach(function(r2) {
      _defineProperty36(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys34(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty36(obj, key, value) {
  key = _toPropertyKey37(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey37(t) {
  var i = _toPrimitive37(t, "string");
  return "symbol" == _typeof40(i) ? i : String(i);
}
function _toPrimitive37(t, r) {
  if ("object" != _typeof40(t) || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof40(i))
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function Cursor(props) {
  var element = props.element, tooltipEventType = props.tooltipEventType, isActive = props.isActive, activeCoordinate = props.activeCoordinate, activePayload = props.activePayload, offset = props.offset, activeTooltipIndex = props.activeTooltipIndex, tooltipAxisBandSize = props.tooltipAxisBandSize, layout = props.layout, chartName = props.chartName;
  if (!element || !element.props.cursor || !isActive || !activeCoordinate || chartName !== "ScatterChart" && tooltipEventType !== "axis") {
    return null;
  }
  var restProps;
  var cursorComp = Curve;
  if (chartName === "ScatterChart") {
    restProps = activeCoordinate;
    cursorComp = Cross;
  } else if (chartName === "BarChart") {
    restProps = getCursorRectangle(layout, activeCoordinate, offset, tooltipAxisBandSize);
    cursorComp = Rectangle;
  } else if (layout === "radial") {
    var _getRadialCursorPoint = getRadialCursorPoints(activeCoordinate), cx = _getRadialCursorPoint.cx, cy = _getRadialCursorPoint.cy, radius = _getRadialCursorPoint.radius, startAngle = _getRadialCursorPoint.startAngle, endAngle = _getRadialCursorPoint.endAngle;
    restProps = {
      cx,
      cy,
      startAngle,
      endAngle,
      innerRadius: radius,
      outerRadius: radius
    };
    cursorComp = Sector;
  } else {
    restProps = {
      points: getCursorPoints(layout, activeCoordinate, offset)
    };
    cursorComp = Curve;
  }
  var cursorProps = _objectSpread34(_objectSpread34(_objectSpread34(_objectSpread34({
    stroke: "#ccc",
    pointerEvents: "none"
  }, offset), restProps), filterProps(element.props.cursor, false)), {}, {
    payload: activePayload,
    payloadIndex: activeTooltipIndex,
    className: "recharts-tooltip-cursor"
  });
  return /* @__PURE__ */ (0, import_react42.isValidElement)(element.props.cursor) ? /* @__PURE__ */ (0, import_react42.cloneElement)(element.props.cursor, cursorProps) : /* @__PURE__ */ (0, import_react42.createElement)(cursorComp, cursorProps);
}

// node_modules/recharts/es6/chart/generateCategoricalChart.js
var _excluded18 = ["item"];
var _excluded25 = ["children", "className", "width", "height", "style", "compact", "title", "desc"];
function _typeof41(o) {
  "@babel/helpers - typeof";
  return _typeof41 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof41(o);
}
function _extends27() {
  _extends27 = Object.assign ? Object.assign.bind() : function(target) {
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
  return _extends27.apply(this, arguments);
}
function _slicedToArray12(arr, i) {
  return _arrayWithHoles13(arr) || _iterableToArrayLimit12(arr, i) || _unsupportedIterableToArray19(arr, i) || _nonIterableRest13();
}
function _nonIterableRest13() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit12(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a2 = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t)
          return;
        f = false;
      } else
        for (; !(f = (e = i.call(t)).done) && (a2.push(e.value), a2.length !== l); f = true)
          ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u))
          return;
      } finally {
        if (o)
          throw n;
      }
    }
    return a2;
  }
}
function _arrayWithHoles13(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _objectWithoutProperties17(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose18(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose18(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _classCallCheck13(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties13(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey38(descriptor.key), descriptor);
  }
}
function _createClass13(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties13(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties13(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _callSuper8(t, o, e) {
  return o = _getPrototypeOf10(o), _possibleConstructorReturn10(t, _isNativeReflectConstruct10() ? Reflect.construct(o, e || [], _getPrototypeOf10(t).constructor) : o.apply(t, e));
}
function _possibleConstructorReturn10(self2, call) {
  if (call && (_typeof41(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized11(self2);
}
function _isNativeReflectConstruct10() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct10 = function _isNativeReflectConstruct11() {
    return !!t;
  })();
}
function _getPrototypeOf10(o) {
  _getPrototypeOf10 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf11(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf10(o);
}
function _assertThisInitialized11(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _inherits10(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass)
    _setPrototypeOf10(subClass, superClass);
}
function _setPrototypeOf10(o, p) {
  _setPrototypeOf10 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf11(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf10(o, p);
}
function _toConsumableArray10(arr) {
  return _arrayWithoutHoles10(arr) || _iterableToArray11(arr) || _unsupportedIterableToArray19(arr) || _nonIterableSpread10();
}
function _nonIterableSpread10() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray19(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray19(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray19(o, minLen);
}
function _iterableToArray11(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles10(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray19(arr);
}
function _arrayLikeToArray19(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function ownKeys35(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread35(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys35(Object(t), true).forEach(function(r2) {
      _defineProperty37(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys35(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty37(obj, key, value) {
  key = _toPropertyKey38(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey38(t) {
  var i = _toPrimitive38(t, "string");
  return "symbol" == _typeof41(i) ? i : String(i);
}
function _toPrimitive38(t, r) {
  if ("object" != _typeof41(t) || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof41(i))
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var ORIENT_MAP = {
  xAxis: ["bottom", "top"],
  yAxis: ["left", "right"]
};
var FULL_WIDTH_AND_HEIGHT = {
  width: "100%",
  height: "100%"
};
var originCoordinate = {
  x: 0,
  y: 0
};
function renderAsIs(element) {
  return element;
}
var calculateTooltipPos = function calculateTooltipPos2(rangeObj, layout) {
  if (layout === "horizontal") {
    return rangeObj.x;
  }
  if (layout === "vertical") {
    return rangeObj.y;
  }
  if (layout === "centric") {
    return rangeObj.angle;
  }
  return rangeObj.radius;
};
var getActiveCoordinate = function getActiveCoordinate2(layout, tooltipTicks, activeIndex, rangeObj) {
  var entry = tooltipTicks.find(function(tick) {
    return tick && tick.index === activeIndex;
  });
  if (entry) {
    if (layout === "horizontal") {
      return {
        x: entry.coordinate,
        y: rangeObj.y
      };
    }
    if (layout === "vertical") {
      return {
        x: rangeObj.x,
        y: entry.coordinate
      };
    }
    if (layout === "centric") {
      var _angle = entry.coordinate;
      var _radius = rangeObj.radius;
      return _objectSpread35(_objectSpread35(_objectSpread35({}, rangeObj), polarToCartesian(rangeObj.cx, rangeObj.cy, _radius, _angle)), {}, {
        angle: _angle,
        radius: _radius
      });
    }
    var radius = entry.coordinate;
    var angle = rangeObj.angle;
    return _objectSpread35(_objectSpread35(_objectSpread35({}, rangeObj), polarToCartesian(rangeObj.cx, rangeObj.cy, radius, angle)), {}, {
      angle,
      radius
    });
  }
  return originCoordinate;
};
var getDisplayedData = function getDisplayedData2(data2, _ref) {
  var graphicalItems = _ref.graphicalItems, dataStartIndex = _ref.dataStartIndex, dataEndIndex = _ref.dataEndIndex;
  var itemsData = (graphicalItems !== null && graphicalItems !== void 0 ? graphicalItems : []).reduce(function(result, child) {
    var itemData = child.props.data;
    if (itemData && itemData.length) {
      return [].concat(_toConsumableArray10(result), _toConsumableArray10(itemData));
    }
    return result;
  }, []);
  if (itemsData.length > 0) {
    return itemsData;
  }
  if (data2 && data2.length && isNumber(dataStartIndex) && isNumber(dataEndIndex)) {
    return data2.slice(dataStartIndex, dataEndIndex + 1);
  }
  return [];
};
function getDefaultDomainByAxisType(axisType) {
  return axisType === "number" ? [0, "auto"] : void 0;
}
var getTooltipContent = function getTooltipContent2(state, chartData, activeIndex, activeLabel) {
  var graphicalItems = state.graphicalItems, tooltipAxis = state.tooltipAxis;
  var displayedData = getDisplayedData(chartData, state);
  if (activeIndex < 0 || !graphicalItems || !graphicalItems.length || activeIndex >= displayedData.length) {
    return null;
  }
  return graphicalItems.reduce(function(result, child) {
    var _child$props$data;
    var data2 = (_child$props$data = child.props.data) !== null && _child$props$data !== void 0 ? _child$props$data : chartData;
    if (data2 && state.dataStartIndex + state.dataEndIndex !== 0) {
      data2 = data2.slice(state.dataStartIndex, state.dataEndIndex + 1);
    }
    var payload;
    if (tooltipAxis.dataKey && !tooltipAxis.allowDuplicatedCategory) {
      var entries = data2 === void 0 ? displayedData : data2;
      payload = findEntryInArray(entries, tooltipAxis.dataKey, activeLabel);
    } else {
      payload = data2 && data2[activeIndex] || displayedData[activeIndex];
    }
    if (!payload) {
      return result;
    }
    return [].concat(_toConsumableArray10(result), [getTooltipItem(child, payload)]);
  }, []);
};
var getTooltipData = function getTooltipData2(state, chartData, layout, rangeObj) {
  var rangeData = rangeObj || {
    x: state.chartX,
    y: state.chartY
  };
  var pos = calculateTooltipPos(rangeData, layout);
  var ticks2 = state.orderedTooltipTicks, axis = state.tooltipAxis, tooltipTicks = state.tooltipTicks;
  var activeIndex = calculateActiveTickIndex(pos, ticks2, tooltipTicks, axis);
  if (activeIndex >= 0 && tooltipTicks) {
    var activeLabel = tooltipTicks[activeIndex] && tooltipTicks[activeIndex].value;
    var activePayload = getTooltipContent(state, chartData, activeIndex, activeLabel);
    var activeCoordinate = getActiveCoordinate(layout, ticks2, activeIndex, rangeData);
    return {
      activeTooltipIndex: activeIndex,
      activeLabel,
      activePayload,
      activeCoordinate
    };
  }
  return null;
};
var getAxisMapByAxes = function getAxisMapByAxes2(props, _ref2) {
  var axes = _ref2.axes, graphicalItems = _ref2.graphicalItems, axisType = _ref2.axisType, axisIdKey = _ref2.axisIdKey, stackGroups = _ref2.stackGroups, dataStartIndex = _ref2.dataStartIndex, dataEndIndex = _ref2.dataEndIndex;
  var layout = props.layout, children = props.children, stackOffset = props.stackOffset;
  var isCategorical = isCategoricalAxis(layout, axisType);
  return axes.reduce(function(result, child) {
    var _child$props$domain2;
    var _child$props = child.props, type = _child$props.type, dataKey = _child$props.dataKey, allowDataOverflow = _child$props.allowDataOverflow, allowDuplicatedCategory = _child$props.allowDuplicatedCategory, scale = _child$props.scale, ticks2 = _child$props.ticks, includeHidden = _child$props.includeHidden;
    var axisId = child.props[axisIdKey];
    if (result[axisId]) {
      return result;
    }
    var displayedData = getDisplayedData(props.data, {
      graphicalItems: graphicalItems.filter(function(item) {
        return item.props[axisIdKey] === axisId;
      }),
      dataStartIndex,
      dataEndIndex
    });
    var len = displayedData.length;
    var domain, duplicateDomain, categoricalDomain;
    if (isDomainSpecifiedByUser(child.props.domain, allowDataOverflow, type)) {
      domain = parseSpecifiedDomain(child.props.domain, null, allowDataOverflow);
      if (isCategorical && (type === "number" || scale !== "auto")) {
        categoricalDomain = getDomainOfDataByKey(displayedData, dataKey, "category");
      }
    }
    var defaultDomain = getDefaultDomainByAxisType(type);
    if (!domain || domain.length === 0) {
      var _child$props$domain;
      var childDomain = (_child$props$domain = child.props.domain) !== null && _child$props$domain !== void 0 ? _child$props$domain : defaultDomain;
      if (dataKey) {
        domain = getDomainOfDataByKey(displayedData, dataKey, type);
        if (type === "category" && isCategorical) {
          var duplicate = hasDuplicate(domain);
          if (allowDuplicatedCategory && duplicate) {
            duplicateDomain = domain;
            domain = (0, import_range3.default)(0, len);
          } else if (!allowDuplicatedCategory) {
            domain = parseDomainOfCategoryAxis(childDomain, domain, child).reduce(function(finalDomain, entry) {
              return finalDomain.indexOf(entry) >= 0 ? finalDomain : [].concat(_toConsumableArray10(finalDomain), [entry]);
            }, []);
          }
        } else if (type === "category") {
          if (!allowDuplicatedCategory) {
            domain = parseDomainOfCategoryAxis(childDomain, domain, child).reduce(function(finalDomain, entry) {
              return finalDomain.indexOf(entry) >= 0 || entry === "" || (0, import_isNil9.default)(entry) ? finalDomain : [].concat(_toConsumableArray10(finalDomain), [entry]);
            }, []);
          } else {
            domain = domain.filter(function(entry) {
              return entry !== "" && !(0, import_isNil9.default)(entry);
            });
          }
        } else if (type === "number") {
          var errorBarsDomain = parseErrorBarsOfAxis(displayedData, graphicalItems.filter(function(item) {
            return item.props[axisIdKey] === axisId && (includeHidden || !item.props.hide);
          }), dataKey, axisType, layout);
          if (errorBarsDomain) {
            domain = errorBarsDomain;
          }
        }
        if (isCategorical && (type === "number" || scale !== "auto")) {
          categoricalDomain = getDomainOfDataByKey(displayedData, dataKey, "category");
        }
      } else if (isCategorical) {
        domain = (0, import_range3.default)(0, len);
      } else if (stackGroups && stackGroups[axisId] && stackGroups[axisId].hasStack && type === "number") {
        domain = stackOffset === "expand" ? [0, 1] : getDomainOfStackGroups(stackGroups[axisId].stackGroups, dataStartIndex, dataEndIndex);
      } else {
        domain = getDomainOfItemsWithSameAxis(displayedData, graphicalItems.filter(function(item) {
          return item.props[axisIdKey] === axisId && (includeHidden || !item.props.hide);
        }), type, layout, true);
      }
      if (type === "number") {
        domain = detectReferenceElementsDomain(children, domain, axisId, axisType, ticks2);
        if (childDomain) {
          domain = parseSpecifiedDomain(childDomain, domain, allowDataOverflow);
        }
      } else if (type === "category" && childDomain) {
        var axisDomain = childDomain;
        var isDomainValid = domain.every(function(entry) {
          return axisDomain.indexOf(entry) >= 0;
        });
        if (isDomainValid) {
          domain = axisDomain;
        }
      }
    }
    return _objectSpread35(_objectSpread35({}, result), {}, _defineProperty37({}, axisId, _objectSpread35(_objectSpread35({}, child.props), {}, {
      axisType,
      domain,
      categoricalDomain,
      duplicateDomain,
      originalDomain: (_child$props$domain2 = child.props.domain) !== null && _child$props$domain2 !== void 0 ? _child$props$domain2 : defaultDomain,
      isCategorical,
      layout
    })));
  }, {});
};
var getAxisMapByItems = function getAxisMapByItems2(props, _ref3) {
  var graphicalItems = _ref3.graphicalItems, Axis = _ref3.Axis, axisType = _ref3.axisType, axisIdKey = _ref3.axisIdKey, stackGroups = _ref3.stackGroups, dataStartIndex = _ref3.dataStartIndex, dataEndIndex = _ref3.dataEndIndex;
  var layout = props.layout, children = props.children;
  var displayedData = getDisplayedData(props.data, {
    graphicalItems,
    dataStartIndex,
    dataEndIndex
  });
  var len = displayedData.length;
  var isCategorical = isCategoricalAxis(layout, axisType);
  var index = -1;
  return graphicalItems.reduce(function(result, child) {
    var axisId = child.props[axisIdKey];
    var originalDomain = getDefaultDomainByAxisType("number");
    if (!result[axisId]) {
      index++;
      var domain;
      if (isCategorical) {
        domain = (0, import_range3.default)(0, len);
      } else if (stackGroups && stackGroups[axisId] && stackGroups[axisId].hasStack) {
        domain = getDomainOfStackGroups(stackGroups[axisId].stackGroups, dataStartIndex, dataEndIndex);
        domain = detectReferenceElementsDomain(children, domain, axisId, axisType);
      } else {
        domain = parseSpecifiedDomain(originalDomain, getDomainOfItemsWithSameAxis(displayedData, graphicalItems.filter(function(item) {
          return item.props[axisIdKey] === axisId && !item.props.hide;
        }), "number", layout), Axis.defaultProps.allowDataOverflow);
        domain = detectReferenceElementsDomain(children, domain, axisId, axisType);
      }
      return _objectSpread35(_objectSpread35({}, result), {}, _defineProperty37({}, axisId, _objectSpread35(_objectSpread35({
        axisType
      }, Axis.defaultProps), {}, {
        hide: true,
        orientation: (0, import_get5.default)(ORIENT_MAP, "".concat(axisType, ".").concat(index % 2), null),
        domain,
        originalDomain,
        isCategorical,
        layout
        // specify scale when no Axis
        // scale: isCategorical ? 'band' : 'linear',
      })));
    }
    return result;
  }, {});
};
var getAxisMap = function getAxisMap2(props, _ref4) {
  var _ref4$axisType = _ref4.axisType, axisType = _ref4$axisType === void 0 ? "xAxis" : _ref4$axisType, AxisComp = _ref4.AxisComp, graphicalItems = _ref4.graphicalItems, stackGroups = _ref4.stackGroups, dataStartIndex = _ref4.dataStartIndex, dataEndIndex = _ref4.dataEndIndex;
  var children = props.children;
  var axisIdKey = "".concat(axisType, "Id");
  var axes = findAllByType(children, AxisComp);
  var axisMap = {};
  if (axes && axes.length) {
    axisMap = getAxisMapByAxes(props, {
      axes,
      graphicalItems,
      axisType,
      axisIdKey,
      stackGroups,
      dataStartIndex,
      dataEndIndex
    });
  } else if (graphicalItems && graphicalItems.length) {
    axisMap = getAxisMapByItems(props, {
      Axis: AxisComp,
      graphicalItems,
      axisType,
      axisIdKey,
      stackGroups,
      dataStartIndex,
      dataEndIndex
    });
  }
  return axisMap;
};
var tooltipTicksGenerator = function tooltipTicksGenerator2(axisMap) {
  var axis = getAnyElementOfObject(axisMap);
  var tooltipTicks = getTicksOfAxis(axis, false, true);
  return {
    tooltipTicks,
    orderedTooltipTicks: (0, import_sortBy3.default)(tooltipTicks, function(o) {
      return o.coordinate;
    }),
    tooltipAxis: axis,
    tooltipAxisBandSize: getBandSizeOfAxis(axis, tooltipTicks)
  };
};
var createDefaultState = function createDefaultState2(props) {
  var children = props.children, defaultShowTooltip = props.defaultShowTooltip;
  var brushItem = findChildByType(children, Brush);
  var startIndex = 0;
  var endIndex = 0;
  if (props.data && props.data.length !== 0) {
    endIndex = props.data.length - 1;
  }
  if (brushItem && brushItem.props) {
    if (brushItem.props.startIndex >= 0) {
      startIndex = brushItem.props.startIndex;
    }
    if (brushItem.props.endIndex >= 0) {
      endIndex = brushItem.props.endIndex;
    }
  }
  return {
    chartX: 0,
    chartY: 0,
    dataStartIndex: startIndex,
    dataEndIndex: endIndex,
    activeTooltipIndex: -1,
    isTooltipActive: Boolean(defaultShowTooltip)
  };
};
var hasGraphicalBarItem = function hasGraphicalBarItem2(graphicalItems) {
  if (!graphicalItems || !graphicalItems.length) {
    return false;
  }
  return graphicalItems.some(function(item) {
    var name = getDisplayName(item && item.type);
    return name && name.indexOf("Bar") >= 0;
  });
};
var getAxisNameByLayout = function getAxisNameByLayout2(layout) {
  if (layout === "horizontal") {
    return {
      numericAxisName: "yAxis",
      cateAxisName: "xAxis"
    };
  }
  if (layout === "vertical") {
    return {
      numericAxisName: "xAxis",
      cateAxisName: "yAxis"
    };
  }
  if (layout === "centric") {
    return {
      numericAxisName: "radiusAxis",
      cateAxisName: "angleAxis"
    };
  }
  return {
    numericAxisName: "angleAxis",
    cateAxisName: "radiusAxis"
  };
};
var calculateOffset = function calculateOffset2(_ref5, prevLegendBBox) {
  var props = _ref5.props, graphicalItems = _ref5.graphicalItems, _ref5$xAxisMap = _ref5.xAxisMap, xAxisMap = _ref5$xAxisMap === void 0 ? {} : _ref5$xAxisMap, _ref5$yAxisMap = _ref5.yAxisMap, yAxisMap = _ref5$yAxisMap === void 0 ? {} : _ref5$yAxisMap;
  var width = props.width, height = props.height, children = props.children;
  var margin = props.margin || {};
  var brushItem = findChildByType(children, Brush);
  var legendItem = findChildByType(children, Legend);
  var offsetH = Object.keys(yAxisMap).reduce(function(result, id) {
    var entry = yAxisMap[id];
    var orientation = entry.orientation;
    if (!entry.mirror && !entry.hide) {
      return _objectSpread35(_objectSpread35({}, result), {}, _defineProperty37({}, orientation, result[orientation] + entry.width));
    }
    return result;
  }, {
    left: margin.left || 0,
    right: margin.right || 0
  });
  var offsetV = Object.keys(xAxisMap).reduce(function(result, id) {
    var entry = xAxisMap[id];
    var orientation = entry.orientation;
    if (!entry.mirror && !entry.hide) {
      return _objectSpread35(_objectSpread35({}, result), {}, _defineProperty37({}, orientation, (0, import_get5.default)(result, "".concat(orientation)) + entry.height));
    }
    return result;
  }, {
    top: margin.top || 0,
    bottom: margin.bottom || 0
  });
  var offset = _objectSpread35(_objectSpread35({}, offsetV), offsetH);
  var brushBottom = offset.bottom;
  if (brushItem) {
    offset.bottom += brushItem.props.height || Brush.defaultProps.height;
  }
  if (legendItem && prevLegendBBox) {
    offset = appendOffsetOfLegend(offset, graphicalItems, props, prevLegendBBox);
  }
  var offsetWidth = width - offset.left - offset.right;
  var offsetHeight = height - offset.top - offset.bottom;
  return _objectSpread35(_objectSpread35({
    brushBottom
  }, offset), {}, {
    // never return negative values for height and width
    width: Math.max(offsetWidth, 0),
    height: Math.max(offsetHeight, 0)
  });
};
var generateCategoricalChart = function generateCategoricalChart2(_ref6) {
  var _CategoricalChartWrapper;
  var chartName = _ref6.chartName, GraphicalChild = _ref6.GraphicalChild, _ref6$defaultTooltipE = _ref6.defaultTooltipEventType, defaultTooltipEventType = _ref6$defaultTooltipE === void 0 ? "axis" : _ref6$defaultTooltipE, _ref6$validateTooltip = _ref6.validateTooltipEventTypes, validateTooltipEventTypes = _ref6$validateTooltip === void 0 ? ["axis"] : _ref6$validateTooltip, axisComponents = _ref6.axisComponents, legendContent = _ref6.legendContent, formatAxisMap3 = _ref6.formatAxisMap, defaultProps5 = _ref6.defaultProps;
  var getFormatItems = function getFormatItems2(props, currentState) {
    var graphicalItems = currentState.graphicalItems, stackGroups = currentState.stackGroups, offset = currentState.offset, updateId = currentState.updateId, dataStartIndex = currentState.dataStartIndex, dataEndIndex = currentState.dataEndIndex;
    var barSize = props.barSize, layout = props.layout, barGap = props.barGap, barCategoryGap = props.barCategoryGap, globalMaxBarSize = props.maxBarSize;
    var _getAxisNameByLayout = getAxisNameByLayout(layout), numericAxisName = _getAxisNameByLayout.numericAxisName, cateAxisName = _getAxisNameByLayout.cateAxisName;
    var hasBar = hasGraphicalBarItem(graphicalItems);
    var sizeList = hasBar && getBarSizeList({
      barSize,
      stackGroups
    });
    var formattedItems = [];
    graphicalItems.forEach(function(item, index) {
      var displayedData = getDisplayedData(props.data, {
        graphicalItems: [item],
        dataStartIndex,
        dataEndIndex
      });
      var _item$props = item.props, dataKey = _item$props.dataKey, childMaxBarSize = _item$props.maxBarSize;
      var numericAxisId = item.props["".concat(numericAxisName, "Id")];
      var cateAxisId = item.props["".concat(cateAxisName, "Id")];
      var axisObjInitialValue = {};
      var axisObj = axisComponents.reduce(function(result, entry) {
        var _item$type$displayNam, _item$type;
        var axisMap = currentState["".concat(entry.axisType, "Map")];
        var id = item.props["".concat(entry.axisType, "Id")];
        !(axisMap && axisMap[id] || entry.axisType === "zAxis") ? true ? invariant(false, "Specifying a(n) ".concat(entry.axisType, "Id requires a corresponding ").concat(
          entry.axisType,
          "Id on the targeted graphical component "
        ).concat((_item$type$displayNam = item === null || item === void 0 || (_item$type = item.type) === null || _item$type === void 0 ? void 0 : _item$type.displayName) !== null && _item$type$displayNam !== void 0 ? _item$type$displayNam : "")) : invariant(false) : void 0;
        var axis = axisMap[id];
        return _objectSpread35(_objectSpread35({}, result), {}, _defineProperty37(_defineProperty37({}, entry.axisType, axis), "".concat(entry.axisType, "Ticks"), getTicksOfAxis(axis)));
      }, axisObjInitialValue);
      var cateAxis = axisObj[cateAxisName];
      var cateTicks = axisObj["".concat(cateAxisName, "Ticks")];
      var stackedData = stackGroups && stackGroups[numericAxisId] && stackGroups[numericAxisId].hasStack && getStackedDataOfItem(item, stackGroups[numericAxisId].stackGroups);
      var itemIsBar = getDisplayName(item.type).indexOf("Bar") >= 0;
      var bandSize = getBandSizeOfAxis(cateAxis, cateTicks);
      var barPosition = [];
      if (itemIsBar) {
        var _ref7, _getBandSizeOfAxis;
        var maxBarSize = (0, import_isNil9.default)(childMaxBarSize) ? globalMaxBarSize : childMaxBarSize;
        var barBandSize = (_ref7 = (_getBandSizeOfAxis = getBandSizeOfAxis(cateAxis, cateTicks, true)) !== null && _getBandSizeOfAxis !== void 0 ? _getBandSizeOfAxis : maxBarSize) !== null && _ref7 !== void 0 ? _ref7 : 0;
        barPosition = getBarPosition({
          barGap,
          barCategoryGap,
          bandSize: barBandSize !== bandSize ? barBandSize : bandSize,
          sizeList: sizeList[cateAxisId],
          maxBarSize
        });
        if (barBandSize !== bandSize) {
          barPosition = barPosition.map(function(pos) {
            return _objectSpread35(_objectSpread35({}, pos), {}, {
              position: _objectSpread35(_objectSpread35({}, pos.position), {}, {
                offset: pos.position.offset - barBandSize / 2
              })
            });
          });
        }
      }
      var composedFn = item && item.type && item.type.getComposedData;
      if (composedFn) {
        formattedItems.push({
          props: _objectSpread35(_objectSpread35({}, composedFn(_objectSpread35(_objectSpread35({}, axisObj), {}, {
            displayedData,
            props,
            dataKey,
            item,
            bandSize,
            barPosition,
            offset,
            stackedData,
            layout,
            dataStartIndex,
            dataEndIndex
          }))), {}, _defineProperty37(_defineProperty37(_defineProperty37({
            key: item.key || "item-".concat(index)
          }, numericAxisName, axisObj[numericAxisName]), cateAxisName, axisObj[cateAxisName]), "animationId", updateId)),
          childIndex: parseChildIndex(item, props.children),
          item
        });
      }
    });
    return formattedItems;
  };
  var updateStateOfAxisMapsOffsetAndStackGroups = function updateStateOfAxisMapsOffsetAndStackGroups2(_ref8, prevState) {
    var props = _ref8.props, dataStartIndex = _ref8.dataStartIndex, dataEndIndex = _ref8.dataEndIndex, updateId = _ref8.updateId;
    if (!validateWidthHeight({
      props
    })) {
      return null;
    }
    var children = props.children, layout = props.layout, stackOffset = props.stackOffset, data2 = props.data, reverseStackOrder = props.reverseStackOrder;
    var _getAxisNameByLayout2 = getAxisNameByLayout(layout), numericAxisName = _getAxisNameByLayout2.numericAxisName, cateAxisName = _getAxisNameByLayout2.cateAxisName;
    var graphicalItems = findAllByType(children, GraphicalChild);
    var stackGroups = getStackGroupsByAxisId(data2, graphicalItems, "".concat(numericAxisName, "Id"), "".concat(cateAxisName, "Id"), stackOffset, reverseStackOrder);
    var axisObj = axisComponents.reduce(function(result, entry) {
      var name = "".concat(entry.axisType, "Map");
      return _objectSpread35(_objectSpread35({}, result), {}, _defineProperty37({}, name, getAxisMap(props, _objectSpread35(_objectSpread35({}, entry), {}, {
        graphicalItems,
        stackGroups: entry.axisType === numericAxisName && stackGroups,
        dataStartIndex,
        dataEndIndex
      }))));
    }, {});
    var offset = calculateOffset(_objectSpread35(_objectSpread35({}, axisObj), {}, {
      props,
      graphicalItems
    }), prevState === null || prevState === void 0 ? void 0 : prevState.legendBBox);
    Object.keys(axisObj).forEach(function(key) {
      axisObj[key] = formatAxisMap3(props, axisObj[key], offset, key.replace("Map", ""), chartName);
    });
    var cateAxisMap = axisObj["".concat(cateAxisName, "Map")];
    var ticksObj = tooltipTicksGenerator(cateAxisMap);
    var formattedGraphicalItems = getFormatItems(props, _objectSpread35(_objectSpread35({}, axisObj), {}, {
      dataStartIndex,
      dataEndIndex,
      updateId,
      graphicalItems,
      stackGroups,
      offset
    }));
    return _objectSpread35(_objectSpread35({
      formattedGraphicalItems,
      graphicalItems,
      offset,
      stackGroups
    }, ticksObj), axisObj);
  };
  return _CategoricalChartWrapper = /* @__PURE__ */ function(_Component) {
    _inherits10(CategoricalChartWrapper, _Component);
    function CategoricalChartWrapper(_props) {
      var _props$id, _props$throttleDelay;
      var _this;
      _classCallCheck13(this, CategoricalChartWrapper);
      _this = _callSuper8(this, CategoricalChartWrapper, [_props]);
      _defineProperty37(_assertThisInitialized11(_this), "eventEmitterSymbol", Symbol("rechartsEventEmitter"));
      _defineProperty37(_assertThisInitialized11(_this), "accessibilityManager", new AccessibilityManager());
      _defineProperty37(_assertThisInitialized11(_this), "handleLegendBBoxUpdate", function(box) {
        if (box) {
          var _this$state = _this.state, dataStartIndex = _this$state.dataStartIndex, dataEndIndex = _this$state.dataEndIndex, updateId = _this$state.updateId;
          _this.setState(_objectSpread35({
            legendBBox: box
          }, updateStateOfAxisMapsOffsetAndStackGroups({
            props: _this.props,
            dataStartIndex,
            dataEndIndex,
            updateId
          }, _objectSpread35(_objectSpread35({}, _this.state), {}, {
            legendBBox: box
          }))));
        }
      });
      _defineProperty37(_assertThisInitialized11(_this), "handleReceiveSyncEvent", function(cId, data2, emitter) {
        if (_this.props.syncId === cId) {
          if (emitter === _this.eventEmitterSymbol && typeof _this.props.syncMethod !== "function") {
            return;
          }
          _this.applySyncEvent(data2);
        }
      });
      _defineProperty37(_assertThisInitialized11(_this), "handleBrushChange", function(_ref9) {
        var startIndex = _ref9.startIndex, endIndex = _ref9.endIndex;
        if (startIndex !== _this.state.dataStartIndex || endIndex !== _this.state.dataEndIndex) {
          var updateId = _this.state.updateId;
          _this.setState(function() {
            return _objectSpread35({
              dataStartIndex: startIndex,
              dataEndIndex: endIndex
            }, updateStateOfAxisMapsOffsetAndStackGroups({
              props: _this.props,
              dataStartIndex: startIndex,
              dataEndIndex: endIndex,
              updateId
            }, _this.state));
          });
          _this.triggerSyncEvent({
            dataStartIndex: startIndex,
            dataEndIndex: endIndex
          });
        }
      });
      _defineProperty37(_assertThisInitialized11(_this), "handleMouseEnter", function(e) {
        var mouse = _this.getMouseInfo(e);
        if (mouse) {
          var _nextState = _objectSpread35(_objectSpread35({}, mouse), {}, {
            isTooltipActive: true
          });
          _this.setState(_nextState);
          _this.triggerSyncEvent(_nextState);
          var onMouseEnter = _this.props.onMouseEnter;
          if ((0, import_isFunction15.default)(onMouseEnter)) {
            onMouseEnter(_nextState, e);
          }
        }
      });
      _defineProperty37(_assertThisInitialized11(_this), "triggeredAfterMouseMove", function(e) {
        var mouse = _this.getMouseInfo(e);
        var nextState = mouse ? _objectSpread35(_objectSpread35({}, mouse), {}, {
          isTooltipActive: true
        }) : {
          isTooltipActive: false
        };
        _this.setState(nextState);
        _this.triggerSyncEvent(nextState);
        var onMouseMove = _this.props.onMouseMove;
        if ((0, import_isFunction15.default)(onMouseMove)) {
          onMouseMove(nextState, e);
        }
      });
      _defineProperty37(_assertThisInitialized11(_this), "handleItemMouseEnter", function(el) {
        _this.setState(function() {
          return {
            isTooltipActive: true,
            activeItem: el,
            activePayload: el.tooltipPayload,
            activeCoordinate: el.tooltipPosition || {
              x: el.cx,
              y: el.cy
            }
          };
        });
      });
      _defineProperty37(_assertThisInitialized11(_this), "handleItemMouseLeave", function() {
        _this.setState(function() {
          return {
            isTooltipActive: false
          };
        });
      });
      _defineProperty37(_assertThisInitialized11(_this), "handleMouseMove", function(e) {
        e.persist();
        _this.throttleTriggeredAfterMouseMove(e);
      });
      _defineProperty37(_assertThisInitialized11(_this), "handleMouseLeave", function(e) {
        _this.throttleTriggeredAfterMouseMove.cancel();
        var nextState = {
          isTooltipActive: false
        };
        _this.setState(nextState);
        _this.triggerSyncEvent(nextState);
        var onMouseLeave = _this.props.onMouseLeave;
        if ((0, import_isFunction15.default)(onMouseLeave)) {
          onMouseLeave(nextState, e);
        }
      });
      _defineProperty37(_assertThisInitialized11(_this), "handleOuterEvent", function(e) {
        var eventName = getReactEventByType(e);
        var event = (0, import_get5.default)(_this.props, "".concat(eventName));
        if (eventName && (0, import_isFunction15.default)(event)) {
          var _mouse;
          var mouse;
          if (/.*touch.*/i.test(eventName)) {
            mouse = _this.getMouseInfo(e.changedTouches[0]);
          } else {
            mouse = _this.getMouseInfo(e);
          }
          event((_mouse = mouse) !== null && _mouse !== void 0 ? _mouse : {}, e);
        }
      });
      _defineProperty37(_assertThisInitialized11(_this), "handleClick", function(e) {
        var mouse = _this.getMouseInfo(e);
        if (mouse) {
          var _nextState2 = _objectSpread35(_objectSpread35({}, mouse), {}, {
            isTooltipActive: true
          });
          _this.setState(_nextState2);
          _this.triggerSyncEvent(_nextState2);
          var onClick = _this.props.onClick;
          if ((0, import_isFunction15.default)(onClick)) {
            onClick(_nextState2, e);
          }
        }
      });
      _defineProperty37(_assertThisInitialized11(_this), "handleMouseDown", function(e) {
        var onMouseDown = _this.props.onMouseDown;
        if ((0, import_isFunction15.default)(onMouseDown)) {
          var _nextState3 = _this.getMouseInfo(e);
          onMouseDown(_nextState3, e);
        }
      });
      _defineProperty37(_assertThisInitialized11(_this), "handleMouseUp", function(e) {
        var onMouseUp = _this.props.onMouseUp;
        if ((0, import_isFunction15.default)(onMouseUp)) {
          var _nextState4 = _this.getMouseInfo(e);
          onMouseUp(_nextState4, e);
        }
      });
      _defineProperty37(_assertThisInitialized11(_this), "handleTouchMove", function(e) {
        if (e.changedTouches != null && e.changedTouches.length > 0) {
          _this.throttleTriggeredAfterMouseMove(e.changedTouches[0]);
        }
      });
      _defineProperty37(_assertThisInitialized11(_this), "handleTouchStart", function(e) {
        if (e.changedTouches != null && e.changedTouches.length > 0) {
          _this.handleMouseDown(e.changedTouches[0]);
        }
      });
      _defineProperty37(_assertThisInitialized11(_this), "handleTouchEnd", function(e) {
        if (e.changedTouches != null && e.changedTouches.length > 0) {
          _this.handleMouseUp(e.changedTouches[0]);
        }
      });
      _defineProperty37(_assertThisInitialized11(_this), "triggerSyncEvent", function(data2) {
        if (_this.props.syncId !== void 0) {
          eventCenter.emit(SYNC_EVENT, _this.props.syncId, data2, _this.eventEmitterSymbol);
        }
      });
      _defineProperty37(_assertThisInitialized11(_this), "applySyncEvent", function(data2) {
        var _this$props = _this.props, layout = _this$props.layout, syncMethod = _this$props.syncMethod;
        var updateId = _this.state.updateId;
        var dataStartIndex = data2.dataStartIndex, dataEndIndex = data2.dataEndIndex;
        if (data2.dataStartIndex !== void 0 || data2.dataEndIndex !== void 0) {
          _this.setState(_objectSpread35({
            dataStartIndex,
            dataEndIndex
          }, updateStateOfAxisMapsOffsetAndStackGroups({
            props: _this.props,
            dataStartIndex,
            dataEndIndex,
            updateId
          }, _this.state)));
        } else if (data2.activeTooltipIndex !== void 0) {
          var chartX = data2.chartX, chartY = data2.chartY;
          var activeTooltipIndex = data2.activeTooltipIndex;
          var _this$state2 = _this.state, offset = _this$state2.offset, tooltipTicks = _this$state2.tooltipTicks;
          if (!offset) {
            return;
          }
          if (typeof syncMethod === "function") {
            activeTooltipIndex = syncMethod(tooltipTicks, data2);
          } else if (syncMethod === "value") {
            activeTooltipIndex = -1;
            for (var i = 0; i < tooltipTicks.length; i++) {
              if (tooltipTicks[i].value === data2.activeLabel) {
                activeTooltipIndex = i;
                break;
              }
            }
          }
          var viewBox = _objectSpread35(_objectSpread35({}, offset), {}, {
            x: offset.left,
            y: offset.top
          });
          var validateChartX = Math.min(chartX, viewBox.x + viewBox.width);
          var validateChartY = Math.min(chartY, viewBox.y + viewBox.height);
          var activeLabel = tooltipTicks[activeTooltipIndex] && tooltipTicks[activeTooltipIndex].value;
          var activePayload = getTooltipContent(_this.state, _this.props.data, activeTooltipIndex);
          var activeCoordinate = tooltipTicks[activeTooltipIndex] ? {
            x: layout === "horizontal" ? tooltipTicks[activeTooltipIndex].coordinate : validateChartX,
            y: layout === "horizontal" ? validateChartY : tooltipTicks[activeTooltipIndex].coordinate
          } : originCoordinate;
          _this.setState(_objectSpread35(_objectSpread35({}, data2), {}, {
            activeLabel,
            activeCoordinate,
            activePayload,
            activeTooltipIndex
          }));
        } else {
          _this.setState(data2);
        }
      });
      _defineProperty37(_assertThisInitialized11(_this), "renderCursor", function(element) {
        var _element$props$active;
        var _this$state3 = _this.state, isTooltipActive = _this$state3.isTooltipActive, activeCoordinate = _this$state3.activeCoordinate, activePayload = _this$state3.activePayload, offset = _this$state3.offset, activeTooltipIndex = _this$state3.activeTooltipIndex, tooltipAxisBandSize = _this$state3.tooltipAxisBandSize;
        var tooltipEventType = _this.getTooltipEventType();
        var isActive = (_element$props$active = element.props.active) !== null && _element$props$active !== void 0 ? _element$props$active : isTooltipActive;
        var layout = _this.props.layout;
        var key = element.key || "_recharts-cursor";
        return /* @__PURE__ */ import_react43.default.createElement(Cursor, {
          key,
          activeCoordinate,
          activePayload,
          activeTooltipIndex,
          chartName,
          element,
          isActive,
          layout,
          offset,
          tooltipAxisBandSize,
          tooltipEventType
        });
      });
      _defineProperty37(_assertThisInitialized11(_this), "renderPolarAxis", function(element, displayName, index) {
        var axisType = (0, import_get5.default)(element, "type.axisType");
        var axisMap = (0, import_get5.default)(_this.state, "".concat(axisType, "Map"));
        var axisOption = axisMap && axisMap[element.props["".concat(axisType, "Id")]];
        return /* @__PURE__ */ (0, import_react43.cloneElement)(element, _objectSpread35(_objectSpread35({}, axisOption), {}, {
          className: axisType,
          key: element.key || "".concat(displayName, "-").concat(index),
          ticks: getTicksOfAxis(axisOption, true)
        }));
      });
      _defineProperty37(_assertThisInitialized11(_this), "renderPolarGrid", function(element) {
        var _element$props = element.props, radialLines = _element$props.radialLines, polarAngles = _element$props.polarAngles, polarRadius = _element$props.polarRadius;
        var _this$state4 = _this.state, radiusAxisMap = _this$state4.radiusAxisMap, angleAxisMap = _this$state4.angleAxisMap;
        var radiusAxis = getAnyElementOfObject(radiusAxisMap);
        var angleAxis = getAnyElementOfObject(angleAxisMap);
        var cx = angleAxis.cx, cy = angleAxis.cy, innerRadius = angleAxis.innerRadius, outerRadius = angleAxis.outerRadius;
        return /* @__PURE__ */ (0, import_react43.cloneElement)(element, {
          polarAngles: Array.isArray(polarAngles) ? polarAngles : getTicksOfAxis(angleAxis, true).map(function(entry) {
            return entry.coordinate;
          }),
          polarRadius: Array.isArray(polarRadius) ? polarRadius : getTicksOfAxis(radiusAxis, true).map(function(entry) {
            return entry.coordinate;
          }),
          cx,
          cy,
          innerRadius,
          outerRadius,
          key: element.key || "polar-grid",
          radialLines
        });
      });
      _defineProperty37(_assertThisInitialized11(_this), "renderLegend", function() {
        var formattedGraphicalItems = _this.state.formattedGraphicalItems;
        var _this$props2 = _this.props, children = _this$props2.children, width = _this$props2.width, height = _this$props2.height;
        var margin = _this.props.margin || {};
        var legendWidth = width - (margin.left || 0) - (margin.right || 0);
        var props = getLegendProps({
          children,
          formattedGraphicalItems,
          legendWidth,
          legendContent
        });
        if (!props) {
          return null;
        }
        var item = props.item, otherProps = _objectWithoutProperties17(props, _excluded18);
        return /* @__PURE__ */ (0, import_react43.cloneElement)(item, _objectSpread35(_objectSpread35({}, otherProps), {}, {
          chartWidth: width,
          chartHeight: height,
          margin,
          onBBoxUpdate: _this.handleLegendBBoxUpdate
        }));
      });
      _defineProperty37(_assertThisInitialized11(_this), "renderTooltip", function() {
        var _tooltipItem$props$ac;
        var _this$props3 = _this.props, children = _this$props3.children, accessibilityLayer = _this$props3.accessibilityLayer;
        var tooltipItem = findChildByType(children, Tooltip);
        if (!tooltipItem) {
          return null;
        }
        var _this$state5 = _this.state, isTooltipActive = _this$state5.isTooltipActive, activeCoordinate = _this$state5.activeCoordinate, activePayload = _this$state5.activePayload, activeLabel = _this$state5.activeLabel, offset = _this$state5.offset;
        var isActive = (_tooltipItem$props$ac = tooltipItem.props.active) !== null && _tooltipItem$props$ac !== void 0 ? _tooltipItem$props$ac : isTooltipActive;
        return /* @__PURE__ */ (0, import_react43.cloneElement)(tooltipItem, {
          viewBox: _objectSpread35(_objectSpread35({}, offset), {}, {
            x: offset.left,
            y: offset.top
          }),
          active: isActive,
          label: activeLabel,
          payload: isActive ? activePayload : [],
          coordinate: activeCoordinate,
          accessibilityLayer
        });
      });
      _defineProperty37(_assertThisInitialized11(_this), "renderBrush", function(element) {
        var _this$props4 = _this.props, margin = _this$props4.margin, data2 = _this$props4.data;
        var _this$state6 = _this.state, offset = _this$state6.offset, dataStartIndex = _this$state6.dataStartIndex, dataEndIndex = _this$state6.dataEndIndex, updateId = _this$state6.updateId;
        return /* @__PURE__ */ (0, import_react43.cloneElement)(element, {
          key: element.key || "_recharts-brush",
          onChange: combineEventHandlers(_this.handleBrushChange, element.props.onChange),
          data: data2,
          x: isNumber(element.props.x) ? element.props.x : offset.left,
          y: isNumber(element.props.y) ? element.props.y : offset.top + offset.height + offset.brushBottom - (margin.bottom || 0),
          width: isNumber(element.props.width) ? element.props.width : offset.width,
          startIndex: dataStartIndex,
          endIndex: dataEndIndex,
          updateId: "brush-".concat(updateId)
        });
      });
      _defineProperty37(_assertThisInitialized11(_this), "renderReferenceElement", function(element, displayName, index) {
        if (!element) {
          return null;
        }
        var _assertThisInitialize = _assertThisInitialized11(_this), clipPathId = _assertThisInitialize.clipPathId;
        var _this$state7 = _this.state, xAxisMap = _this$state7.xAxisMap, yAxisMap = _this$state7.yAxisMap, offset = _this$state7.offset;
        var _element$props2 = element.props, xAxisId = _element$props2.xAxisId, yAxisId = _element$props2.yAxisId;
        return /* @__PURE__ */ (0, import_react43.cloneElement)(element, {
          key: element.key || "".concat(displayName, "-").concat(index),
          xAxis: xAxisMap[xAxisId],
          yAxis: yAxisMap[yAxisId],
          viewBox: {
            x: offset.left,
            y: offset.top,
            width: offset.width,
            height: offset.height
          },
          clipPathId
        });
      });
      _defineProperty37(_assertThisInitialized11(_this), "renderActivePoints", function(_ref10) {
        var item = _ref10.item, activePoint = _ref10.activePoint, basePoint = _ref10.basePoint, childIndex = _ref10.childIndex, isRange = _ref10.isRange;
        var result = [];
        var key = item.props.key;
        var _item$item$props = item.item.props, activeDot = _item$item$props.activeDot, dataKey = _item$item$props.dataKey;
        var dotProps = _objectSpread35(_objectSpread35({
          index: childIndex,
          dataKey,
          cx: activePoint.x,
          cy: activePoint.y,
          r: 4,
          fill: getMainColorOfGraphicItem(item.item),
          strokeWidth: 2,
          stroke: "#fff",
          payload: activePoint.payload,
          value: activePoint.value,
          key: "".concat(key, "-activePoint-").concat(childIndex)
        }, filterProps(activeDot, false)), adaptEventHandlers(activeDot));
        result.push(CategoricalChartWrapper.renderActiveDot(activeDot, dotProps));
        if (basePoint) {
          result.push(CategoricalChartWrapper.renderActiveDot(activeDot, _objectSpread35(_objectSpread35({}, dotProps), {}, {
            cx: basePoint.x,
            cy: basePoint.y,
            key: "".concat(key, "-basePoint-").concat(childIndex)
          })));
        } else if (isRange) {
          result.push(null);
        }
        return result;
      });
      _defineProperty37(_assertThisInitialized11(_this), "renderGraphicChild", function(element, displayName, index) {
        var item = _this.filterFormatItem(element, displayName, index);
        if (!item) {
          return null;
        }
        var tooltipEventType = _this.getTooltipEventType();
        var _this$state8 = _this.state, isTooltipActive = _this$state8.isTooltipActive, tooltipAxis = _this$state8.tooltipAxis, activeTooltipIndex = _this$state8.activeTooltipIndex, activeLabel = _this$state8.activeLabel;
        var children = _this.props.children;
        var tooltipItem = findChildByType(children, Tooltip);
        var _item$props2 = item.props, points = _item$props2.points, isRange = _item$props2.isRange, baseLine = _item$props2.baseLine;
        var _item$item$props2 = item.item.props, activeDot = _item$item$props2.activeDot, hide = _item$item$props2.hide, activeBar = _item$item$props2.activeBar, activeShape = _item$item$props2.activeShape;
        var hasActive = Boolean(!hide && isTooltipActive && tooltipItem && (activeDot || activeBar || activeShape));
        var itemEvents = {};
        if (tooltipEventType !== "axis" && tooltipItem && tooltipItem.props.trigger === "click") {
          itemEvents = {
            onClick: combineEventHandlers(_this.handleItemMouseEnter, element.props.onClick)
          };
        } else if (tooltipEventType !== "axis") {
          itemEvents = {
            onMouseLeave: combineEventHandlers(_this.handleItemMouseLeave, element.props.onMouseLeave),
            onMouseEnter: combineEventHandlers(_this.handleItemMouseEnter, element.props.onMouseEnter)
          };
        }
        var graphicalItem = /* @__PURE__ */ (0, import_react43.cloneElement)(element, _objectSpread35(_objectSpread35({}, item.props), itemEvents));
        function findWithPayload(entry) {
          return typeof tooltipAxis.dataKey === "function" ? tooltipAxis.dataKey(entry.payload) : null;
        }
        if (hasActive) {
          if (activeTooltipIndex >= 0) {
            var activePoint, basePoint;
            if (tooltipAxis.dataKey && !tooltipAxis.allowDuplicatedCategory) {
              var specifiedKey = typeof tooltipAxis.dataKey === "function" ? findWithPayload : "payload.".concat(tooltipAxis.dataKey.toString());
              activePoint = findEntryInArray(points, specifiedKey, activeLabel);
              basePoint = isRange && baseLine && findEntryInArray(baseLine, specifiedKey, activeLabel);
            } else {
              activePoint = points === null || points === void 0 ? void 0 : points[activeTooltipIndex];
              basePoint = isRange && baseLine && baseLine[activeTooltipIndex];
            }
            if (activeShape || activeBar) {
              var activeIndex = element.props.activeIndex !== void 0 ? element.props.activeIndex : activeTooltipIndex;
              return [/* @__PURE__ */ (0, import_react43.cloneElement)(element, _objectSpread35(_objectSpread35(_objectSpread35({}, item.props), itemEvents), {}, {
                activeIndex
              })), null, null];
            }
            if (!(0, import_isNil9.default)(activePoint)) {
              return [graphicalItem].concat(_toConsumableArray10(_this.renderActivePoints({
                item,
                activePoint,
                basePoint,
                childIndex: activeTooltipIndex,
                isRange
              })));
            }
          } else {
            var _this$getItemByXY;
            var _ref11 = (_this$getItemByXY = _this.getItemByXY(_this.state.activeCoordinate)) !== null && _this$getItemByXY !== void 0 ? _this$getItemByXY : {
              graphicalItem
            }, _ref11$graphicalItem = _ref11.graphicalItem, _ref11$graphicalItem$ = _ref11$graphicalItem.item, xyItem = _ref11$graphicalItem$ === void 0 ? element : _ref11$graphicalItem$, childIndex = _ref11$graphicalItem.childIndex;
            var elementProps = _objectSpread35(_objectSpread35(_objectSpread35({}, item.props), itemEvents), {}, {
              activeIndex: childIndex
            });
            return [/* @__PURE__ */ (0, import_react43.cloneElement)(xyItem, elementProps), null, null];
          }
        }
        if (isRange) {
          return [graphicalItem, null, null];
        }
        return [graphicalItem, null];
      });
      _defineProperty37(_assertThisInitialized11(_this), "renderCustomized", function(element, displayName, index) {
        return /* @__PURE__ */ (0, import_react43.cloneElement)(element, _objectSpread35(_objectSpread35({
          key: "recharts-customized-".concat(index)
        }, _this.props), _this.state));
      });
      _defineProperty37(_assertThisInitialized11(_this), "renderMap", {
        CartesianGrid: {
          handler: renderAsIs,
          once: true
        },
        ReferenceArea: {
          handler: _this.renderReferenceElement
        },
        ReferenceLine: {
          handler: renderAsIs
        },
        ReferenceDot: {
          handler: _this.renderReferenceElement
        },
        XAxis: {
          handler: renderAsIs
        },
        YAxis: {
          handler: renderAsIs
        },
        Brush: {
          handler: _this.renderBrush,
          once: true
        },
        Bar: {
          handler: _this.renderGraphicChild
        },
        Line: {
          handler: _this.renderGraphicChild
        },
        Area: {
          handler: _this.renderGraphicChild
        },
        Radar: {
          handler: _this.renderGraphicChild
        },
        RadialBar: {
          handler: _this.renderGraphicChild
        },
        Scatter: {
          handler: _this.renderGraphicChild
        },
        Pie: {
          handler: _this.renderGraphicChild
        },
        Funnel: {
          handler: _this.renderGraphicChild
        },
        Tooltip: {
          handler: _this.renderCursor,
          once: true
        },
        PolarGrid: {
          handler: _this.renderPolarGrid,
          once: true
        },
        PolarAngleAxis: {
          handler: _this.renderPolarAxis
        },
        PolarRadiusAxis: {
          handler: _this.renderPolarAxis
        },
        Customized: {
          handler: _this.renderCustomized
        }
      });
      _this.clipPathId = "".concat((_props$id = _props.id) !== null && _props$id !== void 0 ? _props$id : uniqueId("recharts"), "-clip");
      _this.throttleTriggeredAfterMouseMove = (0, import_throttle2.default)(_this.triggeredAfterMouseMove, (_props$throttleDelay = _props.throttleDelay) !== null && _props$throttleDelay !== void 0 ? _props$throttleDelay : 1e3 / 60);
      _this.state = {};
      return _this;
    }
    _createClass13(CategoricalChartWrapper, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this$props$margin$le, _this$props$margin$to;
        this.addListener();
        this.accessibilityManager.setDetails({
          container: this.container,
          offset: {
            left: (_this$props$margin$le = this.props.margin.left) !== null && _this$props$margin$le !== void 0 ? _this$props$margin$le : 0,
            top: (_this$props$margin$to = this.props.margin.top) !== null && _this$props$margin$to !== void 0 ? _this$props$margin$to : 0
          },
          coordinateList: this.state.tooltipTicks,
          mouseHandlerCallback: this.triggeredAfterMouseMove,
          layout: this.props.layout
        });
        this.displayDefaultTooltip();
      }
    }, {
      key: "displayDefaultTooltip",
      value: function displayDefaultTooltip() {
        var _this$props5 = this.props, children = _this$props5.children, data2 = _this$props5.data, height = _this$props5.height, layout = _this$props5.layout;
        var tooltipElem = findChildByType(children, Tooltip);
        if (!tooltipElem) {
          return;
        }
        var defaultIndex = tooltipElem.props.defaultIndex;
        if (typeof defaultIndex !== "number" || defaultIndex < 0 || defaultIndex > this.state.tooltipTicks.length) {
          return;
        }
        var activeLabel = this.state.tooltipTicks[defaultIndex] && this.state.tooltipTicks[defaultIndex].value;
        var activePayload = getTooltipContent(this.state, data2, defaultIndex, activeLabel);
        var independentAxisCoord = this.state.tooltipTicks[defaultIndex].coordinate;
        var dependentAxisCoord = (this.state.offset.top + height) / 2;
        var isHorizontal = layout === "horizontal";
        var activeCoordinate = isHorizontal ? {
          x: independentAxisCoord,
          y: dependentAxisCoord
        } : {
          y: independentAxisCoord,
          x: dependentAxisCoord
        };
        var scatterPlotElement = this.state.formattedGraphicalItems.find(function(_ref12) {
          var item = _ref12.item;
          return item.type.name === "Scatter";
        });
        if (scatterPlotElement) {
          activeCoordinate = _objectSpread35(_objectSpread35({}, activeCoordinate), scatterPlotElement.props.points[defaultIndex].tooltipPosition);
          activePayload = scatterPlotElement.props.points[defaultIndex].tooltipPayload;
        }
        var nextState = {
          activeTooltipIndex: defaultIndex,
          isTooltipActive: true,
          activeLabel,
          activePayload,
          activeCoordinate
        };
        this.setState(nextState);
        this.renderCursor(tooltipElem);
        this.accessibilityManager.setIndex(defaultIndex);
      }
    }, {
      key: "getSnapshotBeforeUpdate",
      value: function getSnapshotBeforeUpdate(prevProps, prevState) {
        if (!this.props.accessibilityLayer) {
          return null;
        }
        if (this.state.tooltipTicks !== prevState.tooltipTicks) {
          this.accessibilityManager.setDetails({
            coordinateList: this.state.tooltipTicks
          });
        }
        if (this.props.layout !== prevProps.layout) {
          this.accessibilityManager.setDetails({
            layout: this.props.layout
          });
        }
        if (this.props.margin !== prevProps.margin) {
          var _this$props$margin$le2, _this$props$margin$to2;
          this.accessibilityManager.setDetails({
            offset: {
              left: (_this$props$margin$le2 = this.props.margin.left) !== null && _this$props$margin$le2 !== void 0 ? _this$props$margin$le2 : 0,
              top: (_this$props$margin$to2 = this.props.margin.top) !== null && _this$props$margin$to2 !== void 0 ? _this$props$margin$to2 : 0
            }
          });
        }
        return null;
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        if (!isChildrenEqual([findChildByType(prevProps.children, Tooltip)], [findChildByType(this.props.children, Tooltip)])) {
          this.displayDefaultTooltip();
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.removeListener();
        this.throttleTriggeredAfterMouseMove.cancel();
      }
    }, {
      key: "getTooltipEventType",
      value: function getTooltipEventType() {
        var tooltipItem = findChildByType(this.props.children, Tooltip);
        if (tooltipItem && typeof tooltipItem.props.shared === "boolean") {
          var eventType = tooltipItem.props.shared ? "axis" : "item";
          return validateTooltipEventTypes.indexOf(eventType) >= 0 ? eventType : defaultTooltipEventType;
        }
        return defaultTooltipEventType;
      }
      /**
       * Get the information of mouse in chart, return null when the mouse is not in the chart
       * @param  {MousePointer} event    The event object
       * @return {Object}          Mouse data
       */
    }, {
      key: "getMouseInfo",
      value: function getMouseInfo(event) {
        if (!this.container) {
          return null;
        }
        var element = this.container;
        var boundingRect = element.getBoundingClientRect();
        var containerOffset = getOffset(boundingRect);
        var e = {
          chartX: Math.round(event.pageX - containerOffset.left),
          chartY: Math.round(event.pageY - containerOffset.top)
        };
        var scale = boundingRect.width / element.offsetWidth || 1;
        var rangeObj = this.inRange(e.chartX, e.chartY, scale);
        if (!rangeObj) {
          return null;
        }
        var _this$state9 = this.state, xAxisMap = _this$state9.xAxisMap, yAxisMap = _this$state9.yAxisMap;
        var tooltipEventType = this.getTooltipEventType();
        if (tooltipEventType !== "axis" && xAxisMap && yAxisMap) {
          var xScale = getAnyElementOfObject(xAxisMap).scale;
          var yScale = getAnyElementOfObject(yAxisMap).scale;
          var xValue = xScale && xScale.invert ? xScale.invert(e.chartX) : null;
          var yValue = yScale && yScale.invert ? yScale.invert(e.chartY) : null;
          return _objectSpread35(_objectSpread35({}, e), {}, {
            xValue,
            yValue
          });
        }
        var toolTipData = getTooltipData(this.state, this.props.data, this.props.layout, rangeObj);
        if (toolTipData) {
          return _objectSpread35(_objectSpread35({}, e), toolTipData);
        }
        return null;
      }
    }, {
      key: "inRange",
      value: function inRange(x2, y2) {
        var scale = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
        var layout = this.props.layout;
        var scaledX = x2 / scale, scaledY = y2 / scale;
        if (layout === "horizontal" || layout === "vertical") {
          var offset = this.state.offset;
          var isInRange = scaledX >= offset.left && scaledX <= offset.left + offset.width && scaledY >= offset.top && scaledY <= offset.top + offset.height;
          return isInRange ? {
            x: scaledX,
            y: scaledY
          } : null;
        }
        var _this$state10 = this.state, angleAxisMap = _this$state10.angleAxisMap, radiusAxisMap = _this$state10.radiusAxisMap;
        if (angleAxisMap && radiusAxisMap) {
          var angleAxis = getAnyElementOfObject(angleAxisMap);
          return inRangeOfSector({
            x: scaledX,
            y: scaledY
          }, angleAxis);
        }
        return null;
      }
    }, {
      key: "parseEventsOfWrapper",
      value: function parseEventsOfWrapper() {
        var children = this.props.children;
        var tooltipEventType = this.getTooltipEventType();
        var tooltipItem = findChildByType(children, Tooltip);
        var tooltipEvents = {};
        if (tooltipItem && tooltipEventType === "axis") {
          if (tooltipItem.props.trigger === "click") {
            tooltipEvents = {
              onClick: this.handleClick
            };
          } else {
            tooltipEvents = {
              onMouseEnter: this.handleMouseEnter,
              onMouseMove: this.handleMouseMove,
              onMouseLeave: this.handleMouseLeave,
              onTouchMove: this.handleTouchMove,
              onTouchStart: this.handleTouchStart,
              onTouchEnd: this.handleTouchEnd
            };
          }
        }
        var outerEvents = adaptEventHandlers(this.props, this.handleOuterEvent);
        return _objectSpread35(_objectSpread35({}, outerEvents), tooltipEvents);
      }
    }, {
      key: "addListener",
      value: function addListener() {
        eventCenter.on(SYNC_EVENT, this.handleReceiveSyncEvent);
      }
    }, {
      key: "removeListener",
      value: function removeListener() {
        eventCenter.removeListener(SYNC_EVENT, this.handleReceiveSyncEvent);
      }
    }, {
      key: "filterFormatItem",
      value: function filterFormatItem(item, displayName, childIndex) {
        var formattedGraphicalItems = this.state.formattedGraphicalItems;
        for (var i = 0, len = formattedGraphicalItems.length; i < len; i++) {
          var entry = formattedGraphicalItems[i];
          if (entry.item === item || entry.props.key === item.key || displayName === getDisplayName(entry.item.type) && childIndex === entry.childIndex) {
            return entry;
          }
        }
        return null;
      }
    }, {
      key: "renderClipPath",
      value: function renderClipPath() {
        var clipPathId = this.clipPathId;
        var _this$state$offset = this.state.offset, left = _this$state$offset.left, top = _this$state$offset.top, height = _this$state$offset.height, width = _this$state$offset.width;
        return /* @__PURE__ */ import_react43.default.createElement("defs", null, /* @__PURE__ */ import_react43.default.createElement("clipPath", {
          id: clipPathId
        }, /* @__PURE__ */ import_react43.default.createElement("rect", {
          x: left,
          y: top,
          height,
          width
        })));
      }
    }, {
      key: "getXScales",
      value: function getXScales() {
        var xAxisMap = this.state.xAxisMap;
        return xAxisMap ? Object.entries(xAxisMap).reduce(function(res, _ref13) {
          var _ref14 = _slicedToArray12(_ref13, 2), axisId = _ref14[0], axisProps = _ref14[1];
          return _objectSpread35(_objectSpread35({}, res), {}, _defineProperty37({}, axisId, axisProps.scale));
        }, {}) : null;
      }
    }, {
      key: "getYScales",
      value: function getYScales() {
        var yAxisMap = this.state.yAxisMap;
        return yAxisMap ? Object.entries(yAxisMap).reduce(function(res, _ref15) {
          var _ref16 = _slicedToArray12(_ref15, 2), axisId = _ref16[0], axisProps = _ref16[1];
          return _objectSpread35(_objectSpread35({}, res), {}, _defineProperty37({}, axisId, axisProps.scale));
        }, {}) : null;
      }
    }, {
      key: "getXScaleByAxisId",
      value: function getXScaleByAxisId(axisId) {
        var _this$state$xAxisMap;
        return (_this$state$xAxisMap = this.state.xAxisMap) === null || _this$state$xAxisMap === void 0 || (_this$state$xAxisMap = _this$state$xAxisMap[axisId]) === null || _this$state$xAxisMap === void 0 ? void 0 : _this$state$xAxisMap.scale;
      }
    }, {
      key: "getYScaleByAxisId",
      value: function getYScaleByAxisId(axisId) {
        var _this$state$yAxisMap;
        return (_this$state$yAxisMap = this.state.yAxisMap) === null || _this$state$yAxisMap === void 0 || (_this$state$yAxisMap = _this$state$yAxisMap[axisId]) === null || _this$state$yAxisMap === void 0 ? void 0 : _this$state$yAxisMap.scale;
      }
    }, {
      key: "getItemByXY",
      value: function getItemByXY(chartXY) {
        var _this$state11 = this.state, formattedGraphicalItems = _this$state11.formattedGraphicalItems, activeItem = _this$state11.activeItem;
        if (formattedGraphicalItems && formattedGraphicalItems.length) {
          for (var i = 0, len = formattedGraphicalItems.length; i < len; i++) {
            var graphicalItem = formattedGraphicalItems[i];
            var props = graphicalItem.props, item = graphicalItem.item;
            var itemDisplayName = getDisplayName(item.type);
            if (itemDisplayName === "Bar") {
              var activeBarItem = (props.data || []).find(function(entry) {
                return isInRectangle(chartXY, entry);
              });
              if (activeBarItem) {
                return {
                  graphicalItem,
                  payload: activeBarItem
                };
              }
            } else if (itemDisplayName === "RadialBar") {
              var _activeBarItem = (props.data || []).find(function(entry) {
                return inRangeOfSector(chartXY, entry);
              });
              if (_activeBarItem) {
                return {
                  graphicalItem,
                  payload: _activeBarItem
                };
              }
            } else if (isFunnel(graphicalItem, activeItem) || isPie(graphicalItem, activeItem) || isScatter(graphicalItem, activeItem)) {
              var activeIndex = getActiveShapeIndexForTooltip({
                graphicalItem,
                activeTooltipItem: activeItem,
                itemData: item.props.data
              });
              var childIndex = item.props.activeIndex === void 0 ? activeIndex : item.props.activeIndex;
              return {
                graphicalItem: _objectSpread35(_objectSpread35({}, graphicalItem), {}, {
                  childIndex
                }),
                payload: isScatter(graphicalItem, activeItem) ? item.props.data[activeIndex] : graphicalItem.props.data[activeIndex]
              };
            }
          }
        }
        return null;
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this, _attrs$role;
        if (!validateWidthHeight(this)) {
          return null;
        }
        var _this$props6 = this.props, children = _this$props6.children, className = _this$props6.className, width = _this$props6.width, height = _this$props6.height, style = _this$props6.style, compact = _this$props6.compact, title = _this$props6.title, desc = _this$props6.desc, others = _objectWithoutProperties17(_this$props6, _excluded25);
        var attrs = filterProps(others, false);
        if (compact) {
          return /* @__PURE__ */ import_react43.default.createElement(Surface, _extends27({}, attrs, {
            width,
            height,
            title,
            desc
          }), this.renderClipPath(), renderByOrder(children, this.renderMap));
        }
        if (this.props.accessibilityLayer) {
          var _this$props$tabIndex, _this$props$role;
          attrs.tabIndex = (_this$props$tabIndex = this.props.tabIndex) !== null && _this$props$tabIndex !== void 0 ? _this$props$tabIndex : 0;
          attrs.role = (_this$props$role = this.props.role) !== null && _this$props$role !== void 0 ? _this$props$role : "application";
          attrs.onKeyDown = function(e) {
            _this2.accessibilityManager.keyboardEvent(e);
          };
          attrs.onFocus = function() {
            _this2.accessibilityManager.focus();
          };
        }
        var events = this.parseEventsOfWrapper();
        return /* @__PURE__ */ import_react43.default.createElement(ChartLayoutContextProvider, {
          state: this.state,
          width: this.props.width,
          height: this.props.height,
          clipPathId: this.clipPathId
        }, /* @__PURE__ */ import_react43.default.createElement("div", _extends27({
          className: clsx_default("recharts-wrapper", className),
          style: _objectSpread35({
            position: "relative",
            cursor: "default",
            width,
            height
          }, style)
        }, events, {
          ref: function ref(node) {
            _this2.container = node;
          },
          role: (_attrs$role = attrs.role) !== null && _attrs$role !== void 0 ? _attrs$role : "region"
        }), /* @__PURE__ */ import_react43.default.createElement(Surface, _extends27({}, attrs, {
          width,
          height,
          title,
          desc,
          style: FULL_WIDTH_AND_HEIGHT
        }), this.renderClipPath(), renderByOrder(children, this.renderMap)), this.renderLegend(), this.renderTooltip()));
      }
    }]);
    return CategoricalChartWrapper;
  }(import_react43.Component), _defineProperty37(_CategoricalChartWrapper, "displayName", chartName), _defineProperty37(_CategoricalChartWrapper, "defaultProps", _objectSpread35({
    layout: "horizontal",
    stackOffset: "none",
    barCategoryGap: "10%",
    barGap: 4,
    margin: {
      top: 5,
      right: 5,
      bottom: 5,
      left: 5
    },
    reverseStackOrder: false,
    syncMethod: "index"
  }, defaultProps5)), _defineProperty37(_CategoricalChartWrapper, "getDerivedStateFromProps", function(nextProps, prevState) {
    var dataKey = nextProps.dataKey, data2 = nextProps.data, children = nextProps.children, width = nextProps.width, height = nextProps.height, layout = nextProps.layout, stackOffset = nextProps.stackOffset, margin = nextProps.margin;
    var dataStartIndex = prevState.dataStartIndex, dataEndIndex = prevState.dataEndIndex;
    if (prevState.updateId === void 0) {
      var defaultState = createDefaultState(nextProps);
      return _objectSpread35(_objectSpread35(_objectSpread35({}, defaultState), {}, {
        updateId: 0
      }, updateStateOfAxisMapsOffsetAndStackGroups(_objectSpread35(_objectSpread35({
        props: nextProps
      }, defaultState), {}, {
        updateId: 0
      }), prevState)), {}, {
        prevDataKey: dataKey,
        prevData: data2,
        prevWidth: width,
        prevHeight: height,
        prevLayout: layout,
        prevStackOffset: stackOffset,
        prevMargin: margin,
        prevChildren: children
      });
    }
    if (dataKey !== prevState.prevDataKey || data2 !== prevState.prevData || width !== prevState.prevWidth || height !== prevState.prevHeight || layout !== prevState.prevLayout || stackOffset !== prevState.prevStackOffset || !shallowEqual(margin, prevState.prevMargin)) {
      var _defaultState = createDefaultState(nextProps);
      var keepFromPrevState = {
        // (chartX, chartY) are (0,0) in default state, but we want to keep the last mouse position to avoid
        // any flickering
        chartX: prevState.chartX,
        chartY: prevState.chartY,
        // The tooltip should stay active when it was active in the previous render. If this is not
        // the case, the tooltip disappears and immediately re-appears, causing a flickering effect
        isTooltipActive: prevState.isTooltipActive
      };
      var updatesToState = _objectSpread35(_objectSpread35({}, getTooltipData(prevState, data2, layout)), {}, {
        updateId: prevState.updateId + 1
      });
      var newState = _objectSpread35(_objectSpread35(_objectSpread35({}, _defaultState), keepFromPrevState), updatesToState);
      return _objectSpread35(_objectSpread35(_objectSpread35({}, newState), updateStateOfAxisMapsOffsetAndStackGroups(_objectSpread35({
        props: nextProps
      }, newState), prevState)), {}, {
        prevDataKey: dataKey,
        prevData: data2,
        prevWidth: width,
        prevHeight: height,
        prevLayout: layout,
        prevStackOffset: stackOffset,
        prevMargin: margin,
        prevChildren: children
      });
    }
    if (!isChildrenEqual(children, prevState.prevChildren)) {
      var _brush$props$startInd, _brush$props, _brush$props$endIndex, _brush$props2;
      var brush = findChildByType(children, Brush);
      var startIndex = brush ? (_brush$props$startInd = (_brush$props = brush.props) === null || _brush$props === void 0 ? void 0 : _brush$props.startIndex) !== null && _brush$props$startInd !== void 0 ? _brush$props$startInd : dataStartIndex : dataStartIndex;
      var endIndex = brush ? (_brush$props$endIndex = (_brush$props2 = brush.props) === null || _brush$props2 === void 0 ? void 0 : _brush$props2.endIndex) !== null && _brush$props$endIndex !== void 0 ? _brush$props$endIndex : dataEndIndex : dataEndIndex;
      var hasDifferentStartOrEndIndex = startIndex !== dataStartIndex || endIndex !== dataEndIndex;
      var hasGlobalData = !(0, import_isNil9.default)(data2);
      var newUpdateId = hasGlobalData && !hasDifferentStartOrEndIndex ? prevState.updateId : prevState.updateId + 1;
      return _objectSpread35(_objectSpread35({
        updateId: newUpdateId
      }, updateStateOfAxisMapsOffsetAndStackGroups(_objectSpread35(_objectSpread35({
        props: nextProps
      }, prevState), {}, {
        updateId: newUpdateId,
        dataStartIndex: startIndex,
        dataEndIndex: endIndex
      }), prevState)), {}, {
        prevChildren: children,
        dataStartIndex: startIndex,
        dataEndIndex: endIndex
      });
    }
    return null;
  }), _defineProperty37(_CategoricalChartWrapper, "renderActiveDot", function(option, props) {
    var dot;
    if (/* @__PURE__ */ (0, import_react43.isValidElement)(option)) {
      dot = /* @__PURE__ */ (0, import_react43.cloneElement)(option, props);
    } else if ((0, import_isFunction15.default)(option)) {
      dot = option(props);
    } else {
      dot = /* @__PURE__ */ import_react43.default.createElement(Dot, props);
    }
    return /* @__PURE__ */ import_react43.default.createElement(Layer, {
      className: "recharts-active-dot",
      key: props.key
    }, dot);
  }), _CategoricalChartWrapper;
};

// node_modules/recharts/es6/chart/BarChart.js
var BarChart = generateCategoricalChart({
  chartName: "BarChart",
  GraphicalChild: Bar,
  defaultTooltipEventType: "axis",
  validateTooltipEventTypes: ["axis", "item"],
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: XAxis
  }, {
    axisType: "yAxis",
    AxisComp: YAxis
  }],
  formatAxisMap
});

// app/components/overview.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\overview.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\overview.tsx"
  );
  import.meta.hot.lastModified = "1707739114088.6592";
}
var data = [{
  name: "Jan",
  total: Math.floor(Math.random() * 5e3) + 1e3
}, {
  name: "Feb",
  total: Math.floor(Math.random() * 5e3) + 1e3
}, {
  name: "Mar",
  total: Math.floor(Math.random() * 5e3) + 1e3
}, {
  name: "Apr",
  total: Math.floor(Math.random() * 5e3) + 1e3
}, {
  name: "May",
  total: Math.floor(Math.random() * 5e3) + 1e3
}, {
  name: "Jun",
  total: Math.floor(Math.random() * 5e3) + 1e3
}, {
  name: "Jul",
  total: Math.floor(Math.random() * 5e3) + 1e3
}, {
  name: "Aug",
  total: Math.floor(Math.random() * 5e3) + 1e3
}, {
  name: "Sep",
  total: Math.floor(Math.random() * 5e3) + 1e3
}, {
  name: "Oct",
  total: Math.floor(Math.random() * 5e3) + 1e3
}, {
  name: "Nov",
  total: Math.floor(Math.random() * 5e3) + 1e3
}, {
  name: "Dec",
  total: Math.floor(Math.random() * 5e3) + 1e3
}];
function Overview() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ResponsiveContainer, { width: "100%", height: 350, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(BarChart, { data, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(XAxis, { dataKey: "name", stroke: "#888888", fontSize: 12, tickLine: false, axisLine: false }, void 0, false, {
      fileName: "app/components/overview.tsx",
      lineNumber: 62,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(YAxis, { stroke: "#888888", fontSize: 12, tickLine: false, axisLine: false, tickFormatter: (value) => `$${value}` }, void 0, false, {
      fileName: "app/components/overview.tsx",
      lineNumber: 63,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Bar, { dataKey: "total", fill: "currentColor", radius: [4, 4, 0, 0], className: "fill-primary" }, void 0, false, {
      fileName: "app/components/overview.tsx",
      lineNumber: 64,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/overview.tsx",
    lineNumber: 61,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/overview.tsx",
    lineNumber: 60,
    columnNumber: 10
  }, this);
}
_c9 = Overview;
var _c9;
$RefreshReg$(_c9, "Overview");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ui/avatar.tsx
var React40 = __toESM(require_react());

// node_modules/@radix-ui/react-avatar/dist/index.mjs
var import_react44 = __toESM(require_react(), 1);
var $cddcb0b647441e34$var$AVATAR_NAME = "Avatar";
var [$cddcb0b647441e34$var$createAvatarContext, $cddcb0b647441e34$export$90370d16b488820f] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($cddcb0b647441e34$var$AVATAR_NAME);
var [$cddcb0b647441e34$var$AvatarProvider, $cddcb0b647441e34$var$useAvatarContext] = $cddcb0b647441e34$var$createAvatarContext($cddcb0b647441e34$var$AVATAR_NAME);
var $cddcb0b647441e34$export$e2255cf6045e8d47 = /* @__PURE__ */ (0, import_react44.forwardRef)((props, forwardedRef) => {
  const { __scopeAvatar, ...avatarProps } = props;
  const [imageLoadingStatus, setImageLoadingStatus] = (0, import_react44.useState)("idle");
  return /* @__PURE__ */ (0, import_react44.createElement)($cddcb0b647441e34$var$AvatarProvider, {
    scope: __scopeAvatar,
    imageLoadingStatus,
    onImageLoadingStatusChange: setImageLoadingStatus
  }, /* @__PURE__ */ (0, import_react44.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends({}, avatarProps, {
    ref: forwardedRef
  })));
});
var $cddcb0b647441e34$var$IMAGE_NAME = "AvatarImage";
var $cddcb0b647441e34$export$2cd8ae1985206fe8 = /* @__PURE__ */ (0, import_react44.forwardRef)((props, forwardedRef) => {
  const { __scopeAvatar, src, onLoadingStatusChange = () => {
  }, ...imageProps } = props;
  const context = $cddcb0b647441e34$var$useAvatarContext($cddcb0b647441e34$var$IMAGE_NAME, __scopeAvatar);
  const imageLoadingStatus = $cddcb0b647441e34$var$useImageLoadingStatus(src);
  const handleLoadingStatusChange = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a((status) => {
    onLoadingStatusChange(status);
    context.onImageLoadingStatusChange(status);
  });
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (imageLoadingStatus !== "idle")
      handleLoadingStatusChange(imageLoadingStatus);
  }, [
    imageLoadingStatus,
    handleLoadingStatusChange
  ]);
  return imageLoadingStatus === "loaded" ? /* @__PURE__ */ (0, import_react44.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.img, _extends({}, imageProps, {
    ref: forwardedRef,
    src
  })) : null;
});
var $cddcb0b647441e34$var$FALLBACK_NAME = "AvatarFallback";
var $cddcb0b647441e34$export$69fffb6a9571fbfe = /* @__PURE__ */ (0, import_react44.forwardRef)((props, forwardedRef) => {
  const { __scopeAvatar, delayMs, ...fallbackProps } = props;
  const context = $cddcb0b647441e34$var$useAvatarContext($cddcb0b647441e34$var$FALLBACK_NAME, __scopeAvatar);
  const [canRender, setCanRender] = (0, import_react44.useState)(delayMs === void 0);
  (0, import_react44.useEffect)(() => {
    if (delayMs !== void 0) {
      const timerId = window.setTimeout(
        () => setCanRender(true),
        delayMs
      );
      return () => window.clearTimeout(timerId);
    }
  }, [
    delayMs
  ]);
  return canRender && context.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ (0, import_react44.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends({}, fallbackProps, {
    ref: forwardedRef
  })) : null;
});
function $cddcb0b647441e34$var$useImageLoadingStatus(src) {
  const [loadingStatus, setLoadingStatus] = (0, import_react44.useState)("idle");
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    if (!src) {
      setLoadingStatus("error");
      return;
    }
    let isMounted = true;
    const image = new window.Image();
    const updateStatus = (status) => () => {
      if (!isMounted)
        return;
      setLoadingStatus(status);
    };
    setLoadingStatus("loading");
    image.onload = updateStatus("loaded");
    image.onerror = updateStatus("error");
    image.src = src;
    return () => {
      isMounted = false;
    };
  }, [
    src
  ]);
  return loadingStatus;
}
var $cddcb0b647441e34$export$be92b6f5f03c0fe9 = $cddcb0b647441e34$export$e2255cf6045e8d47;
var $cddcb0b647441e34$export$3e431a229df88919 = $cddcb0b647441e34$export$2cd8ae1985206fe8;
var $cddcb0b647441e34$export$fb8d7f40caaeea67 = $cddcb0b647441e34$export$69fffb6a9571fbfe;

// app/components/ui/avatar.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\ui\\\\avatar.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\ui\\avatar.tsx"
  );
  import.meta.hot.lastModified = "1707739159122.5928";
}
var Avatar = React40.forwardRef(_c10 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)($cddcb0b647441e34$export$be92b6f5f03c0fe9, { ref, className: cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className), ...props }, void 0, false, {
  fileName: "app/components/ui/avatar.tsx",
  lineNumber: 27,
  columnNumber: 12
}, this));
_c22 = Avatar;
Avatar.displayName = $cddcb0b647441e34$export$be92b6f5f03c0fe9.displayName;
var AvatarImage = React40.forwardRef(_c32 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)($cddcb0b647441e34$export$3e431a229df88919, { ref, className: cn("aspect-square h-full w-full", className), ...props }, void 0, false, {
  fileName: "app/components/ui/avatar.tsx",
  lineNumber: 33,
  columnNumber: 12
}, this));
_c42 = AvatarImage;
AvatarImage.displayName = $cddcb0b647441e34$export$3e431a229df88919.displayName;
var AvatarFallback = React40.forwardRef(_c52 = ({
  className,
  ...props
}, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)($cddcb0b647441e34$export$fb8d7f40caaeea67, { ref, className: cn("flex h-full w-full items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800", className), ...props }, void 0, false, {
  fileName: "app/components/ui/avatar.tsx",
  lineNumber: 39,
  columnNumber: 12
}, this));
_c62 = AvatarFallback;
AvatarFallback.displayName = $cddcb0b647441e34$export$fb8d7f40caaeea67.displayName;
var _c10;
var _c22;
var _c32;
var _c42;
var _c52;
var _c62;
$RefreshReg$(_c10, "Avatar$React.forwardRef");
$RefreshReg$(_c22, "Avatar");
$RefreshReg$(_c32, "AvatarImage$React.forwardRef");
$RefreshReg$(_c42, "AvatarImage");
$RefreshReg$(_c52, "AvatarFallback$React.forwardRef");
$RefreshReg$(_c62, "AvatarFallback");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/recent-sales.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\recent-sales.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\recent-sales.tsx"
  );
  import.meta.hot.lastModified = "1707739193988.308";
}
function RecentSales() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "space-y-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Avatar, { className: "h-9 w-9", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(AvatarImage, { src: "/avatars/01.png", alt: "Avatar" }, void 0, false, {
          fileName: "app/components/recent-sales.tsx",
          lineNumber: 26,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(AvatarFallback, { children: "OM" }, void 0, false, {
          fileName: "app/components/recent-sales.tsx",
          lineNumber: 27,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/recent-sales.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "ml-4 space-y-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "text-sm font-medium leading-none", children: "Olivia Martin" }, void 0, false, {
          fileName: "app/components/recent-sales.tsx",
          lineNumber: 30,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "text-sm text-muted-foreground", children: "olivia.martin@email.com" }, void 0, false, {
          fileName: "app/components/recent-sales.tsx",
          lineNumber: 31,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/recent-sales.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "ml-auto font-medium", children: "+$1,999.00" }, void 0, false, {
        fileName: "app/components/recent-sales.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/recent-sales.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Avatar, { className: "flex h-9 w-9 items-center justify-center space-y-0 border", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(AvatarImage, { src: "/avatars/02.png", alt: "Avatar" }, void 0, false, {
          fileName: "app/components/recent-sales.tsx",
          lineNumber: 39,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(AvatarFallback, { children: "JL" }, void 0, false, {
          fileName: "app/components/recent-sales.tsx",
          lineNumber: 40,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/recent-sales.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "ml-4 space-y-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "text-sm font-medium leading-none", children: "Jackson Lee" }, void 0, false, {
          fileName: "app/components/recent-sales.tsx",
          lineNumber: 43,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "text-sm text-muted-foreground", children: "jackson.lee@email.com" }, void 0, false, {
          fileName: "app/components/recent-sales.tsx",
          lineNumber: 44,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/recent-sales.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "ml-auto font-medium", children: "+$39.00" }, void 0, false, {
        fileName: "app/components/recent-sales.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/recent-sales.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Avatar, { className: "h-9 w-9", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(AvatarImage, { src: "/avatars/03.png", alt: "Avatar" }, void 0, false, {
          fileName: "app/components/recent-sales.tsx",
          lineNumber: 50,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(AvatarFallback, { children: "IN" }, void 0, false, {
          fileName: "app/components/recent-sales.tsx",
          lineNumber: 51,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/recent-sales.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "ml-4 space-y-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "text-sm font-medium leading-none", children: "Isabella Nguyen" }, void 0, false, {
          fileName: "app/components/recent-sales.tsx",
          lineNumber: 54,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "text-sm text-muted-foreground", children: "isabella.nguyen@email.com" }, void 0, false, {
          fileName: "app/components/recent-sales.tsx",
          lineNumber: 55,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/recent-sales.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "ml-auto font-medium", children: "+$299.00" }, void 0, false, {
        fileName: "app/components/recent-sales.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/recent-sales.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Avatar, { className: "h-9 w-9", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(AvatarImage, { src: "/avatars/04.png", alt: "Avatar" }, void 0, false, {
          fileName: "app/components/recent-sales.tsx",
          lineNumber: 63,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(AvatarFallback, { children: "WK" }, void 0, false, {
          fileName: "app/components/recent-sales.tsx",
          lineNumber: 64,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/recent-sales.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "ml-4 space-y-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "text-sm font-medium leading-none", children: "William Kim" }, void 0, false, {
          fileName: "app/components/recent-sales.tsx",
          lineNumber: 67,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "text-sm text-muted-foreground", children: "will@email.com" }, void 0, false, {
          fileName: "app/components/recent-sales.tsx",
          lineNumber: 68,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/recent-sales.tsx",
        lineNumber: 66,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "ml-auto font-medium", children: "+$99.00" }, void 0, false, {
        fileName: "app/components/recent-sales.tsx",
        lineNumber: 70,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/recent-sales.tsx",
      lineNumber: 61,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Avatar, { className: "h-9 w-9", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(AvatarImage, { src: "/avatars/05.png", alt: "Avatar" }, void 0, false, {
          fileName: "app/components/recent-sales.tsx",
          lineNumber: 74,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(AvatarFallback, { children: "SD" }, void 0, false, {
          fileName: "app/components/recent-sales.tsx",
          lineNumber: 75,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/recent-sales.tsx",
        lineNumber: 73,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "ml-4 space-y-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "text-sm font-medium leading-none", children: "Sofia Davis" }, void 0, false, {
          fileName: "app/components/recent-sales.tsx",
          lineNumber: 78,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "text-sm text-muted-foreground", children: "sofia.davis@email.com" }, void 0, false, {
          fileName: "app/components/recent-sales.tsx",
          lineNumber: 79,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/recent-sales.tsx",
        lineNumber: 77,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "ml-auto font-medium", children: "+$39.00" }, void 0, false, {
        fileName: "app/components/recent-sales.tsx",
        lineNumber: 81,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/recent-sales.tsx",
      lineNumber: 72,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/recent-sales.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
}
_c11 = RecentSales;
var _c11;
$RefreshReg$(_c11, "RecentSales");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/search.tsx
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\search.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\search.tsx"
  );
  import.meta.hot.lastModified = "1707739221920.9192";
}
function Search() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Input, { type: "search", placeholder: "Search...", className: "md:w-[100px] lg:w-[300px]" }, void 0, false, {
    fileName: "app/components/search.tsx",
    lineNumber: 24,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/search.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
}
_c12 = Search;
var _c12;
$RefreshReg$(_c12, "Search");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/team-switcher.tsx
var React41 = __toESM(require_react());
var import_jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\team-switcher.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\team-switcher.tsx"
  );
  import.meta.hot.lastModified = "1707739582091.4585";
}
var groups = [{
  label: "Personal Account",
  teams: [{
    label: "Alicia Koch",
    value: "personal"
  }]
}, {
  label: "Teams",
  teams: [{
    label: "Acme Inc.",
    value: "acme-inc"
  }, {
    label: "Monsters Inc.",
    value: "monsters"
  }]
}];
function TeamSwitcher({
  className
}) {
  _s2();
  const [open, setOpen] = React41.useState(false);
  const [showNewTeamDialog, setShowNewTeamDialog] = React41.useState(false);
  const [selectedTeam, setSelectedTeam] = React41.useState(groups[0].teams[0]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Dialog, { open: showNewTeamDialog, onOpenChange: setShowNewTeamDialog, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Popover, { open, onOpenChange: setOpen, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Button, { variant: "outline", role: "combobox", "aria-expanded": open, "aria-label": "Select a team", className: cn("w-[200px] justify-between", className), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Avatar, { className: "mr-2 h-5 w-5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(AvatarImage, { src: `https://avatar.vercel.sh/${selectedTeam.value}.png`, alt: selectedTeam.label, className: "grayscale" }, void 0, false, {
            fileName: "app/components/team-switcher.tsx",
            lineNumber: 61,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(AvatarFallback, { children: "SC" }, void 0, false, {
            fileName: "app/components/team-switcher.tsx",
            lineNumber: 62,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/team-switcher.tsx",
          lineNumber: 60,
          columnNumber: 13
        }, this),
        selectedTeam.label,
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(CaretSortIcon, { className: "ml-auto h-4 w-4 shrink-0 opacity-50" }, void 0, false, {
          fileName: "app/components/team-switcher.tsx",
          lineNumber: 65,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/team-switcher.tsx",
        lineNumber: 59,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/team-switcher.tsx",
        lineNumber: 58,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(PopoverContent, { className: "w-[200px] p-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Command, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(CommandList, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(CommandInput, { placeholder: "Search team..." }, void 0, false, {
            fileName: "app/components/team-switcher.tsx",
            lineNumber: 71,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(CommandEmpty, { children: "No team found." }, void 0, false, {
            fileName: "app/components/team-switcher.tsx",
            lineNumber: 72,
            columnNumber: 15
          }, this),
          groups.map((group) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(CommandGroup, { heading: group.label, children: group.teams.map((team) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(CommandItem, { onSelect: () => {
            setSelectedTeam(team);
            setOpen(false);
          }, className: "text-sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Avatar, { className: "mr-2 h-5 w-5", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(AvatarImage, { src: `https://avatar.vercel.sh/${team.value}.png`, alt: team.label, className: "grayscale" }, void 0, false, {
                fileName: "app/components/team-switcher.tsx",
                lineNumber: 79,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(AvatarFallback, { children: "SC" }, void 0, false, {
                fileName: "app/components/team-switcher.tsx",
                lineNumber: 80,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/team-switcher.tsx",
              lineNumber: 78,
              columnNumber: 23
            }, this),
            team.label,
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(CheckIcon, { className: cn("ml-auto h-4 w-4", selectedTeam.value === team.value ? "opacity-100" : "opacity-0") }, void 0, false, {
              fileName: "app/components/team-switcher.tsx",
              lineNumber: 83,
              columnNumber: 23
            }, this)
          ] }, team.value, true, {
            fileName: "app/components/team-switcher.tsx",
            lineNumber: 74,
            columnNumber: 44
          }, this)) }, group.label, false, {
            fileName: "app/components/team-switcher.tsx",
            lineNumber: 73,
            columnNumber: 36
          }, this))
        ] }, void 0, true, {
          fileName: "app/components/team-switcher.tsx",
          lineNumber: 70,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(CommandSeparator, {}, void 0, false, {
          fileName: "app/components/team-switcher.tsx",
          lineNumber: 87,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(CommandList, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(CommandGroup, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(DialogTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(CommandItem, { onSelect: () => {
          setOpen(false);
          setShowNewTeamDialog(true);
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(PlusCircledIcon, { className: "mr-2 h-5 w-5" }, void 0, false, {
            fileName: "app/components/team-switcher.tsx",
            lineNumber: 95,
            columnNumber: 21
          }, this),
          "Create Team"
        ] }, void 0, true, {
          fileName: "app/components/team-switcher.tsx",
          lineNumber: 91,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/components/team-switcher.tsx",
          lineNumber: 90,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/team-switcher.tsx",
          lineNumber: 89,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/team-switcher.tsx",
          lineNumber: 88,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/team-switcher.tsx",
        lineNumber: 69,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/team-switcher.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/team-switcher.tsx",
      lineNumber: 57,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(DialogContent, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(DialogHeader, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(DialogTitle, { children: "Create team" }, void 0, false, {
          fileName: "app/components/team-switcher.tsx",
          lineNumber: 106,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(DialogDescription, { children: "Add a new team to manage products and customers." }, void 0, false, {
          fileName: "app/components/team-switcher.tsx",
          lineNumber: 107,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/team-switcher.tsx",
        lineNumber: 105,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "space-y-4 py-2 pb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "space-y-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Label, { htmlFor: "name", children: "Team name" }, void 0, false, {
            fileName: "app/components/team-switcher.tsx",
            lineNumber: 114,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Input, { id: "name", placeholder: "Acme Inc." }, void 0, false, {
            fileName: "app/components/team-switcher.tsx",
            lineNumber: 115,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/team-switcher.tsx",
          lineNumber: 113,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "space-y-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Label, { htmlFor: "plan", children: "Subscription plan" }, void 0, false, {
            fileName: "app/components/team-switcher.tsx",
            lineNumber: 118,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Select, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(SelectValue, { placeholder: "Select a plan" }, void 0, false, {
              fileName: "app/components/team-switcher.tsx",
              lineNumber: 121,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/components/team-switcher.tsx",
              lineNumber: 120,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(SelectContent, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(SelectItem, { value: "free", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "font-medium", children: "Free" }, void 0, false, {
                  fileName: "app/components/team-switcher.tsx",
                  lineNumber: 125,
                  columnNumber: 21
                }, this),
                " -",
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "text-muted-foreground", children: "Trial for two weeks" }, void 0, false, {
                  fileName: "app/components/team-switcher.tsx",
                  lineNumber: 126,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/components/team-switcher.tsx",
                lineNumber: 124,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(SelectItem, { value: "pro", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "font-medium", children: "Pro" }, void 0, false, {
                  fileName: "app/components/team-switcher.tsx",
                  lineNumber: 131,
                  columnNumber: 21
                }, this),
                " -",
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "text-muted-foreground", children: "$9/month per user" }, void 0, false, {
                  fileName: "app/components/team-switcher.tsx",
                  lineNumber: 132,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/components/team-switcher.tsx",
                lineNumber: 130,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/team-switcher.tsx",
              lineNumber: 123,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/team-switcher.tsx",
            lineNumber: 119,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/team-switcher.tsx",
          lineNumber: 117,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/team-switcher.tsx",
        lineNumber: 112,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/team-switcher.tsx",
        lineNumber: 111,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(DialogFooter, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Button, { variant: "outline", onClick: () => setShowNewTeamDialog(false), children: "Cancel" }, void 0, false, {
          fileName: "app/components/team-switcher.tsx",
          lineNumber: 142,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Button, { type: "submit", children: "Continue" }, void 0, false, {
          fileName: "app/components/team-switcher.tsx",
          lineNumber: 145,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/team-switcher.tsx",
        lineNumber: 141,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/team-switcher.tsx",
      lineNumber: 104,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/team-switcher.tsx",
    lineNumber: 56,
    columnNumber: 10
  }, this);
}
_s2(TeamSwitcher, "DeW+OX0ce503kuuHfy1L0SOasag=");
_c13 = TeamSwitcher;
var _c13;
$RefreshReg$(_c13, "TeamSwitcher");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/user-nav.tsx
var import_jsx_dev_runtime9 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\user-nav.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\user-nav.tsx"
  );
  import.meta.hot.lastModified = "1707739644509.782";
}
function UserNav() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(DropdownMenu, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Button, { variant: "ghost", className: "relative h-8 w-8 rounded-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Avatar, { className: "h-8 w-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(AvatarImage, { src: "/avatars/01.png", alt: "@shadcn" }, void 0, false, {
        fileName: "app/components/user-nav.tsx",
        lineNumber: 29,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(AvatarFallback, { children: "SC" }, void 0, false, {
        fileName: "app/components/user-nav.tsx",
        lineNumber: 30,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/user-nav.tsx",
      lineNumber: 28,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/user-nav.tsx",
      lineNumber: 27,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/user-nav.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(DropdownMenuContent, { className: "w-56", align: "end", forceMount: true, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(DropdownMenuLabel, { className: "font-normal", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex flex-col space-y-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "text-sm font-medium leading-none", children: "shadcn" }, void 0, false, {
          fileName: "app/components/user-nav.tsx",
          lineNumber: 37,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "text-xs leading-none text-muted-foreground", children: "m@example.com" }, void 0, false, {
          fileName: "app/components/user-nav.tsx",
          lineNumber: 38,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/user-nav.tsx",
        lineNumber: 36,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/user-nav.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(DropdownMenuSeparator, {}, void 0, false, {
        fileName: "app/components/user-nav.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(DropdownMenuGroup, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(DropdownMenuItem, { children: [
          "Profile",
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(DropdownMenuShortcut, { children: "\u21E7\u2318P" }, void 0, false, {
            fileName: "app/components/user-nav.tsx",
            lineNumber: 47,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/user-nav.tsx",
          lineNumber: 45,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(DropdownMenuItem, { children: [
          "Billing",
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(DropdownMenuShortcut, { children: "\u2318B" }, void 0, false, {
            fileName: "app/components/user-nav.tsx",
            lineNumber: 51,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/user-nav.tsx",
          lineNumber: 49,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(DropdownMenuItem, { children: [
          "Settings",
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(DropdownMenuShortcut, { children: "\u2318S" }, void 0, false, {
            fileName: "app/components/user-nav.tsx",
            lineNumber: 55,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/user-nav.tsx",
          lineNumber: 53,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(DropdownMenuItem, { children: "New Team" }, void 0, false, {
          fileName: "app/components/user-nav.tsx",
          lineNumber: 57,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/user-nav.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(DropdownMenuSeparator, {}, void 0, false, {
        fileName: "app/components/user-nav.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(DropdownMenuItem, { children: [
        "Log out",
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(DropdownMenuShortcut, { children: "\u21E7\u2318Q" }, void 0, false, {
          fileName: "app/components/user-nav.tsx",
          lineNumber: 62,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/user-nav.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/user-nav.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/user-nav.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}
_c14 = UserNav;
var _c14;
$RefreshReg$(_c14, "UserNav");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/snop.result.tsx
var import_jsx_dev_runtime10 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\snop.result.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\snop.result.tsx"
  );
  import.meta.hot.lastModified = "1707739890339.1724";
}
function DashboardPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_jsx_dev_runtime10.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "p-2 m-2 bg-white rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "hidden flex-col md:flex ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "border-b", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex h-16 items-center px-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(TeamSwitcher, {}, void 0, false, {
        fileName: "app/routes/snop.result.tsx",
        lineNumber: 37,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(MainNav, { className: "mx-6" }, void 0, false, {
        fileName: "app/routes/snop.result.tsx",
        lineNumber: 38,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "ml-auto flex items-center space-x-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Search, {}, void 0, false, {
          fileName: "app/routes/snop.result.tsx",
          lineNumber: 40,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(UserNav, {}, void 0, false, {
          fileName: "app/routes/snop.result.tsx",
          lineNumber: 41,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/snop.result.tsx",
        lineNumber: 39,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/snop.result.tsx",
      lineNumber: 36,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/snop.result.tsx",
      lineNumber: 35,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex-1 space-y-4 p-8 pt-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex items-center justify-between space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h2", { className: "text-3xl font-bold tracking-tight", children: "Dashboard" }, void 0, false, {
          fileName: "app/routes/snop.result.tsx",
          lineNumber: 47,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(CalendarDateRangePicker, {}, void 0, false, {
            fileName: "app/routes/snop.result.tsx",
            lineNumber: 49,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Button, { children: "Download" }, void 0, false, {
            fileName: "app/routes/snop.result.tsx",
            lineNumber: 50,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.result.tsx",
          lineNumber: 48,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/snop.result.tsx",
        lineNumber: 46,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Tabs, { defaultValue: "overview", className: "space-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(TabsList, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(TabsTrigger, { value: "overview", children: "Overview" }, void 0, false, {
            fileName: "app/routes/snop.result.tsx",
            lineNumber: 55,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(TabsTrigger, { value: "analytics", disabled: true, children: "Analytics" }, void 0, false, {
            fileName: "app/routes/snop.result.tsx",
            lineNumber: 56,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(TabsTrigger, { value: "reports", disabled: true, children: "Reports" }, void 0, false, {
            fileName: "app/routes/snop.result.tsx",
            lineNumber: 59,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(TabsTrigger, { value: "notifications", disabled: true, children: "Notifications" }, void 0, false, {
            fileName: "app/routes/snop.result.tsx",
            lineNumber: 62,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.result.tsx",
          lineNumber: 54,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(TabsContent, { value: "overview", className: "space-y-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "grid gap-4 md:grid-cols-2 lg:grid-cols-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Card, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(CardTitle, { className: "text-sm font-medium", children: "Total Revenue" }, void 0, false, {
                  fileName: "app/routes/snop.result.tsx",
                  lineNumber: 70,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", className: "h-4 w-4 text-muted-foreground", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("path", { d: "M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" }, void 0, false, {
                  fileName: "app/routes/snop.result.tsx",
                  lineNumber: 74,
                  columnNumber: 25
                }, this) }, void 0, false, {
                  fileName: "app/routes/snop.result.tsx",
                  lineNumber: 73,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/snop.result.tsx",
                lineNumber: 69,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(CardContent, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "text-2xl font-bold", children: "$45,231.89" }, void 0, false, {
                  fileName: "app/routes/snop.result.tsx",
                  lineNumber: 78,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "text-xs text-muted-foreground", children: "+20.1% from last month" }, void 0, false, {
                  fileName: "app/routes/snop.result.tsx",
                  lineNumber: 79,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/snop.result.tsx",
                lineNumber: 77,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/snop.result.tsx",
              lineNumber: 68,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Card, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(CardTitle, { className: "text-sm font-medium", children: "Subscriptions" }, void 0, false, {
                  fileName: "app/routes/snop.result.tsx",
                  lineNumber: 86,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", className: "h-4 w-4 text-muted-foreground", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }, void 0, false, {
                    fileName: "app/routes/snop.result.tsx",
                    lineNumber: 90,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("circle", { cx: "9", cy: "7", r: "4" }, void 0, false, {
                    fileName: "app/routes/snop.result.tsx",
                    lineNumber: 91,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("path", { d: "M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" }, void 0, false, {
                    fileName: "app/routes/snop.result.tsx",
                    lineNumber: 92,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/snop.result.tsx",
                  lineNumber: 89,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/snop.result.tsx",
                lineNumber: 85,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(CardContent, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "text-2xl font-bold", children: "+2350" }, void 0, false, {
                  fileName: "app/routes/snop.result.tsx",
                  lineNumber: 96,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "text-xs text-muted-foreground", children: "+180.1% from last month" }, void 0, false, {
                  fileName: "app/routes/snop.result.tsx",
                  lineNumber: 97,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/snop.result.tsx",
                lineNumber: 95,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/snop.result.tsx",
              lineNumber: 84,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Card, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(CardTitle, { className: "text-sm font-medium", children: "Sales" }, void 0, false, {
                  fileName: "app/routes/snop.result.tsx",
                  lineNumber: 104,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", className: "h-4 w-4 text-muted-foreground", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("rect", { width: "20", height: "14", x: "2", y: "5", rx: "2" }, void 0, false, {
                    fileName: "app/routes/snop.result.tsx",
                    lineNumber: 108,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("path", { d: "M2 10h20" }, void 0, false, {
                    fileName: "app/routes/snop.result.tsx",
                    lineNumber: 109,
                    columnNumber: 25
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/snop.result.tsx",
                  lineNumber: 107,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/snop.result.tsx",
                lineNumber: 103,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(CardContent, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "text-2xl font-bold", children: "+12,234" }, void 0, false, {
                  fileName: "app/routes/snop.result.tsx",
                  lineNumber: 113,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "text-xs text-muted-foreground", children: "+19% from last month" }, void 0, false, {
                  fileName: "app/routes/snop.result.tsx",
                  lineNumber: 114,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/snop.result.tsx",
                lineNumber: 112,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/snop.result.tsx",
              lineNumber: 102,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Card, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(CardTitle, { className: "text-sm font-medium", children: "Active Now" }, void 0, false, {
                  fileName: "app/routes/snop.result.tsx",
                  lineNumber: 121,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", className: "h-4 w-4 text-muted-foreground", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("path", { d: "M22 12h-4l-3 9L9 3l-3 9H2" }, void 0, false, {
                  fileName: "app/routes/snop.result.tsx",
                  lineNumber: 125,
                  columnNumber: 25
                }, this) }, void 0, false, {
                  fileName: "app/routes/snop.result.tsx",
                  lineNumber: 124,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/snop.result.tsx",
                lineNumber: 120,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(CardContent, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "text-2xl font-bold", children: "+573" }, void 0, false, {
                  fileName: "app/routes/snop.result.tsx",
                  lineNumber: 129,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "text-xs text-muted-foreground", children: "+201 since last hour" }, void 0, false, {
                  fileName: "app/routes/snop.result.tsx",
                  lineNumber: 130,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/snop.result.tsx",
                lineNumber: 128,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/snop.result.tsx",
              lineNumber: 119,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.result.tsx",
            lineNumber: 67,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "grid gap-4 md:grid-cols-2 lg:grid-cols-7", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Card, { className: "col-span-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(CardTitle, { children: "Overview" }, void 0, false, {
                fileName: "app/routes/snop.result.tsx",
                lineNumber: 139,
                columnNumber: 23
              }, this) }, void 0, false, {
                fileName: "app/routes/snop.result.tsx",
                lineNumber: 138,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(CardContent, { className: "pl-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Overview, {}, void 0, false, {
                fileName: "app/routes/snop.result.tsx",
                lineNumber: 142,
                columnNumber: 23
              }, this) }, void 0, false, {
                fileName: "app/routes/snop.result.tsx",
                lineNumber: 141,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/snop.result.tsx",
              lineNumber: 137,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Card, { className: "col-span-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(CardHeader, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(CardTitle, { children: "Recent Sales" }, void 0, false, {
                  fileName: "app/routes/snop.result.tsx",
                  lineNumber: 147,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(CardDescription, { children: "You made 265 sales this month." }, void 0, false, {
                  fileName: "app/routes/snop.result.tsx",
                  lineNumber: 148,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/snop.result.tsx",
                lineNumber: 146,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(RecentSales, {}, void 0, false, {
                fileName: "app/routes/snop.result.tsx",
                lineNumber: 153,
                columnNumber: 23
              }, this) }, void 0, false, {
                fileName: "app/routes/snop.result.tsx",
                lineNumber: 152,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/snop.result.tsx",
              lineNumber: 145,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/snop.result.tsx",
            lineNumber: 136,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/snop.result.tsx",
          lineNumber: 66,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/snop.result.tsx",
        lineNumber: 53,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/snop.result.tsx",
      lineNumber: 45,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/snop.result.tsx",
    lineNumber: 34,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/snop.result.tsx",
    lineNumber: 33,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/snop.result.tsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
}
_c15 = DashboardPage;
var _c15;
$RefreshReg$(_c15, "DashboardPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  DashboardPage as default
};
/*! Bundled license information:

react-is/cjs/react-is.development.js:
  (** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

decimal.js-light/decimal.js:
  (*! decimal.js-light v2.5.1 https://github.com/MikeMcl/decimal.js-light/LICENCE *)
*/
//# sourceMappingURL=/build/routes/snop.result-VY66ST6M.js.map
