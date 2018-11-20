export const getFormData = (text,time) => {
    if(text.value && time.value) return {text:text.value,time:time.value,done:false}
    return alert(!text.value ? 'Заполните поле задачи!' : 'Заполните поле даты!')
}