const Student = [
    {name: 'Nguyen Trung Kien ', edu:'React-Native'},
    {name: 'Nguyen Trung Dung ', edu:'Swift'},
    {name: 'Nguyen Trung Nam ', edu:'ReactJS'}
];


export default () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(Student)
    }, 3000)
  })
}