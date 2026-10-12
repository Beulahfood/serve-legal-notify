const button = document.getElementById('testNotification');
const notice = document.getElementById('notice');

button.addEventListener('click', async () => {
  if (!('Notification' in window)) {
    notice.textContent = 'This browser does not support web notifications.';
    return;
  }
  try {
    let permission = Notification.permission;
    if (permission === 'default') permission = await Notification.requestPermission();
    if (permission !== 'granted') {
      notice.textContent = 'Notifications are not enabled. Allow them in your browser settings and try again.';
      return;
    }
    if ('serviceWorker' in navigator && location.protocol.startsWith('https')) {
      const registration = await navigator.serviceWorker.register('./sw.js');
      await registration.showNotification('Serve Legal Notify', {
        body: 'Test notification received. The audit checker is not connected yet.',
        icon: './icon-192.png',
        badge: './icon-192.png',
        tag: 'sl-notify-test'
      });
    } else {
      new Notification('Serve Legal Notify', {
        body: 'Test notification received. The audit checker is not connected yet.',
        icon: './icon-192.png'
      });
    }
    notice.textContent = 'Test notification sent. This tests notifications only—not automatic audit monitoring.';
  } catch (error) {
    notice.textContent = 'Could not send the test notification in this environment. We will troubleshoot after hosting.';
  }
});
