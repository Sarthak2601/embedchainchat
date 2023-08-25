const UPLOAD_URL = 'http://127.0.0.1:5000/api/upload';

export async function uploadFiles(formData: FormData) {
    try {
      const response = await fetch(UPLOAD_URL, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log('Files uploaded successfully:', responseData);
      } else {
        console.error('Error uploading files:', response.statusText);
      }
    } catch (error) {
      console.error('Error uploading files:', error);
    }
}