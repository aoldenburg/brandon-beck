import React from 'react';
import { Helmet } from 'react-helmet';

function createWidget() {
  window.EBWidgets.createWidget({
    widgetType: 'checkout',
    eventId: '49861458966',
    modal: true,
    modalTriggerElementId: 'eventbrite-widget-modal-trigger-49861458966',
    onOrderComplete: () => {console.log('thank you!')}
  })
}
export default function TicketButton() {
  return(
    <React.Fragment>
      <Helmet>
        <title>Memes are dead</title>
        <script src="https://www.eventbrite.com/static/widgets/eb_widgets.js"></script>
      </Helmet>
      <a
        role="button"
        className="navbar-item anchor"
        id="eventbrite-widget-modal-trigger-49861458966"
        type="button"
        onClick={createWidget}
      >Buy Tickets
      </a>
    </React.Fragment>
  )
}
