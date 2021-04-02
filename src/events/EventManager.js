const eventManager = {

  suscribe(eventClass, handler) {
    const handlerWrapper = function handlerWrapper(event) {
      handler(...event.detail);
    };
    document.addEventListener(eventClass.name, handlerWrapper, { passive: true });

    const suscription = {
      unsubscribe: function unsubscribe() {
        document.removeEventListener(eventClass.name, handlerWrapper);
      },
    };

    return suscription;
  },

  publish(event) {
    const nativeEvent = new CustomEvent(event.constructor.name, {
      detail: event.args,
    });
    document.dispatchEvent(nativeEvent);
  },

};

export default eventManager;
