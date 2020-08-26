import WorkoutStore from "../container/workout/store";

describe('Store AddWorkout Test', () => {
    const store = new WorkoutStore()

    test('test empt values', () => {
        store.AddWorkout();
        expect(store.countExercise).toBe(0);
        expect(store.exercise).toBe('');
    });

    test('test exercise is empty', () => {
        store.AddWorkout();
        store.time = 5
        expect(store.countExercise).toBe(0);
        expect(store.exercise).toBe('');
    });

    test('test exerciseDate is empty', () => {
        store.AddWorkout();
        store.exercise = 'bike'
        store.time = 5
        expect(store.exercise).toBe('bike');
        expect(store.time).toBe(5)
        expect(store.exerciseDate).toBe(null)
        expect(store.exerciseListTable).toEqual([])
    });

    test('test correct values', () => {
        store.exercise = 'run'
        store.time = 1
        store.exerciseDate = new Date()
        store.AddWorkout();
        expect(store.exercise).toBe('run');
        expect(store.time).toBe(1)
        expect(store.exerciseListTable.length).toBe(1)
        expect(store.countExercise).toBe(1)
    });
})

