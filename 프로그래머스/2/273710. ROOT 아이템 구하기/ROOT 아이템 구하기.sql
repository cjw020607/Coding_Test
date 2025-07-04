-- 코드를 작성해주세요
select item_id, item_name from item_info as i where (select parent_item_id from item_tree as t where i.item_id=t.item_id) is null order by item_id;