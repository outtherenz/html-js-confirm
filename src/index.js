import dialogPolyfill from 'dialog-polyfill';

const makeDialogContent = (content) => `
  <form method="dialog">
    <p>${content}</p>
    <menu>
      <button value="cancel">Cancel</button>
      <button value="confirm">Confirm</button>
    </menu>
  </form>
`;

export default (content) => {
  const dialog = document.createElement('dialog');

  dialogPolyfill.registerDialog(dialog);

  dialog.innerHTML = makeDialogContent(content);
  document.body.appendChild(dialog);
  dialog.showModal();

  return new Promise((resolve) => dialog.addEventListener('close', () => {
    resolve(dialog.returnValue === 'confirm' || false);
  }))
    .then((result) => {
      document.body.removeChild(dialog);

      return result;
    });
};
