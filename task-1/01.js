const tasks = [
    
    {id: 234, title: 'Create user registration API', timeSpent: 4, category: 'Backend', type: 'task'},
    
    {id: 235, title: 'Create user registration UI', timeSpent: 8, category: 'Frontend', type: 'task'},
    
    {id: 237, title: 'User sign-in via Google UI', timeSpent: 3.5, category: 'Frontend', type: 'task'},
    
    {id: 238, title: 'User sign-in via Google API', timeSpent: 5, category: 'Backend', type: 'task'},
    
    {id: 241, title: 'Fix account linking', timeSpent: 5, category: 'Backend', type: 'bug'},
    
    {id: 250, title: 'Fix wrong time created on new record', timeSpent: 1, category: 'Backend', type: 'bug'},
    
    {id: 262, title: 'Fix sign-in failed messages', timeSpent: 2, category: 'Frontend', type: 'bug'},
    
];


const frontTimeSpent = tasks.reduce((acc, elem) => elem.category==='Frontend' ? acc + elem.timeSpent :acc,0)
console.log('Общее количество времени, затраченное на работу над задачами из категории Frontend ' + frontTimeSpent);

const bugTimeSpent = tasks.reduce((acc, elem) => elem.type==='bug' ? acc + elem.timeSpent :acc,0);
console.log('Общее количество времени, затраченное на работу над задачами типа  bug ' + bugTimeSpent);

const uiTask = tasks.reduce((acc, elem) => elem.title.includes('UI') ? acc + 1: acc, 0);
console.log ('Количество задач, имеющих в названии слово UI ' + uiTask);


const totalCat = tasks.reduce((acc, elem) => {
    acc[elem.category] = (acc[elem.category] || 0) + 1;
    return acc;
}, {});

console.log('Количество задач каждой категории в объект вида:')
console.log(totalCat);

const timeMoreFour = tasks.filter(elem => elem.timeSpent > 4).map(obj => {
    return ({title: obj.title, category: obj.category});
});
console.log(timeMoreFour);