const UPLOAD_URL = 'http://127.0.0.1:5000/api/upload';

export async function uploadFiles(formData: FormData): Promise<boolean> {
    try {
      const response = await fetch(UPLOAD_URL, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log('Files uploaded successfully:', responseData);
        return Promise.resolve(true); 
      } else {
        console.error('Error uploading files:', response.statusText);
        return Promise.reject(response.statusText); 
      }
    } catch (error) {
      console.error('Error uploading files:', error);
      return Promise.reject(error)
    }
}