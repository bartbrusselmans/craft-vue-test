import hyperform from 'hyperform';
import Ladda from 'ladda';

// Spinner button
Ladda.bind('button[type=submit]');

// Form validation
hyperform(window, {
	classes: {
		valid: 'input--valid',
		invalid: 'input--error',
		validated: 'input--validated',
		warning: 'input--warning',
	},
	validEvent: false
});

//	Extra validation for checkbox groups
const checkboxGroups = document.querySelectorAll('.checkbox-group');
// Get all items in checkboxgroups & set a global state per group
if (checkboxGroups.length) {
	Array.from(checkboxGroups).forEach(($group) => {
		const $inputs = Array.from($group.querySelectorAll('input[type="checkbox"]'));
		const $hiddenInput = $group.querySelector('input[type="text"]');
		const $inputValues = new Set();
		$group.addEventListener('change', () => {
			Array.from($inputs).forEach(($input) => {
				if ($input.checked) {
					$inputValues.add($input.value);
				} else {
					$inputValues.delete($input.value);
				}
			});
			const $valuesAsArray = Array.from($inputValues);
			$hiddenInput.value = $valuesAsArray;
			$hiddenInput.checkValidity();
		});
	});
}


// File Uploads
const fileUploads = document.querySelectorAll('.js-file-upload');
// Keep track of count for each file-Upload
if (fileUploads.length) {
	Array.from(fileUploads).forEach(($input) => {
		const $label = document.querySelector(`label[for="${$input.id}"].input__file-label`);
		const labelVal = $label.innerHTML;
		$input.addEventListener('change', (e) => {
			let fileName = '';
			// Set filename(s)
			if ($input.files && $input.files.length > 1) {
				fileName = ($input.getAttribute('data-multiple-caption') || '').replace('{count}', $input.files.length);
			} else if (e.target.value) {
				fileName = e.target.value.split('\\').pop();
			}
			// set html
			if (fileName) {
				$label.innerHTML = fileName;
			} else {
				$label.innerHTML = labelVal;
			}
		});
	});
}
