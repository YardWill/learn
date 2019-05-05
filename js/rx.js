const {
  Observable, Subject, ReplaySubject, from, of, range,
} = require('rxjs');
const { map, filter, switchMap } = require('rxjs/operators');


// range(1, 4)
//   .pipe(filter(x => x % 2 === 1), filter(x => x % 2 === 1), map(x => x + x), map(x => x + x + 1))
//   .subscribe(x => console.log(x));
// const obj = {};
// of(obj).subscribe(x => console.log(x));

// obj.a = 1;

// const createTodo = new Subject();

// createTodo.subscribe(() => {
//   console.log(obj);
// });

// createTodo.next();


const stream$ = Observable.create((observer) => {
  observer.next(1);
});

stream$.subscribe();
