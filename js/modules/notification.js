const notifications = document.querySelector('.notifications');

function createNotification ({type, icon, title, subtitle}) {
    const newNotification = `
        <div class="notification ${type}">
            <img class="notification__icon" src="${icon}" alt="#">
            <div class="notification__content">
                <div class="notification__title">${title}</div>
                <span class="notification__subtitle">${subtitle}</span>
            </div>
            <button class="notification__close">
                <img class=notification__close-icon src="./img/close.svg" alt="#">
            </button>
        </div>`;
    notifications.insertAdjacentHTML('afterbegin', newNotification);

    const notification = document.querySelector(`.${type}`);
    setTimeout(() => {
        notification.remove();
    }, 5000);
}

export default createNotification;