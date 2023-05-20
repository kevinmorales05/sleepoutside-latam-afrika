
class Alert {
    constructor() {
      this.alerts = [];
    }
  
    loadAlerts() {
      try {
        const alerts = require('./alerts.json');
        if (Array.isArray(alerts)) {
          this.alerts = alerts;
        }
      } catch (error) {
        console.error('Error loading alerts:', error);
      }
    }
  
    createAlertElements() {
      const alertList = document.createElement('section');
      alertList.className = 'alert-list';
  
      this.alerts.forEach((alert) => {
        const { message, background, color } = alert;
        const alertItem = document.createElement('p');
        alertItem.textContent = message;
        alertItem.style.backgroundColor = background;
        alertItem.style.color = color;
        alertList.appendChild(alertItem);
      });
  
      return alertList;
    }
  
    prependToMain() {
      const mainElement = document.querySelector('main');
      const alertList = this.createAlertElements();
      mainElement.prepend(alertList);
    }
  }
  
  export default Alert;