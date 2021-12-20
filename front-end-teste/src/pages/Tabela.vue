<template>
  <div class="q-pa-md">
    <q-table
      class="my-sticky-header-table"
      title="Treats"
      :rows="rows"
      :columns="columns"
      row-key="name"
      flat
      bordered
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="Tarefa" :props="props">
            {{ props.row.TAREFA }}
          </q-td>
          <q-td key="Vencido" @click="drillFilter(props.row.DRILLDOWN, )" :props="props">
            {{ props.row.VENCIDO }}
          </q-td>
          <q-td key="D0" :props="props" style="background-color:#f96585">
              {{ props.row.D0 }}
          </q-td>
          <q-td key="D1" :props="props" style="background-color:#f98585">
              {{ props.row.D1 }}
          </q-td>
          <q-td key="D2" :props="props" style="background-color:#f9a385">
              {{ props.row.D2 }}
          </q-td>
          <q-td key="D3" :props="props" style="background-color:#f9a100">
              {{ props.row.D3 }}
          </q-td>
          <q-td key="TOTAL" :props="props">
              {{ props.row.TOTAL }}
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
  <div>
    <q-table
      class="my-sticky-header-table"
      title="Treats"
      :rows="drilldownRow"
      :columns="drilldownColumn"
      row-key="name"
      flat
      bordered
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="INSTANCIA" :props="props">
            {{ props.row.TAREFA }}
          </q-td>
          <q-td key="STATUS" @click="drillFilter(props.row.DRILLDOWN, )" :props="props">
            {{ props.row.VENCIDO }}
          </q-td>
          <q-td key="PROTOCOLO" :props="props" style="background-color:#f96585">
              {{ props.row.D0 }}
          </q-td>
          <q-td key="REGUA" :props="props" style="background-color:#f98585">
              {{ props.row.D1 }}
          </q-td>
          <q-td key="inicio" :props="props" style="background-color:#f9a385">
              {{ props.row.D2 }}
          </q-td>
          <q-td key="SLA" :props="props" style="background-color:#f9a100">
              {{ props.row.D3 }}
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      columns: [
        {
          name: 'Tarefa',
          required: true,
          label: 'Tarefa',
          align: 'left',
          field: row => row.TAREFA,
          format: val => `${val}`
        },
        { name: 'Vencido', align: 'center', label: 'Vencido', field: 'VENCIDO' },
        { name: 'D0', label: 'D0', field: 'D0' },
        { name: 'D1', label: 'D1', field: 'D1' },
        { name: 'D2', label: 'D2', field: 'D2' },
        { name: 'D3', label: 'D3', field: 'D3' },
        { name: 'TOTAL', label: 'Total', field: 'TOTAL' }
      ],
      rows: [],
      drilldownColumn: [
        {
          name: 'INSTANCIA',
          required: true,
          label: 'INSTANCIA',
          align: 'left',
          field: row => row.INSTANCIA,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'STATUS', align: 'center', label: 'STATUS', field: 'STATUS' },
        { name: 'PROTOCOLO', label: 'PROTOCOLO', field: 'PROTOCOLO' },
        { name: 'REGUA', label: 'REGUA', field: 'REGUA' },
        { name: 'inicio', label: 'inicio', field: 'inicio' },
        { name: 'SLA', label: 'SLA', field: 'SLA' }
      ],
      drilldownRow: []
    }
  },
  methods: {
    drillFilter (row) {
      console.log(row)
    }
  },
  async mounted () {
    const response = await axios.get('https://ico-fullstack-test.herokuapp.com/v1/histograma')
    this.rows = response.data
  }
}
</script>
