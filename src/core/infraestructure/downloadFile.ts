import { saveAs } from 'file-saver';

export { downloadFile };

function downloadFile(blob: Blob, filename: string) {
  saveAs(blob, filename);
}
