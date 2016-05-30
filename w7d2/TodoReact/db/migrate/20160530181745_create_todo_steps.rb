class CreateTodoSteps < ActiveRecord::Migration
  def change
    create_table :todo_steps do |t|
      t.string :body
      t.boolean :done, null: false, default: false

      t.timestamps null: false
    end
  end
end
