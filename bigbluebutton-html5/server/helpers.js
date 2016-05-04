import { clearUsersCollection } from '/server/collection_methods/users';
import { clearChatCollection } from '/server/collection_methods/chat';
import { clearMeetingsCollection } from '/server/collection_methods/meetings';
import { clearShapesCollection } from '/server/collection_methods/shapes';
import { clearSlidesCollection } from '/server/collection_methods/slides';
import { clearPresentationsCollection } from '/server/collection_methods/presentations';
import { clearPollCollection } from '/server/collection_methods/poll';
import { clearCursorCollection } from '/server/collection_methods/cursor';

export function appendMessageHeader(eventName, messageObj) {
  let header;
  header = {
    timestamp: new Date().getTime(),
    name: eventName,
  };
  messageObj.header = header;
  return messageObj;
};

export function clearCollections() {
  console.log('in function clearCollections');
  clearUsersCollection();
  clearChatCollection();
  clearMeetingsCollection();
  clearShapesCollection();
  clearSlidesCollection();
  clearPresentationsCollection();
  clearPollCollection();
  clearCursorCollection();
}


export const bind = function (fn, me) { return function () { return fn.apply(me, arguments); }; };

export const indexOf = [].indexOf || function (item) {
    for (let i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1;
  };
