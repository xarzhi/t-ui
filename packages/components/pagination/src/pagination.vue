<template>
  <div class="t-pagination">
    <ul class="t-pagination-list">
      <li class="t-pagination-pre iconfont icon-arrow-left-bold t-pagination-item"></li>
      <li
        class="t-pagination-item"
        :class="{ 't-pagination-item__active': firstPage === currentPage }"
        @click="handleChangeCurrentPage(firstPage)"
      >
        {{ firstPage }}
      </li>
      <li class="t-pagination-item iconfont icon-elipsis-h " v-if="showFrontEllipsis"></li>
      <li
        v-for="page in centerPages"
        :key="page"
        class="t-pagination-item"
        :class="{ 't-pagination-item__active': page === currentPage }"
        @click="handleChangeCurrentPage(page)"
      >
        {{ page }}
      </li>
      <li class="t-pagination-item iconfont icon-elipsis-h " v-if="showEndEllipsis"></li>
      <li
        class="t-pagination-item"
        :class="{ 't-pagination-item__active': lastPage === currentPage }"
        @click="handleChangeCurrentPage(lastPage)"
      >
        {{ lastPage }}
      </li>
      <li class="t-pagination-next iconfont icon-arrow-right-bold t-pagination-item"></li>
    </ul>
  </div>
</template>

<script setup>
  import { PaginationProps } from "./pagination";
  import { computed, ref } from "vue";

  defineOptions({
    name: "t-pagination",
  });

  const props = defineProps(PaginationProps);

  // 根据总数和每页数量计算出页数
  const pageCount = computed(() =>
    [...Array(Math.ceil(props.total / props.pageSize)).keys()].map((i) => i + 1)
  );
  const currentPage = ref(5); // 当前页面
  const showFrontEllipsis = ref(false); // 是否显示前面的省略号
  const showEndEllipsis = ref(false); // 是否显示后面的省略号

  const firstPage = 1; // 第一页
  const lastPage = computed(() => pageCount.value.length); // 最后一页

  // 中间的页码
  const centerPages = computed(() => {
    const center = pageCount.value.slice(1, pageCount.value.length - 1);
    if (pageCount.value.length > 7) {
      if (currentPage.value === 1) {
        showFrontEllipsis.value = false;
        showEndEllipsis.value = true;
        return center.slice(0, 5);
      } else if (currentPage.value === lastPage.value) {
        showFrontEllipsis.value = true;
        showEndEllipsis.value = false;
        return center.slice(-5);
      } else if (center.indexOf(currentPage.value) < 3) {
        showFrontEllipsis.value = false;
        showEndEllipsis.value = true;
        return center.slice(0, 5);
      } else if (center.indexOf(currentPage.value) > center.length - 4) {
        showFrontEllipsis.value = true;
        showEndEllipsis.value = false;
        return center.slice(-5);
      } else {
        showFrontEllipsis.value = true;
        showEndEllipsis.value = true;
        const center = [
          currentPage.value - 2,
          currentPage.value - 1,
          currentPage.value,
          currentPage.value + 1,
          currentPage.value + 2,
        ];
        return center;
      }
    } else {
      return center;
    }
  });

  const handleChangeCurrentPage = (page) => {
    currentPage.value = page;
  };
</script>