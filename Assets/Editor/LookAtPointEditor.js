#pragma strict

/**
 * This source file contains sample code from (accessed 4/12/2012):
 * http://docs.unity3d.com/Documentation/Components/gui-ExtendingEditor.html and,
 * http://docs.unity3d.com/Documentation/ScriptReference/Editor.html
 */

@CustomEditor(LookAtPoint)
@CanEditMultipleObjects
class LookAtPointEditor extends Editor 
{
	var lookAtPointProp : SerializedProperty;
	
	function OnEnable()
	{
		lookAtPointProp = serializedObject.FindProperty("lookAtPoint");
	}
	
	// This function is used to render the properties for the LookAtPoint component
	// in the inspector.
	// Using the serializedObject will allow changes made in the Inspector to be "Undo-able".
	function OnInspectorGUI() 
	{
		 // Update the serializedProperty - always do this in the beginning of OnInspectorGUI.
		serializedObject.Update();
		
		EditorGUILayout.PropertyField( lookAtPointProp, GUIContent("Look at Point") );
		
		// Apply changes to the serializedProperty - always do this in the end of OnInspectorGUI.
		serializedObject.ApplyModifiedProperties();		
	}
	
	// This function will render in the scene view when the LookAtPoint component
	// is selected.  In this case, we must use the target variable.
	// Changes made in the scene view will not be "Undo-able".
	function OnSceneGUI()
	{
		var lookAtPoint = target as LookAtPoint;
		if ( lookAtPoint != null )
		{
			lookAtPoint.lookAtPoint = Handles.PositionHandle( lookAtPoint.lookAtPoint, Quaternion.identity );
		}
		
		if ( GUI.changed )
		{
			EditorUtility.SetDirty(target);
		}
	}
}