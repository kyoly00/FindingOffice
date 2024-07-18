let count = 1;
document.addEventListener('DOMContentLoaded', function () {
    const addAddressButton = document.getElementById('addAddressButton');
    const addressInputs = document.getElementById('addressInputs');

    addAddressButton.addEventListener('click', function () {
        count++;
        const addressGroup = document.createElement('div');
        addressGroup.classList.add('address-group');

        const newAddressInput = document.createElement('input');
        newAddressInput.type = 'text';
        newAddressInput.name = 'address' + count;
        newAddressInput.placeholder = '주소 또는 이메일';
        newAddressInput.classList.add('form-control');
        newAddressInput.required = true;

        const newPeopleInput = document.createElement('input');
        newPeopleInput.type = 'number';
        newPeopleInput.name = 'people' + count;
        newPeopleInput.placeholder = '인원 수';
        newPeopleInput.classList.add('form-control');
        newPeopleInput.min = '1';
        newPeopleInput.required = true;

        addressGroup.appendChild(newAddressInput);
        addressGroup.appendChild(newPeopleInput);
        addressInputs.appendChild(addressGroup);
    });
});