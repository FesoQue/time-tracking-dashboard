const buttons = document.querySelectorAll('.btn');

const fetchData = async () => {
  const response = await fetch('data.json');
  const newRes = await response.json();
  handleUserActivity(newRes);
};

const handleUserActivity = (activities) => {
  let cards = activities.map((activity) => {
    return `
          <div class="activity-card">
            <div class="card">
            
             <!-- Daily activities card -->
              <div class="info active daily">            
                <div class="title">
                <p>${activity.title}</p>
                  <img src="./images/icon-ellipsis.svg" alt="ellipsis" />
                </div>
                <!-- timeframes -->
                <div class="timeframe">
                  <h2>${activity.timeframes.daily.current}hrs</h2>
                  <p>Last Week - ${activity.timeframes.daily.previous}hrs</p>
                </div>
              </div>

             <!-- Weekly activities card -->
              <div class="info weekly">            
                <div class="title">
                <p>${activity.title}</p>
                  <img src="./images/icon-ellipsis.svg" alt="ellipsis" />
                </div>
                <!-- timeframes -->
                <div class="timeframe">
                  <h2>${activity.timeframes.weekly.current}hrs</h2>
                  <p>Last Week - ${activity.timeframes.weekly.previous}hrs</p>
                </div>
              </div>

             <!-- Monthly activities card -->
              <div class="info monthly">            
                <div class="title">
                <p>${activity.title}</p>
                  <img src="./images/icon-ellipsis.svg" alt="ellipsis" />
                </div>
                <!-- timeframes -->
                <div class="timeframe">
                  <h2>${activity.timeframes.monthly.current}hrs</h2>
                  <p>Last Week - ${activity.timeframes.monthly.previous}hrs</p>
                </div>
              </div>
            </div>
          </div>
    `;
  });
  const wrapper = document.querySelector('.activity');
  cards = cards.join('');
  wrapper.innerHTML = cards;
};

buttons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if (id) {
      buttons.forEach((button) => {
        button.classList.remove('active');
      });
      e.target.classList.add('active');

      const contents = document.querySelectorAll('.info');

      contents.forEach((content) => {
        content.classList.remove('active');
      });
      const timeframes = document.getElementsByClassName(id);
      for (let i = 0; i < timeframes.length; i++) {
        let el = timeframes[i];
        el.classList.add('active');
      }
    }
  });
});
window.addEventListener('DOMContentLoaded', () => {
  fetchData();
});
