const openModal = () => {
  const modalElement = `<div class="modal">
      <div class="overlay"></div>
      <div class="modal-content">
        <div class="close" onClick="closeModal()">
          <img src="assets/icons/close.svg" alt="close icon" />
        </div>
        <form action="" method="POST">
          <div>
            <label>Ime:</label>
            <input type="text" name="firstName" required />
          </div>
          <div>
            <label>Prezime:</label>
            <input type="text" name="lastName" required />
          </div>
          <div>
            <label>Email adresa:</label>
            <input type="email" name="email" required />
          </div>
          <div>
            <label>Broj mobitela:</label>
            <input type="tel" name="phoneNumber" required />
          </div>
          <div>
            <label>Napomena:</label>
            <textarea name="notice" rows="5" cols="30"></textarea>
          </div>
          <div class="login-button-container">
            <button type="submit" name="submit" class="login-button">
              Prijavi se
            </button>
          </div>
        </form>
      </div>
    </div>`;

  $('body').append(modalElement);
  $('body').css('overflow', 'hidden');
  $('.header').css('display', 'none');
};

const closeModal = () => {
  $('.modal').remove();
  $('body').css('overflow', 'auto');
  $('.header').css('display', 'flex');
};
