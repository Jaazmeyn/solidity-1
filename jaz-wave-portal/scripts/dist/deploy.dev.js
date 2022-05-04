"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var main = function main() {
  var _ref, _ref2, deployer, accountBalance, networkingContractFactory, networkingContract;

  return regeneratorRuntime.async(function main$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(hre.ethers.getSigners());

        case 2:
          _ref = _context.sent;
          _ref2 = _slicedToArray(_ref, 1);
          deployer = _ref2[0];
          _context.next = 7;
          return regeneratorRuntime.awrap(deployer.getBalance());

        case 7:
          accountBalance = _context.sent;
          console.log("Deploying contracts with account: ", deployer.address);
          console.log("Account balance: ", accountBalance.toString());
          _context.next = 12;
          return regeneratorRuntime.awrap(hre.ethers.getContractFactory("NetworkingPortal"));

        case 12:
          networkingContractFactory = _context.sent;
          _context.next = 15;
          return regeneratorRuntime.awrap(networkingContractFactory.deploy());

        case 15:
          networkingContract = _context.sent;
          _context.next = 18;
          return regeneratorRuntime.awrap(networkingContract.deployed());

        case 18:
          console.log("NetworkingPortal address: ", networkingContract.address);

        case 19:
        case "end":
          return _context.stop();
      }
    }
  });
};

var runMain = function runMain() {
  return regeneratorRuntime.async(function runMain$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(main());

        case 3:
          process.exit(0);
          _context2.next = 10;
          break;

        case 6:
          _context2.prev = 6;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);
          process.exit(1);

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 6]]);
};

runMain();