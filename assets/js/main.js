// Tijdelijke afhandeling van het aanvraagformulier.
// Verstuurt NIETS: alleen controle van verplichte velden en een bedankmelding.
// Vervang het formulier vóór livegang door het HubSpot-formulier.
document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('aanvraagformulier');
  var thanks = document.getElementById('bedankt');
  if (!form || !thanks) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    form.hidden = true;
    thanks.hidden = false;
    thanks.setAttribute('tabindex', '-1');
    thanks.focus();
  });
});
