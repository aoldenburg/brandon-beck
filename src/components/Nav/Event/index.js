import React from 'react';
import { Helmet } from 'react-helmet';

export default function TicketButton() {
  const createWidget = () => {
    window.EBWidgets.createWidget({
      widgetType: 'checkout',
      eventId: '49861458966',
      modal: true,
      modalTriggerElementId: 'eventbrite-widget-modal-trigger-49861458966',
      onOrderComplete: () => {console.log('thank you!')}
    })
  }
  return(
    <React.Fragment>
      <Helmet>
        <script src="https://www.eventbrite.com/static/widgets/eb_widgets.js"></script>
      </Helmet>
      <button className="link" id="eventbrite-widget-modal-trigger-49861458966" type="button" onClick={createWidget}>Buy Tickets</button>
    </React.Fragment>
  )
}
