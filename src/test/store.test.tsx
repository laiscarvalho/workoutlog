import WorkoutStore from '../container/workout/store';
import Swal from 'sweetalert2';

describe('Store addWorkout Test', () => {
    const store = new WorkoutStore();

    test('test empt values', () => {
        store.addWorkout();
        expect(store.countExercise).toBe(0);
        expect(store.exercise).toBe('');
    });

    test('test exercise is empty', () => {
        store.addWorkout();
        store.time = 5;
        expect(store.countExercise).toBe(0);
        expect(store.exercise).toBe('');
    });

    test('test exerciseDate is empty', () => {
        store.addWorkout();
        store.exercise = 'bike';
        store.time = 5;
        expect(store.exercise).toBe('bike');
        expect(store.time).toBe(5);
        expect(store.exerciseDate).toBe(null);
        expect(store.exerciseListTable).toEqual([]);
    });

    test('test correct values', () => {
        store.exercise = 'run';
        store.time = 1;
        store.exerciseDate = new Date();
        store.addWorkout();
        store.time = 3;
        store.addWorkout();
        expect(store.exercise).toBe('run');
        expect(store.time).toBe(3);
        expect(store.exerciseListTable.length).toBe(2);
        expect(store.countExercise).toBe(2);
    });

    test('test filter', () => {
        store.time = 1;
        store.filterWorkout();
        expect(store.exerciseListTable.length).toBe(2);
        expect(store.countExercise).toBe(2);
    });
});
