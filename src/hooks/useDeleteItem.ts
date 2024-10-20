import supabase from "../supabaseClient";
import useRenderItem from "./useRenderItem";

function useDeleteItem() {
    const { getDatas } = useRenderItem();

    const deleteTodo = async (id: number) => {
        const { error } = await supabase
            .from('todolist')
            .delete()
            .eq('id', id);

        if (error) {
            alert(`Error: ${error.message}`);
            return;
        }

       getDatas();
    }

    return {
        deleteTodo
    };
}

export default useDeleteItem;
