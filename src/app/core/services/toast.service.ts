import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  showToast({ title = "", message = "", type = "info", duration = 3000 }: { title: string, message: string, type: string, duration: number }) {
    const toastContainer = document.getElementById('toast');
    if (toastContainer) {
      const toast = document.createElement('div');

      const autoRemoveId = setTimeout(() => {
        toastContainer.removeChild(toast);
      }, duration + 1000);

      toast.onclick = (event) => {
        const target = event.target as HTMLElement;
        if (target.closest('.toast__close')) {
          toastContainer.removeChild(toast);
          clearTimeout(autoRemoveId);
        }
      };

      const delay = (duration / 1000).toFixed(2);

      toast.classList.add('toast', `toast--${type}`);
      toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;

      toast.innerHTML = `
        <div class="toast__icon">
        </div>
        <div class="toast__body">
          <h3 class="toast__title">${title}</h3>
          <p class="toast__msg">${message}</p>
        </div>
        <div class="toast__close">
          <i><img src="assets/icons/close.svg" width="30px" /></i>
        </div>
      `;

      toastContainer.appendChild(toast);
    }
  }
}
