import { useState } from "react";
import supabase from "../supabaseClient";
import useSelectedItem from "../store/useSelectedItem";
import useRenderItem from "./useRenderItem";

function useModifyItem() {
  const { selectedItem} = useSelectedItem();
  const [newContent, setNewContent] = useState(selectedItem.content);
  const { getDatas } = useRenderItem();

  const modifyToDo = async (newContent: string) => {
    const { error } = await supabase
      .from('todolist')
      .update({ content: newContent })
      .eq('id', selectedItem.id);

    if (error) {
      alert(`Error: ${error.message}`);
      return;
    }
    alert('수정되었습니다.');
    getDatas();
  }

    return {
        modifyToDo,
        newContent,
        setNewContent
    }
}

export default useModifyItem;