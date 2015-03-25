var React = require('react'),
    Dispatcher = require('flux').Dispatcher,
    EventEmitter = require('events').EventEmitter,
    KeyMirror = require('keymirror');

var JobreadyFlux = {
  React: React,
  Dispatcher: Dispatcher,
  EventEmitter: EventEmitter,
  KeyMirror: KeyMirror
};

if(window !== null) {
  window.JobreadyFlux = JobreadyFlux;
}
module.exports = JobreadyFlux;
