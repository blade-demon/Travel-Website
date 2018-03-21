import $ from 'jquery';
import wayPoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
  constructor(els, offset) {
    this.itemToReveal = els;
    this.offsetPercentage = offset;
    this.hideInitially();
    this.createWayPoints();

  }

  hideInitially() {
    this.itemToReveal.addClass("reveal-item");
  }

  createWayPoints() {
    var that = this;
    this.itemToReveal.each(function() {
      var currentItem = this;
      new Waypoint({
        element: currentItem,
        handler: function (direction) {
            $(currentItem).addClass("reveal-item--is-visible");
        },
        offset: that.offsetPercentage
      });
    });
  }
}

export default  RevealOnScroll;