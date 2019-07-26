#pragma strict

 class MyWindow extends EditorWindow
 {
 	var textField = "Hello World";
 	var boolValue = true;
 	var toggleGroup = false;
 	
 	var minValue0 = 0.0;
 	var maxValue0 = 10.0;
 	var minValue1 = 0.0;
 	var maxValue1 = 10.0;
 	
 	@MenuItem("Window/My Window")
 	static function ShowWindow()
 	{
 		EditorWindow.GetWindow( MyWindow );
 	}
 	
 	function OnGUI()
 	{
 		GUILayout.Label( "Base Settings" );
 		textField = EditorGUILayout.TextField( "Text Field", textField );	
 		boolValue = EditorGUILayout.Toggle( "Toggle", boolValue );
 		
 		EditorGUILayout.Separator();
 		
 		GUILayout.Label( "Secondary Settings" );
 		EditorGUILayout.MinMaxSlider( GUIContent("Range"), minValue0, maxValue0, 0.0, 10.0 );
 		
 		GUILayout.BeginHorizontal();
 		EditorGUILayout.PrefixLabel( "Button" );
 		GUILayout.Button( "Press Me!" );
 		GUILayout.EndHorizontal();
 		
 		toggleGroup = EditorGUILayout.BeginToggleGroup("Toggle Group", toggleGroup );
 		if ( toggleGroup )
 		{
	 		EditorGUILayout.MinMaxSlider( GUIContent("Range"), minValue1, maxValue1, 0.0, 10.0 );
	 		
	 		GUILayout.BeginHorizontal();
	 		EditorGUILayout.PrefixLabel( "Button" );
	 		GUILayout.Button( "Press Me!" );
	 		GUILayout.EndHorizontal();
	 	}
	 	EditorGUILayout.EndToggleGroup();
 			
 	}
 }