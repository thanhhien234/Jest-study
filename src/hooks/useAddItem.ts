import { useState } from "react";
import supabase from "../supabaseClient";
import useRenderItem from "./useRenderItem";

function useAddItem() {
    const [todo, setTodo] = useState('');
    const { getDatas } = useRenderItem();

    const addTodo = async () => {
        if (!todo) return;

        const newItem = {
            content: todo,
            created_at: new Date().toISOString(),
            isCompleted: false,
        };
        
        const { error } = await supabase
            .from('todolist')
            .insert([newItem]);

        if (error) {
            alert(error.message);
            return;
        }

        setTodo('');
        getDatas();
    }

    return {
        todo,
        setTodo,
        addTodo
    }
}

export default useAddItem;