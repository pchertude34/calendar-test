document.addEventListener('DOMContentLoaded', function () {

  const addDateButton = document.getElementById('add-date-button');
  addDateButton.addEventListener('click', addDatePickerToForm);
});


function addDatePickerToForm(event) {

  event.preventDefault();
  console.log('date p8icker adding');
  const formDateContainer = document.getElementById('date-input-container');
  const existingDatePickerCount = formDateContainer.children.length;

  if (existingDatePickerCount >= 3) return;

  const dateInputGroup = document.createElement('fieldset');
  dateInputGroup.classList.add('cs-date-input-group');
  // dateInputGroup.name = `date-${existingDatePickerCount + 1}`;

  // create the date label and input
  const dateLabel = document.createElement('label');
  dateLabel.classList.add('cs-label');

  const dateInput = document.createElement('input');
  dateInput.classList.add('cs-input');
  dateInput.type = 'date';
  dateInput.name = `date-${existingDatePickerCount + 1}`;
  // Set the minimum date to today
  dateInput.min = new Date().toISOString().split('T')[0];

  dateLabel.appendChild(dateInput);

  // create the time select label and input
  const timeLabel = document.createElement('label');
  timeLabel.classList.add('cs-label');

  const timeInput = document.createElement('select');
  timeInput.classList.add('cs-select');
  timeInput.name = `time-${existingDatePickerCount + 1}`;

  const morningOption = document.createElement('option');
  morningOption.value = 'morning';
  morningOption.textContent = 'Morning';
  timeInput.appendChild(morningOption);

  const afternoonOption = document.createElement('option');
  afternoonOption.value = 'afternoon';
  afternoonOption.textContent = 'Afternoon';
  timeInput.appendChild(afternoonOption);

  timeLabel.appendChild(timeInput);

  // put it all together
  dateInputGroup.appendChild(dateLabel);
  dateInputGroup.appendChild(timeLabel);

  formDateContainer.appendChild(dateInputGroup);

  if (formDateContainer.children.length >= 3) {
    addDateButton.disabled = true;
  }
}

