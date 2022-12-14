import { Button, Input, Select } from "antd";
import { HeaderLayout } from "header/header-layout";
import Editor from "components/editor";
import { useCallback, useState, useEffect } from 'react';
import { createPost } from "services/post";
import { useHistory } from "react-router-dom";
import { getTag } from "services/tag";

const { TextArea } = Input;
const { Option } = Select;
export const CUPostsComponent = () => {
  let history = useHistory();
  const [content, setContent] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [listTag, setListTag] = useState<any>([]);
  useEffect(() => {
    const init = async () => {
      await getTag().then((rs) => {
        setListTag(rs.data.data);
      });
    };
    init();
  }, []);

  const handleUpdateContent = useCallback(
    (data: string) => {
      setContent(data);
    },
    [content]
  );

  const handleUploadPost = useCallback(async () => {
    console.log({
      title: title,
      content: content,
      tags: [2, 5, 59],
    });

    try {
      // Todo upload post handle fail or succeed
      // Title need to be unique
      const rs = await createPost({
        title: title,
        content: content,
        tags: [2, 5, 59],
      });
      console.log(rs);
      rs.data.message == "Ok" && history.push("/home");
    } catch (e) {
      console.log(e);
    }
  }, [content, title]);
  console.log('1',listTag);
  
  return (
    <div className="w-full h-full flex flex-col relative">
      <div className="z-50">
        <HeaderLayout />
      </div>
      <div className="pt-4 px-4 flex flex-col w-full h-full mb-16 overflow-auto items-center flex-grow-limit">
        <div className="flex flex-col w-2/3 h-full">
          <div className="flex flex-row w-full justify-center">
            <div className="w-[260px] h-[150px] border-[1px] flex-none">
              <img src="" alt="" />
            </div>
            <div className="flex flex-col w-full ml-4">
              <div className="w-full h-10 mb-5 flex flex-row items-center">
                <span className="w-[100px]">Ti??u ?????: </span>
                <Input
                  className=""
                  placeholder="Ti??u ?????"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                />
              </div>
              <div className="w-full h-10 mb-5 flex flex-row items-center">
                <span className="w-[100px]">G???n th???: </span>
                <Select
                  mode="multiple"
                  allowClear
                  style={{ width: "100%" }}
                  placeholder="G???n th??? b??i vi???t c???a b???n. T???i ??a 3 th???. ??t nh???t 1 th???!"
                  onChange={() => {}}
                >
                  {listTag.length > 0 && listTag.map((item) => <Option key={item.id_tag} value={item.id_tag}>{item.tag_name}</Option>)}
                </Select>
              </div>
            </div>
          </div>
          <div className="w-full h-10 my-4 flex flex-col items-start">
            <span className="w-[100px]">N???i dung: </span>
            <div className="flex flex-row h-[300px] max-h-[500px]">
              <Editor data={content} setData={handleUpdateContent} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[60px] absolute bottom-0 right-0 p-4 border-t">
        <div className="flex flex-row items-center justify-end">
          <button className="mr-2">H???y</button>
          <Button onClick={handleUploadPost}>Xu???t b???n</Button>
        </div>
      </div>
    </div>
  );
};
