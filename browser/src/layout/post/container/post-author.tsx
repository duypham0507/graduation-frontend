import { useEffect, useState } from "react";
import { getPostFilter } from "services/post";

interface IProps {
    author_id:number
}
  
export const PostAuthorCtn = (props:IProps) => {
    const [listPost, setListPost] = useState<any>([])
    useEffect(() => {
        const init = async () => {
          let param:any = {};
          param.authorId = props.author_id
          await getPostFilter(param).then(rs => {
            setListPost(rs.data.data.data);
          })
        };
        init()
    },[props.author_id])
    console.log('232ds',listPost);
    
    return <div className="w-full">
      <div className="border-b-[2px] mb-6">
        <h2 className="font-bold not-italic pb-4 text-2xl">Cùng tác giả</h2>
      </div>
      <div className="w-full flex-grow-limit scrollable-view flex flex-row flex-wrap">
        {listPost.map(item => <div className="w-1/2 md:w-1/3 xxl:w-1/4 xlHDP:w-1/5 xlPHD:w-1/6 max-h-[318px] pl-4 mb-2 relative bg-transparent item-program group">
          <div className="bg-cover h-auto w-full rounded-xl overflow-hidden mx-auto my-0">
            <img src="/assets/images/img/header-img.jpg" alt="" className="h-auto w-full"/>
          </div>
          <div className="text-left pt-2 pb-5 w-full">
            <h3 className="font-bold text-lg my-[0.1rem]">{item.title}</h3>
            <span className="my-[0.1rem] text-base">
                {item.search.length > 200 ? item.search.split(" ").slice(0,17).join(" ") + "..." : item.search}
            </span>
          </div>
        </div>)}
      </div>
    </div>
}