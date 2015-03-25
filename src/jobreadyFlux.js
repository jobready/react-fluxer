window = window || {};

window.React = require('react');
window.Dispatcher = require('flux').Dispatcher;
window.EventEmitter = require('events').EventEmitter;
window.KeyMirror = require('keymirror');

module.exports = {
  React: window.React,
  Dispatcher: window.Dispatcher,
  EventEmitter: window.EventEmitter,
  KeyMirror: window.KeyMirror
};
