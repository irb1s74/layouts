import { validateForms } from '../functions/validate-forms';

const rules = [
    {
        ruleSelector: '.input-name',
        rules: [
            {
                rule: 'minLength',
                value: 3
            },
            {
                rule: 'required',
                value: true,
                errorMessage: 'Заполните имя!'
            }
        ]
    },
    {
        ruleSelector: '.input-tel',
        tel: true,
        telError: 'Введите корректный телефон',
        rules: [
            {
                rule: 'required',
                value: true,
                errorMessage: 'Заполните телефон!'
            }
        ]
    },
    {
        ruleSelector: '.input-mail',
        telError: 'Введите корректный телефон',
        rules: [
            {
                rule: 'required',
                value: true,
                errorMessage: 'Заполните почту!'
            },
            {
                rule: 'email',
                value: true,
                errorMessage: 'Введите корректную почту!'
            }
        ]
    },
];

const afterForm = () => {
    console.log('Произошла отправка, тут можно писать любые действия');
};

validateForms('.offer__form', rules, afterForm);