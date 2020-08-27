import { observable, action } from 'mobx';
import moment from 'moment-timezone';
import Swal from 'sweetalert2';



export default class WorkoutStore {
    @observable exerciseList = [
        { key: 0, text: 'Selecione', value: '' },
        { key: 1, text: 'Corrida', value: 'Corrida' },
        { key: 2, text: 'Bicicleta', value: 'Bicicleta' },
        { key: 3, text: 'Natação', value: 'Natação' },
        { key: 4, text: 'Basquete', value: 'Basquete' },
        { key: 5, text: 'Luta', value: 'Luta' }
    ];

    @observable time = 0;
    @observable exercise = '';
    @observable exerciseDate: moment.Moment | any = null;

    @observable exerciseListTable: any[] = [];
    @observable exerciseListTableCopy: any[] = [];

    @observable countExercise = 0;
    @observable countTime = 0;



    @action handleDate = (date: Date | null) => {
        this.exerciseDate = date;
    };

    @action handleForm = async (event: any, subevent?: any) => {
        const { id, value } = subevent || event.target;
        this[id] = value;
    };

    @action handleExerciseList = (_e: any, sub: any) => {
        this.exercise = sub.value;
    };

    @action addWorkout = async () => {
        const { time, exercise, exerciseDate } = this;
        if (time <= 0 || exercise === null || exerciseDate === null) {
            Swal.fire({
                title: 'Atenção!',
                text: 'Valide o preenchimento correto dos campos',
                icon: 'warning',
                confirmButtonText: 'Fechar'
            });
            return;
        } else {
            this.countExercise = this.countExercise + 1;
            this.exerciseListTable.push({ id: this.countExercise, time: time, exercise: exercise, exerciseDate: exerciseDate });
            this.updateWorkout({ id: this.countExercise, time, exercise, exerciseDate }, 'add');
        }
    }

    @action removeWorkout = async (item: any) => {
        Swal.fire({
            title: 'Atenção!',
            text: 'Deseja deletar o registro?',
            showCancelButton: true,
            confirmButtonText: 'Confirmar',
            showLoaderOnConfirm: true,
        }).then((result) => {
            if (result.value) {
                const rmWorkout = this.exerciseListTable.splice(this.exerciseListTable.findIndex(a => a.id === item), 1);
                this.updateWorkout(rmWorkout, 'remove');
            }
        })
    }

    @action filterWorkout = async () => {
        const { exercise, time, exerciseDate } = this;
        if (time > 0 && exercise != null && exerciseDate != null) {
            Swal.fire({
                title: 'Atenção!',
                text: 'O filtro de busca é realizado individualmente',
                icon: 'warning',
                confirmButtonText: 'Fechar'
            });
            return;
        }
        
        if (this.exerciseListTableCopy.length === 0) {
            Swal.fire({
                title: 'Não há registros',
                icon: 'info',
                confirmButtonText: 'Fechar'
            });
            return;
        }

        if (exercise || time || exerciseDate) {
            this.exerciseListTable = this.exerciseListTable.filter((filter) => {
                if (filter.exercise === exercise) {
                    return filter;
                }
                if (filter.time === time) {
                    return filter;
                }
                if (filter.exerciseDate === exerciseDate) {
                    return filter;
                }

            });

        }
        else this.updateWorkout();
    }

    @action updateWorkout = async (workout?: any, type?: string) => {
        if (type === 'add') {
            this.sumTimeWorkout();
            return this.exerciseListTableCopy.push(workout);
        }
        if (type === 'remove') {
            this.sumTimeWorkout();
            return this.exerciseListTableCopy.splice(this.exerciseListTableCopy.findIndex(a => a.id === workout.id), 1);
        }
        this.exerciseListTable = [];
        this.exerciseListTable = this.exerciseListTable.concat(this.exerciseListTableCopy);
    }

    @action sumTimeWorkout = async () => {
        this.countTime = this.exerciseListTable.reduce((sum, item) => { return sum + Number(item.time) }, 0);
    }
}
const workout = new WorkoutStore();
export { workout };
