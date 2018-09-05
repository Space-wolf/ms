<template>
    <div id="site">
        <div class="promt">
            <i class="el-icon-warning"></i>
            <span>使用Liunx面板创建站点时会自动创建权限配置，统一使用www用户。</span>
        </div>
        <el-row>
            <el-button type="primary">添加站点</el-button>
            <el-button type="primary" plain>默认修改页</el-button>
            <el-button type="primary" plain>默认站点</el-button>
        </el-row>
        <el-table :data="tableData" style="width: 100%;border: 1px solid #eee">
            <el-table-column label="域名" width="320">
                <template slot-scope="scope">
                    <a href="javascript:" style="margin-left: 10px">{{ scope.row.ps }}</a>
                </template>
            </el-table-column>
            <el-table-column label="网站状态" width="200">
                <template slot-scope="scope">
                    <a href="javascript:" title="停用这个站点">{{ scope.row.domain ==2 ? "运行中":"以静止" }}</a>
                </template>
            </el-table-column>
            <el-table-column label="备份" width="160">
                <template slot-scope="scope">
                    <a href="javascript:">{{ scope.row.backup_count }}</a>
                </template>
            </el-table-column>
            <el-table-column label="网站目录" width="550">
                <template slot-scope="scope">
                    <a href="javascript:" title="打开目录">{{ scope.row.path }}</a>
                </template>
            </el-table-column>
            <el-table-column label="备注" width="250">
                <template slot-scope="scope">
                    <a href="javascript:">{{ scope.row.name }}</a>
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button type="text">设置</el-button>
                    <el-button type="text">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'site',
  data () {
    return {
      tableData: []
    }
  },
  created () {
    this.getSiteData()
  },
  methods: {
    getSiteData () {
      axios
        .get(
          'https://www.easy-mock.com/mock/5af85c840bbe856d3e2d66e5/example/site'
        )
        .then(data => {
          this.tableData = data.data.data
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>
#site {
  background: #fff;
  margin-top: 20px;
  padding: 15px;
}
.promt {
  height: 38px;
  line-height: 38px;
  background: #fbfbfb;
  border: 1px solid #eee;
}
.promt span {
  padding-left: 10px;
}
.el-row {
  margin: 15px 0;
}
</style>
