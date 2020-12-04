<template>
  <div class="pagination">
    <button
      :disabled="mycurrentPage <= 1"
      @click="setCurrentPage(mycurrentPage - 1)"
    >
      上一页
    </button>
    <button :class="{ active: mycurrentPage === 1 }" @click="setCurrentPage(1)">
      1
    </button>
    <!-- 判断startEnd.start是否大于如果大于2就显示。。。r -->
    <button v-show="startEnd.start > 2">...</button>
    <button
      v-for="item in mapBtnCount"
      :key="item"
      @click="setCurrentPage(startEnd.start + item - 1)"
      :class="{ active: mycurrentPage === startEnd.start + item - 1 }"
    >
      <!-- 遍历需要的按钮 -->
      <!-- item里面是1，2，3，4，5 -->
      {{ startEnd.start + item - 1 }}
    </button>
    <!-- 如果startend.end小于总页数-1 。。。就存在 -->
    <button v-show="startEnd.end < totalPages - 1">...</button>
    <!-- 一旦总页数 totalPages大于1则显示中页码 -->
    <button
      v-show="totalPages > 1"
      :class="{ active: mycurrentPage === totalPages }"
      @click="setCurrentPage(totalPages)"
    >
      {{ totalPages }}
    </button>
    <!-- 当当前页码等于总页数页码后就disabled禁用按钮 -->
    <button
      :disabled="mycurrentPage >= totalPages"
      @click="setCurrentPage(mycurrentPage + 1)"
    >
      <!-- 点下一页就是让当前页码往下加一x -->
      下一页
    </button>
    <button>总数:{{ total }}</button>
  </div>
</template>

<script>
export default {
  name: 'pagination',
  props: {
    currentPage: {
      type: Number,
      default: 1,
    },
    pagerCount: {
      type: Number,
      validator(val) {
        // 验证，验证通过才会有用
        // 大于等于 5 且小于等于 21 的奇数
        // 返回true验证成功，
        // 返回false验证失败
        return val >= 5 && val <= 21 && val % 2 === 1
      },
      default: 7,
    },
    pageSize: {
      type: Number,
      default: 10,
    },
    total: {
      type: Number,
    },
  },
  data() {
    return {
      //为了方便修改mycurrentPage,定义data数据
      //原因：props的数据不能直接修改
      mycurrentPage: this.currentPage,
    }
  },
  watch: {
    //每次当前页码发生变化就重新加载数据
    mycurrentPage(currentPage) {
      this.$emit('current-change', currentPage)
    },
    currentPage(currentPage) {
      this.mycurrentPage = currentPage
    },
  },
  computed: {
    //求得总页数
    totalPages() {
      //向上取整用 total除以 每页条数
      return Math.ceil(this.total / this.pageSize)
    },
    startEnd() {
      //解构赋值得到当前页码，显示按钮的数量，和总页数
      const { mycurrentPage, pagerCount, totalPages } = this
      //按照element的例子 一半呢页码样式为1...34567...10 的样式 中间省略 只显示7位数
      //获取中间按钮的数量start（3）-end(7)的按钮数量
      const count = pagerCount - 2

      //取中间的一半 用来判断start和end的值
      const halfCount = Math.floor(count / 2)
      let start, end
      //当当前被选中页码 大于或等于总页数-中间按钮一半的数量
      //那中间按钮的开始位置就是总页数减去中间按钮的个数
      //例如 1...56789 10 当当前页码为8或9时，也就是总数前2位时，会乱之前的 只显示7位数或者9位数或者xx
      //并且以中间的第一个按钮为开头的规则所以当其情况发生直接给我 start重新赋值
      if (mycurrentPage >= totalPages - halfCount) {
        start = totalPages - count
      } else {
        //如果不是上面情况start就正常为省略号后或1之后第一个数
        start = mycurrentPage - halfCount
      }
      //如果start数为1则自动赋值为2

      if (start <= 1) {
        start = 2
      }
      //end等于 start加上count 1...34567...10 end等于3+5-1=7
      end = start + count - 1
      //如果end的值大于总页数 则直接赋值为总页数减一
      //因为总页数是会显示的end不能等于或大于它
      if (end >= totalPages) {
        end = totalPages - 1
      }

      return {
        //返回start和end
        start,
        end,
      }
    },
    //需要遍历的按钮数量
    mapBtnCount() {
      //解构出来start页码，和end页码
      const { start, end } = this.startEnd
      //用end页码减去start+1得到的就是需要遍历出来的中间按钮的个数
      //1...34567...10  7-3+1=5 对应中间的5个按钮
      const count = end - start + 1
      return count >= 1 ? count : 0
    },
  },
  methods: {
    //点击按钮重新赋值当前页码
    setCurrentPage(currentPage) {
      this.mycurrentPage = currentPage
    },
  },
}
</script>

<style lang='less' scoped>
.pagination {
  display: flex;
  white-space: nowrap;
  font-weight: 700;
  button {
    margin: 0 5px;
    padding: 0 4px;
    font-size: 13px;
    min-width: 30px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: none;
    outline: none;
    display: block;
    background-color: #f4f4f5;
    color: #606266;
    border-radius: 2px;
  }
}

button.active {
  background-color: #409eff;
  color: #fff;
}
</style>