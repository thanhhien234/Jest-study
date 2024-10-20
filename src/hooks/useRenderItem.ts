import supabase from "../supabaseClient";
import useItemsStore from "../store/useItemsStore";

function useRenderItem() {
    const {setItems} = useItemsStore();

    const getDatas = async () => {
        const { data, error } = await supabase
            .from('todolist')
            .select()
            .order('created_at', { ascending: true });

        if (error) {
            alert(`Error: ${error.message}`);
            return;
        }
            
        setItems(data);
    }

    return {
        getDatas
    }
}

export default useRenderItem;