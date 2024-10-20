import supabase from "../supabaseClient";
import useRenderItem from "./useRenderItem";

function useCheckTodo(){
    const { getDatas } = useRenderItem();

    const checkTodo = async (id: number, current: boolean) => {
        const { error } = await supabase
            .from('todolist')
            .update({ isCompleted: !current })
            .eq('id', id);

        if (error) {
           alert(`Error: ${error.message}`);
            return;
        }
        getDatas();
    }

    return {
        checkTodo
    }
}

export default useCheckTodo;