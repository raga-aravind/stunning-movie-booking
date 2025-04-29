// script.js
document.getElementById('loginForm').addEventListener('submit', async (event) => {
  event.preventDefault(); // Prevent the default form submission
  
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Send the login data to the backend
  const response = await fetch('http://localhost:5000/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();
  
  if (response.ok) {
    // Store the token in localStorage
    localStorage.setItem('token', data.token);
    window.location.href = 'dashboard.html'; // Redirect to dashboard
  } else {
    alert(data.message || 'Login failed!');
  }
});

// script.js
document.getElementById('signupForm').addEventListener('submit', async (event) => {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://localhost:5000/api/users/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, email, password }),
  });

  const data = await response.json();

  if (response.ok) {
    alert('Account created successfully!');
    window.location.href = 'login.html'; // Redirect to login page
  } else {
    alert(data.message || 'Signup failed!');
  }
});
// script.js
document.addEventListener('DOMContentLoaded', () => {
  // Get user details from localStorage (e.g., username)
  const token = localStorage.getItem('token');
  if (!token) {
    window.location.href = 'login.html'; // Redirect to login if not logged in
  } else {
    const user = JSON.parse(atob(token.split('.')[1])); // Decode JWT to get user info
    document.getElementById('username').textContent = user.username; // Display username

    // Fetch movies from backend
    fetch('http://localhost:5000/api/movies')
      .then(response => response.json())
      .then(movies => {
        const movieListContainer = document.querySelector('.movie-list');
        movies.forEach(movie => {
          const movieElement = document.createElement('div');
          movieElement.classList.add('movie-item');
          movieElement.innerHTML = `
            <h3>${movie.title}</h3>
            <img src="${movie.image}" alt="${movie.title}" />
            <button onclick="viewMovieDetails('${movie._id}')">View Details</button>
          `;
          movieListContainer.appendChild(movieElement);
        });
      })
      .catch(error => console.error('Error fetching movies:', error));
  }
});

function viewMovieDetails(movieId) {
  // Navigate to movie details page
  localStorage.setItem('movieId', movieId);
  window.location.href = 'movieDetails.html';
}
// script.js
document.addEventListener('DOMContentLoaded', () => {
  const movieId = localStorage.getItem('movieId');

  fetch(`http://localhost:5000/api/movies/${movieId}`)
    .then(response => response.json())
    .then(movie => {
      document.getElementById('movieTitle').textContent = movie.title;
      document.getElementById('moviePoster').src = movie.image;
      document.getElementById('movieDescription').textContent = movie.description;
      const showtimesContainer = document.getElementById('showtimes');
      movie.showtimes.forEach(showtime => {
        const showtimeButton = document.createElement('button');
        showtimeButton.textContent = showtime;
        showtimeButton.onclick = () => selectShowtime(showtime);
        showtimesContainer.appendChild(showtimeButton);
      });
    });
});

function selectShowtime(showtime) {
  localStorage.setItem('selectedShowtime', showtime);
  window.location.href = 'seatSelection.html';
}
// script.js (Add the following code for seat selection)
document.addEventListener('DOMContentLoaded', () => {
  const seatsContainer = document.getElementById('seatsContainer');
  const proceedButton = document.getElementById('proceedToPayment');
  
  // Example seat layout: 5 rows and 8 columns
  const rows = 5;
  const cols = 8;

  // Generate seats
  for (let row = 0; row < rows; row++) {
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('seat-row');
    
    for (let col = 0; col < cols; col++) {
      const seatButton = document.createElement('button');
      seatButton.classList.add('seat');
      seatButton.dataset.seat = `${row}-${col}`; // Store seat position
      seatButton.textContent = `${row + 1}-${col + 1}`; // Label seat with row-column
      seatButton.onclick = () => toggleSeatSelection(seatButton);
      rowDiv.appendChild(seatButton);
    }
    
    seatsContainer.appendChild(rowDiv);
  }

  function toggleSeatSelection(seatButton) {
    // Toggle seat selection (highlight or unhighlight)
    seatButton.classList.toggle('selected');

    // Enable or disable the proceed button depending on seat selection
    const selectedSeats = document.querySelectorAll('.seat.selected');
    proceedButton.disabled = selectedSeats.length === 0;
  }

  proceedButton.addEventListener('click', () => {
    // Store the selected seats and move to payment page
    const selectedSeats = Array.from(document.querySelectorAll('.seat.selected'))
      .map(seat => seat.dataset.seat);
    
    localStorage.setItem('selectedSeats', JSON.stringify(selectedSeats));
    window.location.href = 'payment.html'; // Redirect to payment page
  });
});
// script.js (Add the following code for payment)
document.getElementById('paymentForm').addEventListener('submit', async (event) => {
  event.preventDefault();

  const cardNumber = document.getElementById('cardNumber').value;
  const expiryDate = document.getElementById('expiryDate').value;
  const cvv = document.getElementById('cvv').value;
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

  if (!cardNumber || !expiryDate || !cvv || selectedSeats.length === 0) {
    alert('Please complete all fields and select seats!');
    return;
  }

  // Simulate the payment process
  alert('Payment Successful! Your tickets are booked.');

  // Send a POST request to the backend (if needed)
  const response = await fetch('http://localhost:5000/api/payment', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ selectedSeats, cardNumber, expiryDate, cvv }),
  });

  if (response.ok) {
    // After successful payment, redirect to confirmation page
    window.location.href = 'confirmation.html';
  } else {
    alert('Payment failed! Please try again.');
  }
});
// script.js (Add the following code for confirmation)
document.addEventListener('DOMContentLoaded', () => {
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
  const selectedSeatsList = document.getElementById('selectedSeatsList');

  if (selectedSeats.length > 0) {
    selectedSeatsList.textContent = selectedSeats.join(', ');
  } else {
    selectedSeatsList.textContent = 'No seats selected';
  }
});
