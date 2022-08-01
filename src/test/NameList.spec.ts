import NamesList from "../components/NamesList.vue";
import { mount } from "@vue/test-utils";

test("display names in table", async () => {
  const sampleData = [{ name: "Name 1" }, { name: "Name 2" }];
  const wrapper = mount(NamesList, {
    props: { tableData: sampleData },
  });
  console.log(wrapper.html());
  expect(wrapper.html()).toContain("Name 1");
});
