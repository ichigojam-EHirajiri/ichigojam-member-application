window.onload = function () {
  const defaultLiffId = '1655968335-1zw59Wxk';
  initializeLiff(defaultLiffId);
};

/**
 * Initialize LIFF
 * @param {string} myLiffId The LIFF ID of the selected element
 */
function initializeLiff(myLiffId) {
  liff
    .init({
      liffId: myLiffId,
    })
    .then(() => {
      // start to use LIFF's api
      initializeApp();
    })
    .catch(err => {
      document.getElementById('liffAppContent').classList.add('hidden');
      document.getElementById('liffInitErrorMessage').classList.remove('hidden');
    });
}

/**
 * Initialize the app by calling functions handling individual app components
 */
function initializeApp() {
  displayIsInClientInfo();

  if (liff.isLoggedIn()) {
    liff
      .getProfile()
      .then(function (profile) {
        window.alert('profile.userId:' + profile.userId);
      })
      .catch(function (error) {
        window.alert('Error getting profile: ' + error);
      });
  }
}

function displayIsInClientInfo() {
  if (!liff.isInClient()) {
    document.getElementById('isInClientMessage').textContent = '不正なアクセスです。LINE内ブラウザで開いてください。';
  }
}
